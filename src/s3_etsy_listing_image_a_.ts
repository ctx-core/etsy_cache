import {
	fetch_s3_etsy_listing_image_a, fetch_s3_etsy_listing_image_a_params_I
} from './fetch_s3_etsy_listing_image_a'
export async function s3_etsy_listing_image_a_(params:fetch_s3_etsy_listing_image_a_params_I = {}) {
	const response = await fetch_s3_etsy_listing_image_a(params)
	return response.json()
}
export {
	s3_etsy_listing_image_a_ as _s3_etsy_listing_image_a,
}
