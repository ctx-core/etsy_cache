import { sleep } from '@ctx-core/sleep'
import { S3Client } from '@aws-sdk/client-s3-node/S3Client'
import { PutObjectCommand } from '@aws-sdk/client-s3-node/commands/PutObjectCommand'
import { _etsy_listing_a1 } from './_etsy_listing_a1'
import { _etsy_listing_images_a1 } from './_etsy_listing_images_a1'
type put_etsy_listing_a1_opts_type = {
	region?:string
	Bucket?:string
	KEY__A1__LISTING__ETSY?:string
}
export async function put_etsy_listing_a1(etsy_listing_a1, opts:put_etsy_listing_a1_opts_type = {}) {
	const {
		region = 'us-east-1',
		Bucket = process.env.S3_BUCKET as string,
		KEY__A1__LISTING__ETSY = process.env.KEY__A1__LISTING__ETSY as string,
	} = opts
	const s3 = new S3Client({ region })
	const obj__PutObjectCommand = new PutObjectCommand({
		Bucket,
		Key: KEY__A1__LISTING__ETSY,
		Body: JSON.stringify(etsy_listing_a1),
	})
	return await s3.send(obj__PutObjectCommand)
}
export const put__arr__listing__etsy = put_etsy_listing_a1
type put_etsy_listing_images_a1_opts_type = {
	region?:string
	Bucket?:string
	KEY__A1__IMAGES__LISTING__ETSY?:string
}
export async function put_etsy_listing_images_a1(etsy_listing_images_a1, opts:put_etsy_listing_images_a1_opts_type = {}) {
	const {
		region = 'us-east-1',
		Bucket = process.env.S3_BUCKET as string,
		KEY__A1__IMAGES__LISTING__ETSY = process.env.KEY__A1__IMAGES__LISTING__ETSY as string,
	} = opts
	const s3 = new S3Client({ region })
	const obj__PutObjectCommand = new PutObjectCommand({
		Bucket,
		Key: KEY__A1__IMAGES__LISTING__ETSY,
		Body: JSON.stringify(etsy_listing_images_a1),
	})
	return await s3.send(obj__PutObjectCommand)
}
export const put__arr__images__listing__etsy = put_etsy_listing_images_a1
export async function put__cache__etsy() {
	const etsy_listing_a1 = await _etsy_listing_a1()
	const etsy_listing_images_a1 = [] as unknown[]
	const length__page = 5
	for (let i = 0; i < etsy_listing_a1.length; i += length__page) {
		if (i) await sleep(1000)
		const out_etsy_listing_images_a1 =
			await _etsy_listing_images_a1(etsy_listing_a1.slice(i, i + length__page))
		etsy_listing_images_a1.push.apply(
			etsy_listing_images_a1,
			out_etsy_listing_images_a1)
	}
	await Promise.all([
		put_etsy_listing_a1(etsy_listing_a1),
		put_etsy_listing_images_a1(etsy_listing_images_a1),
	])
}
