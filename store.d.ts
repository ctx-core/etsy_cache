import { Writable } from 'svelte/store';
import { falsy } from '@ctx-core/function';
export interface Writable__a1__listing__etsy__s3__loading extends Writable<falsy | any[]> {
    reload__a1__listing__etsy__s3__loading: () => void;
}
export declare const b__a1__listing__etsy__s3__loading: (ctx?: any, opts?: any) => Writable__a1__listing__etsy__s3__loading;
export declare const __a1__listing__etsy__s3__loading: Writable__a1__listing__etsy__s3__loading;
export declare const reload__a1__listing__etsy__s3__loading: () => void;
export interface Writable__reload__a1__images__listing__etsy__s3__loading extends Writable<falsy | string[]> {
    reload__a1__images__listing__etsy__s3__loading: () => void;
}
export declare const b__a1__images__listing__etsy__s3__loading: (ctx?: any, opts?: any) => Writable__reload__a1__images__listing__etsy__s3__loading;
export declare const __a1__images__listing__etsy__s3__loading: Writable__reload__a1__images__listing__etsy__s3__loading;
export declare const reload__a1__images__listing__etsy__s3__loading: () => void;
export declare const b__ctx__listing__etsy: (ctx?: any, opts?: any) => import("svelte/store").Readable<{
    a1__listing__etsy__s3: any[];
    a1__images__listing__etsy__s3: string[];
}>;
export declare const __ctx__listing__etsy: import("svelte/store").Readable<{
    a1__listing__etsy__s3: any[];
    a1__images__listing__etsy__s3: string[];
}>;
export declare const b__a1__listing__etsy__s3: (ctx?: any, opts?: any) => import("svelte/store").Readable<any>;
export declare const __a1__listing__etsy__s3: import("svelte/store").Readable<any>;
export declare const b__a1__images__listing__etsy__s3: (ctx?: any, opts?: any) => import("svelte/store").Readable<any>;
export declare const __a1__images__listing__etsy__s3: import("svelte/store").Readable<any>;
