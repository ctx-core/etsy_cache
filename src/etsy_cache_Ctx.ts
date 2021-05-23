import type { etsy_listing_ctx_T } from './etsy_listing_ctx_b'
import type { loading_s3_etsy_listing_a1_T } from './loading_s3_etsy_listing_a1_b'
import type { loading_s3_etsy_listing_image_a1_T } from './loading_s3_etsy_listing_image_a1_b'
import type { Readable$ } from '@ctx-core/store'
import type { IListing } from 'etsy-ts/api'
import type { IListingImage } from 'etsy-ts/api/ListingImage'
export interface etsy_cache_Ctx {
	etsy_listing_ctx?:etsy_listing_ctx_T
	loading_s3_etsy_listing_a1?:loading_s3_etsy_listing_a1_T
	loading_s3_etsy_listing_image_a1?:loading_s3_etsy_listing_image_a1_T
	s3_etsy_listing_a1?:Readable$<IListing[]|undefined>
	s3_etsy_listing_image_a1?:Readable$<IListingImage[]|undefined>
}
