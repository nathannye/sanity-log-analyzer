const IMAGE_EXTENSIONS = new Set([
    ".jpg",
    ".jpeg",
    ".png",
    ".gif",
    ".webp",
    ".svg",
    ".avif",
    ".ico",
]);
const VIDEO_EXTENSIONS = new Set([".mp4", ".webm", ".mov", ".m4v", ".ogv"]);
const FILE_EXTENSIONS = new Set([
    ".pdf",
    ".zip",
    ".json",
    ".txt",
    ".css",
    ".js",
    ".xml",
    ".csv",
    ".doc",
    ".docx",
    ".xls",
    ".xlsx",
    ".ppt",
    ".pptx",
    ".woff",
    ".woff2",
    ".ttf",
    ".eot",
    ".mp3",
    ".wav",
    ".ogg",
]);
function getPathname(url) {
    try {
        return new URL(url).pathname;
    }
    catch {
        return null;
    }
}
function getExtension(pathname) {
    const lastDot = pathname.lastIndexOf(".");
    if (lastDot === -1)
        return "";
    return pathname.slice(lastDot).toLowerCase();
}
function isQueryPath(pathname) {
    return pathname.includes("/data/query") || pathname.endsWith("/query");
}
export function isMp4Url(url) {
    const pathname = getPathname(url);
    if (!pathname)
        return false;
    return getExtension(pathname) === ".mp4";
}
export function classifyUrl(url) {
    const pathname = getPathname(url);
    if (!pathname)
        return null;
    if (isQueryPath(pathname))
        return "query";
    const lowerPath = pathname.toLowerCase();
    if (lowerPath.includes("/images/"))
        return "image";
    const ext = getExtension(pathname);
    if (IMAGE_EXTENSIONS.has(ext))
        return "image";
    if (VIDEO_EXTENSIONS.has(ext))
        return "video";
    if (lowerPath.includes("/files/") || FILE_EXTENSIONS.has(ext))
        return "file";
    return null;
}
//# sourceMappingURL=classify-url.js.map