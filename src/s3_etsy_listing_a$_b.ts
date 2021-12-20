import { B, be_ } from '@ctx-core/object'
import { computed$, ReadableAtom$ } from '@ctx-core/nanostores'
import { etsy_listing_ctx$_b } from './etsy_listing_ctx$_b'
import type { etsy_listing_T } from './etsy_listing_T.js'
const key = 's3_etsy_listing_a$'
export const s3_etsy_listing_a$_b:B<s3_etsy_listing_a$_T> = be_(key, (ctx)=>
	computed$(
		etsy_listing_ctx$_b(ctx),
		etsy_listing_ctx=>
			etsy_listing_ctx?.s3_etsy_listing_a)
)
export type s3_etsy_listing_a$_T = ReadableAtom$<etsy_listing_T[]|undefined>
