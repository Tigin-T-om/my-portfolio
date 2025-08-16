// src/components/Contact.jsx
"use client";
import { motion } from "framer-motion";

// Section Animation (section + children animate on scroll)
const sectionHover = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.15,
    },
  },
};

const childItem = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center 
                 px-6 py-20 bg-[#051427] text-white"
    >
      <motion.div
        variants={sectionHover}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3, once: false }}
        className="w-full max-w-4xl flex flex-col items-center text-center"
      >
        {/* Heading */}
        <motion.h2
          variants={childItem}
          className="text-4xl md:text-5xl font-bold mb-4 text-purple-400"
        >
          Get In Touch
        </motion.h2>

        <motion.p
          variants={childItem}
          className="text-gray-300 mb-8 max-w-xl"
        >
          Have a question, project idea, or just want to say hi? I'd love to hear from you!
        </motion.p>

        {/* Contact Form */}
        <motion.form
          variants={childItem}
          action="https://formspree.io/f/yourFormID"
          method="POST"
          className="flex flex-col gap-4 w-full max-w-xl"
        >
          <input
            type="text"
            name="name"
            required
            placeholder="Your Name"
            className="p-3 rounded-xl bg-[#1a1a2e] text-white 
                       focus:outline-none focus:ring-2 focus:ring-purple-500
                       transition-all duration-300 hover:bg-[#272738]"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Your Email"
            className="p-3 rounded-xl bg-[#1a1a2e] text-white 
                       focus:outline-none focus:ring-2 focus:ring-purple-500
                       transition-all duration-300 hover:bg-[#272738]"
          />
          <textarea
            name="message"
            required
            rows="5"
            placeholder="Your Message"
            className="p-3 rounded-xl bg-[#1a1a2e] text-white 
                       focus:outline-none focus:ring-2 focus:ring-purple-500
                       transition-all duration-300 hover:bg-[#272738]"
          ></textarea>

          {/* Button with hover glow */}
          <button
            type="submit"
            className="bg-gradient-to-r from-purple-600 to-sky-500 
                       hover:from-purple-500 hover:to-sky-400
                       text-white font-semibold py-3 px-6 rounded-xl 
                       transition-all duration-300 shadow-lg shadow-purple-500/30
                       hover:shadow-[0_0_25px_rgba(168,85,247,0.5)]"
          >
            Send Message
          </button>
        </motion.form>
      </motion.div>
    </section>
  );
}
