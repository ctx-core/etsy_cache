import type { IListing } from 'etsy-ts/api'
import type { IListingImage } from 'etsy-ts/api/ListingImage'
import { _b } from '@ctx-core/object'
import { derived$, Readable$ } from '@ctx-core/store'
import { loading_s3_etsy_listing_a1_b, loading_s3_etsy_listing_a1_Ctx } from './loading_s3_etsy_listing_a1_b'
import {
	loading_s3_etsy_listing_image_a1_b, loading_s3_etsy_listing_image_a1_Ctx
} from './loading_s3_etsy_listing_image_a1_b'
const key = 'etsy_listing_ctx'
export interface etsy_listing_ctx_Ctx
	extends loading_s3_etsy_listing_a1_Ctx, loading_s3_etsy_listing_image_a1_Ctx {
	etsy_listing_ctx?:etsy_listing_ctx_T
}
export const etsy_listing_ctx_b = _b<etsy_listing_ctx_Ctx, typeof key>(key, ctx=>
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
			} as etsy_listing_ctx_I
			: undefined
	))
export interface etsy_listing_ctx_ctx_I extends loading_s3_etsy_listing_a1_Ctx, loading_s3_etsy_listing_image_a1_Ctx {
}
export interface etsy_listing_ctx_I {
	$loading_s3_etsy_listing_a1?:boolean[]
	$loading_s3_etsy_listing_image_a1?:boolean[]
	$s3_etsy_listing_a1?:IListing[],
	$s3_etsy_listing_image_a1?:IListingImage[],
}
export interface etsy_listing_ctx_T extends Readable$<etsy_listing_ctx_I|undefined> {}
