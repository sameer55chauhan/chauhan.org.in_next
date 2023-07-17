import Image from "next/image";
import Link from "next/link";

export default function Title({ title, description, image, pdf }: {[key: string]: string}) {
  return (
    <Link href={`/book/${pdf}`}>
      <div className="my-3 lg:my-5 lg:h-48 flex flex-col items-center bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-xl lg:rounded-2xl lg:flex-row lg:max-w-xl hover:bg-gray-100 dark:hover:bg-gray-700">
        <div className="w-full h-full bg-gradient-to-r from-[#f12711] to-[#f5af19] dark:to-emerald-600 dark:from-sky-400 rounded-t-xl lg:rounded-tr-none lg:rounded-l-2xl">
          <div className="relative h-60 lg:h-full w-full rounded-t-xl lg:rounded-tr-none lg:rounded-l-2xl  bg-white/50 dark:bg-gray-600/50">
            <Image
              src={image}
              alt={title}
              fill
              objectFit="contain"
              className="w-full h-full relative dark:brightness-90"
            />
          </div>
        </div>
        <div className="flex flex-col justify-between p-3 lg:p-4 leading-normal">
          <h5 className="mb-1 lg:mb-2 text-xl lg:text-2xl font-bold tracking-tight text-gray-900 dark:text-slate-200">
            {title}
          </h5>
          <p className="mb-0 lg:mb-2 font-thin lg:font-normal text-gray-700 dark:text-slate-300 text-justify">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
}
