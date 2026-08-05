'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaBars, FaTimes } from 'react-icons/fa';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/#about' },
  { name: 'Skills', href: '/#skills' },
  { name: 'Experience', href: '/#experience' },
  { name: 'Projects', href: '/#projects' },
  { name: 'Contact', href: '/#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('Home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navItems
        .filter((item) => item.href.includes('#'))
        .map((item) => {
          const hash = item.href.slice(item.href.indexOf('#'));
          return {
            name: item.name,
            el: document.querySelector(hash),
          };
        });

      let current = 'Home';
      for (const section of sections) {
        if (!section.el) continue;
        const rect = section.el.getBoundingClientRect();
        if (rect.top <= 120) current = section.name;
      }
      setActive(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
        scrolled
          ? 'bg-surface/80 backdrop-blur-md border-secondary/20 shadow-sm'
          : 'bg-surface/50 backdrop-blur-sm border-transparent'
      }`}
    >
      <div className="flex justify-between items-center px-gutter py-3 max-w-7xl mx-auto">
        <a href="/" className="h-10 md:h-12 flex items-center" aria-label="Nisha Raju Home">
          <Image
            src="/images/logo.png"
            alt="Nisha Raju Logo"
            width={180}
            height={48}
            className="h-full w-auto object-contain"
            priority
          />
        </a>

        <div className="hidden md:flex items-center gap-12">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`font-body text-base transition-colors ${
                active === item.name
                  ? 'text-tertiary font-bold border-b-2 border-tertiary pb-1'
                  : 'text-on-surface-variant hover:text-tertiary'
              }`}
            >
              {item.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="/Nisha_Raju_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex bg-tertiary text-on-tertiary font-bold px-6 py-1 rounded-lg neo-brutalist-shadow hover:translate-x-0.5 hover:translate-y-0.5 transition-all text-sm"
          >
            Resume
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-on-surface-variant hover:text-tertiary transition-colors p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-surface-container border-t border-secondary/10">
          <div className="px-gutter py-6 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`block px-3 py-2 rounded-lg transition-colors ${
                  active === item.name
                    ? 'text-tertiary bg-tertiary/10 font-bold'
                    : 'text-on-surface-variant hover:text-tertiary hover:bg-surface-container-high'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <a
              href="/Nisha_Raju_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="mt-3 block text-center bg-tertiary text-on-tertiary font-bold px-6 py-3 rounded-lg neo-brutalist-shadow"
            >
              Download Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
