import { be_, assign } from '@ctx-core/object';
import { has_dom } from '@ctx-core/dom';
import { writable$ } from '@ctx-core/store';
import { s3_etsy_listing_image_a_ } from './s3_etsy_listing_image_a_';
const key = 'loading_s3_etsy_listing_image_a$';
export const loading_s3_etsy_listing_image_a$_b = be_(key, () => {
    const loading_s3_etsy_listing_image_a$ = writable$(undefined);
    if (has_dom) {
        reload_loading_s3_etsy_listing_image_a().then();
    }
    return assign(loading_s3_etsy_listing_image_a$, {
        reload_loading_s3_etsy_listing_image_a,
    });
    async function reload_loading_s3_etsy_listing_image_a() {
        const s3_etsy_listing_image_a = await s3_etsy_listing_image_a_();
        loading_s3_etsy_listing_image_a$.set(s3_etsy_listing_image_a);
    }
});
//# sourceMappingURL=src/loading_s3_etsy_listing_image_a$_b.js.map