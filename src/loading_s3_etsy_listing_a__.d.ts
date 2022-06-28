import { type WritableAtom_ } from '@ctx-core/nanostores'
import { type Ctx } from '@ctx-core/object'
import type { etsy_listing_T } from './_types'
export declare function loading_s3_etsy_listing_a__(ctx:Ctx):loading_s3_etsy_listing_a__T;
export interface loading_s3_etsy_listing_a__T extends WritableAtom_<etsy_listing_T[]|undefined> {
	reload_loading_s3_etsy_listing_a:()=>Promise<void>;
}
export { loading_s3_etsy_listing_a__ as loading_s3_etsy_listing_a$_ }
