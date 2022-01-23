import { be_ } from '@ctx-core/object'
import { computed$ } from '@ctx-core/nanostores'
import { loading_s3_etsy_listing_a$_b } from './loading_s3_etsy_listing_a$_b.js'
import { loading_s3_etsy_listing_image_a$_b } from './loading_s3_etsy_listing_image_a$_b.js'
const key = 'etsy_listing_ctx$'
/** @type {import('./etsy_listing_ctx$_b.d.ts').etsy_listing_ctx$_b} */
export const etsy_listing_ctx$_b = be_(key, ctx=>
	computed$([
			loading_s3_etsy_listing_a$_b(ctx),
			loading_s3_etsy_listing_image_a$_b(ctx),
		], (loading_s3_etsy_listing_a, loading_s3_etsy_listing_image_a)=>loading_s3_etsy_listing_a && loading_s3_etsy_listing_image_a ? {
			loading_s3_etsy_listing_a,
			loading_s3_etsy_listing_image_a
		} : undefined
	)
)
