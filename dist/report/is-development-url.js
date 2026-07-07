function isLocalhostWithPort(hostname, port) {
    const host = hostname.toLowerCase();
    return (host === "localhost" || host === "127.0.0.1") && port !== "";
}
function isPrivateLanHost(hostname) {
    return /^192\.168\.\d{1,3}\.\d{1,3}$/.test(hostname);
}
function matchesDevelopmentPattern(value) {
    if (/192\.168\.\d{1,3}\.\d{1,3}/.test(value))
        return true;
    return /(?:^|\/\/)(?:localhost|127\.0\.0\.1):\d+/.test(value);
}
export function isDevelopmentUrl(value) {
    if (!value || value === "(empty)")
        return false;
    try {
        const url = new URL(value);
        return (isPrivateLanHost(url.hostname) ||
            isLocalhostWithPort(url.hostname, url.port));
    }
    catch {
        return matchesDevelopmentPattern(value);
    }
}
//# sourceMappingURL=is-development-url.js.map