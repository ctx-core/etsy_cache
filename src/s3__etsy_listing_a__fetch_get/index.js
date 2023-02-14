import { fetch } from '@ctx-core/fetch-undici'
/** @type {typeof import('./index.d.ts').s3__etsy_listing_a__fetch_get} */
export const s3__etsy_listing_a__fetch_get = async (params = {})=>{
	const { S3_BUCKET = process.env.S3_BUCKET } = params
	const { ETSY_LISTING_A_KEY = process.env.ETSY_LISTING_A_KEY, } = params
	return fetch(`https://s3.amazonaws.com/${S3_BUCKET}/${ETSY_LISTING_A_KEY}`, {
		mode: 'cors'
	})
}
export {
	s3__etsy_listing_a__fetch_get as fetch_s3_etsy_listing_a,
	s3__etsy_listing_a__fetch_get as fetch_s3_etsy_listing_a1, 
}
