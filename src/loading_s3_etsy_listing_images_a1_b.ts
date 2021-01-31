import type { maybe } from '@ctx-core/function'
import { _b, assign } from '@ctx-core/object'
import { _has__dom } from '@ctx-core/dom'
import { writable, Writable } from '@ctx-core/store'
import { _s3_etsy_listing_images_a1 } from './_s3_etsy_listing_images_a1'
export const loading_s3_etsy_listing_images_a1_b = _b<type__reload_loading_s3_etsy_listing_images_a1>('loading_s3_etsy_listing_images_a1', ()=>{
	const loading_s3_etsy_listing_images_a1 = writable(null) as type__reload_loading_s3_etsy_listing_images_a1
	if (_has__dom()) {
		reload_loading_s3_etsy_listing_images_a1().then()
	}
	return assign(loading_s3_etsy_listing_images_a1, {
		reload_loading_s3_etsy_listing_images_a1,
	})
	async function reload_loading_s3_etsy_listing_images_a1() {
		const s3_etsy_listing_images_a1 =
			await _s3_etsy_listing_images_a1()
		loading_s3_etsy_listing_images_a1.set(
			s3_etsy_listing_images_a1)
	}
})
export interface type__reload_loading_s3_etsy_listing_images_a1 extends Writable<maybe<string[]>> {
	reload_loading_s3_etsy_listing_images_a1:()=>Promise<void>
}
