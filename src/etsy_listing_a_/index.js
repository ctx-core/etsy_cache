import { etsy_listing_a__fetch_get } from '../etsy_listing_a__fetch_get/index.js'
/**
 * @returns {Promise<import('../_types').etsy_listing_T[]>}
 */
export async function etsy_listing_a_() {
	return etsy_listing_a__fetch_get().then(response=>response.json())
}
export { etsy_listing_a_ as _etsy_listing_a1, }
