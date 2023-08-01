import Link from "next/link";
import Image from "next/image";
import { SearchFilter } from "@/components/SearchFilter";
import Dropdown from "@/components/Dropdown";

export default function Home() {
  const options = [
    {value: 'MostUpvotes', label: "Most Upvotes"},
    {value: 'LeastUpvotes', label: "Least Upvotes"},
    {value: 'MostComments', label: "Most Comments"},
    {value: 'LeastComments', label: "Least Comments"},
  ]


  return (
    <main className="flex gap-8">
      <section className="flex flex-col gap-8 w-1/4">
        <div className="flex flex-col justify-end text-white p-5 h-32 rounded-md bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          <h2 className="font-semibold text-xl">Frontend Mentor</h2>
          <p className="text-base font-light">Feedback Board</p>
        </div>

        <SearchFilter />

        <div className="flex flex-col bg-white p-5 rounded-md">
          <div className="flex justify-between items-center w-full">
            <h2 className="font-semibold text-xl">Roadmap</h2>
            <Link
              href="/roadmap"
              className=" underline text-indigo-600 text-sm font-semibold"
            >
              View
            </Link>
          </div>
          <ul className="mt-4">
            <li className="mt-1">
              <div className="flex items-center gap-4">
                <span className="w-2 h-2 bg-orange-400 rounded-lg inline-block" />
                <p>Planned</p>
                <p className="font-extrabold text-l text-slate-500 ml-auto">2</p>
              </div>
            </li>
            <li className="mt-1">
              <div className="flex items-center gap-4">
                <span className="w-2 h-2 bg-purple-600 rounded-lg inline-block" />
                <p>In-Progress</p>
                <p className="font-extrabold text-l text-slate-500 ml-auto">2</p>
              </div>
            </li>
            <li className="mt-1">
              <div className="flex items-center gap-4">
                <span className="w-2 h-2 bg-teal-400 rounded-lg inline-block" />
                <p>Live</p>
                <p className="font-extrabold text-l text-slate-500 ml-auto">2</p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section className="flex flex-col gap-8 w-3/4">
        <div className="flex justify-between items-center p-3 bg-slate-700 rounded-md">
          <div className="flex items-center">
            <Image
              src="/icon-suggestions.svg"
              alt="Frontend Mentor Logo"
              width={28}
              height={24}
            />
            <p className="ml-3 font-semibold text-xl text-white">6 Suggestions</p>
            <Dropdown options={options} style='dark'>
              Sort by: 
            </Dropdown>
          </div>
          <Link
            href="/feedback/add"
            className="py-2 px-4 bg-purple-600 hover:bg-purple-500 hover:scale-105 rounded-md text-white font-semibold text-sm transition duration-300"
          >
            + Add Feedback
          </Link>
        </div>

        <div>
          <h2>List of Feedback</h2>
        </div>
      </section>
    </main>
  );
}
