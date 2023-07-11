'use client';

import Viewer, { Worker } from "@phuocng/react-pdf-viewer";
import "@phuocng/react-pdf-viewer/cjs/react-pdf-viewer.css";


export default function PdfWorker({ pdf }: { pdf: string}) {
    return (
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.4.456/build/pdf.worker.min.js">
        <div className=" h-screen">
          <Viewer fileUrl={`/titles/${pdf}.pdf`} />
        </div>
      </Worker>
    );
}