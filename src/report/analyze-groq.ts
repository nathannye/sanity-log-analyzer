import { GroqSyntaxError, parse } from "groq-js";
import {
	COMPARISON_OPS,
	GROQ_DEEP_SLICE_THRESHOLD,
	GROQ_ISSUE_DEEP_SLICE,
	GROQ_ISSUE_DEREF_IN_FILTER,
	GROQ_ISSUE_NON_LITERAL_COMPARE,
	GROQ_ISSUE_REPEATED_DEREF,
	GROQ_ISSUE_SPREAD,
	GROQ_SPREAD_WARNING,
} from "./groq-constants.js";

export { GROQ_SPREAD_WARNING };
export {
	GROQ_ISSUE_DEEP_SLICE,
	GROQ_ISSUE_DEREF_IN_FILTER,
	GROQ_ISSUE_NON_LITERAL_COMPARE,
	GROQ_ISSUE_REPEATED_DEREF,
	GROQ_ISSUE_SPREAD,
} from "./groq-constants.js";

export interface GroqQueryStats {
	dereferences: number;
	projections: number;
	subqueries: number;
	spreads: number;
	arrayTraversals: number;
	filters: number;
	functionCalls: Record<string, number>;
}

export interface GroqAstSignals {
	derefInFilter: boolean;
	repeatedDeref: boolean;
	deepSlice: boolean;
	nonLiteralCompareInFilter: boolean;
}

export interface GroqAnalysis {
	stats: GroqQueryStats;
	signals: GroqAstSignals;
	issues: string[];
}

type AstNode = {
	type: string;
	[key: string]: unknown;
};

type WalkContext = {
	inFuncArg: boolean;
	inFilterExpr: boolean;
};

function emptyStats(): GroqQueryStats {
	return {
		dereferences: 0,
		projections: 0,
		subqueries: 0,
		spreads: 0,
		arrayTraversals: 0,
		filters: 0,
		functionCalls: {},
	};
}

function emptySignals(): GroqAstSignals {
	return {
		derefInFilter: false,
		repeatedDeref: false,
		deepSlice: false,
		nonLiteralCompareInFilter: false,
	};
}

function asNode(value: unknown): AstNode | null {
	if (!value || typeof value !== "object") return null;
	return value as AstNode;
}

function functionName(namespace: unknown, name: unknown): string {
	const ns = typeof namespace === "string" ? namespace : "";
	const fn = typeof name === "string" ? name : "unknown";
	return ns ? `${ns}::${fn}` : fn;
}

function isLiteralSide(node: unknown): boolean {
	const current = asNode(node);
	if (!current) return false;
	return current.type === "Value" || current.type === "Parameter";
}

function attributePath(node: unknown): string | null {
	const current = asNode(node);
	if (!current) return null;

	if (current.type === "AccessAttribute") {
		const name = typeof current.name === "string" ? current.name : null;
		if (!name) return null;
		if (current.base === undefined || current.base === null) return name;
		const basePath = attributePath(current.base);
		return basePath ? `${basePath}.${name}` : name;
	}

	if (current.type === "This") return "@";

	return null;
}

function derefBasePath(derefNode: AstNode): string | null {
	return attributePath(derefNode.base);
}

function walkChildren(
	node: AstNode,
	stats: GroqQueryStats,
	signals: GroqAstSignals,
	derefPaths: Map<string, number>,
	ctx: WalkContext,
	skipKeys: Set<string> = new Set(),
): void {
	for (const [key, value] of Object.entries(node)) {
		if (skipKeys.has(key)) continue;
		if (Array.isArray(value)) {
			for (const child of value) walkNode(child, stats, signals, derefPaths, ctx);
		} else {
			walkNode(value, stats, signals, derefPaths, ctx);
		}
	}
}

