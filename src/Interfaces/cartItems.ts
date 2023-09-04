export interface CartProduct {
    id: number,
    title: string,
    description: string,
    image: string,
    price: number,
    quantity: number
}

export interface CartState {
    items: CartProduct[]
}