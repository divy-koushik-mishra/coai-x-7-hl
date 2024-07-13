import React, { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";
import { getAllDocuments } from "../../utils/appwrite-utils";

interface Post {
  $id: string;
  title: string;
  author: string;
  slug: string;
  category: string;
  content: string;
  $createdAt: number;
  "thumbnail-image"?: string;
  "meta-desc"?: string;
}

const BlogCards: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        const docs = await getAllDocuments();
        const formattedPosts: Post[] = docs.map((post) => ({
          $id: post.$id,
          title: post.title as string,
          author: post.author as string,
          slug: post.slug as string,
          category: post.category as string,
          content: post.content as string,
          $createdAt: typeof post.$createdAt === 'number' ? post.$createdAt : parseInt(post.$createdAt, 10),
          "thumbnail-image": post["thumbnail-image"] as string | undefined,
          "meta-desc": post["meta-desc"] as string,
        }));
        setPosts(formattedPosts);
      } catch (error) {
        console.error("Error fetching documents:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDocuments();
  }, []);

  return (
    <section className="min-h-[80vh] md:px-24 py-12 flex flex-col md:flex-row flex-wrap">
      {loading ? (
        Array.from({ length: 6 }).map((_, index) => (
          <ArticleCard key={index} loading={true} title="" meta="" author="" category="" date="" slug="" />
        ))
      ) : (
        posts.map((post, index) => (
          <ArticleCard
            key={index}
            title={post.title}
            author={post.author}
            slug={post.slug}
            category={post.category}
            date={new Date(post.$createdAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
            image={post["thumbnail-image"]}
            meta={post["meta-desc"] ?? ""}
          />
        ))
      )}
    </section>
  );
};

export default BlogCards;
