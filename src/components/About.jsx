// components/About.js
"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Code, Award, Briefcase, ChevronRight } from "lucide-react";

// --- Counter Component ---
const Counter = ({ end, duration = 2 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const range = end - start;
      const increment = end > start ? 1 : -1;
      const stepTime = Math.abs(Math.floor((duration * 1000) / range));

      const timer = setInterval(() => {
        start += increment;
        setCount(start);
        if (start === end) {
          clearInterval(timer);
        }
      }, stepTime);
    }
  }, [inView, end, duration]);

  return <span ref={ref}>{count}</span>;
};

// --- Animation Variants ---
const sectionVariants = {
  hidden: { opacity: 0, y: 80 }, // start lower
  visible: {
    opacity: 1,
    y: 0, // move up into place
    transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

// --- About Component ---
export default function About() {
  const stats = [
    { icon: <Code size={24} className="text-gray-400" />, number: 11, label: "TOTAL PROJECTS", sublabel: "Clean & solution-driven" },
    { icon: <Award size={24} className="text-gray-400" />, number: 7, label: "CERTIFICATES", sublabel: "Skills & achievements" },
    { icon: <Briefcase size={24} className="text-gray-400" />, number: 3, label: "YEARS EXPERIENCE", sublabel: "Learning & building" },
  ];

  return (
    <section
      id="about"
      className="relative min-h-screen w-full flex flex-col items-center justify-center px-4 sm:px-6 py-24
             bg-[#051427] text-white overflow-hidden"
    >
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="w-full max-w-6xl mx-auto flex flex-col items-center gap-16 z-10"
      >
        {/* Title */}
        <motion.div variants={itemVariants} className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-purple-400">
            About Me
          </h2>
          <p className="text-lg text-gray-200 mt-2">
            ✨ Passionate about clean code & creative design ✨
          </p>
        </motion.div>

        {/* Main Content */}
        <motion.div
          variants={itemVariants}
          className="w-full flex flex-col md:flex-row items-center justify-between gap-12"
        >
          {/* Left Side: Text + Buttons */}
          <div className="flex-[1.2] text-center md:text-left">
            <h3 className="text-3xl md:text-4xl font-light text-gray-100">
              Hello, I'm
            </h3>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-sky-400 text-transparent bg-clip-text mt-1">
              Tigin Tom
            </h1>
            <p className="text-gray-200 mt-6 leading-relaxed">
              I’m an MCA student deeply passionate about front-end development,
              web design, and interactive experiences. I focus on building
              clean, modern interfaces that are both functional and aesthetic.
            </p>
            <div className="flex items-center justify-center md:justify-start gap-4 mt-8">
              <a
                href="/resume.pdf"
                download
                className="px-6 py-3 bg-purple-600 rounded-lg font-semibold transition-all duration-300 hover:bg-purple-700 hover:shadow-lg hover:shadow-purple-500/40"
              >
                Download CV
              </a>
              <a
                href="#projects"
                className="px-6 py-3 border border-gray-400 rounded-lg font-semibold transition-all duration-300 hover:bg-gray-800 hover:border-purple-400"
              >
                View Projects
              </a>
            </div>
          </div>

          {/* Right Side: Profile Image */}
          <div className="flex-1 flex justify-center">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full shadow-lg shadow-purple-500/30 transition-all duration-500">
              <Image
                src="/tigintom.jpg"
                alt="Tigin Tom"
                fill
                className="object-cover rounded-full border-4 border-purple-500"
              />
            </div>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={itemVariants}
          className="w-full grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {stats.map((item, idx) => (
            <div
              key={idx}
              className="relative p-6 rounded-2xl transition-all duration-500 bg-[#1a1a2e]/70 backdrop-blur-md"
            >
              <div className="flex items-start justify-between">
                <div className="flex flex-col">
                  <div className="flex items-center gap-4">
                    {item.icon}
                    <p className="text-5xl font-bold text-white">
                      <Counter end={item.number} />
                    </p>
                  </div>
                  <p className="text-sm font-bold text-gray-200 mt-4 tracking-wider">
                    {item.label}
                  </p>
                  <p className="text-xs text-gray-400 mt-1">{item.sublabel}</p>
                </div>
                <ChevronRight className="text-gray-600" />
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
