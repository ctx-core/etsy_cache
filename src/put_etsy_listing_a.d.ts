import type { IListing } from 'etsy-ts/api';
export declare function put_etsy_listing_a(etsy_listing_a: IListing[], params?: put_etsy_listing_a_params_T): Promise<import("@aws-sdk/client-s3").PutObjectCommandOutput>;
export interface put_etsy_listing_a_params_T {
    region?: string;
    Bucket?: string;
    ETSY_LISTING_A1_KEY?: string;
}
export { put_etsy_listing_a as put_etsy_listing_a1, };
