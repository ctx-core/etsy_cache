<script>
import {
	s3_etsy_listing_a1, s3_etsy_listing_images_a1,
} from '../src'
import {
	_src__img, _title, _price, _description, _url,
} from '@ctx-core/etsy'
</script>

<div class="Etsy_Store">
	{#each $s3_etsy_listing_a1||[] as listing__etsy__s3, i}
		<div class="listing" title="{_description(listing__etsy__s3)}">
			<div class="img-container">
				{#if _src__img($s3_etsy_listing_images_a1[i])}
					<img
						src="{_src__img($s3_etsy_listing_images_a1[i])}"
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

