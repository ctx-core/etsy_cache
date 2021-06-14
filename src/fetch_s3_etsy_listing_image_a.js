import { fetch } from '@ctx-core/fetch';
export async function fetch_s3_etsy_listing_image_a(params = {}) {
    const { S3_BUCKET = process.env.S3_BUCKET } = params;
    const { ETSY_LISTING_IMAGES_A_KEY = process.env.ETSY_LISTING_IMAGES_A_KEY, } = params;
    return fetch(`https://s3.amazonaws.com/${S3_BUCKET}/${ETSY_LISTING_IMAGES_A_KEY}`, { mode: 'cors' });
}
//# sourceMappingURL=src/fetch_s3_etsy_listing_image_a.js.map