function walkNode(
	node: unknown,
	stats: GroqQueryStats,
	signals: GroqAstSignals,
	derefPaths: Map<string, number>,
	ctx: WalkContext,
): void {
	const current = asNode(node);
	if (!current) return;

	switch (current.type) {
		case "Deref": {
			stats.dereferences += 1;
			if (ctx.inFilterExpr) signals.derefInFilter = true;
			const path = derefBasePath(current);
			if (path) {
				const next = (derefPaths.get(path) ?? 0) + 1;
				derefPaths.set(path, next);
				if (next > 1) signals.repeatedDeref = true;
			}
			break;
		}
		case "Projection":
			stats.projections += 1;
			break;
		case "ArrayCoerce":
			stats.arrayTraversals += 1;
			break;
		case "Filter": {
			stats.filters += 1;
			if (ctx.inFuncArg) stats.subqueries += 1;
			walkNode(current.base, stats, signals, derefPaths, ctx);
			walkNode(current.expr, stats, signals, derefPaths, {
				...ctx,
				inFilterExpr: true,
			});
			return;
		}
		case "ObjectSplat":
		case "ObjectConditionalSplat":
			stats.spreads += 1;
			break;
		case "Slice": {
			const left = current.left;
			if (typeof left === "number" && left >= GROQ_DEEP_SLICE_THRESHOLD) {
				signals.deepSlice = true;
			}
			break;
		}
		case "OpCall": {
			if (
				ctx.inFilterExpr &&
				typeof current.op === "string" &&
				COMPARISON_OPS.has(current.op) &&
				!isLiteralSide(current.left) &&
				!isLiteralSide(current.right)
			) {
				signals.nonLiteralCompareInFilter = true;
			}
			break;
		}
		case "FuncCall": {
			const name = functionName(current.namespace, current.name);
			stats.functionCalls[name] = (stats.functionCalls[name] ?? 0) + 1;
			const args = current.args;
			if (Array.isArray(args)) {
				for (const arg of args) {
					walkNode(arg, stats, signals, derefPaths, {
						...ctx,
						inFuncArg: true,
					});
				}
			}
			return;
		}
		case "PipeFuncCall": {
			const name = functionName("", current.name);
			stats.functionCalls[name] = (stats.functionCalls[name] ?? 0) + 1;
			walkNode(current.base, stats, signals, derefPaths, ctx);
			const args = current.args;
			if (Array.isArray(args)) {
				for (const arg of args) {
					walkNode(arg, stats, signals, derefPaths, {
						...ctx,
						inFuncArg: true,
					});
				}
			}
			return;
		}
		case "SelectorFuncCall": {
			const name = functionName("", current.name);
			stats.functionCalls[name] = (stats.functionCalls[name] ?? 0) + 1;
			walkNode(current.arg, stats, signals, derefPaths, {
				...ctx,
				inFuncArg: true,
			});
			return;
		}
		default:
			break;
	}

	walkChildren(current, stats, signals, derefPaths, ctx);
}

export function buildGroqIssues(
	stats: GroqQueryStats,
	signals: GroqAstSignals,
): string[] {
	const issues: string[] = [];
	if (stats.spreads > 0) issues.push(GROQ_ISSUE_SPREAD);
	if (signals.derefInFilter) issues.push(GROQ_ISSUE_DEREF_IN_FILTER);
	if (signals.repeatedDeref) issues.push(GROQ_ISSUE_REPEATED_DEREF);
	if (signals.deepSlice) issues.push(GROQ_ISSUE_DEEP_SLICE);
	if (signals.nonLiteralCompareInFilter) {
		issues.push(GROQ_ISSUE_NON_LITERAL_COMPARE);
	}
	return issues;
}

export function analyzeGroqQuery(
	query: string,
	params?: Record<string, unknown>,
): GroqAnalysis | null {
	try {
		const ast = parse(query, params ? { params } : {});
		const stats = emptyStats();
		const signals = emptySignals();
		const derefPaths = new Map<string, number>();
		walkNode(ast, stats, signals, derefPaths, {
			inFuncArg: false,
			inFilterExpr: false,
		});
		return {
			stats,
			signals,
			issues: buildGroqIssues(stats, signals),
		};
	} catch (error) {
		if (error instanceof GroqSyntaxError) return null;
		throw error;
	}
}

export function hasGroqSpreadOperator(
	query: string,
	params?: Record<string, unknown>,
): boolean {
	const analysis = analyzeGroqQuery(query, params);
	return analysis !== null && analysis.stats.spreads > 0;
}
