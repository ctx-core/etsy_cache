import { _b } from '@ctx-core/object'
import { derived } from '@ctx-core/store'
import { loading_s3_etsy_listing_a1_b } from './loading_s3_etsy_listing_a1_b'
import { loading_s3_etsy_listing_images_a1_b } from './loading_s3_etsy_listing_images_a1_b'
export const etsy_listing_ctx_b = _b('etsy_listing_ctx', ctx=>
	derived(
		[
			loading_s3_etsy_listing_a1_b(ctx),
			loading_s3_etsy_listing_images_a1_b(ctx),
		],
		([$loading_s3_etsy_listing_a1, $loading_s3_etsy_listing_images_a1])=>
			$loading_s3_etsy_listing_a1
			&& $loading_s3_etsy_listing_images_a1
			&& {
				$loading_s3_etsy_listing_a1,
				$loading_s3_etsy_listing_images_a1,
			}))
