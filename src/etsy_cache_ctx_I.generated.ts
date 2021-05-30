/*
 * This file was generated by `npm run generate_ctx_I_file` in @ctx-core/dev-tools
*/
import { _b } from '@ctx-core/object'
import type { etsy_cache_Ctx } from './etsy_cache_Ctx'
import type { etsy_listing_ctx$_T } from './etsy_listing_ctx$_b'
import { etsy_listing_ctx$_b } from './etsy_listing_ctx$_b'
import type { loading_s3_etsy_listing_a$_T } from './loading_s3_etsy_listing_a$_b'
import { loading_s3_etsy_listing_a$_b } from './loading_s3_etsy_listing_a$_b'
import type { loading_s3_etsy_listing_image_a$_T } from './loading_s3_etsy_listing_image_a$_b'
import { loading_s3_etsy_listing_image_a$_b } from './loading_s3_etsy_listing_image_a$_b'
import type { s3_etsy_listing_a$_T } from './s3_etsy_listing_a$_b'
import { s3_etsy_listing_a$_b } from './s3_etsy_listing_a$_b'
import type { s3_etsy_listing_image_a$_T } from './s3_etsy_listing_image_a$_b'
import { s3_etsy_listing_image_a$_b } from './s3_etsy_listing_image_a$_b'
export interface etsy_cache_ctx_I {
	etsy_listing_ctx$?:etsy_listing_ctx$_T
	loading_s3_etsy_listing_a$?:loading_s3_etsy_listing_a$_T
	loading_s3_etsy_listing_image_a$?:loading_s3_etsy_listing_image_a$_T
	s3_etsy_listing_a$?:s3_etsy_listing_a$_T
	s3_etsy_listing_image_a$?:s3_etsy_listing_image_a$_T
	etsy_cache_b_h?:etsy_cache_b_h_T
}
export interface etsy_cache_b_h_T {
	get etsy_listing_ctx$():etsy_listing_ctx$_T
	get loading_s3_etsy_listing_a$():loading_s3_etsy_listing_a$_T
	get loading_s3_etsy_listing_image_a$():loading_s3_etsy_listing_image_a$_T
	get s3_etsy_listing_a$():s3_etsy_listing_a$_T
	get s3_etsy_listing_image_a$():s3_etsy_listing_image_a$_T
}
export function etsy_cache_b_h_b(ctx:etsy_cache_Ctx):etsy_cache_b_h_T {
	return _b<etsy_cache_Ctx, 'etsy_cache_b_h'>('etsy_cache_b_h', ()=>{
		return {
			get etsy_listing_ctx$() { return etsy_listing_ctx$_b(ctx) },
			get loading_s3_etsy_listing_a$() { return loading_s3_etsy_listing_a$_b(ctx) },
			get loading_s3_etsy_listing_image_a$() { return loading_s3_etsy_listing_image_a$_b(ctx) },
			get s3_etsy_listing_a$() { return s3_etsy_listing_a$_b(ctx) },
			get s3_etsy_listing_image_a$() { return s3_etsy_listing_image_a$_b(ctx) }
		}
	})(ctx)
}