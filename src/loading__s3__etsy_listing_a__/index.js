import { atom_ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
import { s3__etsy_listing_a_ } from '../s3__etsy_listing_a_/index.js'
/** @type {typeof import('./index.d.ts').loading__s3__etsy_listing_a__} */
export const loading__s3__etsy_listing_a__ = be_('loading__s3__etsy_listing_a__', ()=>
	atom_(undefined))
export {
	loading__s3__etsy_listing_a__ as loading_s3_etsy_listing_a__,
	loading__s3__etsy_listing_a__ as loading__s3_etsy_listing_a__,
}
/**
 * @param ctx{import('@ctx-core/object').Ctx}
 * @returns {Promise<void>}
 */
export async function loading__s3__etsy_listing_a__reload(ctx) {
	loading__s3__etsy_listing_a__(ctx).set(await s3__etsy_listing_a_())
}
