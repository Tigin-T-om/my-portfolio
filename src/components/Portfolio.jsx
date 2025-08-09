"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const tabs = ["Projects", "Certificates", "Tech Stack"];

const projects = [
  {
    title: "Aritmetika Solver",
    slug: "aritmetika-solver",
    description: "Solves basic arithmetic expressions and visualizes steps.",
    tech: ["Python", "Flask"],
  },
  {
    title: "AutoChat-Discord",
    slug: "autochat-discord",
    description: "An AI bot that responds intelligently on Discord.",
    tech: ["Node.js", "Discord.js", "OpenAI API"],
  },
  {
    title: "Buku Catatan",
    slug: "buku-catatan",
    description: "A note-taking web app with local storage.",
    tech: ["React", "Tailwind"],
  },
];

const techStack = [
  "/tech/html5.svg",
  "/tech/css3.svg",
  "/tech/javascript.svg",
  "/tech/react.svg",
  "/tech/tailwind.svg",
  "/tech/vite.svg",
];

const certificates = ["/certs/cert1.png", "/certs/cert2.png", "/certs/cert3.png"];

// Unified section animation
const fadeUpSection = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("Projects");

  return (
    <section
      id="portfolio"
      className="min-h-screen flex flex-col items-center justify-center 
                 px-6 py-20 bg-gradient-to-b from-[#0f0e1a] via-[#191730] to-[#0d0c1d] text-white"
    >
      <motion.div
        variants={fadeUpSection}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3, once: false }}
        className="w-full flex flex-col items-center"
      >
        {/* Section Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-sky-400">
          PORTFOLIO SHOWCASE
        </h2>

        {/* Tabs */}
        <div className="flex justify-center mb-12 space-x-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-lg font-medium transition-all duration-300
                ${
                  activeTab === tab
                    ? "bg-sky-500 text-white shadow-lg shadow-sky-500/30"
                    : "bg-zinc-800 text-gray-300 hover:bg-zinc-700 hover:shadow-[0_0_10px_rgba(56,189,248,0.3)]"
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-6xl">
          <AnimatePresence mode="wait">
            {activeTab === "Projects" &&
              projects.map((project) => (
                <motion.div
                  key={project.title}
                  whileHover={{ scale: 1.05, y: -6 }}
                  transition={{ duration: 0.3 }}
                  className="bg-[#1a1a2e] p-6 rounded-xl shadow-md border border-zinc-700 
                             cursor-pointer transform transition-all duration-300
                             hover:shadow-[0_0_25px_rgba(56,189,248,0.5)]"
                >
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-3">{project.description}</p>
                  <p className="text-sm text-sky-400 font-medium">
                    Tech: {project.tech.join(", ")}
                  </p>
                </motion.div>
              ))}

            {activeTab === "Certificates" &&
              certificates.map((cert, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05, y: -6 }}
                  transition={{ duration: 0.3 }}
                  className="flex justify-center cursor-pointer 
                             hover:drop-shadow-[0_0_25px_rgba(56,189,248,0.5)] transition-all duration-300"
                >
                  <Image
                    src={cert}
                    alt={`Certificate ${i + 1}`}
                    width={300}
                    height={200}
                    className="rounded-lg shadow-lg"
                  />
                </motion.div>
              ))}

            {activeTab === "Tech Stack" &&
              techStack.map((logo, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.2, y: -4 }}
                  transition={{ duration: 0.3 }}
                  className="flex justify-center cursor-pointer"
                >
                  <Image
                    src={logo}
                    alt="Tech logo"
                    width={80}
                    height={80}
                    className="grayscale hover:grayscale-0 
                               hover:drop-shadow-[0_0_20px_rgba(56,189,248,0.7)]
                               transition-all duration-300"
                  />
                </motion.div>
              ))}
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
}
