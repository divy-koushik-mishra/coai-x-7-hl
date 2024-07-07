const CtaSection = () => {
  const benefits = ["🔥Access to premium content", "📚Weekly newsletter", "💸Exclusive offers", "⚙️And much more..."];
  return (
    <section className="bg-[#F0F0F0] flex flex-col space-y-10 items-center justify-center min-h-[60vh] py-24">
      <h2 className="text-5xl w-1/3 text-center">
        Join the community today and be a part of it!
      </h2>
      <div className="w-3/4 flex justify-center items-center  space-x-5">
        <input
          type="text"
          className="w-1/2 px-10 py-5 rounded-full outline-none"
          placeholder="Email Address..."
        />
        <button className="bg-[#2B2B2B] rounded-full px-9 py-5 text-white ">
          Join Now!
        </button>
      </div>
      <div className="text-center">
        <h3 className="text-[#AEAEAE]">What will you get:</h3>
        <div className="py-5">
          {benefits.map((benefit, index) => (
            <span className="mx-5" key={index}>{benefit}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
