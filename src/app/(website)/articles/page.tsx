import Link from "next/link";
import Articles from "@/components/articles";

export default function Home() {
  return (
    <div
      className="flex flex-col justify-evenly items-center overflow-auto p-3"
      id="titles-div"
    >
      <div className="flex border border-gray-200 dark:border-gray-600 p-1 rounded-full mt-11">
        <Link
          href="/books"
          className="rounded-l-full font-medium text-sm px-5 py-2.5 text-black dark:text-white bg-slate-100 dark:bg-slate-600"
        >
          Books
        </Link>
        <Link
          href="/articles"
          className="rounded-r-full font-medium text-sm px-5 py-2.5 text-white bg-blue-700 dark:bg-blue-600"
        >
          Articles
        </Link>
      </div>
      <Articles />
    </div>
  );
}
