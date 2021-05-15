import { _b } from '@ctx-core/object'
import { derived$, Readable$ } from '@ctx-core/store'
import { etsy_listing_ctx_b, etsy_listing_ctx_I } from './etsy_listing_ctx_b'
import type { IListingImage } from 'etsy-ts/api/ListingImage'
export const s3_etsy_listing_image_a1_b = _b('s3_etsy_listing_image_a1', ctx=>
	derived$(
		etsy_listing_ctx_b(ctx),
		$etsy_listing_ctx=>
			$etsy_listing_ctx?.$s3_etsy_listing_image_a1))
export interface s3_etsy_listing_image_a1_ctx_I extends etsy_listing_ctx_I {
	s3_etsy_listing_image_a1?:Readable$<IListingImage[]>
}
