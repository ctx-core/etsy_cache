import { writable, Writable } from '@ctx-core/store'
import type { maybe } from '@ctx-core/function'
import { _b, assign } from '@ctx-core/object'
import { has_dom } from '@ctx-core/dom'
import { _s3_etsy_listing_a1 } from './_s3_etsy_listing_a1'
export function loading_s3_etsy_listing_a1_b<I extends unknown[]>(ctx?) {
	return _b<loading_s3_etsy_listing_a1_type<I>>(
		'loading_s3_etsy_listing_a1', ()=>{
			const loading_s3_etsy_listing_a1 = writable(null) as loading_s3_etsy_listing_a1_type<I>
			if (has_dom) {
				reload_loading_s3_etsy_listing_a1().then()
			}
			return assign(loading_s3_etsy_listing_a1, {
				reload_loading_s3_etsy_listing_a1,
			})
			async function reload_loading_s3_etsy_listing_a1() {
				const arr__listing__etsy__s3 = await _s3_etsy_listing_a1()
				loading_s3_etsy_listing_a1.set(arr__listing__etsy__s3)
			}
		})(ctx)
}
export interface loading_s3_etsy_listing_a1_type<I extends unknown[]> extends Writable<maybe<I>> {
	reload_loading_s3_etsy_listing_a1:()=>Promise<void>
}
