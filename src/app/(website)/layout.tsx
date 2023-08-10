import { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Chat } from "@/components/Chat";
import ThemeButton from "@/components/ThemeButton";

export const metadata: Metadata = {
  title: "Prithvi Raj Chauhan III - Biography, AI bot, and articles",
  description:
    "Prithviraj Chauhan | TitlesExplore the life and achievements of Prithvi Raj Chauhan III, the legendary ruler. Read his detailed biography and engage in interactive conversations with the Prithvi Raj Chauhan AI Bot using ChatGPT integration. Discover a collection of informative articles about his reign and historical significance. Can read in multiple languages.",
  keywords:
    "prithvi raj chauhan ai bot, raso, raso hindi, raso english, biography prithviraj,  prithviraj raso, author prithviraj bhatt, is prithviraj chauhan real, about prithviraj raso,  samrat prithviraj, was blind vijay pratap singh, google scholar prithviraj raso written by prithviraj 3, information",
  robots: "index, follow",
};

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
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
        {children}
      </main>
      <hr />
      <Footer />
    </div>
  );
}
