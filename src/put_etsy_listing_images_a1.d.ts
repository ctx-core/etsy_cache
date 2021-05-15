import type { IListingImage } from 'etsy-ts/api/ListingImage';
export declare function put_etsy_listing_images_a1(etsy_listing_images_a1: IListingImage[], params?: put_etsy_listing_images_a1_params_type): Promise<import("@aws-sdk/client-s3").PutObjectCommandOutput>;
export interface put_etsy_listing_images_a1_params_type {
    region?: string;
    Bucket?: string;
    ETSY_LISTING_IMAGES_A1_KEY?: string;
}
