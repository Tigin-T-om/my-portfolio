"use client";
import { useEffect, useState } from "react";

// SVG Icon Components
const GitHubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const TwitterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616v.064c0 2.299 1.634 4.22 3.797 4.66-.426.115-.875.166-1.334.166-.305 0-.6-.028-.888-.083.618 1.95 2.423 3.37 4.564 3.41-.92.715-2.076 1.14-3.332 1.14-.217 0-.431-.013-.644-.038 1.184.757 2.599 1.205 4.116 1.205 4.931 0 7.633-4.092 7.633-7.633 0-.117 0-.233-.005-.349.524-.378.977-.85 1.336-1.38z" />
  </svg>
);

const roles = ["MCA Student", "Software Developer", "YouTuber", "Tech Enthusiast"];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Typing effect
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
    { Icon: GitHubIcon, link: "https://github.com/Tigin-T-om" },
    { Icon: LinkedinIcon, link: "https://linkedin.com/in/your-profile" },
    { Icon: TwitterIcon, link: "https://twitter.com/yourhandle" },
  ];

  return (
    <section
      id="home"
      className={`relative w-full min-h-screen flex flex-col md:flex-row items-center justify-center
               px-8 md:px-16 lg:px-24
               bg-[#051427] text-white font-poppins 
               transition-all duration-500 scroll-smooth 
               animate-fade-in-scale overflow-hidden`}
    >
      {/* Left Side */}
      <div
        className={`z-10 flex-1 text-center md:text-left space-y-5
                   animate-slide-in-left opacity-0 animate-delay-200
                   pl-4 md:pl-12 lg:pl-20`}
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
          Passionate about software development, cybersecurity, and creating cool things for the web!
        </p>

        {/* Buttons */}
        <div className="flex gap-4 justify-center md:justify-start pt-4">
          <a
            href="/resume.pdf"
            download
            className="relative overflow-hidden bg-white text-[#092558] px-6 py-3 rounded-md font-semibold shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg group"
          >
            <span className="relative z-10">Download Resume</span>
            <span className="absolute inset-0 bg-gradient-to-r from-sky-400 to-blue-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
          </a>
          <a
            href="#contact"
            className="relative overflow-hidden bg-sky-400 text-white px-6 py-3 rounded-md font-semibold shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg group"
          >
            <span className="relative z-10">Contact Me</span>
            <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex gap-6 justify-center md:justify-start text-2xl pt-6 animate-slide-in-bottom opacity-0 animate-delay-700">
          {socialLinks.map(({ Icon, link }, i) => (
            <a
              key={i}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-300 hover:text-sky-400 hover:scale-125 hover:drop-shadow-[0_0_15px_#38bdf8] hover:rotate-12 cursor-pointer"
            >
              <Icon />
            </a>
          ))}
        </div>
      </div>

      {/* Right Side with Plain Image */}
      <div className="z-10 flex-1 flex justify-center mt-10 md:mt-0 animate-slide-in-right opacity-0 animate-delay-500">
        <img
          src="/dev.jpg"
          alt="Developer Illustration"
        />
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes slideInLeft {
          0% { opacity: 0; transform: translateX(-50px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInRight {
          0% { opacity: 0; transform: translateX(50px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInBottom {
          0% { opacity: 0; transform: translateY(50px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInScale {
          0% { opacity: 0; transform: scale(0.95); }
          100% { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in-scale {
          animation: fadeInScale 0.8s ease-out forwards;
        }
        .animate-slide-in-left { animation: slideInLeft 0.8s ease-out forwards; }
        .animate-slide-in-right { animation: slideInRight 0.8s ease-out forwards; }
        .animate-slide-in-bottom { animation: slideInBottom 0.8s ease-out forwards; }
        .animate-delay-200 { animation-delay: 0.2s; }
        .animate-delay-500 { animation-delay: 0.5s; }
        .animate-delay-700 { animation-delay: 0.7s; }
        .animate-blink { animation: blink 1s infinite; }
        @keyframes blink {
          0%, 50%, 100% { opacity: 1; }
          25%, 75% { opacity: 0; }
        }
      `}</style>
    </section>
  );
}
