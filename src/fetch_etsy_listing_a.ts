import { fetch } from '@ctx-core/fetch'
export async function fetch_etsy_listing_a(
	params:fetch_etsy_listing_a1_params_I = {}
) {
	const {
		ETSY_API_KEY = process.env.ETSY_API_KEY,
		ETSY_STORE_ID = process.env.ETSY_STORE_ID,
	} = params
	return fetch(`https://openapi.etsy.com/v2/shops/${ETSY_STORE_ID}/listings/active?api_key=${ETSY_API_KEY}`)
}
export interface fetch_etsy_listing_a1_params_I {
	ETSY_API_KEY?:string
	ETSY_STORE_ID?:string
}
export {
	fetch_etsy_listing_a as fetch_etsy_listing_a1,
}
