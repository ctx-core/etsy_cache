import { WritableAtom_ } from '@ctx-core/nanostores'
import { B } from '@ctx-core/object'
import type { etsy_listing_image_T } from './_types'
export declare const loading_s3_etsy_listing_image_a__:B<loading_s3_etsy_listing_image_a__T>
export interface loading_s3_etsy_listing_image_a__T extends WritableAtom_<etsy_listing_image_T[]|undefined> {
	reload_loading_s3_etsy_listing_image_a:()=>Promise<void>;
}
export { loading_s3_etsy_listing_image_a__ as loading_s3_etsy_listing_image_a$_ }
