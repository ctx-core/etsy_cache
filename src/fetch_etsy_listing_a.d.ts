import type { Response } from '@ctx-core/fetch-undici'
import type { etsy_listing_T, etsy_payload_T } from './_types'
export declare function fetch_etsy_listing_a(
	params?:fetch_etsy_listing_a_params_I
):Promise<[fetch_etsy_listing_a_payload_T, Response]>;
export interface fetch_etsy_listing_a_params_I {
	ETSY_API_KEY?:string;
	ETSY_STORE_ID?:string;
}
export interface etsy_listing_a_params_T {
	listing_id: number
}
export type fetch_etsy_listing_a_payload_T= etsy_payload_T<etsy_listing_a_params_T, etsy_listing_T>
export { fetch_etsy_listing_a as fetch_etsy_listing_a1, }
