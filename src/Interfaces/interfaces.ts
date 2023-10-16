
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

export interface ReviewState {
    data: Reviews[];
    status: "idle" | "loading" | "succeeded" | "failed";
    error: string | null;
}

export interface Reviews {
    reviewid: number;
    productid: number;
    email: string;
    name: string;
    reviewtitle: string;
    rating: number;
    content: string;
    created_at: Date;
}


export interface PostReview {
    productid: number,
    email: string,
    name: string,
    rating: number,
    reviewtitle: string,
    content: string
}

export interface SearchState {
    query: string,
    results: Product[],
    status: 'idle' | 'loading' | 'succeeded' | 'failed',
    error: string | null
}

export interface SearchToggleInterface {
    searchTheToggle: boolean
}

export interface Toggle {
    toggle: boolean
}

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

export interface TypeAge {
    type: string,
    age: number
}
export interface IncrementAge {
    age: number
}

export interface Comment {
    commentid: number;
    product_id: number;
    content: string;
    created_at: Date;
}

export interface PostComment {
    product_id: number;
    content: string;
}

export interface CommentState {
    data: Comment[]| [],
    status: 'idle' | 'loading' | 'succeeded' | 'failed',
    error: string | null
}
export interface ChangeName {
    name: string,
    age: number
}

export interface IncrementedAgeAction {
    type: 'increment_age';
}

export interface ChangedNameAction {
    type: 'change_name';
    nextName: string;
}

export interface CategoryInterface {
    query: string,
    results: Product[],
    status: 'idle' | 'loading' | 'succeeded' | 'failed',
    error: string | null
}

export interface Category {
    name: string,
}

export interface About {
    name: string
}

export interface CartProduct {
    id: number,
    title: string,
    description: string,
    image: string,
    price: number,
    quantity: number
}

export interface CartState {
    items: CartProduct[] ,
    subtotal: number
}

export interface User {
    id: number,
    firstName: string,
    lastName: string,
    email: string
}

export interface SignUpState {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
}

export interface SignInState {
    email: string,
    password: string
}

export interface AccountApiState {
    user: User | null,
    status: 'idle' | 'loading' | 'failed' | 'succeeded',
    error: string | null
}