type Option = {
  id: string;
  label: string;
  color?: string;
}

type User = {
  id: number;
  image: string;
  name: string;
  username: string;
  upvoted: number[];
}

type Reply = {
  content: string;
  replyingTo: string;
  user: User;
}

type FeedbackComment = {
  id: string;
  content: string;
  user: User;
  replies: Reply[];
}

type CommentCard = {
  id?: string;
  content: string;
  user: User;
  replyingTo?: string;
}

type FeedbackPost = {
  id: number;
  title: string;
  category: string;
  upvotes: number;
  upvoted: boolean;
  status: string;
  description: string;
  comments: FeedbackComment[];
}