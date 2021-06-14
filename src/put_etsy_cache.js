import { sleep } from '@ctx-core/sleep';
import { etsy_listing_a_ } from './etsy_listing_a_';
import { etsy_listing_images_a_ } from './etsy_listing_images_a_';
import { put_etsy_listing_a } from './put_etsy_listing_a';
import { put_etsy_listing_images_a } from './put_etsy_listing_images_a';
export async function put_etsy_cache() {
    const etsy_listing_a = await etsy_listing_a_();
    const etsy_listing_images_a = [];
    const page_length = 5;
    for (let i = 0; i < etsy_listing_a.length; i += page_length) {
        if (i)
            await sleep(1000);
        const out_etsy_listing_images_a = await etsy_listing_images_a_(etsy_listing_a.slice(i, i + page_length));
        etsy_listing_images_a.push.apply(etsy_listing_images_a, out_etsy_listing_images_a);
    }
    await Promise.all([
        put_etsy_listing_a(etsy_listing_a),
        put_etsy_listing_images_a(etsy_listing_images_a),
    ]);
}
//# sourceMappingURL=src/put_etsy_cache.js.map