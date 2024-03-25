import React from "react";
import { postData } from "../postData";

export default function Post({ params }) {
  const { slug } = params;

  const post = postData.find((item) => item.slug === slug);

  return (
    <div className="flex min-h-screen flex-col justify-center space-y-4 p-40 text-xl">
      <h1 className="text-3xl font-bold">{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}
