import { FeedbackCard } from "./FeedbackCard";

interface Props {
  feedbackList: FeedbackPost[];
}

export const FeedbackList = async ({ feedbackList }: Props) => {
  return (
    <section className="flex flex-col gap-6">
      {feedbackList.map((feedback) => (
        <FeedbackCard key={feedback.id} feedback={feedback} />
      ))}
    </section>
  );
};
