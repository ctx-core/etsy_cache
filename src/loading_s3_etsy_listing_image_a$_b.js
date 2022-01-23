import { has_dom } from '@ctx-core/dom'
import { be_, assign } from '@ctx-core/object'
import { atom$ } from '@ctx-core/nanostores'
import { s3_etsy_listing_image_a_ } from './s3_etsy_listing_image_a_.js'
const key = 'loading_s3_etsy_listing_image_a$'
/** @typedef {import('./loading_s3_etsy_listing_image_a$_b.d.ts').loading_s3_etsy_listing_image_a$_b}loading_s3_etsy_listing_image_a$_b */
/** @type {loading_s3_etsy_listing_image_a$_b} */
export const loading_s3_etsy_listing_image_a$_b = be_(key, ()=>{
	/** @type {loading_s3_etsy_listing_image_a$_b} */
	const loading_s3_etsy_listing_image_a$ = atom$(undefined)
	if (has_dom) {
		reload_loading_s3_etsy_listing_image_a().then()
	}
	return assign(loading_s3_etsy_listing_image_a$, {
		reload_loading_s3_etsy_listing_image_a
	})
	async function reload_loading_s3_etsy_listing_image_a() {
		const s3_etsy_listing_image_a = await s3_etsy_listing_image_a_()
		loading_s3_etsy_listing_image_a$.set(s3_etsy_listing_image_a)
	}
})
