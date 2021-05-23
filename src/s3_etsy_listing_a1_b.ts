import { _b } from '@ctx-core/object'
import { derived$ } from '@ctx-core/store'
import { etsy_listing_ctx_b } from './etsy_listing_ctx_b'
import type { etsy_cache_Ctx } from './etsy_cache_Ctx'
const key = 's3_etsy_listing_a1'
export const s3_etsy_listing_a1_b = _b<etsy_cache_Ctx, typeof key>(key, (ctx)=>
	derived$(
		etsy_listing_ctx_b(ctx),
		$etsy_listing_ctx=>
			$etsy_listing_ctx?.$s3_etsy_listing_a1)
)
