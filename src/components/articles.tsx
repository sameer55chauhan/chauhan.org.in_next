import Balancer from "react-wrap-balancer";
import { getNotionData } from "@/lib/getNotionData";
import Link from "next/link";
import Image from "next/image";

export default async function Articles() {
  const posts: any = await getNotionData();

  return (
    <div>
      <h1 className="my-16 lg:my-32 text-center text-3xl lg:text-6xl font-extrabold leading-tight tracking-normal text-gray-900 dark:text-slate-300 p-8 ">
        <Balancer>
          Select any&nbsp;
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f12711] to-[#f5af19] dark:to-emerald-600 dark:from-sky-400">
            Article
          </span>
          &nbsp;and start&nbsp;
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f12711] to-[#f5af19] dark:to-emerald-600 dark:from-sky-400">
            Reading
          </span>
        </Balancer>
      </h1>
      {!posts.length && (
        <p className="mb-4 text-gray-600">No Articles available.</p>
      )}

      {posts.map((post: any) => {
        const postImage = post.properties["Cover Image"].files[0];
        const postImageUrl =
          postImage.type === "external"
            ? postImage.external.url
            : postImage.file.url;

        return (
          <Link
            key={post.id}
            href={`/article/${post.properties.Slug.rich_text[0].plain_text}`}
          >
            <div className="my-3 lg:my-5 lg:h-60 flex flex-col items-center bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-xl lg:rounded-2xl lg:flex-row lg:max-w-xl hover:bg-gray-100 dark:hover:bg-gray-700">
              {postImageUrl ? (
                <div className="w-full h-full bg-gradient-to-r from-[#f12711] to-[#f5af19] dark:to-emerald-600 dark:from-sky-400 rounded-t-xl lg:rounded-tr-none lg:rounded-l-2xl">
                  <div className="relative h-60 lg:h-full w-full rounded-t-xl lg:rounded-tr-none lg:rounded-l-2xl  bg-white/50 dark:bg-gray-600/50">
                    <Image
                      src={postImageUrl}
                      alt={""}
                      fill
                      objectFit="contain"
                      className="w-full h-full relative dark:brightness-90"
                    />
                  </div>
                </div>
              ) : (
                <></>
              )}
              <div className="flex flex-col justify-between p-3 lg:p-4 leading-normal">
                <h5 className="mb-1 lg:mb-2 text-xl lg:text-2xl font-bold tracking-tight text-gray-900 dark:text-slate-200">
                  {post.properties.Post.title[0].plain_text}
                </h5>
                <p className="mb-0 lg:mb-2 font-thin lg:font-normal text-gray-700 dark:text-slate-300 text-justify">
                  {post.properties.Description.rich_text[0].plain_text}
                </p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
