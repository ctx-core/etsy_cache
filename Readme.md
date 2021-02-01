# @ctx-core/etsy_cache

Caches the listings in a Etsy Store to S3.

Also contains a `Etsy_Store` component to browse through store & to purchase a listing through Etsy.

## Usage

### `cache-etsy.js`

```shell
npm install @ctx-core/etsy_cache
cache-etsy.js
```

### Etsy_Store

```html
<script>
	import Etsy_Store from '@ctx-core/etsy_cache/Etsy_Store.svelte'
</script>

<Etsy_Store></Etsy_Store>

<style type="text/scss">
	@import "~@ctx-core/etsy_cache/Etsy_Store";
	@import "your-css/variables";
	@include Etsy_Store($min-width__multi_column: $width__desktop-max);
</style>
```

## Environment Variables

`ETSY_API_KEY`

`ETSY_API_SECRET`

`ETSY_STORE_ID`

`ETSY_LISTING_A1_KEY` -
	S3 Key for the json file containing the Array of Listings

`ETSY_LISTING_IMAGES_A1_KEY` -
	S3 Key for the json file containing the Array of images for the listings
