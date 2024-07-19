import Card from "./Card"

const Sessions = () => {
  return (
    <section data-scroll data-scroll-speed="0.8" className="p-4 min-h-screen md:min-h-[60vh]  flex flex-col items-center  md:py-24">
        <h3 className="uppercase tracking-[0.3rem]  text-[#AEAEAE]">SESSIONS</h3>
        <h2 className="md:text-5xl text-4xl text-center md:text-left">Adapting to demand</h2>
        <div className="flex flex-col md:flex-row md:w-3/4 my-10 space-y-10 md:space-y-0">
            <Card image={"/jupyter.jpg"} heading="" body="Can Jupyter get you placed?"/>
            <Card image={"cloud.png"} heading="" body="is Cloud a must?"/>
            <Card image={"/resume.jpg"} heading="" body="Ideal Projects in 2k24"/>
        </div>
    </section>
  )
}

export default Sessions