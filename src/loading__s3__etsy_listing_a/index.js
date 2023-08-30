import { atom_, be_atom_triple_ } from '@ctx-core/nanostores'
import { s3__etsy_listing_a__new } from '../s3__etsy_listing_a/index.js'
/** @typedef {import('@ctx-core/object').be_atom_triple_T}be_atom_triple_T */
/** @typedef {import('@ctx-core/object').Ctx}Ctx */
/** @typedef {import('../_types').etsy_listing_T}etsy_listing_T */
export const [
	loading__s3__etsy_listing_a$_,
	loading__s3__etsy_listing_a_,
	loading__s3__etsy_listing_a__set,
] = /** @type {be_atom_triple_T<etsy_listing_T>} */be_atom_triple_(
	'loading__s3__etsy_listing_a', ()=>
		atom_(undefined))
export {
	loading__s3__etsy_listing_a$_ as loading__s3__etsy_listing_a__,
	loading__s3__etsy_listing_a$_ as loading_s3_etsy_listing_a__,
	loading__s3__etsy_listing_a$_ as loading__s3_etsy_listing_a__,
}
/**
 * @param {Ctx}ctx
 * @returns {Promise<void>}
 */
export async function loading__s3__etsy_listing_a__reload(ctx) {
	loading__s3__etsy_listing_a__set(ctx, await s3__etsy_listing_a__new())
}
