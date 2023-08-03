import { FeedbackCard } from "./FeedbackCard";

interface Props {
  feedbackList: FeedbackPost[];
}

export const FeedbackList = async ({ feedbackList }: Props) => {
  return (
    <section className="px-6 md:px-0 flex flex-col gap-6">
      {feedbackList.map((feedback) => (
        <FeedbackCard key={feedback.id} feedback={feedback} />
      ))}
    </section>
  );
};
