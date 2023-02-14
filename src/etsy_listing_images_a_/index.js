import { etsy_listing_images__fetch_get } from '../etsy_listing_images__fetch_get/index.js'
/**
 * @param {import('./_types').etsy_listing_T[]} etsy_listing_a
 * @returns {(Promise<import('../_types').etsy_listing_image_T)[]>}
 */
export async function etsy_listing_images_a_(etsy_listing_a) {
	/** @type {(Promise<import('../_types').etsy_listing_image_T)[]>} */
	const etsy_listing_images_promise_a = []
	for (const etsy_listing of etsy_listing_a) {
		const { listing_id } = etsy_listing
		etsy_listing_images_promise_a.push(etsy_listing_images_(listing_id))
	}
	return await Promise.all(etsy_listing_images_promise_a)
	async function etsy_listing_images_(listing_id) {
		const [etsy_listing_images, response] = await etsy_listing_images__fetch_get(listing_id)
		if (response.headers.get('content-type') == 'application/json') {
			/** @type {{ results: import('./_types').etsy_listing_image_T[] }} */
			return etsy_listing_images.results[0]
		} else {
			console.warn(`listing_id ${listing_id} failed`, response.headers)
		}
	}
}
export { etsy_listing_images_a_ as _etsy_listing_images_a1, }
