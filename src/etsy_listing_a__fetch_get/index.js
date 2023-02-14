import { fetch } from '@ctx-core/fetch-undici'
import { import_meta_env_ } from '@ctx-core/env'
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
