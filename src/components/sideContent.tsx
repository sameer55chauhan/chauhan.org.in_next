'use client';

import { useState } from "react";
import Books from "./books";
import clsx from "clsx";
import Articles from "./articles";

export default function SideContent() {
    const [selection, setSelection] = useState("books");

    return (
      <div
        className="flex flex-col justify-evenly items-center overflow-auto p-3"
        id="titles-div"
      >
        <div className="flex border border-gray-200 dark:border-gray-600 p-1 rounded-full mt-11">
          <button
            type="button"
            onClick={() => setSelection("books")}
            className={clsx(
              "rounded-l-full text-white font-medium text-sm px-5 py-2.5",
              selection
                ? "bg-blue-700 dark:bg-blue-600"
                : "bg-slate-700 dark:bg-slate-600"
            )}
          >
            Books
          </button>
          <button
            type="button"
            onClick={() => setSelection("")}
            className={clsx(
              "rounded-r-full text-white font-medium text-sm px-5 py-2.5",
              !selection
                ? "bg-blue-700 dark:bg-blue-600"
                : "bg-slate-700 dark:bg-slate-600"
            )}
          >
            Articles
          </button>
        </div>
        {selection ? <Books /> : <Articles />}
      </div>
    );
}