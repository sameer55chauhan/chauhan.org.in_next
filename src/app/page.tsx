import Image from "next/image";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Chat } from "@/components/Chat";
import ThemeButton from "@/components/ThemeButton";
import Link from "next/link";
import Books from "@/components/books";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className=" w-full h-full flex flex-col lg:grid lg:grid-cols-2 lg:divide-x">
        <ThemeButton />
        <div className="flex justify-center items-center lg:sticky lg:top-0 h-screen w-full overflow-auto bg-black text-white">
          <div className="relative w-full h-screen">
            <Image
              className="w-full h-full relative object-cover dark:brightness-50"
              src="/background-new.png"
              alt="Prithviraj Chauhan Background"
              fill
              priority
            />
          </div>
          <div className="flex flex-col justify-center items-center absolute bottom-0 w-full">
            <div className="w-[95%] z-40">
              <Chat />
            </div>
            <div className="lg:hidden">
              <a
                href="#titles-div"
                className="text-white bg-gradient-to-r from-[#f12711] to-[#f5af19] dark:to-emerald-600 dark:from-sky-400 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mb-2 "
              >
                <svg
                  className="w-4 h-4 rotate-90"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
                <span className="sr-only">Scroll Down</span>
              </a>
            </div>
          </div>
        </div>
        <div
          className="flex flex-col justify-evenly items-center overflow-auto p-3"
          id="titles-div"
        >
          <div className="flex border border-gray-200 dark:border-gray-600 p-1 rounded-full mt-11">
            <Link
              href="/"
              className="rounded-l-full font-medium text-sm px-5 py-2.5 text-white bg-blue-700 dark:bg-blue-600"
            >
              Books
            </Link>
            <Link
              href="/articles"
              className="rounded-r-full font-medium text-sm px-5 py-2.5 text-black dark:text-white bg-slate-100 dark:bg-slate-600"
            >
              Articles
            </Link>
          </div>
          <Books />
        </div>
      </main>
      <hr />
      <Footer />
    </div>
  );
}
