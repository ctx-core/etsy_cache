import { S3Client } from '@aws-sdk/client-s3-node/S3Client'
import { PutObjectCommand } from '@aws-sdk/client-s3-node/commands/PutObjectCommand'
export async function put_etsy_listing_a1(etsy_listing_a1, opts:put_etsy_listing_a1_opts_type = {}) {
	const {
		region = 'us-east-1',
		Bucket = process.env.S3_BUCKET as string,
		ETSY_LISTING_A1_KEY = process.env.ETSY_LISTING_A1_KEY as string,
	} = opts
	const s3 = new S3Client({ region })
	const PutObjectCommand_obj = new PutObjectCommand({
		Bucket,
		Key: ETSY_LISTING_A1_KEY,
		Body: JSON.stringify(etsy_listing_a1),
	})
	return await s3.send(PutObjectCommand_obj)
}
export type put_etsy_listing_a1_opts_type = {
	region?:string
	Bucket?:string
	ETSY_LISTING_A1_KEY?:string
}
