import Comment from '../entities/comments.entities';

export interface ICommentRequest {
  text: string;
}

export interface INewComment extends Comment {
  likesCount: number;
}

export interface IComment extends ICommentRequest {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  user: {
    id: string;
    username: string;
  };
  post: {
    id: string;
    description: string;
    img: string;
  };
}
