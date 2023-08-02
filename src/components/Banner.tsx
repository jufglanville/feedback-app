import Image from "next/image";
import Link from "next/link";
import Dropdown from "./Dropdown";
import { getSortOptions } from "@/lib/getSortOptions";

interface Props {
  feedbackNo: number;
}

export const Banner = async ({ feedbackNo = 0 }: Props) => {
  const optionsData: Promise<Option[]> = getSortOptions();
  const options = await optionsData;

  return (
    <div className="flex justify-between items-center p-3 bg-slate-700 rounded-md">
      <div className="flex gap-4 items-center">
        <Image
          src="/icon-suggestions.svg"
          alt="Frontend Mentor Logo"
          width={28}
          height={24}
        />
        <p className="font-semibold text-xl text-white mr-4">{feedbackNo} Suggestions</p>
        <Dropdown
          options={options}
          style="dark"
          chevron={true}
          weight="font-bold"
          size="text-sm"
        >
          <span className="mr-1 text-sm">Sort by:</span>
        </Dropdown>
      </div>
      <Link
        href="/feedback/add"
        className="py-3 px-5 bg-purple-600 hover:bg-purple-500 hover:scale-105 rounded-md text-white font-semibold text-sm transition duration-300"
      >
        + Add Feedback
      </Link>
    </div>
  );
};
