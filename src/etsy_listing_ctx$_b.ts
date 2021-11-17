import { B, be_ } from '@ctx-core/object'
import { derived$, Readable$ } from '@ctx-core/store'
import type { etsy_cache_Ctx } from './etsy_cache_Ctx.js'
import type { etsy_listing_image_T } from './etsy_listing_image_T.js'
import type { etsy_listing_T } from './etsy_listing_T.js'
import { loading_s3_etsy_listing_a$_b } from './loading_s3_etsy_listing_a$_b.js'
import { loading_s3_etsy_listing_image_a$_b } from './loading_s3_etsy_listing_image_a$_b.js'
const key = 'etsy_listing_ctx$'
export const etsy_listing_ctx$_b:B<etsy_cache_Ctx, typeof key> = be_(key, ctx=>
	derived$(
		[
			loading_s3_etsy_listing_a$_b(ctx),
			loading_s3_etsy_listing_image_a$_b(ctx),
		],
		([loading_s3_etsy_listing_a, loading_s3_etsy_listing_image_a])=>
			(loading_s3_etsy_listing_a && loading_s3_etsy_listing_image_a)
			? {
				loading_s3_etsy_listing_a,
				loading_s3_etsy_listing_image_a,
			} as etsy_listing_ctx_T
			: undefined
	))
export interface etsy_listing_ctx_T {
	loading_s3_etsy_listing_a?:etsy_listing_T[]
	loading_s3_etsy_listing_image_a?:etsy_listing_image_T[]
	s3_etsy_listing_a?:etsy_listing_T[],
	s3_etsy_listing_image_a?:etsy_listing_image_T[],
}
export interface etsy_listing_ctx$_T extends Readable$<etsy_listing_ctx_T|undefined> {}
