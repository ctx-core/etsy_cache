import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
export async function put_etsy_listing_a(etsy_listing_a, params = {}) {
    const { region = 'us-east-1', Bucket = process.env.S3_BUCKET, ETSY_LISTING_A1_KEY = process.env.ETSY_LISTING_A1_KEY, } = params;
    const s3 = new S3Client({ region });
    const PutObjectCommand_obj = new PutObjectCommand({
        Bucket,
        Key: ETSY_LISTING_A1_KEY,
        Body: JSON.stringify(etsy_listing_a),
    });
    return await s3.send(PutObjectCommand_obj);
}
export { put_etsy_listing_a as put_etsy_listing_a1, };
//# sourceMappingURL=src/put_etsy_listing_a.js.map