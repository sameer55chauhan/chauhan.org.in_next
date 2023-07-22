import json from "@/dictionaries/en.json";
import PdfWorker from "@/components/pdfWorker";

export async function generateStaticParams() {
  return json.titles.map((title) => ({
    slug: title.pdf,
  }));
}

export default function Book({ params }: { params: { slug: string } }) {
  return (
    <div className="">
      <PdfWorker pdf={params.slug} />
    </div>
  );
}
