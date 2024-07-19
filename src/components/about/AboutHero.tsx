
const AboutHero = () => {
  return (
    <section className='md:p-24 flex  flex-col items-center px-4 '>
        <div className="flex flex-col md:flex-row  md:w-3/4 space-x-4">
            <div className="md:w-3/4">
                <h2 className="text-[#AEAEAE] tracking-[0.3rem] uppercase text-center py-4">About Us</h2>
                <h2 className="md:text-6xl text-4xl">Empowering the Next Generation of <span className="text-[#777777]">Software Engineers</span> </h2>
            </div>
            <div className="md:w-1/4 flex items-end">
                <p className="md:w-3/4">Providing cutting-edge education in AI, ML, full-stack development, cloud computing, and more.</p>
            </div>

            
        </div>
        <div className="flex md:w-3/4 py-10 space-x-4">
                <div className="w-3/5 ">
                    <img src="/about-hero1.avif" alt="" className=" w-full rounded-2xl md:rounded-3xl"/>
                </div>
                <div className="w-2/5 flex items-end">
                <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c" alt=""  className="w-full rounded-2xl md:rounded-3xl"/>
                </div>
            </div>
    </section>
  )
}

export default AboutHero