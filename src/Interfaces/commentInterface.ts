export interface Comment {
    commentid: number;
    product_id: number;
    content: string;
    created_at: Date;
  }
  
export interface CommentState {
    data: Comment[],
    status: 'idle' | 'loading' | 'succeeded' | 'failed',
    error: string | null
}