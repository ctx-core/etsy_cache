import { _andand } from '@ctx-core/function'
import { _b } from '@ctx-core/object'
import { derived } from '@ctx-core/store'
import { etsy_listing_ctx_b } from './etsy_listing_ctx_b'
export const s3_etsy_listing_images_a1_b = _b('s3_etsy_listing_images_a1', ctx=>
	derived(
		etsy_listing_ctx_b(ctx),
		_andand('a1__images__listing__etsy__s3')))
