"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Code, Award, Briefcase, ChevronRight } from "lucide-react";

// --- Counter Component (Static Version) ---
const Counter = ({ end }) => {
  return <span>{end}</span>;
};

// --- About Component ---
export default function About() {
  const stats = [
    {
      icon: <Code size={24} className="text-gray-400" />,
      number: 11,
      label: "TOTAL PROJECTS",
      sublabel: "Clean & solution-driven",
    },
    {
      icon: <Award size={24} className="text-gray-400" />,
      number: 17,
      label: "CERTIFICATES",
      sublabel: "Skills & achievements",
    },
    {
      icon: <Briefcase size={24} className="text-gray-400" />,
      number: 2,
      label: "YEARS EXPERIENCE",
      sublabel: "Learning & building",
    },
  ];

  return (
    <section
      id="about"
      className="relative min-h-screen w-full flex flex-col items-center justify-center px-4 sm:px-6 py-24 text-white overflow-hidden"
    >
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-800/20 rounded-full blur-3xl opacity-30 -z-10"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-800/20 rounded-full blur-3xl opacity-30 -z-10"></div>
      <div className="absolute top-1/2 right-1/3 w-72 h-72 bg-pink-700/20 rounded-full blur-2xl opacity-25 -z-10"></div>

      <motion.div
        className="w-full max-w-6xl mx-auto flex flex-col items-center gap-16 z-10"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* Title */}
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-purple-400">
            About Me
          </h2>
          <p className="text-lg text-gray-200 mt-2">
            ✨ Passionate about clean code & creative design ✨
          </p>
        </div>

        {/* Main Content */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left Side */}
          <motion.div
            className="flex-[1.2] text-center md:text-left"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
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
              With multiple academic and personal projects, certifications, and
              continuous learning, I strive to bridge creativity with
              technology.
            </p>

            {/* Buttons with Shine Hover */}
            <div className="flex items-center justify-center md:justify-start gap-4 mt-8">
              <a
                href="/resume.pdf"
                download
                className="relative overflow-hidden px-6 py-3 bg-purple-600 rounded-lg font-semibold group"
              >
                <span className="relative z-10">Download CV</span>
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-[1500ms]"></span>
              </a>
              <a
                href="#projects"
                className="relative overflow-hidden px-6 py-3 border border-gray-400 rounded-lg font-semibold group"
              >
                <span className="relative z-10">View Projects</span>
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-[1500ms]"></span>
              </a>
            </div>

          </motion.div>

          {/* Right Side: Profile Image */}
          <motion.div
            className="flex-1 flex justify-center"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full shadow-lg shadow-purple-500/30">
              <Image
                src="/tigintom.jpg"
                alt="Tigin Tom"
                fill
                className="object-cover rounded-full border-4 border-purple-500"
              />
            </div>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <motion.div
          className="w-full grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {stats.map((item, idx) => (
            <div
              key={idx}
              className="relative p-6 rounded-2xl bg-[#1a1a2e]/70 backdrop-blur-md shadow-md hover:shadow-purple-500/30 hover:shadow-xl transition-shadow duration-500"
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
