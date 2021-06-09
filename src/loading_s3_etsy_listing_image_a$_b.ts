import { B, be_, assign } from '@ctx-core/object'
import { has_dom } from '@ctx-core/dom'
import { writable$, Writable$ } from '@ctx-core/store'
import { s3_etsy_listing_image_a_ } from './s3_etsy_listing_image_a_'
import type { etsy_cache_Ctx } from './etsy_cache_Ctx'
const key = 'loading_s3_etsy_listing_image_a$'
export const loading_s3_etsy_listing_image_a$_b:B<etsy_cache_Ctx, typeof key> = be_(
	key,
	()=>{
		const loading_s3_etsy_listing_image_a$ = writable$<boolean[]|undefined>(undefined)
		if (has_dom) {
			reload_loading_s3_etsy_listing_image_a().then()
		}
		return assign(loading_s3_etsy_listing_image_a$, {
			reload_loading_s3_etsy_listing_image_a,
		}) as loading_s3_etsy_listing_image_a$_T
		async function reload_loading_s3_etsy_listing_image_a() {
			const s3_etsy_listing_image_a1 =
				await s3_etsy_listing_image_a_()
			loading_s3_etsy_listing_image_a$.set(
				s3_etsy_listing_image_a1)
		}
	})
export interface loading_s3_etsy_listing_image_a$_T extends Writable$<boolean[]|undefined> {
	reload_loading_s3_etsy_listing_image_a:()=>Promise<void>
}
