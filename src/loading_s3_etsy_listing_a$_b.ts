import { has_dom } from '@ctx-core/dom'
import { atom$, WritableAtom$ } from '@ctx-core/nanostores'
import { be_, assign, Ctx } from '@ctx-core/object'
import type { etsy_listing_T } from './etsy_listing_T'
import { s3_etsy_listing_a_ } from './s3_etsy_listing_a_.js'
const key = 'loading_s3_etsy_listing_a$'
export function loading_s3_etsy_listing_a$_b(ctx:Ctx):loading_s3_etsy_listing_a$_T {
	return be_<loading_s3_etsy_listing_a$_T>(
		key, ()=>{
			const loading_s3_etsy_listing_a$ = atom$<etsy_listing_T[]|undefined>(undefined)
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
export interface loading_s3_etsy_listing_a$_T extends WritableAtom$<etsy_listing_T[]|undefined> {
	reload_loading_s3_etsy_listing_a:()=>Promise<void>
}
export {
	loading_s3_etsy_listing_a$_b as loading_s3_etsy_listing_a_b,
}
