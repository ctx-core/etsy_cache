import type { IListingImage } from 'etsy-ts/api'
import { B, be_ } from '@ctx-core/object'
import { derived$, Readable$ } from '@ctx-core/store'
import { etsy_listing_ctx$_b } from './etsy_listing_ctx$_b'
import type { etsy_cache_Ctx } from './etsy_cache_Ctx'
const key = 's3_etsy_listing_image_a$'
export const s3_etsy_listing_image_a$_b:B<etsy_cache_Ctx, typeof key> = be_(key, ctx=>
	derived$(
		etsy_listing_ctx$_b(ctx),
		etsy_listing_ctx=>
			etsy_listing_ctx?.s3_etsy_listing_image_a1))
export type s3_etsy_listing_image_a$_T = Readable$<IListingImage[]|undefined>
