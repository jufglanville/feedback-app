type Option = {
  id: string;
  label: string;
  color?: string;
}

type User = {
  image: string;
  name: string;
  username: string;
}

type Comment = {
  id: string;
  content: string;
  user: User;
}

type FeedbackPost = {
  id: number;
  title: string;
  category: string;
  upvotes: number;
  upvoted: boolean;
  status: string;
  description: string;
  comments: Comment[];
}