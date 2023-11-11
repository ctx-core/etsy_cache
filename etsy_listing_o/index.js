import { nullish__none_ } from '@ctx-core/function'
import { val__be_computed_pair_ } from '@ctx-core/nanostores'
import { loading__s3__etsy_listing_a_ } from '../loading__s3__etsy_listing_a/index.js'
import { loading__s3__etsy_listing_image_a_ } from '../loading__s3__etsy_listing_image_a/index.js'
/** @type {typeof import('./index.d.ts').etsy_listing_o__} */
export const [
	etsy_listing_o$_,
	etsy_listing_o_,
] = val__be_computed_pair_('etsy_listing_o', ctx=>
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
