import type { be_memo_pair_T } from 'ctx-core/rmemo'
import type { etsy_listing_image_T, etsy_listing_T } from '../_types/index.js'
export declare const [
	etsy_listing_o$_,
	etsy_listing_o_,
]:be_memo_pair_T<etsy_listing_o_T|undefined>
export {
	etsy_listing_o$_ as etsy_listing_o__,
	etsy_listing_o$_ as etsy_listing_ctx__,
	etsy_listing_o$_ as etsy_listing_ctx$_,
}
export interface etsy_listing_o_T {
	loading__s3__etsy_listing_a?:etsy_listing_T[]
	loading__s3__etsy_listing_image_a?:etsy_listing_image_T[]
	s3__etsy_listing_a?:etsy_listing_T[]
	s3__etsy_listing_image_a?:etsy_listing_image_T[]
}
export declare type etsy_listing_ctx_T = etsy_listing_o_T
