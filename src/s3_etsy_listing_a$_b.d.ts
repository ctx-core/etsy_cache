import { B } from '@ctx-core/object';
import { Readable$ } from '@ctx-core/store';
import type { etsy_cache_Ctx } from './etsy_cache_Ctx';
import type { IListing } from 'etsy-ts/api';
declare const key = "s3_etsy_listing_a$";
export declare const s3_etsy_listing_a$_b: B<etsy_cache_Ctx, typeof key>;
export declare type s3_etsy_listing_a$_T = Readable$<IListing[] | undefined>;
export {};
