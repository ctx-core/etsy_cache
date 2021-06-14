import type { etsy_cache_Ctx } from './etsy_cache_Ctx';
import type { etsy_listing_ctx$_T } from './etsy_listing_ctx$_b';
import type { loading_s3_etsy_listing_a$_T } from './loading_s3_etsy_listing_a$_b';
import type { loading_s3_etsy_listing_image_a$_T } from './loading_s3_etsy_listing_image_a$_b';
import type { s3_etsy_listing_a$_T } from './s3_etsy_listing_a$_b';
import type { s3_etsy_listing_image_a$_T } from './s3_etsy_listing_image_a$_b';
export interface etsy_cache_ctx_I {
    etsy_listing_ctx$?: etsy_listing_ctx$_T;
    loading_s3_etsy_listing_a$?: loading_s3_etsy_listing_a$_T;
    loading_s3_etsy_listing_image_a$?: loading_s3_etsy_listing_image_a$_T;
    s3_etsy_listing_a$?: s3_etsy_listing_a$_T;
    s3_etsy_listing_image_a$?: s3_etsy_listing_image_a$_T;
    etsy_cache_b_h?: etsy_cache_b_h_T;
}
export interface etsy_cache_b_h_T {
    get etsy_listing_ctx$(): etsy_listing_ctx$_T;
    get loading_s3_etsy_listing_a$(): loading_s3_etsy_listing_a$_T;
    get loading_s3_etsy_listing_image_a$(): loading_s3_etsy_listing_image_a$_T;
    get s3_etsy_listing_a$(): s3_etsy_listing_a$_T;
    get s3_etsy_listing_image_a$(): s3_etsy_listing_image_a$_T;
}
export declare function etsy_cache_b_h_b(ctx: etsy_cache_Ctx): etsy_cache_b_h_T;
