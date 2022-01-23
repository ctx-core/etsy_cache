import type { etsy_listing_image_T } from './_types'
export declare function fetch_etsy_listing_images(
	listing_id:number, params?:fetch_etsy_listing_images_params_I
):Promise<Response&{
	json():Promise<{ results: etsy_listing_image_T[] }>;
}>;
export interface fetch_etsy_listing_images_params_I {
	ETSY_API_KEY?:string;
}
