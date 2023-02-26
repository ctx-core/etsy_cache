import { import_meta_env_ } from '@ctx-core/env'
import { fetch } from '@ctx-core/fetch-undici'
/** @type {typeof import('./index.d.ts').s3__etsy_listing_image_a__fetch_get} */
export const s3__etsy_listing_image_a__fetch_get = async (params = {})=>{
	const { S3_BUCKET = import_meta_env_().S3_BUCKET } = params
	const { ETSY_LISTING_IMAGES_A_KEY = import_meta_env_().ETSY_LISTING_IMAGES_A_KEY, } = params
	return fetch(`https://s3.amazonaws.com/${S3_BUCKET}/${ETSY_LISTING_IMAGES_A_KEY}`, {
		mode: 'cors'
	})
}
export {
	s3__etsy_listing_image_a__fetch_get as fetch_s3_etsy_listing_image_a,
}
