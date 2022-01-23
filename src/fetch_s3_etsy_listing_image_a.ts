import { safe_fetch as fetch } from '@ctx-core/fetch-undici'
import type { etsy_listing_image_T } from './etsy_listing_image_T.js'
export async function fetch_s3_etsy_listing_image_a(
	params:fetch_s3_etsy_listing_image_a_params_I = {}
):Promise<Response&{ json(): Promise<etsy_listing_image_T[]> }> {
	const {
		S3_BUCKET = process.env.S3_BUCKET
	} = params
	const {
		ETSY_LISTING_IMAGES_A_KEY = process.env.ETSY_LISTING_IMAGES_A_KEY,
	} = params
	return fetch(
		`https://s3.amazonaws.com/${S3_BUCKET}/${ETSY_LISTING_IMAGES_A_KEY}`,
		// TODO: Remove as any when https://github.com/nodejs/undici/issues/1172 is fixed
		{ mode: 'cors' } as any
	) as Promise<Response&{ json(): Promise<etsy_listing_image_T[]> }>
}
export interface fetch_s3_etsy_listing_image_a_params_I {
	S3_BUCKET?:string
	ETSY_LISTING_IMAGES_A_KEY?:string
}
