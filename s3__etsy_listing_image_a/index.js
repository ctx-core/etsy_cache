import { import_meta_env_ } from '@ctx-core/env'
import { fetch } from '@ctx-core/fetch-undici'
import { nullish__none_ } from '@ctx-core/function'
import { val__be_computed_pair_ } from '@ctx-core/nanostores'
import { etsy_listing_o_ } from '../etsy_listing_o/index.js'
export const [
	s3__etsy_listing_image_a$_,
	s3__etsy_listing_image_a_,
] = val__be_computed_pair_('s3__etsy_listing_image_a', ctx=>
	nullish__none_([etsy_listing_o_(ctx)],
		etsy_listing_o=>
			etsy_listing_o.s3__etsy_listing_image_a))
export {
	s3__etsy_listing_image_a$_ as s3__etsy_listing_image_a__,
	s3__etsy_listing_image_a$_ as s3_etsy_listing_image_a__,
	s3__etsy_listing_image_a$_ as s3_etsy_listing_image_a$_,
}
/**
 * @param {import('./index.d.ts').s3__etsy_listing_image_a__fetch_get__params_T} [params]
 * @returns {Promise<import('../_types/index.js').etsy_listing_image_T[]>}
 */
export async function s3__etsy_listing_image_a__new(
	params = {}
) {
	const response =
		await s3__etsy_listing_image_a__fetch_get(params)
	return response.json()
}
export {
	s3__etsy_listing_image_a__new as s3_etsy_listing_image_a_,
	s3__etsy_listing_image_a__new as _s3_etsy_listing_image_a,
}
/** @type {typeof import('./index.d.ts').s3__etsy_listing_image_a__fetch_get} */
export const s3__etsy_listing_image_a__fetch_get = async (params = {})=>{
	const {
		S3_BUCKET = import_meta_env_().S3_BUCKET
	} = params
	const {
		ETSY_LISTING_IMAGE_A_KEY =
			import_meta_env_().ETSY_LISTING_IMAGE_A_KEY,
	} = params
	return fetch(`https://s3.amazonaws.com/${S3_BUCKET}/${ETSY_LISTING_IMAGE_A_KEY}`, {
		mode: 'cors'
	})
}
export {
	s3__etsy_listing_image_a__fetch_get as fetch_s3_etsy_listing_image_a,
}
