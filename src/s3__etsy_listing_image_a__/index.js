import { computed_ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
import { etsy_listing_o__ } from '../etsy_listing_o__/index.js'
/** @type {typeof import('./index.d.ts').s3__etsy_listing_image_a__} */
export const s3__etsy_listing_image_a__ = be_('s3__etsy_listing_image_a__', ctx=>
	computed_(
		etsy_listing_o__(ctx),
		etsy_listing_ctx=>etsy_listing_ctx?.s3_etsy_listing_image_a))
export {
	s3__etsy_listing_image_a__ as s3_etsy_listing_image_a__,
	s3__etsy_listing_image_a__ as s3_etsy_listing_image_a$_, 
}
