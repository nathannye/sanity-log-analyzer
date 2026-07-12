export function buildGeistFontFaceCss(
	sansSrc: string,
	monoSrc: string,
): string {
	return [
		"@font-face {",
		'  font-family: "Geist";',
		`  src: url("${sansSrc}") format("woff2");`,
		"  font-style: normal;",
		"  font-weight: 100 900;",
		"  font-display: swap;",
		"}",
		"",
		"@font-face {",
		'  font-family: "Geist Mono";',
		`  src: url("${monoSrc}") format("woff2");`,
		"  font-style: normal;",
		"  font-weight: 100 900;",
		"  font-display: swap;",
		"}",
	].join("\n");
}
