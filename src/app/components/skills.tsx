'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiGit,
  SiFigma,
  SiRedux,
  SiFirebase,
  SiExpo,
} from 'react-icons/si';
import { FiCode, FiTool, FiSmartphone, FiCpu } from 'react-icons/fi';
import { MdOutlineHub } from 'react-icons/md';

const skillCategories = [
  {
    title: 'Mobile Development',
    icon: FiSmartphone,
    accent: 'mint',
    skills: [
      { name: 'React Native', icon: SiReact },
      { name: 'Expo / EAS', icon: SiExpo },
      { name: 'Reanimated', icon: SiReact },
      { name: 'Gesture Handler', icon: SiReact },
    ],
  },
  {
    title: 'Frontend Development',
    icon: FiCode,
    accent: 'lavender',
    skills: [
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'JavaScript', icon: SiJavascript },
      { name: 'React.js', icon: SiReact },
      { name: 'Next.js', icon: SiNextdotjs },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
    ],
  },
  {
    title: 'State, Backend & Integrations',
    icon: MdOutlineHub,
    accent: 'mint',
    skills: [
      { name: 'Redux Toolkit', icon: SiRedux },
      { name: 'Firebase', icon: SiFirebase },
      { name: 'REST APIs', icon: FiCode },
      { name: 'SignalR', icon: MdOutlineHub },
      { name: 'Stream Chat', icon: MdOutlineHub },
      { name: 'OpenAI API', icon: FiCpu },
    ],
  },
  {
    title: 'DevOps & Tools',
    icon: FiTool,
    accent: 'lavender',
    skills: [
      { name: 'GitHub Actions', icon: SiGit },
      { name: 'EAS / OTA', icon: SiExpo },
      { name: 'Git', icon: SiGit },
      { name: 'Figma', icon: SiFigma },
      { name: 'i18next', icon: FiCode },
      { name: 'Cursor / Copilot', icon: FiCpu },
    ],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="skills"
      ref={ref}
      className="relative py-section px-gutter bg-surface-container-lowest/40"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-section"
        >
          <h2 className="font-headline text-[32px] sm:text-[40px] font-bold mb-3 text-on-surface">
            Hard Skills
          </h2>
          <div className="w-24 h-1 bg-tertiary mx-auto neo-brutal-shadow-mint mb-3" />
          <p className="text-lg text-on-surface-variant">
            The technical building blocks of my workflow.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className={`glass-panel p-6 md:p-8 rounded-xl ${
                index === 0 || index === 2
                  ? 'md:col-span-2 neo-brutal-shadow-mint'
                  : 'neo-brutal-shadow-lavender'
              }`}
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    category.accent === 'mint'
                      ? 'bg-tertiary/10 text-tertiary'
                      : 'bg-secondary/10 text-secondary'
                  }`}
                >
                  <category.icon className="text-xl" />
                </div>
                <h3 className="font-headline text-2xl font-semibold text-on-surface">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className={`inline-flex items-center gap-2 px-6 py-1 rounded-full font-code text-sm border ${
                      category.accent === 'mint'
                        ? 'bg-tertiary/10 text-tertiary border-tertiary/20'
                        : 'bg-secondary/10 text-secondary border-secondary/20'
                    }`}
                  >
                    <skill.icon className="text-base" />
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="md:col-span-2 glass-panel p-6 md:p-8 rounded-xl neo-brutal-shadow-mint flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
          >
            <div className="max-w-md">
              <h4 className="font-headline text-2xl font-semibold mb-3 text-on-surface">
                Available for Collaboration
              </h4>
              <p className="text-on-surface-variant">
                Open to React Native and full-stack roles — healthcare, social,
                and fintech experience with AI and real-time systems.
              </p>
            </div>
            <a
              href="#contact"
              className="bg-tertiary text-on-tertiary px-8 py-4 rounded-xl neo-brutal-shadow-mint font-bold hover:scale-105 active:scale-95 transition-all whitespace-nowrap"
            >
              Let&apos;s Talk
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.45 }}
            className="glass-panel p-6 md:p-8 rounded-xl neo-brutal-shadow-lavender"
          >
            <h4 className="font-headline text-2xl font-semibold mb-6 text-on-surface">
              Also Comfortable With
            </h4>
            <ul className="space-y-3 text-on-surface-variant">
              <li className="flex items-center gap-1">
                <span className="material-symbols-outlined text-secondary text-lg">
                  check_circle
                </span>
                Google Maps API &amp; Mixpanel
              </li>
              <li className="flex items-center gap-1">
                <span className="material-symbols-outlined text-secondary text-lg">
                  check_circle
                </span>
                WebSockets &amp; TestFlight / Play Console
              </li>
              <li className="flex items-center gap-1">
                <span className="material-symbols-outlined text-secondary text-lg">
                  check_circle
                </span>
                Redux Saga &amp; Context API
              </li>
            </ul>
            <div className="mt-6 text-secondary font-label text-[12px] font-bold tracking-[0.1em] uppercase">
              Vibe: Ship Fast, Stay Stable
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
