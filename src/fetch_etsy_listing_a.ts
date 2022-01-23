import { safe_fetch as fetch, Response } from '@ctx-core/fetch-undici'
import type { etsy_listing_T } from './etsy_listing_T.js'
export async function fetch_etsy_listing_a(
	params:fetch_etsy_listing_a_params_I = {}
):Promise<Response|{ json():Promise<etsy_listing_T[]> }> {
	const {
		ETSY_API_KEY = process.env.ETSY_API_KEY,
		ETSY_STORE_ID = process.env.ETSY_STORE_ID,
	} = params
	return (
		await fetch(
			`https://openapi.etsy.com/v2/shops/${ETSY_STORE_ID}/listings/active?api_key=${ETSY_API_KEY}`
		)
	) as Response&{ json():Promise<etsy_listing_T[]> }
}
export interface fetch_etsy_listing_a_params_I {
	ETSY_API_KEY?:string
	ETSY_STORE_ID?:string
}
export {
	fetch_etsy_listing_a as fetch_etsy_listing_a1,
}
