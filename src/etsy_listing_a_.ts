import type { IListing } from 'etsy-ts/api'
import { fetch_etsy_listing_a } from './fetch_etsy_listing_a'
export async function etsy_listing_a_():Promise<IListing[]> {
	const response = await fetch_etsy_listing_a()
	const { results } = await response.json()
	return results
}
export {
	etsy_listing_a_ as _etsy_listing_a1,
}
