import { safe_fetch as fetch } from '@ctx-core/fetch-undici'
import type { etsy_listing_T } from './etsy_listing_T.js'
export async function fetch_s3_etsy_listing_a(
	params:fetch_s3_etsy_listing_a_params_I = {}
):Promise<Response&{ json():Promise<etsy_listing_T[]> }> {
	const {
		S3_BUCKET = process.env.S3_BUCKET
	} = params
	const {
		ETSY_LISTING_A_KEY = process.env.ETSY_LISTING_A_KEY,
	} = params
	return fetch(
		`https://s3.amazonaws.com/${S3_BUCKET}/${ETSY_LISTING_A_KEY}`,
		// TODO: Remove as any when https://github.com/nodejs/undici/issues/1172 is fixed
		{ mode: 'cors' } as any
	) as Promise<Response&{ json():Promise<etsy_listing_T[]> }>
}
export interface fetch_s3_etsy_listing_a_params_I {
	S3_BUCKET?:string
	ETSY_LISTING_A_KEY?:string
}
export {
	fetch_s3_etsy_listing_a as fetch_s3_etsy_listing_a1,
}
