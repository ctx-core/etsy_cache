import { fetch_etsy_listing_a } from './fetch_etsy_listing_a.js'
export async function etsy_listing_a_() {
	const response = await fetch_etsy_listing_a()
	const etsy_listing_a = await response.json()
	return etsy_listing_a
}
export { etsy_listing_a_ as _etsy_listing_a1, }
