import Title from "./title";
import { Locale } from "../i18n-config";
import { getDictionary } from "../get-dictionary";

export default async function Titles({ lang }: { lang: Locale}) {
  const dictionary = await getDictionary(lang);
  
  const allTitlesComponents = dictionary.titles.map((title) => (
  <Title key={title.title} title={title.title} description={title.description} image={title.image} pdf={title.pdf} />
  ));

  return <div className="">{allTitlesComponents}</div>;
}
