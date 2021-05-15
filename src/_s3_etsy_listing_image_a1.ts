import {
	fetch_s3_etsy_listing_image_a1, fetch_s3_etsy_listing_image_a1_params_I
} from './fetch_s3_etsy_listing_image_a1'
export async function _s3_etsy_listing_image_a1(params:fetch_s3_etsy_listing_image_a1_params_I = {}) {
	const response = await fetch_s3_etsy_listing_image_a1(params)
	return response.json()
}
