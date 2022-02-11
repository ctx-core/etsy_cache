import { WritableAtom$ } from '@ctx-core/nanostores'
import { B } from '@ctx-core/object'
import type { etsy_listing_image_T } from './_types'
export declare const loading_s3_etsy_listing_image_a$_:B<loading_s3_etsy_listing_image_a$_T>
export interface loading_s3_etsy_listing_image_a$_T extends WritableAtom$<etsy_listing_image_T[]|undefined> {
	reload_loading_s3_etsy_listing_image_a:()=>Promise<void>;
}