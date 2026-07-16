'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const experiences = [
  {
    title: 'Software Engineer',
    company: 'Explore Crest',
    location: 'Canada · Remote',
    period: 'Apr 2025 – Present',
    current: true,
    icon: 'rocket_launch',
    achievements: [
      'Architected scalable React Native features across iOS and Android, reducing crash rate and improving cross-platform stability in production.',
      'Integrated REST APIs and SignalR real-time services, enabling low-latency synchronized experiences for active users.',
      'Optimised Redux Toolkit state management, resolving critical performance bottlenecks and improving screen load times.',
      'Implemented CI/CD pipelines with GitHub Actions + EAS Build, enabling OTA updates and faster release cycles.',
    ],
  },
  {
    title: 'Software Engineer',
    company: 'Diligentic Infotech Pvt. Ltd.',
    location: 'Hoshiarpur, India',
    period: 'Feb 2023 – Aug 2024',
    current: false,
    icon: 'auto_awesome',
    achievements: [
      'Boosted data processing speed by 40% by re-engineering core algorithms across multiple React Native apps.',
      'Refactored legacy React Native codebase, reducing bug reports by 20% and improving maintainability.',
      'Delivered full multilingual support (EN, AR, RU, HE) with complete RTL/LTR layout handling using i18next.',
    ],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" ref={ref} className="relative py-section px-gutter">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-section"
        >
          <h2 className="font-headline text-[32px] sm:text-[40px] font-bold mb-3 text-on-surface">
            My Journey
          </h2>
          <div className="w-24 h-1 bg-tertiary mx-auto neo-brutal-shadow-mint mb-3" />
          <p className="text-lg text-on-surface-variant">
            A journey of growth, innovation, and impact
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 glow-line rounded-full opacity-30 hidden md:block" />

          {experiences.map((exp, index) => {
            const isLeft = index % 2 === 0;
            const accent = exp.current ? 'tertiary' : 'secondary';

            return (
              <motion.div
                key={`${exp.company}-${exp.period}`}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.15 }}
                className="relative z-10 flex flex-col md:flex-row items-center mb-section group"
              >
                {isLeft ? (
                  <>
                    <div className="flex-1 md:text-right md:pr-12 mb-6 md:mb-0 w-full">
                      <ExperienceCard exp={exp} accent={accent} />
                    </div>
                    <TimelineDot accent={accent} icon={exp.icon} />
                    <div className="flex-1 md:pl-12 hidden md:block" />
                  </>
                ) : (
                  <>
                    <div className="flex-1 md:pr-12 hidden md:block" />
                    <TimelineDot accent={accent} icon={exp.icon} />
                    <div className="flex-1 md:pl-12 mt-6 md:mt-0 w-full">
                      <ExperienceCard exp={exp} accent={accent} />
                    </div>
                  </>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function TimelineDot({
  accent,
  icon,
}: {
  accent: string;
  icon: string;
}) {
  const isMint = accent === 'tertiary';
  return (
    <div
      className={`w-12 h-12 rounded-full bg-surface-container-high border-2 flex items-center justify-center z-20 shrink-0 ${
        isMint
          ? 'border-tertiary shadow-[0_0_10px_rgba(113,216,200,0.8)]'
          : 'border-secondary shadow-[0_0_10px_rgba(187,197,240,0.8)]'
      }`}
    >
      <span
        className={`material-symbols-outlined text-sm ${
          isMint ? 'text-tertiary' : 'text-secondary'
        }`}
      >
        {icon}
      </span>
    </div>
  );
}

function ExperienceCard({
  exp,
  accent,
}: {
  exp: (typeof experiences)[0];
  accent: string;
}) {
  const isMint = accent === 'tertiary';

  return (
    <div
      className={`glass-panel p-6 rounded-xl inline-block w-full text-left ${
        isMint ? 'neo-brutal-shadow-mint' : 'neo-brutal-shadow-lavender'
      } transform group-hover:-translate-y-2 transition-transform`}
    >
      <div className="flex flex-wrap items-center gap-2 mb-1">
        <span
          className={`font-label text-[12px] font-bold tracking-[0.1em] uppercase ${
            isMint ? 'text-tertiary' : 'text-secondary'
          }`}
        >
          {exp.period}
        </span>
        {exp.current && (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-tertiary/15 text-tertiary text-xs font-bold rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-tertiary animate-pulse" />
            Current
          </span>
        )}
      </div>
      <h3 className="font-headline text-2xl font-semibold mb-1 text-on-surface">
        {exp.title}
      </h3>
      <p
        className={`font-semibold mb-1 ${
          isMint ? 'text-tertiary' : 'text-secondary'
        }`}
      >
        {exp.company}
      </p>
      <p className="text-sm text-on-surface-variant mb-6 font-code">
        {exp.location}
      </p>
      <ul className="space-y-2">
        {exp.achievements.map((item) => (
          <li
            key={item}
            className="flex items-start gap-2 text-on-surface-variant text-sm leading-relaxed"
          >
            <span
              className={`material-symbols-outlined text-base mt-0.5 shrink-0 ${
                isMint ? 'text-tertiary' : 'text-secondary'
              }`}
            >
              check_circle
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
