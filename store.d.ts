import { Writable } from 'svelte/store';
import { maybe } from '@ctx-core/function';
export interface type__a1__listing__etsy__s3__loading<I = unknown> extends Writable<maybe<I[]>> {
    reload__a1__listing__etsy__s3__loading: () => Promise<void>;
}
export declare const b__a1__listing__etsy__s3__loading: (ctx?: unknown, opts?: import("@ctx-core/object")._be_opts_type) => type__a1__listing__etsy__s3__loading<unknown>;
export declare const __a1__listing__etsy__s3__loading: type__a1__listing__etsy__s3__loading<unknown>;
export declare const reload__a1__listing__etsy__s3__loading: () => Promise<void>;
export interface type__reload__a1__images__listing__etsy__s3__loading extends Writable<maybe<string[]>> {
    reload__a1__images__listing__etsy__s3__loading: () => Promise<void>;
}
export declare const b__a1__images__listing__etsy__s3__loading: (ctx?: unknown, opts?: import("@ctx-core/object")._be_opts_type) => type__reload__a1__images__listing__etsy__s3__loading;
export declare const __a1__images__listing__etsy__s3__loading: type__reload__a1__images__listing__etsy__s3__loading;
export declare const reload__a1__images__listing__etsy__s3__loading: () => Promise<void>;
export declare const b__ctx__listing__etsy: (ctx?: unknown, opts?: import("@ctx-core/object")._be_opts_type) => import("svelte/store").Readable<{
    a1__listing__etsy__s3: number | unknown[];
    a1__images__listing__etsy__s3: number | string[];
}>;
export declare const __ctx__listing__etsy: import("svelte/store").Readable<{
    a1__listing__etsy__s3: number | unknown[];
    a1__images__listing__etsy__s3: number | string[];
}>;
export declare const b__a1__listing__etsy__s3: (ctx?: unknown, opts?: import("@ctx-core/object")._be_opts_type) => import("svelte/store").Readable<unknown>;
export declare const __a1__listing__etsy__s3: import("svelte/store").Readable<unknown>;
export declare const b__a1__images__listing__etsy__s3: (ctx?: unknown, opts?: import("@ctx-core/object")._be_opts_type) => import("svelte/store").Readable<unknown>;
export declare const __a1__images__listing__etsy__s3: import("svelte/store").Readable<unknown>;
