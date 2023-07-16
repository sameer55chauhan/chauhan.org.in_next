import Image from "next/image";

export default function Navbar() {
    return (
      <div className="fixed z-50 top-2 lg:top-5 left-2 lg:left-5 flex items-center bg-gray-800 rounded-full">
        <div className=" relative h-10 w-10 lg:h-14 lg:w-14">
          <Image
            className=" w-full h-full relative object-cover rounded-full"
            fill
            src="/prithviraj_chauhan.webp"
            alt="Prithviraj Chauhan III"
          />
        </div>
        <div className=" text-md lg:text-2xl font-extrabold leading-tight tracking-wide text-white px-1 lg:px-3 mr-2">
          <div>Prithvi Raj Chauhan III</div>
        </div>
      </div>
    );
}