import { fetch } from '@ctx-core/fetch-undici'
import { import_meta_env_ } from 'ctx-core/env'
/**
 * @returns {Promise<import('../_types/index.js').etsy_listing_T[]>}
 */
export async function etsy_listing_a__new() {
	return etsy_listing_a__fetch_get().then(response=>
		response.json())
}
export {
	etsy_listing_a__new as _etsy_listing_a1,
}
/** @type {typeof import('./index.d.ts').etsy_listing_a__fetch_get} */
export const etsy_listing_a__fetch_get = async (params = {})=>{
	const {
		ETSY_API_KEY = import_meta_env_().ETSY_API_KEY,
		ETSY_STORE_ID = import_meta_env_().ETSY_STORE_ID,
	} = params
	return fetch(`https://openapi.etsy.com/v2/shops/${ETSY_STORE_ID}/listings/active?api_key=${ETSY_API_KEY}`)
}
export {
	etsy_listing_a__fetch_get as fetch_etsy_listing_a,
	etsy_listing_a__fetch_get as fetch_etsy_listing_a1,
}
