import { writable$ } from '@ctx-core/store';
import { be_, assign } from '@ctx-core/object';
import { has_dom } from '@ctx-core/dom';
import { s3_etsy_listing_a_ } from './s3_etsy_listing_a_';
const key = 'loading_s3_etsy_listing_a$';
export function loading_s3_etsy_listing_a$_b(ctx) {
    return be_(key, () => {
        const loading_s3_etsy_listing_a$ = writable$(undefined);
        if (has_dom) {
            reload_loading_s3_etsy_listing_a().then();
        }
        return assign(loading_s3_etsy_listing_a$, {
            reload_loading_s3_etsy_listing_a,
        });
        async function reload_loading_s3_etsy_listing_a() {
            const arr__listing__etsy__s3 = await s3_etsy_listing_a_();
            loading_s3_etsy_listing_a$.set(arr__listing__etsy__s3);
        }
    })(ctx);
}
export { loading_s3_etsy_listing_a$_b as loading_s3_etsy_listing_a_b, };
//# sourceMappingURL=src/loading_s3_etsy_listing_a$_b.js.map