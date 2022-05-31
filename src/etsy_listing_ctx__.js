import { computed_ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
import { loading_s3_etsy_listing_a__ } from './loading_s3_etsy_listing_a__.js'
import { loading_s3_etsy_listing_image_a__ } from './loading_s3_etsy_listing_image_a__.js'
/** @type {import('./etsy_listing_ctx__.d.ts').etsy_listing_ctx__} */
export const etsy_listing_ctx__ = be_('etsy_listing_ctx__', ctx=>
	computed_([
		loading_s3_etsy_listing_a__(ctx),
		loading_s3_etsy_listing_image_a__(ctx),
	], (loading_s3_etsy_listing_a, loading_s3_etsy_listing_image_a)=>loading_s3_etsy_listing_a && loading_s3_etsy_listing_image_a ? {
		loading_s3_etsy_listing_a,
		loading_s3_etsy_listing_image_a
	} : undefined))
export { etsy_listing_ctx__ as etsy_listing_ctx$_ }
