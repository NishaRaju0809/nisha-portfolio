'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaCss3Alt } from 'react-icons/fa';
import {
  SiHtml5,
  SiJavascript,
  SiExpo,
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiTailwindcss,
} from 'react-icons/si';

const techTiles = [
  {
    Icon: SiReact,
    label: 'React',
    accent: 'mint' as const,
    delay: '0s',
    iconColor: '#61DAFB',
  },
  {
    Icon: SiReact,
    label: 'React Native',
    accent: 'lavender' as const,
    delay: '0.2s',
    iconColor: '#61DAFB',
  },
  {
    Icon: SiJavascript,
    label: 'JavaScript',
    accent: 'mint' as const,
    delay: '0.4s',
    iconColor: '#F7DF1E',
  },
  {
    Icon: SiTypescript,
    label: 'TypeScript',
    accent: 'lavender' as const,
    delay: '0.6s',
    iconColor: '#3178C6',
  },
  {
    Icon: SiHtml5,
    label: 'HTML',
    accent: 'mint' as const,
    delay: '0.8s',
    iconColor: '#E34F26',
  },
  {
    Icon: FaCss3Alt,
    label: 'CSS',
    accent: 'lavender' as const,
    delay: '1s',
    iconColor: '#1572B6',
  },
  {
    Icon: SiNodedotjs,
    label: 'Node.js',
    accent: 'mint' as const,
    delay: '1.2s',
    iconColor: '#339933',
  },
  {
    Icon: SiExpo,
    label: 'Expo',
    accent: 'lavender' as const,
    delay: '1.4s',
    iconColor: '#71d8c8',
  },
  {
    Icon: SiTailwindcss,
    label: 'Tailwind',
    accent: 'mint' as const,
    delay: '1.6s',
    iconColor: '#06B6D4',
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const stats = [
    { value: '3', label: 'Years Experience' },
    { value: 'iOS & Android', label: 'Shipped Apps' },
    { value: 'AI + Realtime', label: 'Integrations' },
  ];

  return (
    <section id="about" ref={ref} className="relative py-section px-gutter">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center"
        >
          <div className="order-2 lg:order-1 z-10">
            <span className="font-label text-[12px] font-bold tracking-[0.1em] uppercase text-tertiary bg-tertiary/10 px-3 py-1 rounded-full inline-block mb-6">
              The Developer Behind The Code
            </span>
            <h2 className="font-headline text-[32px] sm:text-[40px] font-bold mb-6 text-on-surface leading-tight">
              Crafting logic into{' '}
              <span className="text-secondary italic">vibrant experiences.</span>
            </h2>
            <div className="space-y-6 text-on-surface-variant text-lg leading-relaxed max-w-xl">
              <p>
                I&apos;m a{' '}
                <span className="text-tertiary font-semibold">Software Engineer</span>{' '}
                specializing in React Native, mobile, and web application
                development, based in Hoshiarpur, India — with 3 years shipping
                production apps across iOS and Android.
              </p>
              <p>
                I build products in{' '}
                <span className="text-tertiary font-semibold">healthcare</span>,{' '}
                <span className="text-tertiary font-semibold">social</span>, and{' '}
                <span className="text-tertiary font-semibold">fintech</span>{' '}
                domains using React Native, Expo, TypeScript, Redux Toolkit, and
                Firebase — with experience integrating AI APIs and real-time
                services like SignalR and Stream Chat.
              </p>
              <p>
                I&apos;m proficient in modern delivery practices including{' '}
                <span className="text-tertiary font-semibold">
                  CI/CD with GitHub Actions &amp; EAS
                </span>
                , OTA updates, multilingual RTL/LTR support with i18next, and
                polished UI motion with Reanimated &amp; Gesture Handler.
              </p>
            </div>

            <div className="mt-12 flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full glass-panel flex items-center justify-center neo-brutal-shadow-mint mb-3">
                  <span className="material-symbols-outlined text-tertiary">code</span>
                </div>
                <span className="font-label text-[12px] font-bold tracking-[0.1em] uppercase">
                  Craftsman
                </span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full glass-panel flex items-center justify-center neo-brutal-shadow-lavender mb-3">
                  <span className="material-symbols-outlined text-secondary">
                    architecture
                  </span>
                </div>
                <span className="font-label text-[12px] font-bold tracking-[0.1em] uppercase">
                  Architect
                </span>
              </div>
            </div>

            <div className="mt-12 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 h-12 bg-tertiary text-on-tertiary font-bold px-6 rounded-lg neo-brutalist-shadow transition-all"
              >
                Let&apos;s Work Together
                <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
              </a>
              <a
                href="/Nisha_Raju_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 h-12 bg-secondary text-on-secondary font-bold px-6 rounded-lg neo-brutalist-shadow transition-all"
              >
                Resume
                <span className="material-symbols-outlined text-[20px]">download</span>
              </a>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative flex justify-center items-center min-h-[420px] md:min-h-[500px] z-10">
            <div className="glass-panel w-full h-full rounded-xl relative overflow-hidden flex flex-wrap content-center justify-center gap-4 p-6">
              {techTiles.map((tech) => (
                <div
                  key={tech.label}
                  className={`float-anim p-3 glass-panel rounded-xl flex flex-col items-center w-28 h-28 justify-center group hover:scale-110 transition-transform cursor-pointer ${
                    tech.accent === 'mint'
                      ? 'neo-brutal-shadow-mint'
                      : 'neo-brutal-shadow-lavender'
                  }`}
                  style={{ animationDelay: tech.delay }}
                >
                  <div className="w-10 h-10 shrink-0 mb-2 flex items-center justify-center">
                    <tech.Icon
                      size={40}
                      color={tech.iconColor}
                      className="shrink-0"
                    />
                  </div>
                  <span
                    className={`font-code text-xs text-center leading-tight ${
                      tech.accent === 'mint' ? 'text-tertiary' : 'text-secondary'
                    }`}
                  >
                    {tech.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-section"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="glass-panel p-6 rounded-xl text-center neo-brutal-shadow-mint hover:-translate-y-1 transition-transform"
            >
              <div className="font-headline text-3xl font-bold text-tertiary mb-1">
                {stat.value}
              </div>
              <div className="font-code text-sm text-on-surface-variant">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
