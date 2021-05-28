import { _b } from '@ctx-core/object'
import type { B } from '@ctx-core/object'
import type { etsy_listing_ctx_T } from './etsy_listing_ctx_b'
import { etsy_listing_ctx_b } from './etsy_listing_ctx_b'
import type { loading_s3_etsy_listing_a1_T } from './loading_s3_etsy_listing_a1_b'
import { loading_s3_etsy_listing_a1_b } from './loading_s3_etsy_listing_a1_b'
import type { loading_s3_etsy_listing_image_a1_T } from './loading_s3_etsy_listing_image_a1_b'
import { loading_s3_etsy_listing_image_a1_b } from './loading_s3_etsy_listing_image_a1_b'
import type { s3_etsy_listing_a1_T } from './s3_etsy_listing_a1_b'
import { s3_etsy_listing_a1_b } from './s3_etsy_listing_a1_b'
import type { s3_etsy_listing_image_a1_T } from './s3_etsy_listing_image_a1_b'
import { s3_etsy_listing_image_a1_b } from './s3_etsy_listing_image_a1_b'
export interface etsy_cache_ctx_I {
	etsy_listing_ctx?:etsy_listing_ctx_T
	loading_s3_etsy_listing_a1?:loading_s3_etsy_listing_a1_T
	loading_s3_etsy_listing_image_a1?:loading_s3_etsy_listing_image_a1_T
	s3_etsy_listing_a1?:s3_etsy_listing_a1_T
	s3_etsy_listing_image_a1?:s3_etsy_listing_image_a1_T
	etsy_cache_b_h?:etsy_cache_b_h_T
}
export interface etsy_cache_b_h_T {
	get etsy_listing_ctx():etsy_listing_ctx_T
	get loading_s3_etsy_listing_a1():loading_s3_etsy_listing_a1_T
	get loading_s3_etsy_listing_image_a1():loading_s3_etsy_listing_image_a1_T
	get s3_etsy_listing_a1():s3_etsy_listing_a1_T
	get s3_etsy_listing_image_a1():s3_etsy_listing_image_a1_T
}
export function etsy_cache_b_h_b(ctx:etsy_cache_ctx_I):B<etsy_cache_ctx_I, 'etsy_cache_b_h'> {
	return _b('etsy_cache_b_h', ()=>{
		return {
			get etsy_listing_ctx() { return etsy_listing_ctx_b(ctx) },
			get loading_s3_etsy_listing_a1() { return loading_s3_etsy_listing_a1_b(ctx) },
			get loading_s3_etsy_listing_image_a1() { return loading_s3_etsy_listing_image_a1_b(ctx) },
			get s3_etsy_listing_a1() { return s3_etsy_listing_a1_b(ctx) },
			get s3_etsy_listing_image_a1() { return s3_etsy_listing_image_a1_b(ctx) }
		}
	})
}