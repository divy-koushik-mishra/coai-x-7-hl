import { RiArrowRightUpLine } from "@remixicon/react";
import { Link } from "react-router-dom";

interface CardProps {
    title: string;
    meta: string;
    author: string;
    category: string;
    date: string;
    image?: string;
    slug: string;
  }

const ArticleCard: React.FC<CardProps> = (props) => {
  return (
      <div className="md:w-[30%] min-h-[550px] border  mx-5 my-10 cursor-pointer hover:scale-105 transition">
        <Link to={`/blog/${props.slug || "404"}`}>
      <div className="">
        <img src={props.image || "/about.jpg"} alt="" className="h-80 w-full" />
      </div>
      <div className="py-5 flex flex-col space-y-2">
        <div className="flex">
          <h2 className="text-4xl w-fit ">
            {props.title || "Blog Title"}
          </h2>
          <div className="border-2 w-10 h-10 flex justify-center items-center border-black rounded-full">
            <RiArrowRightUpLine />
          </div>
        </div>
        <p className="text-[#AEAEAE]">
          {props.meta || "Blog Meta"}
        </p>
        <div className="author-box flex justify-between items-center font-semibold">
          <h3>{props.author}</h3>
          <p>{props.date}</p>
        </div>
        <button className="border-2 border-black font-semibold  flex w-fit items-center justify-between space-x-5 px-9 py-2  hover:bg-[#c7c7c7] hover:text-black transition rounded-full">
          {props.category || "Category"}
        </button>
      </div>
    </Link>
    </div>
  );
};

export default ArticleCard;
