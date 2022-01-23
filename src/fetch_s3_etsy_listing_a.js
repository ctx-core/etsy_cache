import { safe_fetch as fetch } from '@ctx-core/fetch-undici'
/**
 * @param {import('./fetch_s3_etsy_listing_a.d.ts').fetch_s3_etsy_listing_a_params_I} [params]
 * @returns {import('./fetch_s3_etsy_listing_a.d.ts').fetch_s3_etsy_listing_a_ret_T}
 * @private
 */
export async function fetch_s3_etsy_listing_a(params = {}) {
	const { S3_BUCKET = process.env.S3_BUCKET } = params
	const { ETSY_LISTING_A_KEY = process.env.ETSY_LISTING_A_KEY, } = params
	return fetch(`https://s3.amazonaws.com/${S3_BUCKET}/${ETSY_LISTING_A_KEY}`, {
		mode: 'cors'
	})
}
export { fetch_s3_etsy_listing_a as fetch_s3_etsy_listing_a1, }
