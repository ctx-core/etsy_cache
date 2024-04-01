/// <reference types="ctx-core" />
/// <reference types="../types/index.d.ts" />
import { is_browser_ } from 'ctx-core/env'
import { id_be_sig_triple_ } from 'ctx-core/rmemo'
import { s3__etsy_listing_image_a__new } from '../s3__etsy_listing_image_a/index.js'
/** @typedef {be_sig_triple_T} */
/** @typedef {ctx_T} */
/** @typedef {etsy_listing_image_T} */
export const [
	loading__s3__etsy_listing_image_a$_,
	loading__s3__etsy_listing_image_a_,
	loading__s3__etsy_listing_image_a__set,
] = /** @type {be_sig_triple_T<etsy_listing_image_T[]>} */
	id_be_sig_triple_(
		'loading__s3__etsy_listing_image_a',
		()=>undefined,
		[
			ctx=>{
				if (is_browser_()) {
					queueMicrotask(()=>
						loading__s3__etsy_listing_image_a__reload(ctx))
				}
			}
		])
export {
	loading__s3__etsy_listing_image_a$_ as loading__s3__etsy_listing_image_a__,
	loading__s3__etsy_listing_image_a$_ as loading_s3_etsy_listing_image_a__,
	loading__s3__etsy_listing_image_a$_ as loading_s3_etsy_listing_image_a$_,
}
/**
 * @param {ctx_T}ctx
 * @returns {Promise<void>}
 */
export async function loading__s3__etsy_listing_image_a__reload(ctx
) {
	const s3__etsy_listing_image_a =
		await s3__etsy_listing_image_a__new()
	loading__s3__etsy_listing_image_a__set(ctx, s3__etsy_listing_image_a)
}
