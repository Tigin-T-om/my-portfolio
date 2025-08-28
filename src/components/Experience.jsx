"use client";

import { motion } from "framer-motion";

// Relevant Experiences
const experiences = [
  {
    title: "Academic Projects",
    description:
      "Built EpicSeat (E-commerce), E-Vote Hub (Voting App), MindBlog (Blogging App), and Predictfy (ML projects) using Django, Flask, and React.",
  },
  {
    title: "Internship Experience",
    description:
      "Completed IBM SkillsBuild Virtual Internship, developing a Financial Chatbot using IBM Watson AI Studio and LLaMA3 model.",
  },
  {
    title: "Workshops & Certifications",
    description:
      "Attended national seminars, conducted Python workshops for students, and earned certifications in AI, ML, Cloud, and Web Development.",
  },
  {
    title: "Hackathon Participation",
    description:
      "Built a real-time chat app in 24 hours using Node.js & Socket.IO at CodeFest 2025, enhancing teamwork and rapid prototyping skills.",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative min-h-screen w-full flex flex-col items-center justify-center 
                 px-6 py-24 text-white overflow-hidden"
    >
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-800/20 rounded-full blur-3xl opacity-30 -z-10"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-800/20 rounded-full blur-3xl opacity-30 -z-10"></div>
      <div className="absolute top-1/2 right-1/3 w-72 h-72 bg-pink-700/20 rounded-full blur-2xl opacity-25 -z-10"></div>

      <motion.div
        className="w-full flex flex-col items-center z-10"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-emerald-400">
          HANDS-ON EXPERIENCE
        </h2>

        {/* Experience Grid (all reveal together) */}
        <motion.div
          className="max-w-5xl w-full grid md:grid-cols-2 gap-8"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="bg-[#1a1a2e]/70 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-zinc-700 
                         hover:shadow-emerald-400/40 hover:shadow-xl transition-all duration-500"
            >
              <h3 className="text-xl font-semibold text-emerald-300 mb-2">
                {exp.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {exp.description}
              </p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
