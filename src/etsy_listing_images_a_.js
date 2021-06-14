import { fetch_etsy_listing_images } from './fetch_etsy_listing_images';
export async function etsy_listing_images_a_(etsy_listing_a) {
    const etsy_listing_images_promise_a = [];
    for (let i = 0; i < etsy_listing_a.length; i++) {
        const etsy_listing = etsy_listing_a[i];
        const { listing_id } = etsy_listing;
        etsy_listing_images_promise_a.push(etsy_listing_images_(listing_id));
    }
    return await Promise.all(etsy_listing_images_promise_a);
    async function etsy_listing_images_(listing_id) {
        const response = await fetch_etsy_listing_images(listing_id);
        if (response.headers.get('content-type') == 'application/json') {
            const json = await response.json();
            return json.results[0];
        }
        else {
            console.warn(`listing_id ${listing_id} failed`, response.headers);
        }
    }
}
export { etsy_listing_images_a_ as _etsy_listing_images_a1, };
//# sourceMappingURL=src/etsy_listing_images_a_.js.map