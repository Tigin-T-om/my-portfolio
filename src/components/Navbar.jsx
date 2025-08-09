'use client';
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  // ✅ Updated nav links to match your component order
  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Portfolio', id: 'portfolio' },
    { name: 'Education', id: 'education' },
    { name: 'Blog', id: 'blog' },
    { name: 'Contact', id: 'contact' },
  ];

  // ✅ Highlight active section on scroll (improved logic)
  useEffect(() => {
    const handleScroll = () => {
      let current = 'home';
      const scrollPos = window.scrollY + window.innerHeight / 3; // detect earlier

      navLinks.forEach(link => {
        const section = document.getElementById(link.id);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;

          if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            current = link.id;
          }
        }
      });

      setActiveLink(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 z-50 
                  bg-[#07162a]/80 backdrop-blur-md 
                  text-white px-6 py-4 shadow-lg transition-all duration-300`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo / Name */}
        <a
          href="#home"
          className="text-2xl font-bold hover:text-sky-400 transition-colors duration-300"
        >
          <span className="text-sky-400">T</span>igin <span className="text-sky-400">T</span>om
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-8 font-[Poppins]">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`relative group transition-colors duration-300 ${
                  activeLink === link.id ? 'text-sky-400' : 'text-white'
                }`}
              >
                {link.name}
                <span
                  className={`block h-[2px] bg-sky-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left
                              ${activeLink === link.id ? 'scale-x-100' : ''}`}
                ></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            {isOpen ? <X className="text-white" size={28} /> : <Menu className="text-white" size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden mt-4 space-y-4 text-center font-[Poppins] animate-slide-down">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={() => setIsOpen(false)}
                className={`block transition-colors duration-300 ${
                  activeLink === link.id ? 'text-sky-400' : 'text-white hover:text-sky-400'
                }`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      )}

      <style jsx>{`
        @keyframes slideDown {
          0% {
            opacity: 0;
            transform: translateY(-10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slide-down {
          animation: slideDown 0.3s ease forwards;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
