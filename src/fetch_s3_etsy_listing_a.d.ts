import type { etsy_listing_T } from './_types'
export declare function fetch_s3_etsy_listing_a(
	params?:fetch_s3_etsy_listing_a_params_I
):fetch_s3_etsy_listing_a_ret_T
export interface fetch_s3_etsy_listing_a_params_I {
	S3_BUCKET?:string;
	ETSY_LISTING_A_KEY?:string;
}
export type fetch_s3_etsy_listing_a_ret_T = Promise<[etsy_listing_T, Response]>
export { fetch_s3_etsy_listing_a as fetch_s3_etsy_listing_a1, }
