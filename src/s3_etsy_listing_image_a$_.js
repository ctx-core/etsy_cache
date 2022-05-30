import { computed_ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
import { etsy_listing_ctx$_ } from './etsy_listing_ctx$_.js'
/** @type {import('./s3_etsy_listing_image_a$_.d.ts').s3_etsy_listing_image_a$_} */
export const s3_etsy_listing_image_a$_ = be_('s3_etsy_listing_image_a$', ctx=>
	computed_(
		etsy_listing_ctx$_(ctx),
		etsy_listing_ctx=>etsy_listing_ctx?.s3_etsy_listing_image_a
	))
