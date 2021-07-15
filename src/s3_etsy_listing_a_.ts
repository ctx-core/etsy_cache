import type { etsy_listing_T } from './etsy_listing_T.js'
import { fetch_s3_etsy_listing_a, fetch_s3_etsy_listing_a_params_I } from './fetch_s3_etsy_listing_a.js'
export async function s3_etsy_listing_a_(
	params:fetch_s3_etsy_listing_a_params_I = {}
):Promise<etsy_listing_T[]> {
	const response = await fetch_s3_etsy_listing_a(params)
	return response.json()
}
export {
	s3_etsy_listing_a_ as _s3_etsy_listing_a,
}
