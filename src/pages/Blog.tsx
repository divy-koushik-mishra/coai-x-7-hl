import { Helmet } from "react-helmet"
import BlogCards from "../components/Blog/BlogCards"
import BlogHero from "../components/Blog/BlogHero"

const Blog = () => {
  return (
    <main className="flex flex-col items-center">
      <Helmet>
        <title>Blog - Campus of AI</title>
        <meta name="description" content="Explore the latest articles, tutorials, and insights on AI and Machine Learning on the Campus of AI blog." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />

        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="AI blog, Machine Learning blog, AI tutorials, AI insights, Campus of AI blog" />
        <meta name="author" content="Campus of AI Team" />

        <meta property="og:title" content="Blog - Campus of AI" />
        <meta property="og:description" content="Explore the latest articles, tutorials, and insights on AI and Machine Learning on the Campus of AI blog." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://campusofai.in/blog" />
        <meta property="og:image" content="https://campusofai.in/hero-image.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Blog - Campus of AI" />
        <meta name="twitter:description" content="Explore the latest articles, tutorials, and insights on AI and Machine Learning on the Campus of AI blog." />
        <meta name="twitter:image" content="https://campusofai.in/hero-image.png" />
        <meta name="twitter:site" content="@CampusOfAI" />
        <meta name="twitter:creator" content="@CampusOfAI" />

        <meta name="theme-color" content="#000000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="format-detection" content="telephone=no" />
      </Helmet>
    <BlogHero />
    <div className="border border-[#AEAEAE] opacity-70 px-4 w-4/5"></div>
    <BlogCards />
    </main >
  )
}

export default Blog