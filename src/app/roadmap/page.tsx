import Link from "next/link";
import { FiChevronLeft } from "react-icons/fi";

export default function Roadmap() {
  return (
    <div>
      <section className="flex flex-col">
        <div className="flex justify-between items-center py-5 px-7 bg-slate-700 rounded-md">
          <div className="flex flex-col text-white">
            <Link href="/" className="text-base font-semibold flex items-center">
              <FiChevronLeft className="mr-2" />
              Go Back
            </Link>
            <h1 className="text-xl font-semibold mt-2">Roadmap</h1>
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
    </div>
  )
}
