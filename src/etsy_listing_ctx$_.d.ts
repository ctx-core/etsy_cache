import { ReadableAtom$ } from '@ctx-core/nanostores'
import { B } from '@ctx-core/object'
import type { etsy_listing_image_T, etsy_listing_T } from './_types'
export declare const etsy_listing_ctx$_:B<etsy_listing_ctx$_T>
export interface etsy_listing_ctx_T {
	loading_s3_etsy_listing_a?:etsy_listing_T[];
	loading_s3_etsy_listing_image_a?:etsy_listing_image_T[];
	s3_etsy_listing_a?:etsy_listing_T[];
	s3_etsy_listing_image_a?:etsy_listing_image_T[];
}
export declare type etsy_listing_ctx$_T = ReadableAtom$<etsy_listing_ctx_T|undefined>;
