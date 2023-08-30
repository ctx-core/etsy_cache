import type { Response } from '@ctx-core/fetch-undici'
import type { etsy_listing_T, etsy_payload_T } from '../_types'
export declare function etsy_listing_a__new():Promise<etsy_listing_T[]>
export { etsy_listing_a__new as _etsy_listing_a1, }
export declare function etsy_listing_a__fetch_get(
	params?:etsy_listing_a__fetch_get__params_T
):Promise<Response&{ json:()=>Promise<etsy_listing_a__fetch_get__payload_T> }>
export {
	etsy_listing_a__fetch_get as fetch_etsy_listing_a_,
	etsy_listing_a__fetch_get as fetch_etsy_listing_a,
	etsy_listing_a__fetch_get as fetch_etsy_listing_a1,
}
export interface etsy_listing_a__fetch_get__params_T {
	ETSY_API_KEY?:string
	ETSY_STORE_ID?:string
}
export declare type fetch_etsy_listing_a_params_I = etsy_listing_a__fetch_get__params_T
export interface etsy_listing_a__fetch_get__payload__params_T {
	listing_id:number
}
export declare type etsy_listing_a_params_T = etsy_listing_a__fetch_get__payload__params_T
export type etsy_listing_a__fetch_get__payload_T =
	etsy_payload_T<etsy_listing_a__fetch_get__payload__params_T, etsy_listing_T>
export declare type fetch_etsy_listing_a_payload_T = etsy_listing_a__fetch_get__payload_T
