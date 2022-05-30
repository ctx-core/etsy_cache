import { computed_ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
import { loading_s3_etsy_listing_a$_ } from './loading_s3_etsy_listing_a$_.js'
import { loading_s3_etsy_listing_image_a$_ } from './loading_s3_etsy_listing_image_a$_.js'
/** @type {import('./etsy_listing_ctx$_.d.ts').etsy_listing_ctx$_} */
export const etsy_listing_ctx$_ = be_('etsy_listing_ctx$', ctx=>
	computed_([
			loading_s3_etsy_listing_a$_(ctx),
			loading_s3_etsy_listing_image_a$_(ctx),
		], (loading_s3_etsy_listing_a, loading_s3_etsy_listing_image_a)=>loading_s3_etsy_listing_a && loading_s3_etsy_listing_image_a ? {
			loading_s3_etsy_listing_a,
			loading_s3_etsy_listing_image_a
		} : undefined
	)
)
