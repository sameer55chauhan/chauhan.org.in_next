import { RenderBlocks } from "@/components/contentBlocks";
import { getNotionData, getPage, getBlocks } from "@/lib/getNotionData";

const getData = async (slug: string) => {
  const database = await getNotionData(process.env.NOTION_DATABASE_ID);
  const filter = database.filter(
    (blog) => blog.properties.Slug.rich_text[0].plain_text === slug
  );
  const page = await getPage(filter[0].id);
  const blocks = await getBlocks(filter[0].id);

  const childrenBlocks = await Promise.all(
    blocks
      .filter((block) => block.has_children)
      .map(async (block) => {
        return {
          id: block.id,
          children: await getBlocks(block.id),
        };
      })
  );

  const blocksWithChildren = blocks.map((block) => {
    if (block.has_children) {
      block[block.type].children = childrenBlocks.find(
        (x) => x.id === block.id
      ).children;
    }
    return block;
  });

  return {
    page,
    blocks: blocksWithChildren,
  };
};

export default async function ArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  const { page, blocks } = await getData(params.slug);

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
