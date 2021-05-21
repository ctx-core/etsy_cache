import { Writable$ } from '@ctx-core/store';
export interface loading_s3_etsy_listing_a1_Ctx {
    loading_s3_etsy_listing_a1?: loading_s3_etsy_listing_a1_T;
}
export declare function loading_s3_etsy_listing_a1_b(ctx: loading_s3_etsy_listing_a1_Ctx): loading_s3_etsy_listing_a1_T;
export interface loading_s3_etsy_listing_a1_T extends Writable$<boolean[] | undefined> {
    reload_loading_s3_etsy_listing_a1: () => Promise<void>;
}
