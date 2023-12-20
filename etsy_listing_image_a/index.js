/// <reference types="../_types/index.d.ts" />
/// <reference types="./index.d.ts" />
import { fetch } from '@ctx-core/fetch-undici'
import { import_meta_env_ } from 'ctx-core/env'
/** @typedef {typeof etsy_listing_image_a__fetch_get} */
/** @typedef {etsy_listing_image_T} */
/** @typedef {etsy_listing_T} */
/**
 * @param {etsy_listing_T[]} etsy_listing_a
 * @returns {Promise<etsy_listing_image_T[]>}
 */
export async function etsy_listing_image_a__new(etsy_listing_a) {
	/** @type {etsy_listing_image_T[]} */
	const etsy_listing_images_promise_a = []
	for (const etsy_listing of etsy_listing_a) {
		const { listing_id } = etsy_listing
		etsy_listing_images_promise_a.push(etsy_listing_images_(listing_id))
	}
	return await Promise.all(etsy_listing_images_promise_a)
	/**
	 * @param listing_id
	 * @returns {Promise<etsy_listing_image_T[]>}
	 * @private
	 */
	async function etsy_listing_images_(listing_id) {
		const [
			etsy_listing_images,
			response
		] = await etsy_listing_image_a__fetch_get(listing_id)
		if (response.headers.get('content-type') == 'application/json') {
			/** @type {{ results: etsy_listing_image_T[] } */
			return etsy_listing_images.results[0]
		} else {
			console.warn(`listing_id ${listing_id} failed`, response.headers)
		}
	}
}
export { etsy_listing_image_a__new as _etsy_listing_images_a1, }
/** @type {etsy_listing_image_a__fetch_get} */
export const etsy_listing_image_a__fetch_get = async (
	listing_id, params = {}
)=>{
	const { ETSY_API_KEY = import_meta_env_().ETSY_API_KEY } = params
	return fetch(
		`https://openapi.etsy.com/v2/listings/${listing_id}/images?api_key=${ETSY_API_KEY}`)
}
export { etsy_listing_image_a__fetch_get as etsy_listing_images__fetch_get }
