export interface ReviewState {
  data: Reviews[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

export interface Reviews {
  id: number;
  productid: number;
  email: string;
  name: string;
  reviewtitle: string;
  rating: number;
  content: string;
  created_at: Date;
}
