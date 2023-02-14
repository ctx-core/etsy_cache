export interface etsy_payload_T<Params, Result> {
	count:number
	results:Result[]
	params:Params
	type:string
}
