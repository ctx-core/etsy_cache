/// <reference types="../types/index.d.ts" />
/// <reference types="./index.d.ts" />
import { import_meta_env_ } from 'ctx-core/env'
import { fetch } from 'ctx-core/fetch'
import { id_be_memo_pair_, nullish__none_ } from 'ctx-core/rmemo'
import { etsy_listing_o_ } from '../etsy_listing_o/index.js'
export const [
	s3__etsy_listing_a$_,
	s3__etsy_listing_a_,
] = id_be_memo_pair_(
	's3__etsy_listing_a',
	ctx=>
		nullish__none_([etsy_listing_o_(ctx)],
			etsy_listing_o=>
				etsy_listing_o.s3__etsy_listing_a))
export {
	s3__etsy_listing_a$_ as s3__etsy_listing_a__,
	s3__etsy_listing_a$_ as s3_etsy_listing_a__,
	s3__etsy_listing_a$_ as s3_etsy_listing_a$_,
}
/**
 * @param {s3__etsy_listing_a__fetch_get__params_T}[params]
 * @returns {Promise<etsy_listing_T[]>}
 */
export async function s3__etsy_listing_a__new(params = {}) {
	return s3__etsy_listing_a__fetch_get(params).then(response=>
		response.json())
}
export {
	s3__etsy_listing_a__new as _s3_etsy_listing_a,
}
/** @type {typeof s3__etsy_listing_a__fetch_get} */
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
