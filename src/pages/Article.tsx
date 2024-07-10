import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDocument } from "../utils/appwrite-utils";

interface Post {
  title: string;
  content: string;
  "thumbnail-image": string;
  author: string;
  $createdAt: string;
}

const Article: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [blogPost, setBlogPost] = useState<Post | null>(null);

  useEffect(() => {
    const fetchDocument = async () => {
      if (!slug) {
        return; // Exit early if slug is undefined or null
      }

      try {
        const document = await getDocument(slug);
        if (document) {
          const post: Post = {
            title: document.title,
            content: document.content,
            "thumbnail-image": document["thumbnail-image"],
            author: document.author,
            $createdAt: document.$createdAt,
          };
          setBlogPost(post);
        }
      } catch (error) {
        console.error("Error fetching document:", error);
      }
    };

    fetchDocument();
  }, [slug]);

  if (!blogPost) {
    return <div>Loading...</div>; // Placeholder for loading state
  }

  return (
    <section className="min-h-screen w-full flex justify-between">
      <div className="w-3/4 border flex flex-col space-y-10 p-24 items-center">
        <img
          src={blogPost["thumbnail-image"]}
          alt=""
          className="w-3/4"
        />
        <h1 className="text-4xl">{blogPost.title}</h1>
        <div className="flex justify-between items-center font-semibold">
          <h3 className="">Author: {blogPost.author}</h3>
          <h3 className="">
            Published at: {new Date(blogPost.$createdAt).toLocaleDateString("en-US")}
          </h3>
        </div>
        <hr />
        <p className="text-lg">{blogPost.content}</p>
      </div>
    </section>
  );
};

export default Article;
