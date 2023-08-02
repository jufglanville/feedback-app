
import { ImBubble } from "react-icons/im";
import { Pill } from "./Pill";
import UpvoteButton from "./UpvoteButton";

interface Props {
  feedback: FeedbackPost;
}

export const FeedbackCard = ({ feedback }: Props) => {
  return (
    <div className="flex bg-white p-8 rounded-md items-start gap-8">
      <UpvoteButton selected={feedback.upvoted} quantity={feedback.upvotes} />
      <div className="flex flex-col gap-3 items-start">
        <h2 className="font-semibold text-lg">{feedback.title}</h2>
        <p className="text-sm text-slate-500 font-regular mb-2">{feedback.description}</p>
        <Pill>{feedback.category}</Pill>
      </div>
      <div className="self-center ml-auto flex gap-2 items-center">
        <ImBubble className="text-slate-300" />
        <p className="font-bold text-base">{feedback.comments.length}</p>
      </div>
    </div>
  );
};
