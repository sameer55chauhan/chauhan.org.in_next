import Image from "next/image";

export default function Title() {
  //   const { title } = params;
  return (
    <div className=" my-5 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100">
      <Image
        className=" rounded-s-lg"
        src="/titles/title1.jpg"
        alt="Title 1"
        height={120}
        width={120}
      />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
          Prithviraj Raso Volume 1
        </h5>
        <p className="mb-2 font-normal text-gray-700">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
      </div>
    </div>
  );
}
