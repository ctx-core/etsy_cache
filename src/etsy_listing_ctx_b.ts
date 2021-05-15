import type { IListing } from 'etsy-ts/api'
import { _b } from '@ctx-core/object'
import { derived } from '@ctx-core/store'
import { loading_s3_etsy_listing_a1_b, loading_s3_etsy_listing_a1_ctx_I } from './loading_s3_etsy_listing_a1_b'
import {
	loading_s3_etsy_listing_image_a1_b, loading_s3_etsy_listing_image_a1_ctx_I
} from './loading_s3_etsy_listing_image_a1_b'
import type { IListingImage } from 'etsy-ts/api/ListingImage'
export const etsy_listing_ctx_b = _b('etsy_listing_ctx', (ctx:etsy_listing_ctx_ctx_I)=>
	derived(
		[
			loading_s3_etsy_listing_a1_b(ctx),
			loading_s3_etsy_listing_image_a1_b(ctx),
		],
		([$loading_s3_etsy_listing_a1, $loading_s3_etsy_listing_image_a1])=>
			$loading_s3_etsy_listing_a1
			&& $loading_s3_etsy_listing_image_a1
			&& {
				$loading_s3_etsy_listing_a1,
				$loading_s3_etsy_listing_image_a1,
			} as etsy_listing_ctx_I))
export interface etsy_listing_ctx_ctx_I extends loading_s3_etsy_listing_a1_ctx_I, loading_s3_etsy_listing_image_a1_ctx_I {
}
export interface etsy_listing_ctx_I {
	$loading_s3_etsy_listing_a1?:boolean[]
	$loading_s3_etsy_listing_image_a1?:boolean[]
	$s3_etsy_listing_a1?:IListing[],
	$s3_etsy_listing_image_a1?:IListingImage[],
}
