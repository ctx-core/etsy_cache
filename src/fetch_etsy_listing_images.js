import { safe_fetch as fetch } from '@ctx-core/fetch-undici'
/**
 * @param {number} listing_id
 * @param {import('./fetch_etsy_listing_images.d.ts').fetch_etsy_listing_images_params_I} [params]
 * @returns {Promise<Response>}
 * @private
 */
export async function fetch_etsy_listing_images(listing_id, params = {}) {
	const { ETSY_API_KEY = process.env.ETSY_API_KEY } = params
	return fetch(`https://openapi.etsy.com/v2/listings/${listing_id}/images?api_key=${ETSY_API_KEY}`)
}
