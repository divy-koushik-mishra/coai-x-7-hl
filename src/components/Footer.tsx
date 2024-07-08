import { RiInstagramLine, RiTwitterLine, RiYoutubeLine } from "@remixicon/react";

const Footer = () => {
  return (
    <footer className="bg-[#F0F0F0] flex flex-col items-center justify-center p-4 md:py-24">
      <div className="w-3/4 flex flex-col space-y-5 justify-center items-center space-x-5">
        <h2 className="text-5xl">Register Now</h2>
        <input
          type="text"
          className="md:w-1/2 px-10 py-5 rounded-full outline-none"
          placeholder="Email Address..."
        />
        <button className="bg-[#2B2B2B] rounded-full px-9 py-5 text-white ">
          Join Now!
        </button>
      </div>
      <div className="w-full hidden md:block relative bottom-0">
        <h2 className="text-[10rem]  leading-none uppercase text-center text-[#AEAEAE] opacity-70">
          7-Hidden Layers
        </h2>
        <h2 className="text-[10rem]  leading-none uppercase text-center text-[#AEAEAE] opacity-70">
          {" "}
          x
        </h2>
        <h2 className="text-[10rem]  leading-none uppercase text-center text-[#AEAEAE] opacity-70">
          Campus of AI
        </h2>
      </div>
      <div className="relative bottom-64 right-80 border border-black w-1/3 py-2 px-4 rounded-b-2xl bg-[#2B2B2B] text-white">
        All right reserved © 2024
      </div>
      <div className="relative hidden md:flex   items-center justify-between bottom-[18.6rem] left-80 border border-black w-1/3 py-2 px-4 rounded-b-2xl bg-[#2B2B2B] text-white">
        <RiInstagramLine /> <RiYoutubeLine /> <RiTwitterLine />
      </div>
    </footer>
  );
};

export default Footer;
