import { fetch } from '@ctx-core/fetch'
export async function fetch_etsy_listing_a1(opts:fetch_etsy_listing_a1_opts_type = {}) {
	const {
		ETSY_API_KEY = process.env.ETSY_API_KEY,
		ETSY_STORE_ID = process.env.ETSY_STORE_ID,
	} = opts
	return fetch(`https://openapi.etsy.com/v2/shops/${ETSY_STORE_ID}/listings/active?api_key=${ETSY_API_KEY}`)
}
export interface fetch_etsy_listing_a1_opts_type {
	ETSY_API_KEY?:string
	ETSY_STORE_ID?:string
}
