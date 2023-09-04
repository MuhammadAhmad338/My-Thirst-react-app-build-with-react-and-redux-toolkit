export interface WishlistProduct {
    id: number,
    title: string,
    description: string,
    image: string,
    price: number,
    quantity: number
}

export interface WishlistState {
    items: WishlistProduct[]
}