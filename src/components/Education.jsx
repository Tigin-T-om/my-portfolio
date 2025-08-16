"use client";

import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

// Education Data
const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    school: "Marian College Kuttikkanam (Autonomous)",
    year: "2023 – 2025",
    details: "Focused on AI/ML, NLP, full-stack development, and cybersecurity.",
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    school: "XYZ College",
    year: "2020 – 2023",
    details: "Learned core programming, databases, and web development foundations.",
  },
  {
    degree: "Higher Secondary (12th)",
    school: "ABC HSS",
    year: "2018 – 2020",
    details: "Completed Computer Science stream with a strong academic background.",
  },
  {
    degree: "Secondary School (10th)",
    school: "ABC HSS",
    year: "2017 – 2018",
    details: "Achieved excellent academic performance in SSLC board exams.",
  },
];

// Section Animation
const sectionFade = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function Education() {
  return (
    <section
      id="education"
      className="min-h-screen flex flex-col items-center justify-center 
                 px-6 py-20 bg-[#051427] text-white"
    >
      <motion.div
        variants={sectionFade}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3, once: false }}
        className="w-full flex flex-col items-center max-w-5xl"
      >
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 flex items-center gap-3 text-blue-400">
          <FaGraduationCap className="text-blue-400" size={40} />
          EDUCATION
        </h2>

        {/* Education Cards */}
        <div className="w-full grid md:grid-cols-2 gap-8">
          {education.map((edu, idx) => (
            <div
              key={idx}
              className="bg-[#1a1a2e] p-6 rounded-2xl shadow-lg border border-zinc-700 
                         cursor-pointer transform transition-all duration-300
                         hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] hover:-translate-y-1"
            >
              <h3 className="text-xl font-semibold text-blue-300">{edu.degree}</h3>
              <p className="text-zinc-400">{edu.school}</p>
              <p className="text-zinc-500 text-sm">{edu.year}</p>
              <p className="mt-2 text-zinc-300 text-sm">{edu.details}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
