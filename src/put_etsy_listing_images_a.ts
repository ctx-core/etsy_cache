import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3'
import type { IListingImage } from 'etsy-ts/api/ListingImage'
export async function put_etsy_listing_images_a(
	etsy_listing_images_a:IListingImage[],
	params:put_etsy_listing_images_a_params_T = {}
) {
	const {
		region = 'us-east-1',
		Bucket = process.env.S3_BUCKET as string,
		ETSY_LISTING_IMAGES_A_KEY = process.env.ETSY_LISTING_IMAGES_A_KEY as string,
	} = params
	const s3 = new S3Client({ region })
	const PutObjectCommand_obj = new PutObjectCommand({
		Bucket,
		Key: ETSY_LISTING_IMAGES_A_KEY,
		Body: JSON.stringify(etsy_listing_images_a),
	})
	return await s3.send(PutObjectCommand_obj)
}
export interface put_etsy_listing_images_a_params_T {
	region?:string
	Bucket?:string
	ETSY_LISTING_IMAGES_A_KEY?:string
}
export {
	put_etsy_listing_images_a as put_etsy_listing_images_a1,
}
