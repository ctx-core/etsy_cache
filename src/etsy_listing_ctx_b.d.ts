import type { IListing } from 'etsy-ts/api';
import type { IListingImage } from 'etsy-ts/api/ListingImage';
import { Readable$ } from '@ctx-core/store';
import { loading_s3_etsy_listing_a1_Ctx } from './loading_s3_etsy_listing_a1_b';
import { loading_s3_etsy_listing_image_a1_Ctx } from './loading_s3_etsy_listing_image_a1_b';
export interface etsy_listing_ctx_Ctx extends loading_s3_etsy_listing_a1_Ctx, loading_s3_etsy_listing_image_a1_Ctx {
    etsy_listing_ctx?: etsy_listing_ctx_T;
}
export declare const etsy_listing_ctx_b: import("@ctx-core/object").Be<etsy_listing_ctx_Ctx, "etsy_listing_ctx", etsy_listing_ctx_T>;
export interface etsy_listing_ctx_Ctx extends loading_s3_etsy_listing_a1_Ctx, loading_s3_etsy_listing_image_a1_Ctx {
}
export interface etsy_listing_Ctx {
    $loading_s3_etsy_listing_a1?: boolean[];
    $loading_s3_etsy_listing_image_a1?: boolean[];
    $s3_etsy_listing_a1?: IListing[];
    $s3_etsy_listing_image_a1?: IListingImage[];
}
export interface etsy_listing_ctx_T extends Readable$<etsy_listing_Ctx | undefined> {
}
