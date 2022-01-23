import { ServiceOutputTypes } from '@aws-sdk/client-s3'
import type { etsy_listing_T } from './_types'
export declare function put_etsy_listing_a(
	etsy_listing_a:etsy_listing_T[], params?:put_etsy_listing_a_params_T
):Promise<ServiceOutputTypes>;
export interface put_etsy_listing_a_params_T {
	region?:string;
	Bucket?:string;
	ETSY_LISTING_A_KEY?:string;
}
export { put_etsy_listing_a as put_etsy_listing_a1, }
