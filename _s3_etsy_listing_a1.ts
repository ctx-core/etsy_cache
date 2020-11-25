import { fetch_s3_etsy_listing_a1 } from './fetch_s3_etsy_listing_a1'
export async function _s3_etsy_listing_a1(opts = {}) {
	const response = await fetch_s3_etsy_listing_a1(opts)
	return response.json()
}
