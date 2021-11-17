import type { etsy_listing_T } from './etsy_listing_T'
import type { etsy_listing_image_T } from './etsy_listing_image_T.js'
import { fetch_etsy_listing_images } from './fetch_etsy_listing_images.js'
export async function etsy_listing_images_a_(
	etsy_listing_a:etsy_listing_T[]
):Promise<etsy_listing_image_T[]> {
	const etsy_listing_images_promise_a:Promise<etsy_listing_image_T>[] = []
	for (let i = 0; i < etsy_listing_a.length; i++) {
		const etsy_listing = etsy_listing_a[i]
		const { listing_id } = etsy_listing
		etsy_listing_images_promise_a.push(etsy_listing_images_(listing_id))
	}
	return await Promise.all(etsy_listing_images_promise_a)
	async function etsy_listing_images_(listing_id:number) {
		const response = await fetch_etsy_listing_images(listing_id)
		if (response.headers.get('content-type') == 'application/json') {
			const json = await response.json()
			return json.results[0]
		} else {
			console.warn(`listing_id ${listing_id} failed`, response.headers)
		}
	}
}
export {
	etsy_listing_images_a_ as _etsy_listing_images_a1,
}
