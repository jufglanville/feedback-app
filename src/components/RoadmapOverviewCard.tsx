import Link from "next/link";
import { getAllRoadmapOptions } from "@/lib/getAllRoadmapOptions";

interface Props {
  roadmapCount: { [key: string]: number };
}

export const RoadmapOverviewCard = async ({ roadmapCount }: Props) => {
  const roadmapOptionData: Promise<Option[]> = getAllRoadmapOptions();

  const roadmapOptions = await roadmapOptionData;

  return (
    <div className="flex flex-col bg-white p-5 rounded-md">
      <div className="flex justify-between items-center w-full">
        <h2 className="font-semibold text-lg">Roadmap</h2>
        <Link
          href="/roadmap"
          className="underline text-indigo-600 text-sm font-semibold"
        >
          View
        </Link>
      </div>

      <ul className="mt-4">
        {roadmapOptions.map((roadmapOption) => {
          return (
            <li key={roadmapOption.id} className="mt-1">
              <div className="flex items-center gap-4">
                <span
                  className="w-2 h-2 rounded-lg inline-block"
                  style={{ background: roadmapOption.color }}
                />
                <p className="text-sm text-slate-500 font-medium">
                  {roadmapOption.label}
                </p>
                <p className="font-bold text-base text-slate-500 ml-auto">
                  {(roadmapCount[roadmapOption.id]) ? roadmapCount[roadmapOption.id] : 0 }
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
