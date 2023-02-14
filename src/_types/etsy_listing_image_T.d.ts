export interface etsy_listing_image_T {
	/**
	 * The numeric ID of the listing image.
	 */
	listing_image_id:number
	/**
	 * The image's average color, in webhex notation.
	 */
	hex_code:string
	/**
	 * The image's average red value, 0-255 (RGB color).
	 */
	red:number
	/**
	 * The image's average green value, 0-255 (RGB color).
	 */
	green:number
	/**
	 * The image's average blue value, 0-255 (RGB color).
	 */
	blue:number
	/**
	 * The image's average hue, 0-360 (HSV color).
	 */
	hue:number
	/**
	 * The image's average saturation, 0-100 (HSV color).
	 */
	saturation:number
	/**
	 * The image's average brightness, 0-100 (HSV color).
	 */
	brightness:number
	/**
	 * True if the image is in black & white.
	 */
	is_black_and_white:boolean
	/**
	 * Creation time, in epoch seconds.
	 */
	creation_tsz:number
	/**
	 * The numeric value of the listing id the image belongs to.
	 */
	listing_id:number
	/**
	 * Display order.
	 */
	rank:number
	/**
	 * The url to a 75x75 thumbnail of the image.
	 */
	url_75x75:string
	/**
	 * The url to a 170x135 thumbnail of the image.
	 */
	url_170x135:string
	/**
	 * The url to a thumbnail of the image, no more than 570px width by variable height.
	 */
	url_570xN:string
	/**
	 * The url to the full-size image, up to 3000px in each dimension.
	 */
	url_fullxfull:string
	/**
	 * Height of the image returned by url_fullxfull.
	 */
	full_height:number
	/**
	 * Width of the image returned by url_fullxfull.
	 */
	full_width:number
}
