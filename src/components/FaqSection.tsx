import { AccordionContent } from "./utils/AccordionContent";

export const FaqSection = () => {
  return (
    <section data-scroll data-scroll-speed="0.8" className="flex px-24">
      <div className="w-1/2 flex flex-col justify-center p-24 space-y-4">
        <h3 className="tracking-widest uppercase text-[#AEAEAE]">FAQ'S</h3>
        <h3 className="text-5xl">Find the answer to your common questions</h3>
        <button className="border w-fit flex  items-center justify-between space-x-5 px-9 py-2 border-[#AEAEAE] hover:bg-[#c7c7c7] hover:text-black transition rounded-full">
          Connect With Us
        </button>
      </div>
      <div className="w-1/2 flex flex-col justify-center p-24 space-y-4">
        <AccordionContent title="hii" content="hjfd" />
        <AccordionContent title="hii" content="hjfd" />
        <AccordionContent title="hii" content="hjfd" />
      </div>
    </section>
  );
};
