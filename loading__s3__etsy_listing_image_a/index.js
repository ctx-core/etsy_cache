/// <reference types="ctx-core" />
/// <reference types="../types/index.d.ts" />
import { has_dom } from '@ctx-core/dom'
import { atom_, be_atom_triple_ } from '@ctx-core/nanostores'
import { be_ } from 'ctx-core/be'
import { s3__etsy_listing_image_a__new } from '../s3__etsy_listing_image_a/index.js'
/** @typedef {be_atom_triple_T} */
/** @typedef {Ctx} */
/** @typedef {etsy_listing_image_T} */
export const [
	loading__s3__etsy_listing_image_a$_,
	loading__s3__etsy_listing_image_a_,
	loading__s3__etsy_listing_image_a__set,
] = /** @type {be_atom_triple_T<etsy_listing_image_T[]>} */be_atom_triple_(be_(ctx=>{
	const loading__s3__etsy_listing_image_a$ = atom_(undefined)
	if (has_dom) {
		queueMicrotask(()=>
			loading__s3__etsy_listing_image_a__reload(ctx))
	}
	return loading__s3__etsy_listing_image_a$
}, { id: 'loading__s3__etsy_listing_image_a' }))
export {
	loading__s3__etsy_listing_image_a$_ as loading__s3__etsy_listing_image_a__,
	loading__s3__etsy_listing_image_a$_ as loading_s3_etsy_listing_image_a__,
	loading__s3__etsy_listing_image_a$_ as loading_s3_etsy_listing_image_a$_,
}
/**
 * @param {Ctx}ctx
 * @returns {Promise<void>}
 */
export async function loading__s3__etsy_listing_image_a__reload(ctx
) {
	const s3__etsy_listing_image_a =
		await s3__etsy_listing_image_a__new()
	loading__s3__etsy_listing_image_a__set(ctx, s3__etsy_listing_image_a)
}
