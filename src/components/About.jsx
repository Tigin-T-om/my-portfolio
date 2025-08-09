"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

// Counter Component
const Counter = ({ end, duration = 1.5 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: false });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const increment = end / (duration * 60);
      const counter = setInterval(() => {
        start += increment;
        if (start >= end) {
          start = end;
          clearInterval(counter);
        }
        setCount(Math.floor(start));
      }, 1000 / 60);
    }
  }, [inView, end, duration]);

  return <span ref={ref}>{count}</span>;
};

// Unified Section Animation
const fadeUpSection = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center px-4 py-20 
                 bg-gradient-to-b from-[#0d0c1d] via-[#191730] to-[#0f0e1a] text-white"
    >
      <motion.div
        variants={fadeUpSection}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3, once: false }}
        className="max-w-6xl w-full flex flex-col md:flex-row items-center md:items-center gap-12"
      >
        {/* Left Side: Text & Stats */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-purple-400">
            ABOUT ME
          </h2>

          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Transforming ideas into digital experiences 🚀
          </h3>
          <p className="text-gray-300 mb-6 leading-relaxed text-lg">
            I’m Tigin Tom, an MCA student who’s deeply passionate about front-end development,
            web design, and interactive experiences. I focus on building clean, modern interfaces
            that are both functional and aesthetic.
          </p>

          {/* Stats Grid with Hover */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            {[
              { number: 11, label: "Total Projects" },
              { number: 7, label: "Certificates" },
              { number: 3, label: "Years Experience" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-[#1a1a2e] rounded-xl p-4 text-center shadow-md
                           transform transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(139,92,246,0.5)] hover:scale-105 cursor-pointer"
              >
                <h4 className="text-2xl font-bold text-purple-300">
                  <Counter end={item.number} />+
                </h4>
                <p className="text-sm text-gray-400">{item.label}</p>
              </div>
            ))}
          </div>

          {/* Download CV Button */}
          <a
            href="/resume.pdf"
            download
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg 
                       transition-all duration-300 shadow-md hover:shadow-purple-500/50"
          >
            Download CV
          </a>
        </div>

        {/* Right Side: Profile Image */}
        <div className="flex-1 flex justify-center">
          <div className="relative w-60 h-60 rounded-full shadow-xl p-1 
                bg-gradient-to-r from-purple-500 via-sky-500 to-blue-500
                translate-x-4">
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-[#0d0c1d]">
              <Image
                src="/tigintom.jpg"
                alt="Profile Picture"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
