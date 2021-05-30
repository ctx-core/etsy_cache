import type { IListing } from 'etsy-ts/api'
import type { IListingImage } from 'etsy-ts/api/ListingImage'
import { _b } from '@ctx-core/object'
import { derived$, Readable$ } from '@ctx-core/store'
import { loading_s3_etsy_listing_a$_b } from './loading_s3_etsy_listing_a$_b'
import { loading_s3_etsy_listing_image_a$_b } from './loading_s3_etsy_listing_image_a$_b'
import type { etsy_cache_Ctx } from './etsy_cache_Ctx'
const key = 'etsy_listing_ctx$'
export const etsy_listing_ctx$_b = _b<etsy_cache_Ctx, typeof key>(key, ctx=>
	derived$(
		[
			loading_s3_etsy_listing_a$_b(ctx),
			loading_s3_etsy_listing_image_a$_b(ctx),
		],
		([loading_s3_etsy_listing_a, loading_s3_etsy_listing_image_a])=>
			(loading_s3_etsy_listing_a && loading_s3_etsy_listing_image_a)
			? {
				loading_s3_etsy_listing_a,
				loading_s3_etsy_listing_image_a,
			} as etsy_listing_ctx_T
			: undefined
	))
export interface etsy_listing_ctx_T {
	loading_s3_etsy_listing_a?:boolean[]
	loading_s3_etsy_listing_image_a?:boolean[]
	s3_etsy_listing_a1?:IListing[],
	s3_etsy_listing_image_a1?:IListingImage[],
}
export interface etsy_listing_ctx$_T extends Readable$<etsy_listing_ctx_T|undefined> {}
