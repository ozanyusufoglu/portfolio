'use client';
import React from 'react';
import { posts } from '@/lib/data';
import { motion } from 'framer-motion';

export default function Post({ params }) {
  const { slug } = params;

  const post = posts.find(
    (item) => item.slug === slug
  );

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="flex min-h-screen flex-col items-center
        justify-center gap-y-4 p-20 text-xl"
    >
      <h1 className="text-3xl font-bold">
        {post.title}
      </h1>
      <p>{post.content}</p>
    </motion.div>
  );
}
