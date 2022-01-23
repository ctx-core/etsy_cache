import { safe_fetch as fetch } from '@ctx-core/fetch-undici'
/**
 * @param {import('./fetch_etsy_listing_a.d.ts').fetch_etsy_listing_a_params_I} [params]
 * @returns {Promise<Response>}
 * @private
 */
export async function fetch_etsy_listing_a(params = {}) {
	const { ETSY_API_KEY = process.env.ETSY_API_KEY, ETSY_STORE_ID = process.env.ETSY_STORE_ID, } = params
	return await fetch(`https://openapi.etsy.com/v2/shops/${ETSY_STORE_ID}/listings/active?api_key=${ETSY_API_KEY}`)
}
export { fetch_etsy_listing_a as fetch_etsy_listing_a1, }
