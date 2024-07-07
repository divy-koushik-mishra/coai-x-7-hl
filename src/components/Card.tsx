import { RiArrowRightUpLine } from "@remixicon/react";

const Card = (props: any) => {
  return (
    <div className="flex flex-col items-center justify-center border rounded-3xl w-1/3 mx-4 overflow-hidden relative">
      <img
        src="https://cdn.pixabay.com/photo/2015/01/20/12/51/ipad-605420_640.jpg"
        className=""
      />
      <div className="w-full rounded-xl flex items-center justify-between bottom-4 absolute px-5 ">
        <div className="flex flex-col items-center rounded-full border w-full bg-white ">
          <div className="flex w-full px-4 items-center justify-between ">
            <div className="text-center">
              <h3 className="">{props.heading}</h3>
              <h1 className="text-lg">{props.body}</h1>
            </div>
            <div className="border w-10 h-10 flex justify-center items-center border-black rounded-full">
              <RiArrowRightUpLine />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
