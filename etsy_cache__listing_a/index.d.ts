import type { ServiceOutputTypes } from '@aws-sdk/client-s3'
import type { etsy_listing_T } from '../_types/index.js'
export declare function etsy_cache__listing_a__put(
	etsy_listing_a:etsy_listing_T[], params?:etsy_cache__listing_a__put__params_T
):Promise<ServiceOutputTypes>
export {
	etsy_cache__listing_a__put as put_etsy_listing_a,
	etsy_cache__listing_a__put as put_etsy_listing_a1,
}
export interface etsy_cache__listing_a__put__params_T {
	region?:string
	Bucket?:string
	ETSY_LISTING_A_KEY?:string
}
export declare type put_etsy_listing_a_params_T = etsy_cache__listing_a__put__params_T
