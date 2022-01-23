import { fetch } from '@ctx-core/fetch-undici'
/** @type {import('./fetch_s3_etsy_listing_a.d.ts').fetch_s3_etsy_listing_a} */
export const fetch_s3_etsy_listing_a = async (params = {})=>{
	const { S3_BUCKET = process.env.S3_BUCKET } = params
	const { ETSY_LISTING_A_KEY = process.env.ETSY_LISTING_A_KEY, } = params
	const res = await fetch(`https://s3.amazonaws.com/${S3_BUCKET}/${ETSY_LISTING_A_KEY}`, {
		mode: 'cors'
	})
	return [await res.json(), res]
}
export { fetch_s3_etsy_listing_a as fetch_s3_etsy_listing_a1, }
