import type { ReadableAtom_ } from '@ctx-core/nanostores'
import type { B } from '@ctx-core/object'
import type { etsy_listing_image_T, etsy_listing_T } from '../_types'
export declare const etsy_listing_o__:B<ReadableAtom_<etsy_listing_o_T|undefined>>
export {
	etsy_listing_o__ as etsy_listing_ctx__,
	etsy_listing_o__ as etsy_listing_ctx$_,
}
export interface etsy_listing_o_T {
	loading_s3_etsy_listing_a?:etsy_listing_T[]
	loading_s3_etsy_listing_image_a?:etsy_listing_image_T[]
	s3_etsy_listing_a?:etsy_listing_T[]
	s3_etsy_listing_image_a?:etsy_listing_image_T[]
}
export declare type etsy_listing_ctx_T = etsy_listing_o_T
