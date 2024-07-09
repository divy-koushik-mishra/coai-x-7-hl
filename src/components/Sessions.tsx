import Card from "./Card"

const Sessions = () => {
  return (
    <section data-scroll data-scroll-speed="0.8" className="p-4 min-h-screen md:min-h-[60vh]  flex flex-col items-center  md:py-24">
        <h3 className="uppercase tracking-[0.3rem]  text-[#AEAEAE]">SESSIONS</h3>
        <h2 className="md:text-5xl text-4xl text-center md:text-left">Adapting to demand</h2>
        <div className="flex flex-col md:flex-row md:w-3/4 my-10 space-y-10 md:space-y-0">
            <Card image={"/jupyter.jpg"} heading="Lesson - 1" body="Can Jupyter get you placed?"/>
            <Card image={"https://media.licdn.com/dms/image/D4D12AQH15r504BJaoA/article-cover_image-shrink_720_1280/0/1686555629622?e=2147483647&v=beta&t=1niBzax5loJEavfneYtun9kt-TkoGP13ofO2z_9kjPI"} heading="Lesson - 1" body="is Cloud a must?"/>
            <Card image={"/resume.jpg"} heading="Lesson - 1" body="Ideal Projects in 2k24"/>
        </div>
    </section>
  )
}

export default Sessions