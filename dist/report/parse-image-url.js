function getExtension(filename) {
    const lastDot = filename.lastIndexOf(".");
    if (lastDot === -1)
        return "";
    return filename.slice(lastDot).toLowerCase();
}
function parsePositiveInt(value) {
    if (value === null)
        return null;
    const parsed = Number.parseInt(value, 10);
    return Number.isFinite(parsed) ? parsed : null;
}
function parseWidthFromId(filename) {
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
export function parseImageUrl(url) {
    try {
        const parsed = new URL(url);
        const segments = parsed.pathname.split("/").filter(Boolean);
        const filename = segments.at(-1) ?? url;
        const ext = getExtension(filename);
        const isSvg = ext === ".svg";
        const { id, width: widthFromId } = parseWidthFromId(filename);
        const width = parsePositiveInt(parsed.searchParams.get("w")) ?? widthFromId;
        const quality = parsePositiveInt(parsed.searchParams.get("q"));
        const format = parsed.searchParams.get("format") ?? parsed.searchParams.get("fm");
        return { id, width, quality, format, isSvg };
    }
    catch {
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
export function toInlineAssetUrl(url) {
    try {
        const parsed = new URL(url);
        if (!parsed.searchParams.has("dl"))
            return url;
        parsed.searchParams.delete("dl");
        return parsed.toString();
    }
    catch {
        return url;
    }
}
export function hasImageWidthError(width) {
    return width !== null && width > 2000;
}
export function hasImageQualityError(quality, isSvg) {
    return !isSvg && quality !== null && quality > 87;
}
export function hasImageFormatError(format) {
    return format !== null && format !== "auto";
}
//# sourceMappingURL=parse-image-url.js.map