import { ServiceOutputTypes } from '@aws-sdk/client-s3'
import type { etsy_listing_image_T } from './_types'
export declare function put_etsy_listing_images_a(
	etsy_listing_images_a:etsy_listing_image_T[], params?:put_etsy_listing_images_a_params_T
):Promise<ServiceOutputTypes>;
export interface put_etsy_listing_images_a_params_T {
	region?:string;
	Bucket?:string;
	ETSY_LISTING_IMAGES_A_KEY?:string;
}
export { put_etsy_listing_images_a as put_etsy_listing_images_a1, }
