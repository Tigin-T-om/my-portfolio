// src/components/Contact.jsx
"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative min-h-screen w-full flex flex-col items-center justify-center 
                 px-6 py-24 text-white overflow-hidden"
    >
      {/* Section-specific Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-800/20 rounded-full blur-3xl opacity-30 -z-10"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-800/20 rounded-full blur-3xl opacity-30 -z-10"></div>
      <div className="absolute top-1/2 right-1/3 w-72 h-72 bg-pink-700/20 rounded-full blur-2xl opacity-25 -z-10"></div>

      {/* Animated Wrapper */}
      <motion.div
        className="w-full max-w-4xl flex flex-col items-center text-center z-10"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-purple-400">
          Get In Touch
        </h2>

        <p className="text-gray-300 mb-8 max-w-xl">
          Have a question, project idea, or just want to say hi? I'd love to
          hear from you!
        </p>

        {/* Contact Form */}
        <form
          action="https://formspree.io/f/yourFormID"
          method="POST"
          className="flex flex-col gap-4 w-full max-w-xl"
        >
          <input
            type="text"
            name="name"
            required
            placeholder="Your Name"
            className="p-3 rounded-xl bg-white/10 !bg-white/10 backdrop-blur-md text-white 
             placeholder-gray-400
             focus:outline-none focus:ring-2 focus:ring-purple-500
             border border-transparent focus:border-purple-500"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Your Email"
            className="p-3 rounded-xl bg-white/10 !bg-white/10 backdrop-blur-md text-white 
             placeholder-gray-400
             focus:outline-none focus:ring-2 focus:ring-purple-500
             border border-transparent focus:border-purple-500"
          />
          <textarea
            name="message"
            required
            rows="5"
            placeholder="Your Message"
            className="p-3 rounded-xl bg-white/10 !bg-white/10 backdrop-blur-md text-white 
             placeholder-gray-400
             focus:outline-none focus:ring-2 focus:ring-purple-500
             border border-transparent focus:border-purple-500"
          />

          {/* Button */}
          <button
            type="submit"
            className="bg-gradient-to-r from-purple-600 to-sky-500 
                       text-white font-semibold py-3 px-6 rounded-xl 
                       shadow-lg shadow-purple-500/30 hover:scale-[1.02] transition-all duration-300"
          >
            Send Message
          </button>
        </form>
      </motion.div>
    </section>
  );
}
