import { RenderBlocks } from "@/components/contentBlocks";
import { getData } from "@/lib/getNotionData";

export default async function ArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  const { page, blocks }: { page: any; blocks: any } = await getData(
    params.slug
  );

  if (!page || !blocks) {
    return <div />;
  }

  return (
    <article className="mx-auto m-16 lg:mt-24 mb-16 flex w-full max-w-2xl flex-col items-start justify-center">
      <span className="text-sm text-gray-700 dark:text-slate-200">
        {new Date(page.created_time).toLocaleString("en-US", {
          month: "short",
          day: "2-digit",
          year: "numeric",
        })}
      </span>
      <h1 className="mb-5 text-3xl font-bold tracking-tight text-black dark:text-slate-100 md:text-5xl">
        {page.properties.Post.title[0].plain_text}
      </h1>
      <RenderBlocks blocks={blocks} />
    </article>
  );
}
