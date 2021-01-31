import { Writable } from '@ctx-core/store';
import type { maybe } from '@ctx-core/function';
export declare function loading_s3_etsy_listing_a1_b<I extends unknown[]>(ctx?: any): loading_s3_etsy_listing_a1_type<I>;
export interface loading_s3_etsy_listing_a1_type<I extends unknown[]> extends Writable<maybe<I>> {
    reload_loading_s3_etsy_listing_a1: () => Promise<void>;
}
