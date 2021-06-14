import type { IListingImage } from 'etsy-ts/api/ListingImage';
export declare function put_etsy_listing_images_a(etsy_listing_images_a: IListingImage[], params?: put_etsy_listing_images_a_params_T): Promise<import("@aws-sdk/client-s3").PutObjectCommandOutput>;
export interface put_etsy_listing_images_a_params_T {
    region?: string;
    Bucket?: string;
    ETSY_LISTING_IMAGES_A_KEY?: string;
}
export { put_etsy_listing_images_a as put_etsy_listing_images_a1, };
