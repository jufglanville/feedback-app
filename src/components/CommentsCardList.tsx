import { CommentsCard } from "./CommentsCard";

interface Props {
  comments: FeedbackComment[];
}

export const CommentsCardList = ({ comments }: Props) => {
  return (
    <ul>
      {comments.map((comment) => (
        <li
          className="border-solid border-0 border-b border-slate-100 pb-8"
          key={comment.id}
        >
          <div className="relative">
            <CommentsCard comment={comment} />

            {comment.replies && comment.replies.length > 0 && (
              <>
                <div className="absolute w-1 h-full top-0 left-6 border-solid border-0 border-l border-slate-100" />
                <ul className="ml-6 pl-6">
                  {comment.replies.map((reply, idx) => (
                    <li key={idx}>
                      <CommentsCard comment={reply} />
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
};
