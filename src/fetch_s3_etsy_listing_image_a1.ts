import { fetch } from '@ctx-core/fetch'
export async function fetch_s3_etsy_listing_image_a1(
	params:fetch_s3_etsy_listing_image_a1_params_I = {}
) {
	const {
		S3_BUCKET = process.env.S3_BUCKET
	} = params
	const {
		ETSY_LISTING_IMAGES_A1_KEY = process.env.ETSY_LISTING_IMAGES_A1_KEY,
	} = params
	return fetch(
		`https://s3.amazonaws.com/${S3_BUCKET}/${ETSY_LISTING_IMAGES_A1_KEY}`,
		{ mode: 'cors' }
	)
}
export interface fetch_s3_etsy_listing_image_a1_params_I {
	S3_BUCKET?:string
	ETSY_LISTING_IMAGES_A1_KEY?:string
}
