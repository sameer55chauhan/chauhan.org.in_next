import Image from "next/image";

export default function Navbar({ heading }: { heading: string }) {
    return (
      <div className="fixed z-50 top-2 lg:top-5 left-2 lg:left-5 flex items-center bg-slate-100 dark:bg-gray-800 rounded-full">
        <div className=" relative h-10 w-10 lg:h-14 lg:w-14">
          <Image
            className=" w-full h-full relative object-cover rounded-full"
            fill
            src="/prithviraj_chauhan.webp"
            alt="Prithviraj Chauhan III"
          />
        </div>
        <div className=" text-md lg:text-2xl font-extrabold leading-tight tracking-wide text-gray-800 dark:text-slate-200 px-1 lg:px-3 mr-2">
          <div>{heading}</div>
        </div>
      </div>
    );
}