"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaCode } from "react-icons/fa";

const roles = ["MCA Student", "Software Developer", "Problem Solver", "Tech Enthusiast"];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Typing Effect
  useEffect(() => {
    const current = roles[index % roles.length];
    const timeout = setTimeout(() => {
      setDisplayText((prev) =>
        isDeleting
          ? current.substring(0, prev.length - 1)
          : current.substring(0, prev.length + 1)
      );

      if (!isDeleting && displayText === current) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setIndex((prev) => prev + 1);
      }
    }, 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, index]);

  const socialLinks = [
    { Icon: FaGithub, link: "https://github.com/Tigin-T-om" },
    { Icon: FaLinkedin, link: "https://www.linkedin.com/in/tigintom/" },
    { Icon: FaCode, link: "https://leetcode.com/u/Tigin-Tom/" },
    { Icon: FaEnvelope, link: "mailto:tigintomelanji@gmail.com" },
  ];

  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex flex-col md:flex-row items-center justify-center px-8 md:px-16 lg:px-24 text-white font-poppins overflow-hidden"
    >
      {/* Background Glows */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-900/40 rounded-full blur-3xl opacity-20 -z-10"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-900/40 rounded-full blur-3xl opacity-20 -z-10"></div>

      {/* Left Side */}
      <motion.div
        className="z-10 flex-1 text-center md:text-left space-y-5 pl-4 md:pl-12 lg:pl-20"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h1 className="text-4xl md:text-6xl font-bold">
          Hi, I’m{" "}
          <span className="bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent">
            Tigin Tom
          </span>
        </h1>

        <h2 className="text-2xl md:text-3xl text-gray-300">
          I’m a{" "}
          <span className="text-sky-400">
            {displayText}
            <span className="animate-blink">|</span>
          </span>
        </h2>

        <p className="text-md md:text-lg max-w-md mx-auto md:mx-0 text-gray-300">
          Passionate about software development, problem solving, and creating cool things for the web!
        </p>

        {/* Buttons */}
        <div className="flex gap-4 justify-center md:justify-start pt-4">
          {/* Transparent Resume Button with Glow */}
          <a
            href="/resume.pdf"
            download
            className="relative overflow-hidden px-6 py-3 border border-gray-400 rounded-md font-semibold shadow-md group"
          >
            <span className="relative z-10">Download Resume</span>
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-[200%] group-hover:translate-x-[200%] transition-transform duration-[1500ms]"></span>
          </a>

          {/* Contact Me Button */}
          <a
            href="#contact"
            className="relative overflow-hidden px-6 py-3 bg-sky-400 text-white rounded-md font-semibold shadow-md group"
          >
            <span className="relative z-10">Contact Me</span>
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[200%] group-hover:translate-x-[200%] transition-transform duration-[1500ms]"></span>
          </a>
        </div>

        {/* Social Icons with Glow */}
        <div className="flex gap-6 justify-center md:justify-start text-2xl pt-6">
          {socialLinks.map(({ Icon, link }, i) => (
            <a
              key={i}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 rounded-full text-white shadow-md transition-all duration-300 transform hover:shadow-lg hover:shadow-sky-400/50 hover:-translate-y-1"
            >
              <Icon size={26} />
            </a>
          ))}
        </div>
      </motion.div>

      {/* Right Side with Image */}
      <motion.div
        className="z-10 flex-1 flex justify-center mt-10 md:mt-0"
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <img src="/dev.jpg" alt="Developer Illustration" />
      </motion.div>

      {/* Typing cursor animation */}
      <style jsx>{`
        .animate-blink {
          animation: blink 1s infinite;
        }
        @keyframes blink {
          0%, 50%, 100% { opacity: 1; }
          25%, 75% { opacity: 0; }
        }
      `}</style>
    </section>
  );
}
