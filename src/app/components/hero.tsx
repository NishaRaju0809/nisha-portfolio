'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import Image from 'next/image';

const techStack = [
  { name: 'TYPESCRIPT', icon: 'terminal' },
  { name: 'REACT NATIVE', icon: 'smartphone' },
  { name: 'EXPO', icon: 'rocket_launch' },
  { name: 'NEXT.JS', icon: 'bolt' },
  { name: 'FIREBASE', icon: 'database' },
  { name: 'REDUX', icon: 'sync' },
  { name: 'OPENAI', icon: 'psychology' },
  { name: 'TAILWIND', icon: 'brush' },
];

export default function Hero() {
  const imgWrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const x = (e.clientX - window.innerWidth / 2) / 50;
      const y = (e.clientY - window.innerHeight / 2) / 50;
      if (imgWrapRef.current) {
        imgWrapRef.current.style.transform = `translate(${x}px, ${y}px) rotate(${x / 10}deg)`;
      }
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <section className="pt-[120px] pb-section">
      <div className="max-w-7xl mx-auto px-gutter grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[70vh]">
        <div className="lg:col-span-7 flex flex-col items-start gap-6 z-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-1 px-3 py-1 bg-tertiary/10 border border-tertiary/20 rounded-full text-tertiary font-label text-[12px] font-bold tracking-[0.1em] uppercase"
          >
            <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse" />
            Available for projects
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-[40px] sm:text-[56px] lg:text-[64px] font-extrabold leading-[1.1] tracking-[-0.02em] text-on-surface"
          >
            <span className="block text-tertiary text-glow mb-1">Nisha Raju</span>
            Building <span className="text-tertiary">Tomorrow</span> with Code &amp;
            Creativity
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-body text-lg text-on-surface-variant max-w-xl leading-relaxed"
          >
            Software Engineer with{' '}
            <span className="text-tertiary font-semibold">3 years</span> shipping
            production{' '}
            <span className="text-tertiary font-semibold">React Native</span> apps
            across iOS and Android in healthcare, social, and fintech domains.
            Skilled in TypeScript, Redux Toolkit, Firebase, and CI/CD with Expo/EAS
            — plus{' '}
            <span className="text-secondary font-semibold">AI API integration</span>{' '}
            and real-time services.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-6 mt-3"
          >
            <a
              href="#projects"
              className="bg-tertiary text-on-tertiary px-8 py-4 rounded-lg font-bold text-lg neo-brutalist-shadow flex items-center gap-3 transition-all group"
            >
              View My Work
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </a>
            <a
              href="/Nisha_Raju_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-secondary text-secondary px-8 py-4 rounded-lg font-bold text-lg hover:bg-secondary/10 transition-colors flex items-center gap-3"
            >
              Download Resume
              <span className="material-symbols-outlined">download</span>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex gap-3 mt-2"
          >
            {[
              {
                href: 'https://www.linkedin.com/in/nisha-raju/',
                icon: FaLinkedin,
                label: 'LinkedIn',
              },
              {
                href: 'https://github.com/NishaRaju0809',
                icon: FaGithub,
                label: 'GitHub',
              },
              {
                href: 'mailto:nisharaju961@gmail.com',
                icon: FaEnvelope,
                label: 'Email',
              },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith('http') ? '_blank' : undefined}
                rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                aria-label={social.label}
                className="glass-panel p-3 rounded-xl text-on-surface-variant hover:text-tertiary transition-colors"
              >
                <social.icon className="text-xl" />
              </a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="grid grid-cols-3 gap-3 sm:gap-6 w-full max-w-lg mt-12"
          >
            {[
              { value: '3', label: 'Years' },
              { value: 'iOS · Android', label: 'Platforms' },
              { value: 'AI', label: 'Integrations' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="glass-panel p-3 sm:p-4 rounded-xl text-center flex flex-col items-center justify-center min-h-[88px]"
              >
                <div className="font-headline text-sm sm:text-lg font-semibold text-tertiary leading-snug">
                  {stat.value}
                </div>
                <div className="font-code text-[10px] sm:text-xs opacity-70 uppercase tracking-widest mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.25 }}
          className="lg:col-span-5 relative flex justify-center items-center"
        >
          <div className="relative w-full aspect-square max-w-md">
            <div className="absolute inset-0 bg-tertiary/20 rounded-full blur-[100px] animate-pulse" />
            <div className="absolute -top-10 -right-10 glass-panel p-6 rounded-xl rotate-12 z-0 hidden md:block">
              <div className="font-code text-sm text-tertiary">
                {'<div class="future">'}
              </div>
            </div>
            <div className="absolute -bottom-5 -left-10 glass-panel p-6 rounded-xl -rotate-6 z-0 hidden md:block">
              <div className="font-code text-sm text-secondary">
                {"import { magic } from 'ui'"}
              </div>
            </div>
            <div className="relative z-10 w-full h-full flex items-center justify-center">
              <div
                ref={imgWrapRef}
                className="relative w-full h-full transition-transform duration-300"
              >
                <Image
                  src="/images/illustrations/hero-dev.png"
                  alt="Developer illustration"
                  fill
                  priority
                  className="object-contain drop-shadow-[0_0_40px_rgba(113,216,200,0.25)]"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="mt-section overflow-hidden py-12 bg-surface-container-lowest/50 backdrop-blur-sm border-y border-secondary/10">
        <div className="flex whitespace-nowrap gap-20 animate-marquee items-center opacity-50 hover:opacity-100 transition-opacity">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex gap-20 items-center">
              {techStack.map((tech) => (
                <span
                  key={`${copy}-${tech.name}`}
                  className="font-label text-2xl font-bold tracking-[0.1em] flex items-center gap-3 text-on-surface"
                >
                  <span className="material-symbols-outlined text-tertiary">
                    {tech.icon}
                  </span>
                  {tech.name}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
