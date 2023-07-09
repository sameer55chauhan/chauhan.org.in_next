import Title from "./title";

export default function Titles() {
  const allTitles = ["Title 1", "Title 2", "Title 3", "Title 4", "Title 5"];
  const allTitlesComponents = allTitles.map((title) => <Title key={title} />);

  return <div className="">{allTitlesComponents}</div>;
}
