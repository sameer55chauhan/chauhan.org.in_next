import Image from "next/image";
import Titles from "@/components/titles";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Chat } from "@/components/Chat";
import ThemeButton from "@/components/ThemeButton";
import { Locale } from "../../i18n-config";
import { getDictionary } from "../../get-dictionary";

export default async function Home({ params: { lang } }: { params: { lang: Locale } }) {
  const dictionary = await getDictionary(lang);
  
  return (
    <div>
      <Navbar heading={dictionary.home.navbar} />
      <main className=" w-full h-full flex flex-col lg:grid lg:grid-cols-2 lg:divide-x">
        <ThemeButton lang={lang} />
        <div className="flex justify-center items-center lg:sticky lg:top-0 h-screen w-full overflow-auto bg-black text-white">
          <div className="relative w-full h-screen">
            <Image
              className="w-full h-full relative object-cover dark:brightness-50"
              src="/background-new.png"
              alt={dictionary["home"]["background-new-alt"]}
              fill
            />
          </div>
          <div className="flex flex-col justify-center items-center absolute bottom-0 w-full">
            <div className="w-[95%] z-40">
            <Chat dictionary={dictionary.chat} />
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
                <span className="sr-only">
                  {dictionary["home"]["scroll-down"]}
                </span>
              </a>
            </div>
          </div>
        </div>
        <div
          className="flex flex-col justify-evenly items-center overflow-auto p-3"
          id="titles-div"
        >
          <h1 className="my-16 lg:my-32 text-center text-3xl lg:text-6xl font-extrabold leading-tight tracking-normal text-gray-900 dark:text-slate-300 p-8 ">
            {dictionary.home.heading[0]}&nbsp;
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f12711] to-[#f5af19] dark:to-emerald-600 dark:from-sky-400">
              {dictionary.home.heading[1]}
            </span>
            &nbsp;{dictionary.home.heading[2]}&nbsp;
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f12711] to-[#f5af19] dark:to-emerald-600 dark:from-sky-400">
              {dictionary.home.heading[3]}
            </span>
          </h1>
          <Titles lang={lang} />
        </div>
      </main>
      <hr />
      <Footer data={dictionary.footer} />
    </div>
  );
}