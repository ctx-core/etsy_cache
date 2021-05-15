import { Readable$ } from '@ctx-core/store';
import { etsy_listing_ctx_I } from './etsy_listing_ctx_b';
import type { IListingImage } from 'etsy-ts/api/ListingImage';
export declare const s3_etsy_listing_image_a1_b: import("@ctx-core/object").Be<Readable$<IListingImage[] | undefined>, object>;
export interface s3_etsy_listing_image_a1_ctx_I extends etsy_listing_ctx_I {
    s3_etsy_listing_image_a1?: Readable$<IListingImage[]>;
}
