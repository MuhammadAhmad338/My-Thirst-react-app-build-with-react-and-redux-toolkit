import {Product} from "./Product.ts";

export interface CategoryInterface {
    query: string,
    results: Product[],
    status: 'idle' | 'loading' | 'succeeded' | 'failed',
    error: string | null
}

export interface Category {
    name: string,
}