export interface User {
  id: number;
  name: string;
}
export interface Post {
  id: number;
  author: User;
  body: string;
  timestamp: number;
  comments: Comment[];
}

export interface Comment {
  id: number;
  author: User;
  body: string;
  timestamp: number;
}

export interface CreatePostRequest {}

export interface CreatePostResponse {}

export interface IRpc {
  createPost: (req: CreatePostRequest) => CreatePostResponse;
}
