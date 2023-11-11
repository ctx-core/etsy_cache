import type { etsy_listing_image_T, etsy_listing_T, etsy_payload_T } from '../_types/index.js'
export declare function etsy_listing_image_a__new(
	etsy_listing_a:etsy_listing_T[]
):Promise<etsy_listing_image_T[]>
export { etsy_listing_image_a__new as _etsy_listing_images_a1, }
export declare function etsy_listing_image_a__fetch_get(
	listing_id:number, params?:etsy_listing_images__fetch_get__params_T
):etsy_listing_images__fetch_get__ret_T
export {
	etsy_listing_image_a__fetch_get as etsy_listing_image__fetch_get,
	etsy_listing_image_a__fetch_get as fetch_etsy_listing_images,
}
export interface etsy_listing_images__fetch_get__params_T {
	ETSY_API_KEY?:string
}
export declare type fetch_etsy_listing_images_params_I =
	etsy_listing_images__fetch_get__params_T
export interface etsy_listing_images_params_T {
	listing_id:number
}
export type fetch_etsy_listing_images_payload_T =
	etsy_payload_T<etsy_listing_images_params_T, etsy_listing_image_T>
export type etsy_listing_images__fetch_get__ret_T =
	Promise<Response&{ json:()=>Promise<fetch_etsy_listing_images_payload_T> }>
export declare type fetch_etsy_listing_images_ret_T =
	etsy_listing_images__fetch_get__ret_T
