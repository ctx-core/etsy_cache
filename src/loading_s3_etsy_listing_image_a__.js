import { has_dom } from '@ctx-core/dom'
import { atom_ } from '@ctx-core/nanostores'
import { assign, be_ } from '@ctx-core/object'
import { s3_etsy_listing_image_a_ } from './s3_etsy_listing_image_a_.js'
/** @type {import('./loading_s3_etsy_listing_image_a__.d.ts').loading_s3_etsy_listing_image_a__} */
export const loading_s3_etsy_listing_image_a__ = be_('loading_s3_etsy_listing_image_a__', ()=>{
	/** @type {import('./loading_s3_etsy_listing_image_a__.d.ts').loading_s3_etsy_listing_image_a__T} */
	const loading_s3_etsy_listing_image_a_ = atom_(undefined)
	if (has_dom) {
		reload_loading_s3_etsy_listing_image_a().then()
	}
	return assign(loading_s3_etsy_listing_image_a_, {
		reload_loading_s3_etsy_listing_image_a
	})
	async function reload_loading_s3_etsy_listing_image_a() {
		const s3_etsy_listing_image_a = await s3_etsy_listing_image_a_()
		loading_s3_etsy_listing_image_a_.set(s3_etsy_listing_image_a)
	}
})
export { loading_s3_etsy_listing_image_a__ as loading_s3_etsy_listing_image_a$_ }
