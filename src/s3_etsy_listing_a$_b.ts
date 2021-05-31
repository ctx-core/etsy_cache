import { be_ } from '@ctx-core/object'
import { derived$, Readable$ } from '@ctx-core/store'
import { etsy_listing_ctx$_b } from './etsy_listing_ctx$_b'
import type { etsy_cache_Ctx } from './etsy_cache_Ctx'
import type { IListing } from 'etsy-ts/api'
const key = 's3_etsy_listing_a$'
export const s3_etsy_listing_a$_b = be_<etsy_cache_Ctx, typeof key>(key, (ctx)=>
	derived$(
		etsy_listing_ctx$_b(ctx),
		$etsy_listing_ctx=>
			$etsy_listing_ctx?.s3_etsy_listing_a1)
)
export type s3_etsy_listing_a$_T = Readable$<IListing[]|undefined>
