"use client";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ amount: 0.3, once: false }}
      className="bg-gradient-to-b from-[#0f0e1a] via-[#191730] to-[#1b1b2f] 
                 text-gray-400 text-sm py-8 border-t border-gray-800"
    >
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row 
                      justify-between items-center gap-4 text-center md:text-left">
        {/* Footer Text */}
        <p>
          &copy; {new Date().getFullYear()}{" "}
          <span className="text-white font-medium hover:text-sky-400 transition-colors duration-300">
            Tigin Tom
          </span>
          . All rights reserved.
        </p>

        {/* Social Links */}
        <div className="flex gap-6">
          <a
            href="https://github.com/Tigin-T-om"
            target="_blank"
            rel="noopener noreferrer"
            className="relative group transition-all duration-300"
          >
            GitHub
            <span
              className="absolute bottom-0 left-0 w-0 h-[2px] bg-sky-400 
                         group-hover:w-full transition-all duration-300"
            ></span>
          </a>
          <a
            href="https://linkedin.com/in/tigin-tom"
            target="_blank"
            rel="noopener noreferrer"
            className="relative group transition-all duration-300"
          >
            LinkedIn
            <span
              className="absolute bottom-0 left-0 w-0 h-[2px] bg-sky-400 
                         group-hover:w-full transition-all duration-300"
            ></span>
          </a>
          <a
            href="mailto:tigintom2003@gmail.com"
            className="relative group transition-all duration-300"
          >
            Email
            <span
              className="absolute bottom-0 left-0 w-0 h-[2px] bg-sky-400 
                         group-hover:w-full transition-all duration-300"
            ></span>
          </a>
        </div>
      </div>
    </motion.footer>
  );
}
