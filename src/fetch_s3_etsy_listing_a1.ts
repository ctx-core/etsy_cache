import { fetch } from '@ctx-core/fetch'
export async function fetch_s3_etsy_listing_a1(opts:fetch_s3_etsy_listing_a1_opts_type = {}) {
	const {
		S3_BUCKET = process.env.S3_BUCKET
	} = opts
	const {
		ETSY_LISTING_A1_KEY = process.env.ETSY_LISTING_A1_KEY,
	} = opts
	return fetch(
		`https://s3.amazonaws.com/${S3_BUCKET}/${ETSY_LISTING_A1_KEY}`,
		{ mode: 'cors' }
	)
}
export interface fetch_s3_etsy_listing_a1_opts_type {
	S3_BUCKET?:string
	ETSY_LISTING_A1_KEY?:string
}
