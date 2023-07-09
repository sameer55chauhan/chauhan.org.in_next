import Image from "next/image";

export default function Navbar() {
    return (
      <div className="fixed z-10 top-5 left-5 flex items-center space-x-4">
        <Image
          className="rounded-full"
          width={60}
          height={60}
          src="/prithviraj_chauhan.webp"
          alt="Prithviraj Chauhan"
        />
        <div className=" text-2xl font-extrabold leading-tight tracking-wide text-white">
          <div>Prithvi Raj Chauhan</div>
        </div>
      </div>
    );
}