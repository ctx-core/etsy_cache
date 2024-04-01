/// <reference types="./index.d.ts" />
import { id_be_memo_pair_, nullish__none_ } from 'ctx-core/rmemo'
import { loading__s3__etsy_listing_a_ } from '../loading__s3__etsy_listing_a/index.js'
import { loading__s3__etsy_listing_image_a_ } from '../loading__s3__etsy_listing_image_a/index.js'
export const [
	etsy_listing_o$_,
	etsy_listing_o_,
] = id_be_memo_pair_(
	'etsy_listing_o',
	ctx=>
		nullish__none_([
			loading__s3__etsy_listing_a_(ctx),
			loading__s3__etsy_listing_image_a_(ctx)
		], (
			loading__s3__etsy_listing_a,
			loading__s3__etsy_listing_image_a
		)=>({
			loading__s3__etsy_listing_a,
			loading__s3__etsy_listing_image_a
		})))
export {
	etsy_listing_o$_ as etsy_listing_o__,
	etsy_listing_o$_ as etsy_listing_ctx__,
	etsy_listing_o$_ as etsy_listing_ctx$_,
}
