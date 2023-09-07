import { Product } from "./Product";

export interface SearchState {
    query: string,
    results: Product[],
    status: 'idle' | 'loading' | 'succeeded' | 'failed',
    error: string | null

}