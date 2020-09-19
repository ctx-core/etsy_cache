declare type put_etsy_listing_a1_opts_type = {
    region?: string;
    Bucket?: string;
    KEY__A1__LISTING__ETSY?: string;
};
export declare function put_etsy_listing_a1(etsy_listing_a1: any, opts?: put_etsy_listing_a1_opts_type): Promise<import("@aws-sdk/client-s3-node/types/PutObjectOutput").PutObjectOutput>;
export declare const put__arr__listing__etsy: typeof put_etsy_listing_a1;
declare type put_etsy_listing_images_a1_opts_type = {
    region?: string;
    Bucket?: string;
    KEY__A1__IMAGES__LISTING__ETSY?: string;
};
export declare function put_etsy_listing_images_a1(etsy_listing_images_a1: any, opts?: put_etsy_listing_images_a1_opts_type): Promise<import("@aws-sdk/client-s3-node/types/PutObjectOutput").PutObjectOutput>;
export declare const put__arr__images__listing__etsy: typeof put_etsy_listing_images_a1;
export declare function put__cache__etsy(): Promise<void>;
export {};
