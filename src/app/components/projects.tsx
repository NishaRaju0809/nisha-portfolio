'use client';

import { motion, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { projects } from '../../data/projects';

function truncate(text: string, max = 160) {
  const flat = text.replace(/\n+/g, ' ').trim();
  if (flat.length <= max) return flat;
  return flat.slice(0, max).trimEnd() + '…';
}

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    const cards = document.querySelectorAll<HTMLElement>('.glass-card');
    const handlers: Array<() => void> = [];

    cards.forEach((card) => {
      const onMove = (e: MouseEvent) => {
        const rect = card.getBoundingClientRect();
        card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
        card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
      };
      card.addEventListener('mousemove', onMove);
      handlers.push(() => card.removeEventListener('mousemove', onMove));
    });

    return () => handlers.forEach((off) => off());
  }, []);

  return (
    <section id="projects" ref={ref} className="relative pt-section pb-section px-gutter">
      <div className="max-w-7xl mx-auto">
        <motion.header
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="relative z-10 max-w-2xl mb-12"
        >
          <h2 className="font-display text-[40px] sm:text-[56px] lg:text-[64px] font-extrabold leading-none mb-3 text-on-surface">
            Selected <span className="text-tertiary text-glow">Works</span>
          </h2>
          <p className="text-lg text-on-surface-variant max-w-xl leading-relaxed">
            A showcase of my recent work and side projects — focused on scalable
            mobile apps, elegant code, and playful user experiences.
          </p>
        </motion.header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 pt-6">
          {projects.map((project, index) => (
            <motion.article
              key={project.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.08 }}
              className={`glass-card p-6 rounded-xl relative group ${
                project.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <Link
                href={`/projects/${project.slug}`}
                className="absolute -top-6 -right-2 z-20 block w-32 h-24 rounded-lg overflow-hidden border border-secondary/25 shadow-[0_12px_28px_-8px_rgba(0,0,0,0.55)] bg-surface-container transition-transform duration-500 group-hover:-translate-y-1"
                aria-label={`View ${project.title} details`}
              >
                <span className="relative block h-full w-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="128px"
                    className="object-cover"
                  />
                </span>
              </Link>

              <div className="mb-6 pr-20">
                <span className="font-label text-[12px] font-bold tracking-[0.1em] uppercase text-tertiary bg-tertiary/10 px-3 py-1 rounded mb-3 inline-block">
                  {project.category}
                </span>
                <h3 className="font-headline text-2xl font-semibold text-on-surface mb-1">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="hover:text-tertiary transition-colors"
                  >
                    {project.title}
                  </Link>
                </h3>
              </div>

              <p className="font-body text-base text-on-surface-variant mb-6 leading-relaxed">
                {truncate(project.description)}
              </p>

              <div className="flex flex-wrap gap-3 mb-12">
                {project.tags.slice(0, 4).map((tag) => (
                  <span
                    key={tag}
                    className="font-code text-sm text-secondary bg-secondary/10 px-3 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <Link
                href={`/projects/${project.slug}`}
                className="brutalist-button inline-flex items-center gap-3 bg-tertiary text-on-primary font-bold px-6 py-3 rounded-lg w-full justify-center transition-all"
              >
                <span
                  className="material-symbols-outlined"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  {project.icon}
                </span>
                View project
              </Link>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="mt-section text-center"
        >
          <a
            href="https://github.com/nisharaju0809"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-tertiary text-on-tertiary font-bold px-8 py-4 rounded-lg neo-brutalist-shadow transition-all"
          >
            <span className="material-symbols-outlined">code</span>
            View All Projects on GitHub
            <span className="material-symbols-outlined">arrow_forward</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
