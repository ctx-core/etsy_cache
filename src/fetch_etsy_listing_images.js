import { fetch } from '@ctx-core/fetch';
export async function fetch_etsy_listing_images(listing_id, params = {}) {
    const { ETSY_API_KEY = process.env.ETSY_API_KEY, } = params;
    return fetch(`https://openapi.etsy.com/v2/listings/${listing_id}/images?api_key=${ETSY_API_KEY}`);
}
//# sourceMappingURL=src/fetch_etsy_listing_images.js.map