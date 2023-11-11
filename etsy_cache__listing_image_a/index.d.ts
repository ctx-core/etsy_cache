import type { ServiceOutputTypes } from '@aws-sdk/client-s3'
import type { etsy_listing_image_T } from '../_types/index.js'
export declare function etsy_cache__listing_image_a__put(
	etsy_listing_image_a:etsy_listing_image_T[],
	params?:put_etsy_listing_images_a_params_T
):Promise<ServiceOutputTypes>
export interface put_etsy_listing_images_a_params_T {
	region?:string
	Bucket?:string
	ETSY_LISTING_IMAGE_A_KEY?:string
}
export {
	etsy_cache__listing_image_a__put as put_etsy_listing_images_a,
	etsy_cache__listing_image_a__put as put_etsy_listing_images_a1,
}
