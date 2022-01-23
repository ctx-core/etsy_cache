import { fetch } from '@ctx-core/fetch-undici'
/**
 * @param {import('./fetch_etsy_listing_a.d.ts').fetch_etsy_listing_a_params_I} [params]
 * @returns {Promise<Response>}
 * @private
 */
/** @type {import('./fetch_etsy_listing_a.d.ts').fetch_etsy_listing_a} */
export const fetch_etsy_listing_a = async (params = {})=>{
	const { ETSY_API_KEY = process.env.ETSY_API_KEY, ETSY_STORE_ID = process.env.ETSY_STORE_ID, } = params
	const res = await fetch(`https://openapi.etsy.com/v2/shops/${ETSY_STORE_ID}/listings/active?api_key=${ETSY_API_KEY}`)
	return [await res.json(), res]
}
export { fetch_etsy_listing_a as fetch_etsy_listing_a1, }
