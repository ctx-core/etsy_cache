import { be_ } from '@ctx-core/object'
import { computed$ } from '@ctx-core/nanostores'
import { etsy_listing_ctx$_b } from './etsy_listing_ctx$_b.js'
const key = 's3_etsy_listing_image_a$'
/** @type {import('./s3_etsy_listing_image_a$_b.d.ts').s3_etsy_listing_image_a$_b} */
export const s3_etsy_listing_image_a$_b = be_(key, ctx=>
	computed$(
		etsy_listing_ctx$_b(ctx),
		etsy_listing_ctx=>etsy_listing_ctx?.s3_etsy_listing_image_a
	))
