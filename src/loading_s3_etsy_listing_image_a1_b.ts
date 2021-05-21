import { _b, assign } from '@ctx-core/object'
import { has_dom } from '@ctx-core/dom'
import { writable$, Writable$ } from '@ctx-core/store'
import { _s3_etsy_listing_image_a1 } from './_s3_etsy_listing_image_a1'
const key = 'loading_s3_etsy_listing_image_a1'
export interface loading_s3_etsy_listing_image_a1_Ctx {
	loading_s3_etsy_listing_image_a1?:loading_s3_etsy_listing_image_a1_T
}
export const loading_s3_etsy_listing_image_a1_b = _b<loading_s3_etsy_listing_image_a1_Ctx, typeof key>(
	key,
	(_ctx:loading_s3_etsy_listing_image_a1_Ctx)=>{
		const loading_s3_etsy_listing_image_a1 = writable$<boolean[]|undefined>(undefined)
		if (has_dom) {
			reload_loading_s3_etsy_listing_image_a1().then()
		}
		return assign(loading_s3_etsy_listing_image_a1, {
			reload_loading_s3_etsy_listing_image_a1,
		}) as loading_s3_etsy_listing_image_a1_T
		async function reload_loading_s3_etsy_listing_image_a1() {
			const s3_etsy_listing_image_a1 =
				await _s3_etsy_listing_image_a1()
			loading_s3_etsy_listing_image_a1.set(
				s3_etsy_listing_image_a1)
		}
	})
export interface loading_s3_etsy_listing_image_a1_T extends Writable$<boolean[]|undefined> {
	reload_loading_s3_etsy_listing_image_a1:()=>Promise<void>
}
