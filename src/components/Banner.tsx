"use client";

import Image from "next/image";
import Link from "next/link";
import Dropdown from "./Dropdown";
import { useRouter, useSearchParams } from "next/navigation";

interface Props {
  sortOptions: Option[];
  feedbackNo: number;
}

export const Banner = ({ sortOptions, feedbackNo = 0 }: Props) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const handleSelection = (id: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("sort", id);
    router.push(`?${params.toString()}`);
  };

  return (
    <div className="flex justify-between items-center px-5 py-3 md:p-3 bg-slate-700 md:rounded-md">
      <div className="flex gap-4 items-center">
        <Image
          className="hidden md:block"
          src="/icon-suggestions.svg"
          alt="Frontend Mentor Logo"
          width={28}
          height={24}
        />
        <p className="hidden xs:block font-semibold text-sm md:text-xl text-white mr-1 md:mr-4">
          {feedbackNo} Suggestions
        </p>
        <Dropdown
          options={sortOptions}
          style="dark"
          chevron={true}
          weight="font-bold"
          size="text-sm"
          onSelect={(id) => {
            handleSelection(id);
          }}
        >
          <span className="mr-1 text-sm">Sort by:</span>
        </Dropdown>
      </div>
      <Link
        href="/feedback/add"
        className="py-3 px-3 md:px-5 bg-purple-600 hover:bg-purple-500 hover:scale-105 rounded-md text-white font-semibold text-xs md:text-sm transition duration-300"
      >
        + Add Feedback
      </Link>
    </div>
  );
};
