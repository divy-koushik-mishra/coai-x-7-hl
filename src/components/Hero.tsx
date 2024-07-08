import { RiArrowRightUpLine } from "@remixicon/react";

const Hero = () => {
  return (
    <section data-scroll className="w-full flex flex-col justify-between items-center">
      <div className="flex flex-col items-center justify-center w-1/2 space-y-7 mb-10 mt-0">
        <h2 className="">AI/ML</h2>
        <h2 className="text-5xl text-center">
          Building the perfect resume in uncertain job markets
        </h2>
        <p className="text-center text-[#AEAEAE] px-2">
          We talk about the dynamic market of AI/ML jobs and what the current
          recruiters are looking for. What could land you the perfect job and
          why you are not getting that interview call
        </p>
        <button className="border flex  items-center justify-between space-x-5 px-9 py-2 border-[#AEAEAE] hover:bg-[#c7c7c7] hover:text-black transition rounded-full">
          Explore More <RiArrowRightUpLine />{" "}
        </button>
      </div>

      <div className=" flex justify-center items-center mb-0 my-10">
        <img src="/hero-image.png" className="shadow-2xl rounded-t-3xl" />
      </div>
    </section>
  );
};

export default Hero;
