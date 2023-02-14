import type { etsy_listing_T } from '../_types'
export declare function s3__etsy_listing_a__fetch_get(
	params?:s3__etsy_listing_a__fetch_get__params_T
):s3__etsy_listing_a__fetch_get__ret_T
export {
	s3__etsy_listing_a__fetch_get as fetch_s3_etsy_listing_a,
	s3__etsy_listing_a__fetch_get as fetch_s3_etsy_listing_a1,
}
export interface s3__etsy_listing_a__fetch_get__params_T {
	S3_BUCKET?:string
	ETSY_LISTING_A_KEY?:string
}
export declare type fetch_s3_etsy_listing_a_params_I = s3__etsy_listing_a__fetch_get__params_T
export type s3__etsy_listing_a__fetch_get__ret_T = Promise<Response&{ json:()=>Promise<etsy_listing_T> }>
export declare type fetch_s3_etsy_listing_a_ret_T = s3__etsy_listing_a__fetch_get__ret_T
