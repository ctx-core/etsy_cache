<script>
import {
	__s3_etsy_listing_a1,
	__s3_etsy_listing_images_a1,
} from './store'
import {
	_src__img,
	_title,
	_price,
	_description,
	_url,
} from '@ctx-core/etsy'
</script>

<div class="Store__Etsy">
	{#each $__s3_etsy_listing_a1||[] as listing__etsy__s3, i}
		<div class="listing" title="{_description(listing__etsy__s3)}">
			<div class="img-container">
				{#if _src__img($__s3_etsy_listing_images_a1[i])}
					<img
						src="{_src__img($__s3_etsy_listing_images_a1[i])}"
						alt="{_description(listing__etsy__s3)}"
					>
				{/if}
			</div>
			<div class="title">{@html _title(listing__etsy__s3)}</div>
			<div class="price">{_price(listing__etsy__s3)}</div>
			<a href="{_url(listing__etsy__s3)}" class="buy" target="_blank">Buy on Etsy</a>
		</div>
	{/each}
</div>

