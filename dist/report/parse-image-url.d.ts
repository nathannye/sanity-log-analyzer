export interface ParsedImageUrl {
    id: string;
    width: number | null;
    quality: number | null;
    format: string | null;
    isSvg: boolean;
}
export declare function parseImageUrl(url: string): ParsedImageUrl;
/** Strip Sanity CDN `dl` so the asset opens inline instead of downloading. */
export declare function toInlineAssetUrl(url: string): string;
export declare function hasImageWidthError(width: number | null): boolean;
export declare function hasImageQualityError(quality: number | null, isSvg: boolean): boolean;
export declare function hasImageFormatError(format: string | null): boolean;
//# sourceMappingURL=parse-image-url.d.ts.map