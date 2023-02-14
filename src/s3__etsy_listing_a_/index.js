import { s3__etsy_listing_a__fetch_get } from '../s3__etsy_listing_a__fetch_get/index.js'
/**
 * @param {import('./index.d.ts')}[params]
 * @returns {Promise<import('../_types').etsy_listing_T[]>}
 */
export async function s3__etsy_listing_a_(params = {}) {
	return s3__etsy_listing_a__fetch_get(params).then(response=>response.json())
}
export {
	s3__etsy_listing_a_ as s3_etsy_listing_a_,
	s3__etsy_listing_a_ as _s3_etsy_listing_a,
}
