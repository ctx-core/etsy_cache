import { fetch__etsy_listing_a1 } from './fetch'
export async function _etsy_listing_a1() {
	const response = await fetch__etsy_listing_a1()
	const { results } = await response.json()
	return results
}
export const _a1__listing__etsy = _etsy_listing_a1

