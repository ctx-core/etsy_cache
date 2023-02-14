import { import_meta_env_ } from '@ctx-core/env'
import { fetch } from '@ctx-core/fetch-undici'
/** @type {typeof import('./index.d.ts').etsy_listing_images__fetch_get} */
export const etsy_listing_images__fetch_get = async (
	listing_id, params = {}
)=>{
	const { ETSY_API_KEY = import_meta_env_().ETSY_API_KEY } = params
	return fetch(
		`https://openapi.etsy.com/v2/listings/${listing_id}/images?api_key=${ETSY_API_KEY}`)
}
