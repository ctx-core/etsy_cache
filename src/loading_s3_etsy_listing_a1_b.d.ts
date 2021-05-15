import { Writable$ } from '@ctx-core/store';
export declare function loading_s3_etsy_listing_a1_b(ctx: loading_s3_etsy_listing_a1_ctx_I): loading_s3_etsy_listing_a1_T;
export interface loading_s3_etsy_listing_a1_ctx_I {
    loading_s3_etsy_listing_a1?: loading_s3_etsy_listing_a1_T;
}
export interface loading_s3_etsy_listing_a1_T extends Writable$<boolean[] | undefined> {
    reload_loading_s3_etsy_listing_a1: () => Promise<void>;
}
