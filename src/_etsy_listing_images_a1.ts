import type { IListing, IListingImage } from 'etsy-ts/api'
import { fetch_etsy_listing_images } from './fetch_etsy_listing_images'
export async function _etsy_listing_images_a1(
	etsy_listing_a1:IListing[]
):Promise<IListingImage[]> {
	const etsy_listing_images_promise_a1:Promise<IListingImage>[] = []
	for (let i = 0; i < etsy_listing_a1.length; i++) {
		const etsy_listing = etsy_listing_a1[i]
		const { listing_id } = etsy_listing
		etsy_listing_images_promise_a1.push(_etsy_listing_images(listing_id))
	}
	return await Promise.all(etsy_listing_images_promise_a1)
	async function _etsy_listing_images(listing_id:number) {
		const response = await fetch_etsy_listing_images(listing_id)
		if (response.headers.get('content-type') == 'application/json') {
			const json = await response.json()
			return json.results[0]
		} else {
			console.warn(`listing_id ${listing_id} failed`, response.headers)
		}
	}
}
