import Title from "./title";
import { staticData } from "../utils/staticData";

export default function Titles() {
  const allTitlesComponents = staticData.map((title) => (
  <Title key={title.title} title={title.title} description={title.description} image={title.image} pdf={title.pdf} />
  ));

  return <div className="">{allTitlesComponents}</div>;
}
