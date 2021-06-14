import type { IListing } from 'etsy-ts/api';
import type { IListingImage } from 'etsy-ts/api/ListingImage';
import { B } from '@ctx-core/object';
import { Readable$ } from '@ctx-core/store';
import type { etsy_cache_Ctx } from './etsy_cache_Ctx';
declare const key = "etsy_listing_ctx$";
export declare const etsy_listing_ctx$_b: B<etsy_cache_Ctx, typeof key>;
export interface etsy_listing_ctx_T {
    loading_s3_etsy_listing_a?: boolean[];
    loading_s3_etsy_listing_image_a?: boolean[];
    s3_etsy_listing_a?: IListing[];
    s3_etsy_listing_image_a?: IListingImage[];
}
export interface etsy_listing_ctx$_T extends Readable$<etsy_listing_ctx_T | undefined> {
}
export {};
