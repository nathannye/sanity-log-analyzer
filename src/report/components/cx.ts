type ClassName = string | false | null | undefined;

export function cx(...classes: ClassName[]): string {
	return classes.filter(Boolean).join(" ");
}
