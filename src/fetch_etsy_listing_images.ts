import { fetch } from '@ctx-core/fetch'
import type { etsy_listing_image_T } from './etsy_listing_image_T.js'
export async function fetch_etsy_listing_images(
	listing_id:number,
	params:fetch_etsy_listing_images_params_I = {}
):Promise<Response&{ json():Promise<etsy_listing_image_T[]> }> {
	const { ETSY_API_KEY = process.env.ETSY_API_KEY } = params
	return fetch(`https://openapi.etsy.com/v2/listings/${listing_id}/images?api_key=${ETSY_API_KEY}`)
}
export interface fetch_etsy_listing_images_params_I {
	ETSY_API_KEY?:string
}
