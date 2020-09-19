import { fetch__images__listing__etsy } from './fetch'
import type { etsy_listing_type } from './etsy_listing_type'
export async function _etsy_listing_images_a1(etsy_listing_a1): Promise<etsy_listing_type[]> {
	const etsy_listing_images_promise_a1 = [] as Promise<etsy_listing_type>[]
	for (let i = 0; i < etsy_listing_a1.length; i++) {
		const etsy_listing = etsy_listing_a1[i]
		const { listing_id } = etsy_listing
		etsy_listing_images_promise_a1.push(_images__listing__etsy(listing_id))
	}
	return await Promise.all(etsy_listing_images_promise_a1)
	async function _images__listing__etsy(listing_id) {
		const response = await fetch__images__listing__etsy(listing_id)
		if (response.headers.get('content-type') == 'application/json') {
			const json = await response.json()
			return json.results[0]
		} else {
			console.warn(`listing_id ${listing_id} failed`, response.headers)
		}
	}
}
export const _a1__images__listing__etsy = _etsy_listing_images_a1
export const _arr__images__listing__etsy = _etsy_listing_images_a1
