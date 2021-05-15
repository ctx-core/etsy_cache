import type { IListing } from 'etsy-ts/api'
import { fetch_etsy_listing_a1 } from './fetch_etsy_listing_a1'
export async function _etsy_listing_a1():Promise<IListing[]> {
	const response = await fetch_etsy_listing_a1()
	const { results } = await response.json()
	return results
}

