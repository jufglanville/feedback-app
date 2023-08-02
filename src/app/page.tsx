import { SearchFilter } from "@/components/SearchFilter";
import { RoadmapOverviewCard } from "@/components/RoadmapOverviewCard";
import { Banner } from "@/components/Banner";
import { TitleCard } from "@/components/TitleCard";
import { FeedbackList } from "@/components/FeedbackList";
import { getAllCategories } from "@/lib/getAllCategories";

export default async function Home() {
  const req = await fetch("http://localhost:3000/api/feedback");
  const feedbackList = await req.json();

  const categoriesData: Promise<Option[]> = getAllCategories();
  const categories = await categoriesData;

  const roadmapCount = {
    planned: feedbackList.filter((item: FeedbackPost) => item.status === "planned").length,
    inProgress: feedbackList.filter((item: FeedbackPost) => item.status === "in-progress").length,
    live: feedbackList.filter((item: FeedbackPost) => item.status === "live").length,
  }

  return (
    <main className="flex gap-8">
      <section className="w-1/4">
        <div className="flex flex-col gap-8">
          <TitleCard />
          <SearchFilter categories={categories} />
          <RoadmapOverviewCard roadmapCount={roadmapCount} />
        </div>
      </section>

      <section className="flex flex-col gap-8 w-3/4">
        <Banner feedbackNo={feedbackList.length} />
        <FeedbackList feedbackList={feedbackList} />
      </section>
    </main>
  );
}
