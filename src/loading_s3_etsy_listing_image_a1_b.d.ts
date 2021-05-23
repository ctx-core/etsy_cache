import { Writable$ } from '@ctx-core/store';
import type { etsy_cache_Ctx } from './etsy_cache_Ctx';
export declare const loading_s3_etsy_listing_image_a1_b: import("@ctx-core/object").Be<etsy_cache_Ctx, "loading_s3_etsy_listing_image_a1", loading_s3_etsy_listing_image_a1_T>;
export interface loading_s3_etsy_listing_image_a1_T extends Writable$<boolean[] | undefined> {
    reload_loading_s3_etsy_listing_image_a1: () => Promise<void>;
}
