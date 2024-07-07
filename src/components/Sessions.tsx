import Card from "./Card"

const Sessions = () => {
  return (
    <section className="min-h-[60vh] flex flex-col items-center  py-24">
        <h3 className="uppercase tracking-widest text-[#AEAEAE]">SESSIONS</h3>
        <h2 className="text-5xl">Adapting to demand</h2>
        <div className="flex w-3/4 my-10 ">
            <Card heading="Lesson - 1" body="Can Jupyter get you placed?"/>
            <Card heading="Lesson - 1" body="is Cloud a must?"/>
            <Card heading="Lesson - 1" body="Ideal Projects in 2k24"/>
        </div>
    </section>
  )
}

export default Sessions