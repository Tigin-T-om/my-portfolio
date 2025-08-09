"use client";
import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

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

  return (
    <section
      id="home"
      className={`w-full min-h-screen flex flex-col md:flex-row items-center justify-center
                  px-8 md:px-16 lg:px-24
                  bg-gradient-to-b from-[#0d0c1d] via-[#191730] to-[#0f0e1a]
                  text-white font-poppins transition-all duration-500 scroll-smooth`}
    >
      {/* Left Side */}
      <div
        className={`flex-1 text-center md:text-left space-y-5
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
          {[
            { Icon: FaGithub, link: "https://github.com/Tigin-T-om" },
            { Icon: FaLinkedin, link: "https://linkedin.com/in/your-profile" },
            { Icon: FaTwitter, link: "https://twitter.com/yourhandle" },
          ].map(({ Icon, link }, i) => (
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

      {/* Right Side with Image */}
      <div className="flex-1 flex justify-center mt-10 md:mt-0 animate-slide-in-right opacity-0 animate-delay-500">
        <img
          src="/dev.jpg"
          alt="Developer Illustration"
          className="w-[420px] h-auto object-contain rounded-full shadow-xl transition-transform duration-500"
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
