import { WritableAtom_ } from '@ctx-core/nanostores'
import { Ctx } from '@ctx-core/object'
import type { etsy_listing_T } from './_types'
export declare function loading_s3_etsy_listing_a$_(ctx:Ctx):loading_s3_etsy_listing_a$_T;
export interface loading_s3_etsy_listing_a$_T extends WritableAtom_<etsy_listing_T[]|undefined> {
	reload_loading_s3_etsy_listing_a:()=>Promise<void>;
}
