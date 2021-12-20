import { has_dom } from '@ctx-core/dom'
import { B, be_, assign } from '@ctx-core/object'
import { atom$, WritableAtom$ } from '@ctx-core/nanostores'
import type { etsy_listing_image_T } from './etsy_listing_image_T.js'
import { s3_etsy_listing_image_a_ } from './s3_etsy_listing_image_a_.js'
const key = 'loading_s3_etsy_listing_image_a$'
export const loading_s3_etsy_listing_image_a$_b:B<loading_s3_etsy_listing_image_a$_T> = be_(
	key,
	()=>{
		const loading_s3_etsy_listing_image_a$ = atom$<etsy_listing_image_T[]|undefined>(undefined)
		if (has_dom) {
			reload_loading_s3_etsy_listing_image_a().then()
		}
		return assign(loading_s3_etsy_listing_image_a$, {
			reload_loading_s3_etsy_listing_image_a,
		}) as loading_s3_etsy_listing_image_a$_T
		async function reload_loading_s3_etsy_listing_image_a() {
			const s3_etsy_listing_image_a =
				await s3_etsy_listing_image_a_()
			loading_s3_etsy_listing_image_a$.set(s3_etsy_listing_image_a)
		}
	})
export interface loading_s3_etsy_listing_image_a$_T extends WritableAtom$<etsy_listing_image_T[]|undefined> {
	reload_loading_s3_etsy_listing_image_a:()=>Promise<void>
}
