const OrganizationSection = () => {
  return (
    <section className="min-h-[60vh] bg-[#E6F2F4] flex justify-center items-center px-24">
      <div className="w-1/2 ">
        <img src="/organize.avif" className="shadow-2xl rounded-3xl" />
      </div>
      <div className=" w-1/3 flex justify-center space-y-4 flex-col">
        <h2 className="text-5xl">Want Us to Visit your campus for a Session</h2>
        <p className="text-[#AEAEAE]">Contact us to organize a workshop at you organization</p>
        <button className="border my-2 w-fit flex  items-center justify-between space-x-5 px-9 py-2 border-[#AEAEAE] hover:bg-[#c7c7c7] hover:text-black transition rounded-full">
          Connect With Us
        </button>
      </div>
    </section>
  );
};

export default OrganizationSection;
