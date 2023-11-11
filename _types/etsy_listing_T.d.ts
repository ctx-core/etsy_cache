export interface etsy_listing_T {
	/**
	 * The listing's numeric ID.
	 */
	listing_id:number
	/**
	 * One of active, removed, sold_out, expired, alchemy, edit, create, private, or unavailable.
	 */
	state:string
	/**
	 * The numeric ID of the user who posted the item.
	 */
	user_id:number
	/**
     @deprecated
	 * Deprecated: The category parameter is no longer supported—you must pass a buyer taxonomy id instead.
	 */
	category_id:number
	/**
	 * The listing's title. This string is valid if it does not match the following pattern: /[^\p{L}\p{Nd}\p{P}\p{Sm}\p{Zs}™©®]/u. The characters %, :, & and + can only be used once each.
	 */
	title:string
	/**
	 * A description of the item.
	 */
	description:string
	/**
	 * Creation time, in epoch seconds.
	 */
	creation_tsz:number
	/**
	 * The listing's expiration date and time, in epoch seconds.
	 */
	ending_tsz:number
	/**
	 * The date and time the listing was originally posted, in epoch seconds.
	 */
	original_creation_tsz:number
	/**
	 * The date and time the listing was updated, in epoch seconds.
	 */
	last_modified_tsz:number
	/**
	 * The item's price (will be treated as private for sold listings).Note: The price is the minimum possible price. The getInventory method will detail exact prices for available offerings.
	 */
	price:string
	/**
	 * The ISO (alphabetic) code for the item's currency.
	 */
	currency_code:string
	/**
	 * The quantity of this item available for sale.Note: The quantity is the total number of available offerings. The getInventory method will detail quantities for individual offerings.
	 */
	quantity:number
	/**
	 * A list of distinct SKUs applied to a listing.
	 */
	sku:string[]
	/**
	 * A list of tags for the item. A tag is valid if it does not match the pattern: /[^\p{L}\p{Nd}\p{Zs}\-'™©®]/u
	 */
	tags:string[]
	/**
	 * The seller taxonomy id of the listing.
	 */
	taxonomy_id:number
	/**
	 * Etsy's suggestion for the seller taxonomy_id for this listing. Etsy makes this suggestion if the listing does not have a taxonomy_id chosen by the seller.
	 */
	suggested_taxonomy_id:number
	/**
	 * The name of the taxonomy node of the item and the names of that node's parents
	 */
	taxonomy_path:string[]
	/**
	 * A list of materials used in the item. A material is valid if it does not match the pattern: /[^\p{L}\p{Nd}\p{Zs}]/u
	 */
	materials:string[]
	/**
	 * The numeric ID of the shop section for this listing, can be null
	 */
	shop_section_id:number
	/**
	 * Position in the Featured Listings portion of the shop
	 */
	featured_rank:number
	/**
	 * The time at which the listing last changed state.
	 */
	state_tsz:number
	/**
	 * The full URL to the listing's page on Etsy.
	 */
	url:string
	/**
	 * The number of times the listing has been viewed on Etsy.com (does not include API views).
	 */
	views:number
	/**
	 * The number of members who've marked this Listing as a favorite
	 */
	num_favorers:number
	/**
	 * The numeric ID of the shipping template associated with the listing.
	 */
	shipping_template_id:number
	/**
     @deprecated
	 * Deprecated: Do not use
	 */
	shipping_profile_id:number
	/**
	 * The minimum number of days for processing for this listing.
	 */
	processing_min:number
	/**
	 * The maximum number of days for processing for this listing.
	 */
	processing_max:number
	/**
	 * Who made the item being listed.
	 */
	who_made:'i_did'|'collective'|'someone_else'
	/**
	 * True if the listing is a supply.
	 */
	is_supply:boolean
	/**
	 * When was the item made.
	 */
	when_made:'made_to_order'|'2020_2021'|'2010_2019'|'2002_2009'|'before_2002'|'2000_2001'|'1990s'|'1980s'|'1970s'|'1960s'|'1950s'|'1940s'|'1930s'|'1920s'|'1910s'|'1900s'|'1800s'|'1700s'|'before_1700'
	/**
	 * How much the item weighs.
	 */
	item_weight:number
	/**
	 * The units used to represent the weight of this item.
	 */
	item_weight_unit:'oz'|'lb'|'g'|'kg'
	/**
	 * How long the item is.
	 */
	item_length:number
	/**
	 * How wide the item is.
	 */
	item_width:number
	/**
	 * How tall the item is.
	 */
	item_height:number
	/**
	 * The units used to represent the dimensions of this item.
	 */
	item_dimensions_unit:'in'|'ft'|'mm'|'cm'|'m'
	/**
	 * Is this listing a private listing that is intendend for a specific buyer and hidden from shop view.Note: This field is experimental and may change at any time.
	 */
	is_private:boolean
	/**
	 * Who is this listing for.
	 */
	recipient:'men'|'women'|'unisex_adults'|'teen_boys'|'teen_girls'|'teens'|'boys'|'girls'|'children'|'baby_boys'|'baby_girls'|'babies'|'birds'|'cats'|'dogs'|'pets'|'not_specified'
	/**
	 * What is the occasion for this listing.
	 */
	occasion:'anniversary'|'baptism'|'bar_or_bat_mitzvah'|'birthday'|'canada_day'|'chinese_new_year'|'cinco_de_mayo'|'confirmation'|'christmas'|'day_of_the_dead'|'easter'|'eid'|'engagement'|'fathers_day'|'get_well'|'graduation'|'halloween'|'hanukkah'|'housewarming'|'kwanzaa'|'prom'|'july_4th'|'mothers_day'|'new_baby'|'new_years'|'quinceanera'|'retirement'|'st_patricks_day'|'sweet_16'|'sympathy'|'thanksgiving'|'valentines'|'wedding'
	/**
	 * Style of this listing. Each style is a free-form text string such as "Formal", or "Steampunk". A Listing may have up to two styles. A style is valid if it does not match the pattern: /[^\p{L}\p{Nd}\p{Zs}]/u
	 */
	style:string[]
	/**
	 * If this flag is true, any applicable shop tax rates will not be applied to this listing on checkout.
	 */
	non_taxable:boolean
	/**
	 * If this flag is true, a buyer may contact the seller for a customized order. Can only be set when the shop accepts custom orders and defaults to true in that case.
	 */
	is_customizable:boolean
	/**
	 * True if this listing is for a digital download.
	 */
	is_digital:boolean
	/**
	 * Written description of the files attached to this digital listing.
	 */
	file_data:string
	/**
	 * True if this listing can be updated with the new inventory endpoints
	 */
	can_write_inventory:boolean
	/**
	 * True if variations are available for this Listing.
	 */
	has_variations:boolean
	/**
	 * True if this listing has been set to automatic renewals.
	 */
	should_auto_renew:boolean
	/**
	 * The IETF language tag (e.g. 'fr') for the language in which the listing is returned.
	 */
	language:string
}
