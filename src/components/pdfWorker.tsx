'use client';

import Viewer, { Worker } from "@phuocng/react-pdf-viewer";
import "@phuocng/react-pdf-viewer/cjs/react-pdf-viewer.css";


export default function PdfWorker({ pdf }: { pdf: string}) {
    return (
      <div className="h-[750px] w-[650px] lg:w-full overflow-auto">
        {/* @ts-ignore */}
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.4.456/build/pdf.worker.min.js">
          <div className="">
            <Viewer fileUrl={`/titles/${pdf}.pdf`} />
          </div>
        </Worker>
      </div>
    );
}