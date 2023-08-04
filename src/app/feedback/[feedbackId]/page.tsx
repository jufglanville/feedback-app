import Link from "next/link";
import { FiChevronLeft } from "react-icons/fi";
import { FeedbackCard } from "@/components/FeedbackCard";
import { CommentsCardList } from "@/components/CommentsCardList";

type Params = {
  params: {
    feedbackId: string;
  };
};

const page = async ({ params: { feedbackId } }: Params) => {
  const req = await fetch(`http://localhost:3000/api/feedback/${feedbackId}`);
  const feedbackPost: FeedbackPost = await req.json();

  const noOfComments =
    feedbackPost.comments.length === 1
      ? "1 Comment"
      : `${feedbackPost.comments.length} Comments`;

  return (
    <div>
      <section className="flex flex-col">
        <div className="flex justify-between items-center py-5">
          <Link
            href="/"
            className="text-base font-semibold flex items-center text-slate-500 hover:underline"
          >
            <FiChevronLeft className="mr-2" />
            Go Back
          </Link>
          <Link
            href="/feedback/add"
            className="py-2 px-4 bg-blue-700 hover:bg-blue-600 hover:scale-105 rounded-md text-white font-semibold text-sm transition duration-300"
          >
            Edit Feedback
          </Link>
        </div>

        <FeedbackCard feedback={feedbackPost} />

        <div className="bg-white mt-8 p-8 rounded-md items-start gap-8">
          <h2 className="font-semibold text-lg">{noOfComments}</h2>
          <CommentsCardList comments={feedbackPost.comments} />
        </div>

        <div className="bg-white mt-8 p-8 rounded-md items-start gap-8">
          <h2 className="font-semibold text-lg mb-4">Add Comment</h2>
          <form className="items-start">
            <textarea
              className="w-full bg-slate-100 rounded-md p-5 text-sm text-slate-500 font-regular"
              placeholder="Type your comment here"
            />
            <div className="flex justify-between items-center mt-4">
              <p>255 Characters Left</p>
              <button className="py-2 px-4 bg-purple-600 hover:bg-purple-500 hover:scale-105 rounded-md text-white font-semibold text-sm transition duration-300">
                Post&nbsp;Comment
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default page;
