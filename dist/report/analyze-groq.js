import { GroqSyntaxError, parse } from "groq-js";
function emptyStats() {
    return {
        dereferences: 0,
        projections: 0,
        subqueries: 0,
        spreads: 0,
        arrayTraversals: 0,
        functionCalls: {},
    };
}
function asNode(value) {
    if (!value || typeof value !== "object")
        return null;
    return value;
}
function functionName(namespace, name) {
    const ns = typeof namespace === "string" ? namespace : "";
    const fn = typeof name === "string" ? name : "unknown";
    return ns ? `${ns}::${fn}` : fn;
}
function walkNode(node, stats, inFuncArg) {
    const current = asNode(node);
    if (!current)
        return;
    switch (current.type) {
        case "Deref":
            stats.dereferences += 1;
            break;
        case "Projection":
            stats.projections += 1;
            break;
        case "Filter":
            stats.arrayTraversals += 1;
            if (inFuncArg)
                stats.subqueries += 1;
            break;
        case "ObjectSplat":
        case "ObjectConditionalSplat":
            stats.spreads += 1;
            break;
        case "FuncCall":
            {
                const name = functionName(current.namespace, current.name);
                stats.functionCalls[name] = (stats.functionCalls[name] ?? 0) + 1;
                const args = current.args;
                if (Array.isArray(args)) {
                    for (const arg of args)
                        walkNode(arg, stats, true);
                }
            }
            return;
        case "PipeFuncCall":
            {
                const name = functionName("", current.name);
                stats.functionCalls[name] = (stats.functionCalls[name] ?? 0) + 1;
                walkNode(current.base, stats, inFuncArg);
                const args = current.args;
                if (Array.isArray(args)) {
                    for (const arg of args)
                        walkNode(arg, stats, true);
                }
            }
            return;
        case "SelectorFuncCall":
            {
                const name = functionName("", current.name);
                stats.functionCalls[name] = (stats.functionCalls[name] ?? 0) + 1;
                walkNode(current.arg, stats, true);
            }
            return;
        default:
            break;
    }
    for (const value of Object.values(current)) {
        if (Array.isArray(value)) {
            for (const child of value)
                walkNode(child, stats, inFuncArg);
        }
        else {
            walkNode(value, stats, inFuncArg);
        }
    }
}
export function analyzeGroqQuery(query) {
    try {
        const ast = parse(query);
        const stats = emptyStats();
        walkNode(ast, stats, false);
        return stats;
    }
    catch (error) {
        if (error instanceof GroqSyntaxError)
            return null;
        throw error;
    }
}
//# sourceMappingURL=analyze-groq.js.map