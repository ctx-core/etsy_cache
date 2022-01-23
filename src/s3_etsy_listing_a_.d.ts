import type { etsy_listing_T } from './_types'
import { fetch_s3_etsy_listing_a_params_I } from './fetch_s3_etsy_listing_a.js'
export declare function s3_etsy_listing_a_(
	params?:fetch_s3_etsy_listing_a_params_I
):Promise<etsy_listing_T[]>;
export { s3_etsy_listing_a_ as _s3_etsy_listing_a, }
