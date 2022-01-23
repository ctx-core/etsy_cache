import { WritableAtom$ } from '@ctx-core/nanostores'
import { Ctx } from '@ctx-core/object'
import type { etsy_listing_T } from './_types'
export declare function loading_s3_etsy_listing_a$_b(ctx:Ctx):loading_s3_etsy_listing_a$_T;
export interface loading_s3_etsy_listing_a$_T extends WritableAtom$<etsy_listing_T[]|undefined> {
	reload_loading_s3_etsy_listing_a:()=>Promise<void>;
}
export { loading_s3_etsy_listing_a$_b as loading_s3_etsy_listing_a_b, }
