import { staticData } from "@/utils/staticData"

export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { slug: string };
}) {
  let current_book = staticData.find((title) => title.pdf === params.slug);
  return (
    <div className="">
      <h1 className="text-lg lg:text-xl text-center font-semibold lg:font-extrabold leading-none tracking-tight text-gray-900 p-2 lg:p-4">
        You are reading{" "}
        <span className="underline underline-offset-3 decoration-4 decoration-blue-400 dark:decoration-blue-600">
          {current_book?.title}
        </span>
      </h1>
      <div>{children}</div>
    </div>
  );
}
