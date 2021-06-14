import type { IListingImage } from 'etsy-ts/api';
import { B } from '@ctx-core/object';
import { Readable$ } from '@ctx-core/store';
import type { etsy_cache_Ctx } from './etsy_cache_Ctx';
declare const key = "s3_etsy_listing_image_a$";
export declare const s3_etsy_listing_image_a$_b: B<etsy_cache_Ctx, typeof key>;
export declare type s3_etsy_listing_image_a$_T = Readable$<IListingImage[] | undefined>;
export {};
