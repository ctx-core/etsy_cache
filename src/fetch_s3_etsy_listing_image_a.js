import { fetch } from '@ctx-core/fetch-undici'
/** @type {import('./fetch_s3_etsy_listing_image_a.d.ts').fetch_s3_etsy_listing_image_a} */
export const fetch_s3_etsy_listing_image_a = async (params = {})=>{
	const { S3_BUCKET = process.env.S3_BUCKET } = params
	const { ETSY_LISTING_IMAGES_A_KEY = process.env.ETSY_LISTING_IMAGES_A_KEY, } = params
	const res = await fetch(`https://s3.amazonaws.com/${S3_BUCKET}/${ETSY_LISTING_IMAGES_A_KEY}`, {
		mode: 'cors'
	})
	return [await res.json(), res]
}
