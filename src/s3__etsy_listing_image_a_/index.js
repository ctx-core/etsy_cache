import { s3__etsy_listing_image_a__fetch_get } from '../s3__etsy_listing_image_a__fetch_get/index.js'
/**
 * @param {import('./index.d.ts').s3__etsy_listing_image_a__fetch_get__params_T} [params]
 * @returns {Promise<import('../_types').etsy_listing_image_T[]>}
 */
export async function s3__etsy_listing_image_a_(params = {}) {
	const response = await s3__etsy_listing_image_a__fetch_get(params)
	return response.json()
}
export {
	s3__etsy_listing_image_a_ as s3_etsy_listing_image_a_,
	s3__etsy_listing_image_a_ as _s3_etsy_listing_image_a, 
}
