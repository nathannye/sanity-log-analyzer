export declare const KB = 1024;
export declare const MB: number;
export declare const GB: number;
export declare function bytesToGiB(bytes: number): number;
export declare function gibToBytes(gib: number): number;
export interface ScaleBytesOptions {
    decimals?: number;
}
export declare function scaleBytes(bytes: number, { decimals }?: ScaleBytesOptions): {
    scaled: number;
    unitIndex: number;
    unit: string;
};
