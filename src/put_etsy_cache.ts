import type { IListingImage } from 'etsy-ts/api/ListingImage'
import { sleep } from '@ctx-core/sleep'
import { _etsy_listing_a1 } from './_etsy_listing_a1'
import { _etsy_listing_images_a1 } from './_etsy_listing_images_a1'
import { put_etsy_listing_a1 } from './put_etsy_listing_a1'
import { put_etsy_listing_images_a1 } from './put_etsy_listing_images_a1'
export async function put_etsy_cache() {
	const etsy_listing_a1 = await _etsy_listing_a1()
	const etsy_listing_images_a1:IListingImage[] = []
	const page_length = 5
	for (let i = 0; i < etsy_listing_a1.length; i += page_length) {
		if (i) await sleep(1000)
		const out_etsy_listing_images_a1 =
			await _etsy_listing_images_a1(etsy_listing_a1.slice(i, i + page_length))
		etsy_listing_images_a1.push.apply(
			etsy_listing_images_a1,
			out_etsy_listing_images_a1)
	}
	await Promise.all([
		put_etsy_listing_a1(etsy_listing_a1),
		put_etsy_listing_images_a1(etsy_listing_images_a1),
	])
}
