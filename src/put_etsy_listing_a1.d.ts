import type { IListing } from 'etsy-ts/api';
export declare function put_etsy_listing_a1(etsy_listing_a1: IListing[], params?: put_etsy_listing_a1_params_T): Promise<import("@aws-sdk/client-s3").PutObjectCommandOutput>;
export interface put_etsy_listing_a1_params_T {
    region?: string;
    Bucket?: string;
    ETSY_LISTING_A1_KEY?: string;
}
