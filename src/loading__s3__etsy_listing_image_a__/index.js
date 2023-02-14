import { has_dom } from '@ctx-core/dom'
import { atom_ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
import { s3__etsy_listing_image_a_ } from '../s3__etsy_listing_image_a_/index.js'
/** @type {typeof import('./index.d.ts').loading__s3__etsy_listing_image_a__} */
export const loading__s3__etsy_listing_image_a__ = be_(
	'loading__s3__etsy_listing_image_a__', ctx=>{
		const loading_s3_etsy_listing_image_a_ = atom_(undefined)
		if (has_dom) {
			queueMicrotask(()=>loading__s3__etsy_listing_image_a__reload(ctx))
		}
		return loading_s3_etsy_listing_image_a_
	})
export {
	loading__s3__etsy_listing_image_a__ as loading_s3_etsy_listing_image_a__,
	loading__s3__etsy_listing_image_a__ as loading_s3_etsy_listing_image_a$_,
}
/**
 * @param ctx{import('@ctx-core/object').Ctx}
 * @returns {Promise<void>}
 */
export async function loading__s3__etsy_listing_image_a__reload(ctx) {
	const s3_etsy_listing_image_a = await s3__etsy_listing_image_a_()
	loading__s3__etsy_listing_image_a__(ctx).set(s3_etsy_listing_image_a)
}
