import { B, be_ } from '@ctx-core/object'
import { derived$, Readable$ } from '@ctx-core/store'
import type { etsy_listing_image_T } from './etsy_listing_image_T.js'
import { etsy_listing_ctx$_b } from './etsy_listing_ctx$_b.js'
import type { etsy_cache_Ctx } from './etsy_cache_Ctx.js'
const key = 's3_etsy_listing_image_a$'
export const s3_etsy_listing_image_a$_b:B<etsy_cache_Ctx, typeof key> = be_(key, ctx=>
	derived$(
		etsy_listing_ctx$_b(ctx),
		etsy_listing_ctx=>
			etsy_listing_ctx?.s3_etsy_listing_image_a))
export type s3_etsy_listing_image_a$_T = Readable$<etsy_listing_image_T[]|undefined>
