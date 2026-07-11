export const MAX_IMAGE_WIDTH = 2000;
export const MAX_IMAGE_QUALITY = 85;
export const PREFERRED_IMAGE_FORMAT = "auto";

function getExtension(filename: string): string {
	const lastDot = filename.lastIndexOf(".");
	if (lastDot === -1) return "";
	return filename.slice(lastDot).toLowerCase();
}

export interface ParsedImageUrl {
	id: string;
	width: number | null;
	quality: number | null;
	format: string | null;
	isSvg: boolean;
}

function parsePositiveInt(value: string | null): number | null {
	if (value === null) return null;
	const parsed = Number.parseInt(value, 10);
	return Number.isFinite(parsed) ? parsed : null;
}

function parseWidthFromId(filename: string): {
	id: string;
	width: number | null;
} {
	const ext = getExtension(filename);
	const nameWithoutExt = ext ? filename.slice(0, -ext.length) : filename;
	const parts = nameWithoutExt.split("-");
	const lastPart = parts[parts.length - 1] ?? "";
	const dimensionMatch = lastPart.match(/^(\d+)x(\d+)$/);

	if (!dimensionMatch) {
		return { id: nameWithoutExt, width: null };
	}

	return {
		id: parts.slice(0, -1).join("-") || nameWithoutExt,
		width: parsePositiveInt(dimensionMatch[1] ?? null),
	};
}

export function parseImageUrl(url: string): ParsedImageUrl {
	try {
		const parsed = new URL(url);
		const segments = parsed.pathname.split("/").filter(Boolean);
		const filename = segments.at(-1) ?? url;
		const ext = getExtension(filename);
		const isSvg = ext === ".svg";
		const { id, width: widthFromId } = parseWidthFromId(filename);
		const width = parsePositiveInt(parsed.searchParams.get("w")) ?? widthFromId;
		const quality = parsePositiveInt(parsed.searchParams.get("q"));
		const format =
			parsed.searchParams.get("format") ?? parsed.searchParams.get("fm");

		return { id, width, quality, format, isSvg };
	} catch {
		return {
			id: url,
			width: null,
			quality: null,
			format: null,
			isSvg: false,
		};
	}
}

/** Strip Sanity CDN `dl` so the asset opens inline instead of downloading. */
export function toInlineAssetUrl(url: string): string {
	try {
		const parsed = new URL(url);
		if (!parsed.searchParams.has("dl")) return url;
		parsed.searchParams.delete("dl");
		return parsed.toString();
	} catch {
		return url;
	}
}

/** Build a small CDN URL suitable for table thumbnails. */
export function toThumbnailUrl(url: string, size = 100): string {
	try {
		const parsed = new URL(url);
		parsed.searchParams.delete("dl");
		parsed.searchParams.set("w", String(size));
		parsed.searchParams.set("h", String(size));
		parsed.searchParams.set("fit", "crop");
		return parsed.toString();
	} catch {
		return url;
	}
}

export function hasImageWidthError(width: number | null): boolean {
	return width !== null && width > MAX_IMAGE_WIDTH;
}

export function hasImageQualityError(
	quality: number | null,
	isSvg: boolean,
): boolean {
	return !isSvg && quality !== null && quality > MAX_IMAGE_QUALITY;
}

export function hasImageFormatError(format: string | null): boolean {
	return format !== null && format !== PREFERRED_IMAGE_FORMAT;
}
