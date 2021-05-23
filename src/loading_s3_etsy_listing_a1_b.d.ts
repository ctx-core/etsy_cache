import { Writable$ } from '@ctx-core/store';
import type { etsy_cache_Ctx } from './etsy_cache_Ctx';
export declare function loading_s3_etsy_listing_a1_b(ctx: etsy_cache_Ctx): loading_s3_etsy_listing_a1_T;
export interface loading_s3_etsy_listing_a1_T extends Writable$<boolean[] | undefined> {
    reload_loading_s3_etsy_listing_a1: () => Promise<void>;
}
