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