import { RiArrowRightDownLine } from "@remixicon/react"

const OurStory = () => {
  return (
    <section className='flex flex-col md:flex-row md:p-24 px-4'>
        <div className="md:w-1/2 flex md:justify-center items-start">
            <h2 className="md:text-6xl text-4xl flex items-center text-center">Our Story <RiArrowRightDownLine className="" size={100}/></h2>
        </div>
    <div className="md:w-1/2 md:text-lg leading-6 py-10 md:py-0">
    <p className="py-2">
    In an era dominated by rapid technological advancements and constant digital evolution, the journey of Campus of AI began with a simple yet profound vision: to bridge the gap between theoretical knowledge and practical skills for aspiring software engineers. Founded in 2019 by a group of passionate technologists and educators, Campus of AI was conceived out of a genuine desire to empower the next generation of tech professionals in a world where confusion and distractions often overshadow learning and growth.
    </p>
    <p className="py-2">The idea was born when our founders noticed a recurring challenge faced by many students and early-career professionals. Despite having access to a wealth of information and resources, there was a noticeable disconnect between academic learning and real-world application. Students often struggled to navigate the complex landscape of AI, machine learning, full-stack development, cloud computing, system design, and DevOps. They needed a guiding light, a structured pathway to harness their potential and achieve their career aspirations.</p>
    <p className="py-2">From humble beginnings, Campus of AI started as a series of workshops and small community gatherings. We focused on creating an environment where learning was not just about absorbing information but about experiencing technology hands-on. Our early events were characterized by an atmosphere of collaboration, innovation, and mentorship. Participants were encouraged to explore, experiment, and fail forward, all while being supported by a community of like-minded peers and industry experts.</p>

    <p className="py-2">Throughout our journey, one thing has remained constant: our commitment to our community. Campus of AI is more than just an educational platform; it is a vibrant ecosystem where students, mentors, and professionals come together to learn, share, and grow. We believe in the power of community and the collective potential of our members to drive innovation and excellence.</p>
    <p className="py-2">Join us on this journey. Together, let's shape the future of technology.</p>
    </div>
    </section>
  )
}

export default OurStory