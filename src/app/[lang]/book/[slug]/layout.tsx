import { Locale } from "../../../../i18n-config";
import { getDictionary } from "../../../../get-dictionary";

export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { slug: string, lang: Locale };
}) {
  const dictionary = await getDictionary(params.lang);
  let current_book = dictionary.titles.find((title) => title.pdf === params.slug);

  return (
    <div className="">
      <h1 className="text-lg lg:text-xl text-center font-semibold lg:font-extrabold leading-none tracking-tight text-gray-900 dark:text-slate-200 p-2 lg:p-4">
        {dictionary.book.main}{" "}
        <span className="underline underline-offset-3 decoration-4 decoration-blue-400 dark:decoration-blue-600">
          {current_book?.title}
        </span>
      </h1>
      <div>{children}</div>
    </div>
  );
}
