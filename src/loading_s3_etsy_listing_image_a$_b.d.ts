import { B } from '@ctx-core/object';
import { Writable$ } from '@ctx-core/store';
import type { etsy_cache_Ctx } from './etsy_cache_Ctx';
declare const key = "loading_s3_etsy_listing_image_a$";
export declare const loading_s3_etsy_listing_image_a$_b: B<etsy_cache_Ctx, typeof key>;
export interface loading_s3_etsy_listing_image_a$_T extends Writable$<boolean[] | undefined> {
    reload_loading_s3_etsy_listing_image_a: () => Promise<void>;
}
export {};
