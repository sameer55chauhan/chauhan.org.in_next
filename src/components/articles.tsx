import Balancer from "react-wrap-balancer";
import ArticlesList from "./articlesList";

export default function Articles() {
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
        <ArticlesList />
      </div>
    );
}