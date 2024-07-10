import BlogCards from "../components/Blog/BlogCards"
import BlogHero from "../components/Blog/BlogHero"

const Blog = () => {
  return (
    <main className="flex flex-col items-center">
    <BlogHero />
    <div className="border border-[#AEAEAE] opacity-70 px-4 w-4/5"></div>
    <BlogCards />
    </main >
  )
}

export default Blog