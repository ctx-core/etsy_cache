import { Readable$ } from '@ctx-core/store';
import { etsy_listing_ctx_ctx_I } from './etsy_listing_ctx_b';
import type { IListing } from 'etsy-ts/api';
export interface s3_etsy_listing_a1_Ctx extends etsy_listing_ctx_ctx_I {
    s3_etsy_listing_a1?: Readable$<IListing[] | undefined>;
}
export declare const s3_etsy_listing_a1_b: import("@ctx-core/object").Be<s3_etsy_listing_a1_Ctx, "s3_etsy_listing_a1">;
