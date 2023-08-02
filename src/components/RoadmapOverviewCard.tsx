"use client";

import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";

interface Props {
  roadmapCount: { [key: string]: number };
  roadmapOptions: Option[];
}

export const RoadmapOverviewCard = ({
  roadmapCount,
  roadmapOptions,
}: Props) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const filter = searchParams.get("status");
  const selectedStatus = filter || "all";

  const handleSelect = (id: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("status", id);
    router.push(`?${params.toString()}`);
  };

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
                <p
                  onClick={() =>
                    handleSelect(
                      `${
                        roadmapOption.id === selectedStatus
                          ? "all"
                          : roadmapOption.id
                      }`
                    )
                  }
                  className={`text-sm text-slate-500 font-medium cursor-pointer ${
                    roadmapOption.id === selectedStatus ? "underline" : ""
                  }`}
                >
                  {roadmapOption.label}
                </p>
                <p className="font-bold text-base text-slate-500 ml-auto">
                  {roadmapCount[roadmapOption.id]
                    ? roadmapCount[roadmapOption.id]
                    : 0}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
