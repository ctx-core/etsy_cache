import type { IListingImage } from 'etsy-ts/api/ListingImage';
import { Readable$ } from '@ctx-core/store';
import { etsy_listing_ctx_Ctx } from './etsy_listing_ctx_b';
export interface s3_etsy_listing_image_a1_Ctx extends etsy_listing_ctx_Ctx {
    s3_etsy_listing_image_a1?: Readable$<IListingImage[] | undefined>;
}
export declare const s3_etsy_listing_image_a1_b: import("@ctx-core/object").Be<s3_etsy_listing_image_a1_Ctx, "s3_etsy_listing_image_a1">;
