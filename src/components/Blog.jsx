"use client";

import { motion } from "framer-motion";
import React from "react";

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

// Section Animation (only section fades in)
const sectionFade = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function Blog() {
  return (
    <section
      id="blog"
      className="min-h-screen flex flex-col items-center justify-center 
                 px-6 py-20 bg-gradient-to-b from-[#0d0c1d] via-[#191730] to-[#0f0e1a] text-white"
    >
      <motion.div
        variants={sectionFade}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3, once: false }}
        className="w-full flex flex-col items-center max-w-5xl"
      >
        {/* Section Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-yellow-400">
          BLOG
        </h2>

        {/* Blog Posts */}
        <div className="w-full space-y-8">
          {blogPosts.map((post, idx) => (
            <div
              key={idx}
              className="bg-[#1a1a2e] p-6 rounded-xl shadow-lg shadow-black/40 
                         border border-zinc-700 transform transition-all duration-300
                         hover:shadow-[0_0_25px_rgba(250,204,21,0.5)] hover:-translate-y-1"
            >
              <h3 className="text-2xl font-semibold text-white">{post.title}</h3>
              <p className="text-sm text-gray-400 mb-2">{post.date}</p>
              <p className="text-gray-300 mb-4">{post.summary}</p>
              <a
                href={post.link}
                className="text-yellow-400 hover:underline font-medium"
              >
                Read more →
              </a>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
