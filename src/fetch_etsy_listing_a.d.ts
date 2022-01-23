import type { Response } from '@ctx-core/fetch-undici'
import type { etsy_listing_T } from './_types'
export declare function fetch_etsy_listing_a(
	params?:fetch_etsy_listing_a_params_I
):Promise<Response|{
	json():Promise<{ results: etsy_listing_T[] }>;
}>;
export interface fetch_etsy_listing_a_params_I {
	ETSY_API_KEY?:string;
	ETSY_STORE_ID?:string;
}
export { fetch_etsy_listing_a as fetch_etsy_listing_a1, }
