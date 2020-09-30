import { Writable } from '@ctx-core/store';
import { maybe } from '@ctx-core/function';
export interface type__etsy_listing_a1__s3__loading<I extends unknown[]> extends Writable<maybe<I>> {
    reload__etsy_listing_a1__s3__loading: () => Promise<void>;
}
export declare function b__etsy_listing_a1__s3__loading<I extends unknown[]>(ctx?: any): type__etsy_listing_a1__s3__loading<I>;
export declare const __etsy_listing_a1__s3__loading: type__etsy_listing_a1__s3__loading<unknown[]>;
export declare const reload__etsy_listing_a1__s3__loading: () => Promise<void>;
export interface type__reload__a1__images__listing__etsy__s3__loading extends Writable<maybe<string[]>> {
    reload__a1__images__listing__etsy__s3__loading: () => Promise<void>;
}
export declare const b__a1__images__listing__etsy__s3__loading: (ctx?: object | undefined, opts?: import("@ctx-core/object")._be_opts_type | undefined) => type__reload__a1__images__listing__etsy__s3__loading;
export declare const __a1__images__listing__etsy__s3__loading: type__reload__a1__images__listing__etsy__s3__loading;
export declare const reload__a1__images__listing__etsy__s3__loading: () => Promise<void>;
export declare const b__ctx__listing__etsy: (ctx?: object | undefined, opts?: import("@ctx-core/object")._be_opts_type | undefined) => any;
export declare const __ctx__listing__etsy: any;
export declare const b__etsy_listing_a1__s3: (ctx?: object | undefined, opts?: import("@ctx-core/object")._be_opts_type | undefined) => any;
export declare const __etsy_listing_a1__s3: any;
export declare const b__a1__images__listing__etsy__s3: (ctx?: object | undefined, opts?: import("@ctx-core/object")._be_opts_type | undefined) => any;
export declare const __a1__images__listing__etsy__s3: any;
