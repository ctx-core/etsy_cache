import { ReadableAtom_ } from '@ctx-core/nanostores'
import { B } from '@ctx-core/object'
import type { etsy_listing_image_T, etsy_listing_T } from './_types'
export declare const etsy_listing_ctx__:B<ReadableAtom_<etsy_listing_ctx_T|undefined>>
export interface etsy_listing_ctx_T {
	loading_s3_etsy_listing_a?:etsy_listing_T[];
	loading_s3_etsy_listing_image_a?:etsy_listing_image_T[];
	s3_etsy_listing_a?:etsy_listing_T[];
	s3_etsy_listing_image_a?:etsy_listing_image_T[];
}
export { etsy_listing_ctx__ as etsy_listing_ctx$_ }
