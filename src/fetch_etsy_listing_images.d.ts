import type { etsy_listing_image_T, etsy_payload_T } from './_types'
export declare function fetch_etsy_listing_images(
	listing_id:number, params?:fetch_etsy_listing_images_params_I
):fetch_etsy_listing_images_ret_T;
export interface fetch_etsy_listing_images_params_I {
	ETSY_API_KEY?:string;
}
export interface etsy_listing_images_params_T {
	listing_id: number
}
export type fetch_etsy_listing_images_payload_T= etsy_payload_T<etsy_listing_images_params_T, etsy_listing_image_T>
export type fetch_etsy_listing_images_ret_T =
	Promise<[fetch_etsy_listing_images_payload_T, Response]>
