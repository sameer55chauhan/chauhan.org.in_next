import Image from "next/image";

export default function Title({ title, description, image }: {[key: string]: string}) {
  return (
    <div className=" my-5 h-48 flex flex-col items-center bg-white border border-gray-200 rounded-2xl  md:flex-row md:max-w-xl hover:bg-gray-100">
      <div className=" w-full h-full bg-gradient-to-r from-[#f12711] to-[#f5af19] rounded-s-2xl">
        <div className=" relative w-full h-full rounded-s-2xl bg-white/50">
          <Image
            src={image}
            alt={title}
            fill
            objectFit="contain"
          />
        </div>
      </div>
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
          {title}
        </h5>
        <p className="mb-2 font-normal text-gray-700">
          {description}
        </p>
      </div>
    </div>
  );
}
