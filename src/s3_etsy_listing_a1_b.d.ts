import { Readable$ } from '@ctx-core/store';
import { etsy_listing_ctx_ctx_I } from './etsy_listing_ctx_b';
import type { IListing } from 'etsy-ts/api';
export declare const s3_etsy_listing_a1_b: import("@ctx-core/object").Be<import("@ctx-core/store").Readable<IListing[] | undefined>, s3_etsy_listing_a1_ctx_I>;
export interface s3_etsy_listing_a1_ctx_I extends etsy_listing_ctx_ctx_I {
    s3_etsy_listing_a1?: Readable$<IListing[]>;
}
