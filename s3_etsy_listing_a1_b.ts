import { _andand } from '@ctx-core/function'
import { _b } from '@ctx-core/object'
import { derived } from '@ctx-core/store'
import { etsy_listing_ctx_b } from './etsy_listing_ctx_b'
export const s3_etsy_listing_a1_b = _b('s3_etsy_listing_a1', ctx=>
	derived(
		etsy_listing_ctx_b(ctx),
		_andand('etsy_listing_a1__s3')))
