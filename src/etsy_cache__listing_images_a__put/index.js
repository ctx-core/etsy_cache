import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3'
import { import_meta_env_ } from '@ctx-core/env'
/**
 * @param {import('../_types').etsy_listing_image_T[]} etsy_listing_images_a
 * @param {import('./index.d.ts').put_etsy_listing_images_a_params_T} [params]
 * @returns {import('@aws-sdk/client-s3').ServiceOutputTypes}
 */
export async function etsy_cache__listing_images_a__put(
	etsy_listing_images_a,
	params = {}
) {
	const {
		region = 'us-east-1',
		Bucket = import_meta_env_().S3_BUCKET,
		ETSY_LISTING_IMAGES_A_KEY = import_meta_env_().ETSY_LISTING_IMAGES_A_KEY,
	} = params
	const s3 = new S3Client({
		region
	})
	const PutObjectCommand_obj = new PutObjectCommand({
		Bucket,
		Key: ETSY_LISTING_IMAGES_A_KEY,
		Body: JSON.stringify(etsy_listing_images_a)
	})
	return await s3.send(PutObjectCommand_obj)
}
export {
	etsy_cache__listing_images_a__put as put_etsy_listing_images_a,
	etsy_cache__listing_images_a__put as put_etsy_listing_images_a1,
}
