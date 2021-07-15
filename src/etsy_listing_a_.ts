import type { etsy_listing_T } from './etsy_listing_T.js'
import { fetch_etsy_listing_a } from './fetch_etsy_listing_a.js'
export async function etsy_listing_a_():Promise<etsy_listing_T[]> {
	const response = await fetch_etsy_listing_a()
	const { results } = await response.json()
	return results
}
export {
	etsy_listing_a_ as _etsy_listing_a1,
}
