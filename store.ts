import { writable, derived, Writable } from 'svelte/store'
import { _b, assign } from '@ctx-core/object'
import { _andand, maybe } from '@ctx-core/function'
import {
	_a1__listing__etsy__s3,
	_a1__images__listing__etsy__s3,
} from './fetch'
import { _has__dom } from '@ctx-core/dom'
export interface type__a1__listing__etsy__s3__loading<I = unknown> extends Writable<maybe<I[]>> {
	reload__a1__listing__etsy__s3__loading:()=>Promise<void>
}
export const b__a1__listing__etsy__s3__loading = _b<type__a1__listing__etsy__s3__loading>('__a1__listing__etsy__s3__loading', ()=>{
	const __a1__listing__etsy__s3__loading = writable(null) as type__a1__listing__etsy__s3__loading
	if (_has__dom()) {
		reload__a1__listing__etsy__s3__loading()
	}
	return assign(__a1__listing__etsy__s3__loading, {
		reload__a1__listing__etsy__s3__loading,
	})
	async function reload__a1__listing__etsy__s3__loading() {
		const arr__listing__etsy__s3 = await _a1__listing__etsy__s3()
		__a1__listing__etsy__s3__loading.set(arr__listing__etsy__s3)
	}
})
export const __a1__listing__etsy__s3__loading = b__a1__listing__etsy__s3__loading()
export const {
	reload__a1__listing__etsy__s3__loading,
} = __a1__listing__etsy__s3__loading
export interface type__reload__a1__images__listing__etsy__s3__loading extends Writable<maybe<string[]>> {
	reload__a1__images__listing__etsy__s3__loading:()=>Promise<void>
}
export const b__a1__images__listing__etsy__s3__loading = _b<type__reload__a1__images__listing__etsy__s3__loading>('__a1__images__listing__etsy__s3__loading', ()=>{
	const __a1__images__listing__etsy__s3__loading = writable(null) as type__reload__a1__images__listing__etsy__s3__loading
	if (_has__dom()) {
		reload__a1__images__listing__etsy__s3__loading()
	}
	return assign(__a1__images__listing__etsy__s3__loading, {
		reload__a1__images__listing__etsy__s3__loading,
	})
	async function reload__a1__images__listing__etsy__s3__loading() {
		const a1__images__listing__etsy__s3 =
			await _a1__images__listing__etsy__s3()
		__a1__images__listing__etsy__s3__loading.set(
			a1__images__listing__etsy__s3)
	}
})
export const __a1__images__listing__etsy__s3__loading = b__a1__images__listing__etsy__s3__loading()
export const {
	reload__a1__images__listing__etsy__s3__loading,
} = __a1__images__listing__etsy__s3__loading
export const b__ctx__listing__etsy = _b('__ctx__listing__etsy', ctx=>
	derived(
		[
			b__a1__listing__etsy__s3__loading(ctx),
			b__a1__images__listing__etsy__s3__loading(ctx),
		],
		([a1__listing__etsy__s3, a1__images__listing__etsy__s3])=>
			a1__listing__etsy__s3
			&& a1__images__listing__etsy__s3
			&& {
				a1__listing__etsy__s3,
				a1__images__listing__etsy__s3,
			}))
export const __ctx__listing__etsy = b__ctx__listing__etsy()
export const b__a1__listing__etsy__s3 = _b('__a1__listing__etsy__s3', ctx=>
	derived(
		b__ctx__listing__etsy(ctx),
		_andand('a1__listing__etsy__s3')))
export const __a1__listing__etsy__s3 = b__a1__listing__etsy__s3()
export const b__a1__images__listing__etsy__s3 = _b('__a1__images__listing__etsy__s3', ctx=>
	derived(
		b__ctx__listing__etsy(ctx),
		_andand('a1__images__listing__etsy__s3')))
export const __a1__images__listing__etsy__s3 = b__a1__images__listing__etsy__s3()
