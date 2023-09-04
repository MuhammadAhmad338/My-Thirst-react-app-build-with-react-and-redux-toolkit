export interface Product {
     id: number,
     title: string,
     price: number,
     description: string,
     category: string,
     image: string,
     rating: Rating
}

export interface Rating {
    rate: number,
    count: number
}

export interface ApiState {
    data: Product[],
    status: 'idle' | 'loading' | 'succeeded' | 'failed',
    error: string | null
}

