'use client';

import Image from 'next/image';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full py-section bg-surface-container-lowest border-t border-secondary/10">
      <div className="flex flex-col md:flex-row justify-between items-center px-gutter max-w-7xl mx-auto gap-6">
        <div className="flex flex-col gap-1 items-center md:items-start">
          <a href="#" className="h-10 md:h-12 flex items-center" aria-label="Nisha Raju Home">
            <Image
              src="/images/logo.png"
              alt="Nisha Raju Logo"
              width={180}
              height={48}
              className="h-full w-auto object-contain"
            />
          </a>
          <p className="font-code text-sm text-on-surface-variant">
            © {new Date().getFullYear()} Nisha Raju | Built with Logic &amp; Design
          </p>
        </div>

        <div className="flex gap-12">
          <a
            className="text-on-surface-variant hover:text-tertiary-fixed transition-all hover:scale-105 font-code text-sm"
            href="https://github.com/NishaRaju0809"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            className="text-on-surface-variant hover:text-tertiary-fixed transition-all hover:scale-105 font-code text-sm"
            href="https://www.linkedin.com/in/nisha-raju/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="text-on-surface-variant hover:text-tertiary-fixed transition-all hover:scale-105 font-code text-sm"
            href="mailto:nisharaju961@gmail.com"
          >
            Email
          </a>
        </div>

        <button
          onClick={scrollToTop}
          className="w-12 h-12 flex items-center justify-center rounded-full bg-secondary-container text-on-secondary-container hover:bg-tertiary hover:text-on-tertiary transition-all"
          aria-label="Scroll to top"
          id="scrollToTop"
        >
          <span className="material-symbols-outlined">north</span>
        </button>
      </div>
    </footer>
  );
}
