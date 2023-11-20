import { import_meta_env_ } from '@ctx-core/env'
import { fetch } from '@ctx-core/fetch-undici'
import { nullish__none_ } from '@ctx-core/function'
import { be_computed_pair_ } from '@ctx-core/nanostores'
import { etsy_listing_o$_ } from '../etsy_listing_o/index.js'
/** @typedef {import('../_types/index.d.ts').etsy_listing_T} */
export const [
	s3__etsy_listing_a$_,
	s3__etsy_listing_a_,
] = be_computed_pair_(ctx=>etsy_listing_o$_(ctx),
	etsy_listing_o=>
		nullish__none_([etsy_listing_o], ()=>
			etsy_listing_o.s3__etsy_listing_a),
	{ id: 's3__etsy_listing_a' })
export {
	s3__etsy_listing_a$_ as s3__etsy_listing_a__,
	s3__etsy_listing_a$_ as s3_etsy_listing_a__,
	s3__etsy_listing_a$_ as s3_etsy_listing_a$_,
}
/**
 * @param {import('./index.d.ts')}[params]
 * @returns {Promise<etsy_listing_T[]>}
 */
export async function s3__etsy_listing_a__new(params = {}) {
	return s3__etsy_listing_a__fetch_get(params).then(response=>
		response.json())
}
export {
	s3__etsy_listing_a__new as _s3_etsy_listing_a,
}
/** @type {typeof import('./index.d.ts').s3__etsy_listing_a__fetch_get} */
export const s3__etsy_listing_a__fetch_get = async (params = {})=>{
	const { S3_BUCKET = import_meta_env_().S3_BUCKET } = params
	const {
		ETSY_LISTING_A_KEY = import_meta_env_().ETSY_LISTING_A_KEY,
	} = params
	return fetch(`https://s3.amazonaws.com/${S3_BUCKET}/${ETSY_LISTING_A_KEY}`, {
		mode: 'cors'
	})
}
export {
	s3__etsy_listing_a__fetch_get as fetch_s3_etsy_listing_a,
	s3__etsy_listing_a__fetch_get as fetch_s3_etsy_listing_a1,
}
