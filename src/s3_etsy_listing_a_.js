import { fetch_s3_etsy_listing_a } from './fetch_s3_etsy_listing_a.js'
/**
 * @param {import('./s3_etsy_listing_a_.d.ts')}[params]
 * @returns {Promise<import('./_types').etsy_listing_T>}
 * @private
 */
export async function s3_etsy_listing_a_(params = {}) {
	const [json] = await fetch_s3_etsy_listing_a(params)
	return json
}
export { s3_etsy_listing_a_ as _s3_etsy_listing_a, }
