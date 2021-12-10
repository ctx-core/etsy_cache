import { B, be_ } from '@ctx-core/object'
import { derived$, Readable$ } from '@ctx-core/store'
import { etsy_listing_ctx$_b } from './etsy_listing_ctx$_b.js'
import type { etsy_listing_image_T } from './etsy_listing_image_T.js'
const key = 's3_etsy_listing_image_a$'
export const s3_etsy_listing_image_a$_b:B<s3_etsy_listing_image_a$_T> = be_(key, ctx=>
	derived$(
		etsy_listing_ctx$_b(ctx),
		etsy_listing_ctx=>
			etsy_listing_ctx?.s3_etsy_listing_image_a))
export type s3_etsy_listing_image_a$_T = Readable$<etsy_listing_image_T[]|undefined>
