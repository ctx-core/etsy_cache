import type { be_computed_pair_T } from '@ctx-core/nanostores'
import type { etsy_listing_image_T } from '../_types/index.js'
export declare const [
	s3__etsy_listing_image_a$_,
	s3__etsy_listing_image_a_,
]:be_computed_pair_T<etsy_listing_image_T[]|undefined>
export {
	s3__etsy_listing_image_a$_ as s3__etsy_listing_image_a__,
	s3__etsy_listing_image_a$_ as s3_etsy_listing_image_a__,
	s3__etsy_listing_image_a$_ as s3_etsy_listing_image_a$_,
}
export declare function s3__etsy_listing_image_a__new(
	params?:s3__etsy_listing_image_a__fetch_get__params_T
):Promise<etsy_listing_image_T[]>
export { s3__etsy_listing_image_a__new as _s3_etsy_listing_image_a, }
export declare function s3__etsy_listing_image_a__fetch_get(
	params?:s3__etsy_listing_image_a__fetch_get__params_T
):s3__etsy_listing_image_a__fetch_get__ret_T
export {
	s3__etsy_listing_image_a__fetch_get as fetch_s3_etsy_listing_image_a,
}
export interface s3__etsy_listing_image_a__fetch_get__params_T {
	S3_BUCKET?:string
	ETSY_LISTING_IMAGE_A_KEY?:string
}
export declare type fetch_s3_etsy_listing_image_a_params_I =
	s3__etsy_listing_image_a__fetch_get__params_T
export type s3__etsy_listing_image_a__fetch_get__ret_T = Promise<Response&{
	json:()=>Promise<etsy_listing_image_T[]>
}>
export declare type fetch_s3_etsy_listing_image_a_ret_T =
	s3__etsy_listing_image_a__fetch_get__ret_T
