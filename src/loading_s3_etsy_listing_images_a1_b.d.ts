import type { maybe } from '@ctx-core/function';
import { Writable } from '@ctx-core/store';
export declare const loading_s3_etsy_listing_images_a1_b: import("@ctx-core/object").be_type<type__reload_loading_s3_etsy_listing_images_a1, object>;
export interface type__reload_loading_s3_etsy_listing_images_a1 extends Writable<maybe<string[]>> {
    reload_loading_s3_etsy_listing_images_a1: () => Promise<void>;
}
