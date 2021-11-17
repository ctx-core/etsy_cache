import { PutObjectCommand, S3Client, ServiceOutputTypes } from '@aws-sdk/client-s3'
import type { etsy_listing_T } from './etsy_listing_T.js'
export async function put_etsy_listing_a(
	etsy_listing_a:etsy_listing_T[],
	params:put_etsy_listing_a_params_T = {}
):Promise<ServiceOutputTypes> {
	const {
		region = 'us-east-1',
		Bucket = process.env.S3_BUCKET as string,
		ETSY_LISTING_A_KEY = process.env.ETSY_LISTING_A_KEY as string,
	} = params
	const s3 = new S3Client({ region })
	const PutObjectCommand_obj = new PutObjectCommand({
		Bucket,
		Key: ETSY_LISTING_A_KEY,
		Body: JSON.stringify(etsy_listing_a),
	})
	return await s3.send(PutObjectCommand_obj)
}
export interface put_etsy_listing_a_params_T {
	region?:string
	Bucket?:string
	ETSY_LISTING_A_KEY?:string
}
export {
	put_etsy_listing_a as put_etsy_listing_a1,
}
