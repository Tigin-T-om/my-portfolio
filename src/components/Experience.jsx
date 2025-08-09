"use client";
import { motion } from "framer-motion";

// Experience Data
const experiences = [
  {
    title: "Academic Project",
    description:
      "Developed ShowTimeHub, a movie ticket booking system using PHP & MySQL with secure login and ticket management.",
  },
  {
    title: "Hackathon Participation",
    description:
      "Built a real-time chat app in 24 hours using Node.js and Socket.IO at CodeFest 2025.",
  },
  {
    title: "Personal Projects",
    description:
      "Created Aritmetika Solver (Python/Flask) and AutoChat-Discord to enhance coding skills and backend knowledge.",
  },
  {
    title: "Workshops & Courses",
    description:
      "Completed CS50x by Harvard and IBM SkillsBuild AI Program to strengthen programming and AI fundamentals.",
  },
];

// Section Animation
const sectionFade = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export default function Experience() {
  return (
    <section
      id="experience"
      className="min-h-screen flex flex-col items-center justify-center 
                 px-6 py-20 bg-gradient-to-b from-[#0d0c1d] via-[#191730] to-[#0f0e1a] text-white"
    >
      <motion.div
        variants={sectionFade}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3, once: false }}
        className="w-full flex flex-col items-center"
      >
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-emerald-400">
          HANDS-ON EXPERIENCE
        </h2>

        {/* Experience Grid */}
        <div className="max-w-5xl w-full grid md:grid-cols-2 gap-8">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="bg-[#1a1a2e] p-6 rounded-xl shadow-md border border-zinc-700 
                         cursor-pointer transform transition-all duration-300
                         hover:shadow-[0_0_25px_rgba(16,185,129,0.5)] hover:-translate-y-1"
            >
              <h3 className="text-xl font-semibold text-emerald-300 mb-2">
                {exp.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
