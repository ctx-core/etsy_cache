import { writable$, Writable$ } from '@ctx-core/store'
import { _b, assign } from '@ctx-core/object'
import { has_dom } from '@ctx-core/dom'
import { _s3_etsy_listing_a1 } from './_s3_etsy_listing_a1'
import type { etsy_cache_Ctx } from './etsy_cache_Ctx'
const key = 'loading_s3_etsy_listing_a1'
export function loading_s3_etsy_listing_a1_b(ctx:etsy_cache_Ctx) {
	return _b<etsy_cache_Ctx, typeof key>(
		key, ()=>{
			const loading_s3_etsy_listing_a1 = writable$(undefined)
			if (has_dom) {
				reload_loading_s3_etsy_listing_a1().then()
			}
			return assign(loading_s3_etsy_listing_a1, {
				reload_loading_s3_etsy_listing_a1,
			}) as loading_s3_etsy_listing_a1_T
			async function reload_loading_s3_etsy_listing_a1() {
				const arr__listing__etsy__s3 = await _s3_etsy_listing_a1()
				loading_s3_etsy_listing_a1.set(arr__listing__etsy__s3)
			}
		})(ctx)
}
export interface loading_s3_etsy_listing_a1_T extends Writable$<boolean[]|undefined> {
	reload_loading_s3_etsy_listing_a1:()=>Promise<void>
}
