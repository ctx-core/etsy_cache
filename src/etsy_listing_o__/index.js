import { computed_ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
import { loading__s3__etsy_listing_a__ } from '../loading__s3__etsy_listing_a__/index.js'
import { loading__s3__etsy_listing_image_a__ } from '../loading__s3__etsy_listing_image_a__/index.js'
/** @type {typeof import('./index.d.ts').etsy_listing_o__} */
export const etsy_listing_o__ = be_('etsy_listing_o__', ctx=>
	computed_([
		loading__s3__etsy_listing_a__(ctx),
		loading__s3__etsy_listing_image_a__(ctx),
	], (
		loading_s3_etsy_listing_a,
		loading_s3_etsy_listing_image_a
	)=>loading_s3_etsy_listing_a && loading_s3_etsy_listing_image_a
		 ? { loading_s3_etsy_listing_a, loading_s3_etsy_listing_image_a }
		 : undefined))
export {
	etsy_listing_o__ as etsy_listing_ctx__,
	etsy_listing_o__ as etsy_listing_ctx$_,
}
