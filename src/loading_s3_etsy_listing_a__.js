import { has_dom } from '@ctx-core/dom'
import { atom_ } from '@ctx-core/nanostores'
import { assign, be_ } from '@ctx-core/object'
import { s3_etsy_listing_a_ } from './s3_etsy_listing_a_.js'
/** @type {import('./loading_s3_etsy_listing_a__.d.ts').loading_s3_etsy_listing_a__} */
export const loading_s3_etsy_listing_a__ = be_('loading_s3_etsy_listing_a__', ()=>{
	/** @type {loading_s3_etsy_listing_a__T} */
	const loading_s3_etsy_listing_a_ = atom_(undefined)
	if (has_dom) {
		reload_loading_s3_etsy_listing_a().then()
	}
	return assign(loading_s3_etsy_listing_a_, {
		reload_loading_s3_etsy_listing_a
	})
	async function reload_loading_s3_etsy_listing_a() {
		loading_s3_etsy_listing_a_.set(await s3_etsy_listing_a_())
	}
})
export { loading_s3_etsy_listing_a__ as loading_s3_etsy_listing_a__ }
