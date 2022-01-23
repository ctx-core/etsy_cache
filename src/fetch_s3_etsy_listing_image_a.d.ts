import type { etsy_listing_image_T } from './_types'
export declare function fetch_s3_etsy_listing_image_a(
	params?:fetch_s3_etsy_listing_image_a_params_I
):fetch_s3_etsy_listing_image_a_ret_T
export interface fetch_s3_etsy_listing_image_a_params_I {
	S3_BUCKET?:string;
	ETSY_LISTING_IMAGES_A_KEY?:string;
}
export type fetch_s3_etsy_listing_image_a_ret_T = Promise<Response&{
	json():Promise<etsy_listing_image_T[]>;
}>
