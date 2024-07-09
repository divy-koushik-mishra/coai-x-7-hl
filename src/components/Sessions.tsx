import Card from "./Card"

const Sessions = () => {
  return (
    <section data-scroll data-scroll-speed="0.8" className="p-4 min-h-[60vh] flex flex-col items-center  md:py-24">
        <h3 className="uppercase tracking-widest text-[#AEAEAE]">SESSIONS</h3>
        <h2 className="text-5xl text-center md:text-left">Adapting to demand</h2>
        <div className="flex flex-col md:flex-row md:w-3/4 my-10 space-y-10 md:space-y-0">
            <Card image={"/jupyter.png"} heading="Lesson - 1" body="Can Jupyter get you placed?"/>
            <Card image={"cloud.webp"} heading="Lesson - 1" body="is Cloud a must?"/>
            <Card heading="Lesson - 1" body="Ideal Projects in 2k24"/>
        </div>
    </section>
  )
}

export default Sessions