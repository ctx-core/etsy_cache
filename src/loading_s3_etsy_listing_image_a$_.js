import { has_dom } from '@ctx-core/dom'
import { atom$ } from '@ctx-core/nanostores'
import { assign, be_ } from '@ctx-core/object'
import { s3_etsy_listing_image_a_ } from './s3_etsy_listing_image_a_.js'
const key = 'loading_s3_etsy_listing_image_a$'
/** @type {import('./loading_s3_etsy_listing_image_a$_.d.ts').loading_s3_etsy_listing_image_a$_} */
export const loading_s3_etsy_listing_image_a$_ = be_(key, ()=>{
	/** @type {import('./loading_s3_etsy_listing_image_a$_.d.ts').loading_s3_etsy_listing_image_a$_T} */
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
