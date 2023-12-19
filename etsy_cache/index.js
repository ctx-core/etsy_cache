import { sleep } from 'ctx-core/sleep'
import { etsy_cache__listing_a__put } from '../etsy_cache__listing_a/index.js'
import { etsy_cache__listing_image_a__put } from '../etsy_cache__listing_image_a/index.js'
import { etsy_listing_a__new } from '../etsy_listing_a/index.js'
import { etsy_listing_image_a__new } from '../etsy_listing_image_a/index.js'
export async function etsy_cache__put() {
	const etsy_listing_a = await etsy_listing_a__new()
	const etsy_listing_image_a = []
	const page_length = 5
	for (let i = 0; i < etsy_listing_a.length; i += page_length) {
		if (i) await sleep(1000)
		const out_etsy_listing_images_a =
			await etsy_listing_image_a__new(etsy_listing_a.slice(i, i + page_length))
		etsy_listing_image_a.push.apply(etsy_listing_image_a, out_etsy_listing_images_a)
	}
	await Promise.all([
		etsy_cache__listing_a__put(etsy_listing_a),
		etsy_cache__listing_image_a__put(etsy_listing_image_a),
	])
}
export {
	etsy_cache__put as put_etsy_cache,
}
