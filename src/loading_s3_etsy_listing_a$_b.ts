import { writable$, Writable$ } from '@ctx-core/store'
import { be_, assign } from '@ctx-core/object'
import { has_dom } from '@ctx-core/dom'
import { s3_etsy_listing_a_ } from './s3_etsy_listing_a_.js'
import type { etsy_cache_Ctx } from './etsy_cache_Ctx.js'
import type { etsy_listing_T } from './etsy_listing_T'
const key = 'loading_s3_etsy_listing_a$'
export function loading_s3_etsy_listing_a$_b(ctx:etsy_cache_Ctx):loading_s3_etsy_listing_a$_T {
	return be_<etsy_cache_Ctx, typeof key>(
		key, ()=>{
			const loading_s3_etsy_listing_a$ = writable$<etsy_listing_T[]|undefined>(undefined)
			if (has_dom) {
				reload_loading_s3_etsy_listing_a().then()
			}
			return assign(loading_s3_etsy_listing_a$, {
				reload_loading_s3_etsy_listing_a,
			}) as loading_s3_etsy_listing_a$_T
			async function reload_loading_s3_etsy_listing_a() {
				loading_s3_etsy_listing_a$.set(await s3_etsy_listing_a_())
			}
		})(ctx)
}
export interface loading_s3_etsy_listing_a$_T extends Writable$<etsy_listing_T[]|undefined> {
	reload_loading_s3_etsy_listing_a:()=>Promise<void>
}
export {
	loading_s3_etsy_listing_a$_b as loading_s3_etsy_listing_a_b,
}
