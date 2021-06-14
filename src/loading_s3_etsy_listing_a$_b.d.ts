import { Writable$ } from '@ctx-core/store';
import type { etsy_cache_Ctx } from './etsy_cache_Ctx';
export declare function loading_s3_etsy_listing_a$_b(ctx: etsy_cache_Ctx): loading_s3_etsy_listing_a$_T;
export interface loading_s3_etsy_listing_a$_T extends Writable$<boolean[] | undefined> {
    reload_loading_s3_etsy_listing_a: () => Promise<void>;
}
export { loading_s3_etsy_listing_a$_b as loading_s3_etsy_listing_a_b, };
