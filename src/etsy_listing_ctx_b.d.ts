import type { IListing } from 'etsy-ts/api';
import { loading_s3_etsy_listing_a1_ctx_I } from './loading_s3_etsy_listing_a1_b';
import { loading_s3_etsy_listing_image_a1_ctx_I } from './loading_s3_etsy_listing_image_a1_b';
import type { IListingImage } from 'etsy-ts/api/ListingImage';
export declare const etsy_listing_ctx_b: import("@ctx-core/object").Be<import("@ctx-core/store").Readable<etsy_listing_ctx_I | undefined>, etsy_listing_ctx_ctx_I>;
export interface etsy_listing_ctx_ctx_I extends loading_s3_etsy_listing_a1_ctx_I, loading_s3_etsy_listing_image_a1_ctx_I {
}
export interface etsy_listing_ctx_I {
    $loading_s3_etsy_listing_a1?: boolean[];
    $loading_s3_etsy_listing_image_a1?: boolean[];
    $s3_etsy_listing_a1?: IListing[];
    $s3_etsy_listing_image_a1?: IListingImage[];
}
