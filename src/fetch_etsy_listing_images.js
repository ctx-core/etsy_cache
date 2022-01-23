import { fetch } from '@ctx-core/fetch-undici'
/**
 * @param {number} listing_id
 * @param {import('./fetch_etsy_listing_images.d.ts').fetch_etsy_listing_images_params_I} [params]
 * @returns {Promise<import('./fetch_etsy_listing_images.d.ts').fetch_etsy_listing_images_ret_T>}
 * @private
 */
/** @type {import('./fetch_etsy_listing_images.d.ts').fetch_etsy_listing_images} */
export const fetch_etsy_listing_images = async (listing_id, params = {})=>{
	const { ETSY_API_KEY = process.env.ETSY_API_KEY } = params
	const res = await fetch(
		`https://openapi.etsy.com/v2/listings/${listing_id}/images?api_key=${ETSY_API_KEY}`
	)
	return [await res.json(), res]
}
