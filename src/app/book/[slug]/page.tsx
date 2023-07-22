import { staticData } from "@/utils/staticData";
import PdfWorker from "@/components/pdfWorker";

export async function generateStaticParams() {
  return staticData.map((title) => ({
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
