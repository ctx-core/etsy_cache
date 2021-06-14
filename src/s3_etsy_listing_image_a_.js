import { fetch_s3_etsy_listing_image_a } from './fetch_s3_etsy_listing_image_a';
export async function s3_etsy_listing_image_a_(params = {}) {
    const response = await fetch_s3_etsy_listing_image_a(params);
    return response.json();
}
export { s3_etsy_listing_image_a_ as _s3_etsy_listing_image_a, };
//# sourceMappingURL=src/s3_etsy_listing_image_a_.js.map