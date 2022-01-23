import { has_dom } from '@ctx-core/dom'
import { atom$ } from '@ctx-core/nanostores'
import { be_, assign } from '@ctx-core/object'
import { s3_etsy_listing_a_ } from './s3_etsy_listing_a_.js'
const key = 'loading_s3_etsy_listing_a$'
/** @typedef {import('./loading_s3_etsy_listing_a$_b.d.ts').loading_s3_etsy_listing_a$_T}loading_s3_etsy_listing_a$_T */
/**
 * @param {import('@ctx-core/object').Ctx} ctx
 * @returns {loading_s3_etsy_listing_a$_T}
 */
export function loading_s3_etsy_listing_a$_b(ctx) {
	return be_(key, ()=>{
		/** @type {loading_s3_etsy_listing_a$_T} */
		const loading_s3_etsy_listing_a$ = atom$(undefined)
		if (has_dom) {
			reload_loading_s3_etsy_listing_a().then()
		}
		return assign(loading_s3_etsy_listing_a$, {
			reload_loading_s3_etsy_listing_a
		})
		async function reload_loading_s3_etsy_listing_a() {
			loading_s3_etsy_listing_a$.set(await s3_etsy_listing_a_())
		}
	})(ctx)
}
export { loading_s3_etsy_listing_a$_b as loading_s3_etsy_listing_a_b, }
