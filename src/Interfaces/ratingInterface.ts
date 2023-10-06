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