import { fetch_s3_etsy_listing_image_a } from './fetch_s3_etsy_listing_image_a.js'
/**
 * @param {import('./fetch_s3_etsy_listing_image_a.d.ts').fetch_s3_etsy_listing_image_a_params_I} [params]
 * @returns {Promise<import('./_types').etsy_listing_image_T[]>}
 * @private
 */
export async function s3_etsy_listing_image_a_(params = {}) {
	const response = await fetch_s3_etsy_listing_image_a(params)
	return response.json()
}
export { s3_etsy_listing_image_a_ as _s3_etsy_listing_image_a, }
