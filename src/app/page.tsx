import Image from "next/image";
import Titles from "@/components/titles";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Chat } from "@/components/Chat";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className=" w-full h-full grid grid-cols-2 divide-x">
        <div className=" sticky top-0 flex justify-center items-center h-screen overflow-auto bg-black text-white">
          <div className=" w-[95%] z-40 absolute bottom-0">
            <Chat />
          </div>
          <Image
            className=" object-cover"
            src="/background-new.png"
            alt="Prithviraj Chauhan Background"
            fill
          />
        </div>
        <div className=" flex flex-col justify-evenly items-center overflow-auto">
          <h1 className=" my-32 text-center text-6xl font-extrabold leading-tight tracking-normal text-gray-900 md:text-5xl p-8 ">
            Select any&nbsp;
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f12711] to-[#f5af19]">
              Title
            </span>
            &nbsp;and start&nbsp;
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f12711] to-[#f5af19]">
              Reading
            </span>
          </h1>
          <Titles />
        </div>
      </main>
      <Footer />
    </div>
  );
}
