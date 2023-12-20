/// <reference types="./index.d.ts" />
import { nullish__none_ } from 'ctx-core/function'
import { be_memo_pair_ } from 'ctx-core/rmemo'
import { loading__s3__etsy_listing_a_ } from '../loading__s3__etsy_listing_a/index.js'
import { loading__s3__etsy_listing_image_a_ } from '../loading__s3__etsy_listing_image_a/index.js'
export const [
	etsy_listing_o$_,
	etsy_listing_o_,
] = be_memo_pair_(
	ctx=>
		nullish__none_([
			loading__s3__etsy_listing_a_(ctx),
			loading__s3__etsy_listing_image_a_(ctx)
		], (loading__s3__etsy_listing_a, loading__s3__etsy_listing_image_a)=>({
			loading__s3__etsy_listing_a,
			loading__s3__etsy_listing_image_a
		})), { id: 'etsy_listing_o' })
export {
	etsy_listing_o$_ as etsy_listing_o__,
	etsy_listing_o$_ as etsy_listing_ctx__,
	etsy_listing_o$_ as etsy_listing_ctx$_,
}
