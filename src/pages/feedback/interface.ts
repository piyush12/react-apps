export interface CurrentUser {
  image: string;
  name: string;
  username: string;
}

export interface User {
  image: string;
  name: string;
  username: string;
}

export interface User2 {
  image: string;
  name: string;
  username: string;
}

export interface Reply {
  content: string;
  replyingTo: string;
  user: User2;
  id:number;
  replies?:Reply[]
}

export interface Comment {
  id: number;
  content: string;
  user: User;
  replies?: Reply[];
}

export interface ProductRequest {
  id: number;
  title: string;
  category: string;
  upvotes: number;
  status: string;
  description: string;
  comments?: Comment[];
}

export interface ProductDataRoot {
  currentUser: CurrentUser;
  productRequests: ProductRequest[];
}
