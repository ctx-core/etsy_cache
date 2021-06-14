import { be_ } from '@ctx-core/object';
import { derived$ } from '@ctx-core/store';
import { etsy_listing_ctx$_b } from './etsy_listing_ctx$_b';
const key = 's3_etsy_listing_a$';
export const s3_etsy_listing_a$_b = be_(key, (ctx) => derived$(etsy_listing_ctx$_b(ctx), etsy_listing_ctx => etsy_listing_ctx === null || etsy_listing_ctx === void 0 ? void 0 : etsy_listing_ctx.s3_etsy_listing_a));
//# sourceMappingURL=src/s3_etsy_listing_a$_b.js.map