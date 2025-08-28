'use client';
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Portfolio', id: 'portfolio' },
    { name: 'Education', id: 'education' },
    { name: 'Blog', id: 'blog' },
    { name: 'Contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      let current = 'home';
      const scrollPos = window.scrollY + window.innerHeight / 3;

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
  }, [navLinks]);

  return (
    <nav
      className={`fixed w-full top-0 z-50 
                 bg-[#1a1a2e]/70 backdrop-blur-md 
                 text-white px-6 py-4 shadow-lg`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo / Name */}
        <a
          href="#home"
          className="text-2xl font-bold"
          style={{ color: '#34b0f3' }}
        >
          Tigin Tom
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <li key={link.id} className="relative group">
              <a
                href={`#${link.id}`}
                className={`relative ${
                  activeLink === link.id ? 'text-sky-400' : 'text-white'
                } transition-colors duration-300`}
              >
                {link.name}
                {/* Center-to-sides underline */}
                <span
                  className={`absolute bottom-0 left-1/2 w-0 h-[2px] bg-sky-400 
                             -translate-x-1/2 group-hover:w-full 
                             transition-all duration-300 origin-center
                             ${activeLink === link.id ? 'w-full' : ''}`}
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
        <ul className="md:hidden mt-4 space-y-4 text-center">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={() => setIsOpen(false)}
                className={`block ${
                  activeLink === link.id ? 'text-sky-400' : 'text-white'
                } transition-colors duration-300`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
