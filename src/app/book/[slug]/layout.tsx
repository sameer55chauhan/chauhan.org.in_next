import { staticData } from "@/utils/staticData"
import { Metadata } from "next";
import Balancer from "react-wrap-balancer";

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
  params,
}: {
  children: React.ReactNode;
  params: { slug: string };
}) {
  let current_book = staticData.find((title) => title.pdf === params.slug);
  return (
    <div className="text-center">
      <h1 className="text-lg lg:text-xl font-semibold lg:font-extrabold leading-none tracking-tight text-gray-900 dark:text-slate-200 p-2 lg:p-4">
        <Balancer>
          You are reading{" "}
          <span className="underline underline-offset-3 decoration-4 decoration-blue-400 dark:decoration-blue-600">
            {current_book?.title}
          </span>
        </Balancer>
      </h1>
      <div>{children}</div>
    </div>
  );
}
