import { computed_ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
import { etsy_listing_ctx__ } from './etsy_listing_ctx__.js'
/** @type {import('./s3_etsy_listing_a__.d.ts').s3_etsy_listing_a__} */
export const s3_etsy_listing_a__ = be_('s3_etsy_listing_a__', ctx=>
	computed_(etsy_listing_ctx__(ctx),
		etsy_listing_ctx=>
			etsy_listing_ctx?.s3_etsy_listing_a
	))
export { s3_etsy_listing_a__ as s3_etsy_listing_a$_ }
