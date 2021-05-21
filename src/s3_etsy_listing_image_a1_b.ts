import type { IListingImage } from 'etsy-ts/api/ListingImage'
import { _b } from '@ctx-core/object'
import { derived$, Readable$ } from '@ctx-core/store'
import { etsy_listing_ctx_b, etsy_listing_ctx_Ctx } from './etsy_listing_ctx_b'
const key = 's3_etsy_listing_image_a1'
export interface s3_etsy_listing_image_a1_Ctx extends etsy_listing_ctx_Ctx {
	s3_etsy_listing_image_a1?:Readable$<IListingImage[]|undefined>
}
export const s3_etsy_listing_image_a1_b = _b<s3_etsy_listing_image_a1_Ctx, typeof key>(key, ctx=>
	derived$(
		etsy_listing_ctx_b(ctx),
		$etsy_listing_ctx=>
			$etsy_listing_ctx?.$s3_etsy_listing_image_a1))
