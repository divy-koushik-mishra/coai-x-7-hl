const OrganizationSection = () => {
  return (
    <section className="p-4 min-h-[60vh] w-full bg-[#E6F2F4] flex flex-col md:flex-row justify-center items-center">
      <div className="md:w-1/2 flex justify-center items-center p-10 ">
        <img src="/organize.avif" className="shadow-2xl rounded-3xl w-full" />
      </div>
      <div className=" md:w-1/2 flex items-center space-y-4 flex-col my-4 ">
        <h2 className="text-5xl md:w-3/4 text-center   ">Want Us to Visit your campus for a Session</h2>
        <p className="text-[#AEAEAE]">Contact us to organize a workshop at you organization</p>
        <button className="border my-2 w-fit flex  items-center justify-between space-x-5 px-9 py-2 border-[#AEAEAE] hover:bg-[#c7c7c7] hover:text-black transition rounded-full">
          Connect With Us
        </button>
      </div>
    </section>
  );
};

export default OrganizationSection;
