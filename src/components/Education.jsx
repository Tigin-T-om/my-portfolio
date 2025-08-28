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
    school: "BVM Holy Cross College, Cherpunkal",
    year: "2020 – 2023",
    details: "Learned core programming, databases, and web development foundations.",
  },
  {
    degree: "Higher Secondary (12th)",
    school: "St. Thomas HSS, Pala",
    year: "2018 – 2020",
    details: "Completed Computer Science stream with a strong academic background.",
  },
  {
    degree: "Secondary School (10th)",
    school: "St. Thomas HSS, Pala",
    year: "2017 – 2018",
    details: "Achieved excellent academic performance in SSLC board exams.",
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="relative min-h-screen w-full flex flex-col items-center justify-center 
                 px-6 py-24 text-white overflow-hidden"
    >
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-800/20 rounded-full blur-3xl opacity-30 -z-10"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-800/20 rounded-full blur-3xl opacity-30 -z-10"></div>
      <div className="absolute top-1/2 right-1/3 w-72 h-72 bg-pink-700/20 rounded-full blur-2xl opacity-25 -z-10"></div>

      <motion.div
        className="w-full flex flex-col items-center max-w-5xl z-10"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 flex items-center gap-3 text-blue-400">
          <FaGraduationCap className="text-blue-400" size={40} />
          EDUCATION
        </h2>

        {/* Education Grid */}
        <motion.div
          className="w-full grid md:grid-cols-2 gap-8"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {education.map((edu, idx) => (
            <div
              key={idx}
              className="bg-[#1a1a2e]/70 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-zinc-700 
                         hover:shadow-blue-400/40 hover:shadow-xl transition-all duration-500"
            >
              <h3 className="text-xl font-semibold text-blue-300">{edu.degree}</h3>
              <p className="text-zinc-400">{edu.school}</p>
              <p className="text-zinc-500 text-sm">{edu.year}</p>
              <p className="mt-2 text-zinc-300 text-sm">{edu.details}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
