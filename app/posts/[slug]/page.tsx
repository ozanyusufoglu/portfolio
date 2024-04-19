'use client';
import React from 'react';
import { posts } from '@/lib/data';
import { motion } from 'framer-motion';

export default function Post({ params }) {
  const { slug } = params;

  console.log(slug);

  const post = posts.find(
    (item) => item.slug === slug
  );

  console.log(post);
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="flex min-h-screen flex-col items-start
        justify-center gap-y-4 p-24 mt-20 text-xl w-2/3 "
    >
      <h1 className="text-5xl font-bold ">
        {post.title}
      </h1>
      <p className="font-regular prose">
        {post.body}
      </p>
    </motion.div>
  );
}
