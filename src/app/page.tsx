import { SearchFilter } from "@/components/SearchFilter";
import { RoadmapOverviewCard } from "@/components/RoadmapOverviewCard";
import { Banner } from "@/components/Banner";
import { TitleCard } from "@/components/TitleCard";
import { FeedbackList } from "@/components/FeedbackList";
import { getAllCategories } from "@/lib/getAllCategories";
import { getSortOptions } from "@/lib/getSortOptions";
import { getAllRoadmapOptions } from "@/lib/getAllRoadmapOptions";


export default async function Home({ searchParams }: { searchParams: { categories: string, sort: string, status: string } }) {
  const pageCategories = (searchParams.categories) ? searchParams.categories : "all";
  const pageSort = (searchParams.sort) ? searchParams.sort : "mostUpvotes";
  const pageStatus = (searchParams.status) ? searchParams.status : "all";

  const req = await fetch(`http://localhost:3000/api/feedback?categories=${pageCategories}&sort=${pageSort}&status=${pageStatus}`);
  const feedbackList = await req.json();

  const categoriesData: Promise<Option[]> = getAllCategories();
  const categories = await categoriesData;

  const optionsData: Promise<Option[]> = getSortOptions();
  const options = await optionsData;

  const roadmapOptionData: Promise<Option[]> = getAllRoadmapOptions();
  const roadmapOptions = await roadmapOptionData;

  const roadmapCount = {
    planned: feedbackList.filter((item: FeedbackPost) => item.status === "planned").length,
    inProgress: feedbackList.filter((item: FeedbackPost) => item.status === "inProgress").length,
    live: feedbackList.filter((item: FeedbackPost) => item.status === "live").length,
  }

  return (
    <main className="flex gap-8">
      <section className="w-1/4">
        <div className="flex flex-col gap-8">
          <TitleCard />
          <SearchFilter categories={categories} />
          <RoadmapOverviewCard roadmapCount={roadmapCount} roadmapOptions={roadmapOptions} />
        </div>
      </section>

      <section className="flex flex-col gap-8 w-3/4">
        <Banner feedbackNo={feedbackList.length} sortOptions={options}/>
        <FeedbackList feedbackList={feedbackList} />
      </section>
    </main>
  );
}
