import type { IListing } from 'etsy-ts/api'
import type { IListingImage } from 'etsy-ts/api/ListingImage'
import { _b } from '@ctx-core/object'
import { derived$, Readable$ } from '@ctx-core/store'
import { loading_s3_etsy_listing_a1_b } from './loading_s3_etsy_listing_a1_b'
import { loading_s3_etsy_listing_image_a1_b } from './loading_s3_etsy_listing_image_a1_b'
import type { etsy_cache_Ctx } from './etsy_cache_Ctx'
const key = 'etsy_listing_ctx'
export const etsy_listing_ctx_b = _b<etsy_cache_Ctx, typeof key>(key, ctx=>
	derived$(
		[
			loading_s3_etsy_listing_a1_b(ctx),
			loading_s3_etsy_listing_image_a1_b(ctx),
		],
		([$loading_s3_etsy_listing_a1, $loading_s3_etsy_listing_image_a1])=>
			($loading_s3_etsy_listing_a1 && $loading_s3_etsy_listing_image_a1)
			? {
				$loading_s3_etsy_listing_a1,
				$loading_s3_etsy_listing_image_a1,
			} as etsy_listing_Ctx
			: undefined
	))
export interface etsy_listing_Ctx {
	$loading_s3_etsy_listing_a1?:boolean[]
	$loading_s3_etsy_listing_image_a1?:boolean[]
	$s3_etsy_listing_a1?:IListing[],
	$s3_etsy_listing_image_a1?:IListingImage[],
}
export interface etsy_listing_ctx_T extends Readable$<etsy_listing_Ctx|undefined> {}
