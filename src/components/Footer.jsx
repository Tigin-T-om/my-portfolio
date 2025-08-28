"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      className="bg-transparent text-gray-400 text-sm py-8 border-t border-gray-800"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row 
                      justify-between items-center gap-4 text-center md:text-left">

        {/* Footer Text */}
        <p className="mb-2 md:mb-0">
          &copy; {new Date().getFullYear()}{" "}
          <span className="text-white font-medium">
            Tigin Tom
          </span>
          . All rights reserved.
        </p>

        {/* Social Links */}
        <div className="flex gap-6">
          {[
            { href: "https://github.com/Tigin-T-om", label: "GitHub" },
            { href: "https://linkedin.com/in/tigin-tom", label: "LinkedIn" },
            { href: "mailto:tigintom2003@gmail.com", label: "Email" },
          ].map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="relative text-white font-medium overflow-hidden"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className="relative z-10">{link.label}</span>
              <motion.span
                className="absolute bottom-0 left-0 w-full h-[2px] bg-sky-400 origin-left scale-x-0"
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          ))}
        </div>
      </div>
    </motion.footer>
  );
}
