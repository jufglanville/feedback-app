import { SearchFilter } from "@/components/SearchFilter";
import { RoadmapOverviewCard } from "@/components/RoadmapOverviewCard";
import { Banner } from "@/components/Banner";
import { TitleCard } from "@/components/TitleCard";
import { FeedbackList } from "@/components/FeedbackList";
import { getAllCategories } from "@/lib/getAllCategories";
import { getSortOptions } from "@/lib/getSortOptions";
import { getAllRoadmapOptions } from "@/lib/getAllRoadmapOptions";

export default async function Home({
  searchParams,
}: {
  searchParams: { categories: string; sort: string; status: string };
}) {
  const pageCategories = searchParams.categories
    ? searchParams.categories
    : "all";
  const pageSort = searchParams.sort ? searchParams.sort : "mostUpvotes";
  const pageStatus = searchParams.status ? searchParams.status : "all";

  const req = await fetch(
    `http://localhost:3000/api/feedback?categories=${pageCategories}&sort=${pageSort}&status=${pageStatus}`
  );
  const { filteredFeedback, roadmapCount } = await req.json();

  const categoriesData: Promise<Option[]> = getAllCategories();
  const categories = await categoriesData;

  const optionsData: Promise<Option[]> = getSortOptions();
  const options = await optionsData;

  const roadmapOptionData: Promise<Option[]> = getAllRoadmapOptions();
  const roadmapOptions = await roadmapOptionData;

  return (
    <main className="flex flex-col lg:flex-row lg:gap-8">
      <section className="lg:w-1/4">
        <TitleCard />
        <div className="translate-x-full absolute right-0 md:translate-x-0 md:relative flex flex-col md:flex-row lg:flex-col gap-8 mt-8">
          <SearchFilter categories={categories} />
          <RoadmapOverviewCard
            roadmapCount={roadmapCount}
            roadmapOptions={roadmapOptions}
          />
        </div>
      </section>

      <section className="flex flex-col gap-8 lg:w-3/4">
        <Banner feedbackNo={filteredFeedback.length} sortOptions={options} />
        <FeedbackList feedbackList={filteredFeedback} />
      </section>
    </main>
  );
}
