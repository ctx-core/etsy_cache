import { be_ } from '@ctx-core/object';
import { derived$ } from '@ctx-core/store';
import { loading_s3_etsy_listing_a$_b } from './loading_s3_etsy_listing_a$_b';
import { loading_s3_etsy_listing_image_a$_b } from './loading_s3_etsy_listing_image_a$_b';
const key = 'etsy_listing_ctx$';
export const etsy_listing_ctx$_b = be_(key, ctx => derived$([
    loading_s3_etsy_listing_a$_b(ctx),
    loading_s3_etsy_listing_image_a$_b(ctx),
], ([loading_s3_etsy_listing_a, loading_s3_etsy_listing_image_a]) => (loading_s3_etsy_listing_a && loading_s3_etsy_listing_image_a)
    ? {
        loading_s3_etsy_listing_a,
        loading_s3_etsy_listing_image_a,
    }
    : undefined));
//# sourceMappingURL=src/etsy_listing_ctx$_b.js.map