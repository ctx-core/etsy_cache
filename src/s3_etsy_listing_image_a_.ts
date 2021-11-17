import type { etsy_listing_image_T } from './etsy_listing_image_T.js'
import {
	fetch_s3_etsy_listing_image_a, fetch_s3_etsy_listing_image_a_params_I,
} from './fetch_s3_etsy_listing_image_a.js'
export async function s3_etsy_listing_image_a_(
	params:fetch_s3_etsy_listing_image_a_params_I = {}
):Promise<etsy_listing_image_T[]> {
	const response = await fetch_s3_etsy_listing_image_a(params)
	return response.json()
}
export {
	s3_etsy_listing_image_a_ as _s3_etsy_listing_image_a,
}
