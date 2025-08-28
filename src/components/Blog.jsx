"use client";

import React from "react";
import { motion } from "framer-motion";

// Blog Posts Data
const blogPosts = [
  {
    title: "Getting Started with JavaScript: A Beginner’s Guide",
    date: "July 20, 2025",
    summary:
      "This post explains the basics of JavaScript, including variables, functions, arrays, and DOM manipulation.",
    link: "#",
  },
  {
    title: "My Virtual Internship at IBM SkillsBuild",
    date: "July 17, 2025",
    summary:
      "A quick reflection on my experience during the 4-week internship program, what I learned, and my project.",
    link: "#",
  },
  {
    title: "Building My Portfolio with Next.js and Tailwind",
    date: "July 10, 2025",
    summary:
      "Step-by-step breakdown of how I created my portfolio website from scratch using modern tools.",
    link: "#",
  },
];

export default function Blog() {
  return (
    <section
      id="blog"
      className="relative min-h-screen w-full flex flex-col items-center justify-center 
                 px-6 py-24 text-white overflow-hidden"
    >
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-800/20 rounded-full blur-3xl opacity-30 -z-10"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-800/20 rounded-full blur-3xl opacity-30 -z-10"></div>
      <div className="absolute top-1/2 right-1/3 w-72 h-72 bg-pink-700/20 rounded-full blur-2xl opacity-25 -z-10"></div>

      {/* Animated Wrapper */}
      <motion.div
        className="w-full flex flex-col items-center max-w-5xl z-10"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* Section Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-yellow-400">
          BLOG
        </h2>

        {/* Blog Posts (All animate together) */}
        <motion.div
          className="w-full space-y-8"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {blogPosts.map((post, idx) => (
            <div
              key={idx}
              className="bg-[#1a1a2e]/70 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-zinc-700 
                         hover:shadow-yellow-400/40 hover:shadow-xl hover:scale-[1.02] transition-all duration-500"
            >
              <h3 className="text-2xl font-semibold text-white">{post.title}</h3>
              <p className="text-sm text-gray-400 mb-2">{post.date}</p>
              <p className="text-gray-300 mb-4">{post.summary}</p>
              <a
                href={post.link}
                className="text-yellow-400 font-medium"
              >
                Read more →
              </a>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
