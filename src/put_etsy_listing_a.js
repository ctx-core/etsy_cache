import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3'
/**
 * @param {import('./_types').etsy_listing_T[]} etsy_listing_a
 * @param {import('./put_etsy_listing_a.d.ts').put_etsy_listing_a_params_T}[params]
 * @returns {import('@aws-sdk/client-s3').ServiceOutputTypes}
 */
export async function put_etsy_listing_a(
	etsy_listing_a, params = {}
) {
	const { region = 'us-east-1', Bucket = process.env.S3_BUCKET, ETSY_LISTING_A_KEY = process.env.ETSY_LISTING_A_KEY, } = params
	const s3 = new S3Client({
		region
	})
	const PutObjectCommand_obj = new PutObjectCommand({
		Bucket,
		Key: ETSY_LISTING_A_KEY,
		Body: JSON.stringify(etsy_listing_a)
	})
	return await s3.send(PutObjectCommand_obj)
}
export { put_etsy_listing_a as put_etsy_listing_a1, }
