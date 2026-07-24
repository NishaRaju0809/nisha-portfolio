'use client';

import { motion, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';
import Image from 'next/image';

const projects = [
  {
    title: 'DriftHome',
    tags: [
      'React Native',
      'Reanimated',
      'Gesture Handler',
      'SignalR',
      'Google Maps',
      'Next.js',
    ],
    image: '/images/drifthome.png',
    demo: 'https://play.google.com/store/apps/details?id=com.laddr',
    category: 'MOBILE',
    icon: 'home',
    featured: true,
    description:
      'Property discovery lacked engagement; users had no intuitive way to browse listings or communicate with hosts in real time.\n\nBuilt Tinder-style swipe property browsing with custom Reanimated animations and integrated SignalR real-time chat — boosting user engagement 80% and interaction rates 90%.',
  },
  {
    title: 'Squad Accountability Tracker',
    tags: ['React Native', 'Firebase', 'OpenAI API', 'Stream Chat'],
    image: '/images/freelanz.png',
    category: 'MOBILE · AI',
    icon: 'groups',
    featured: true,
    description:
      'Existing accountability apps lacked intelligent feedback loops and seamless group communication, reducing long-term user commitment.\n\nDeveloped AI-powered accountability features using OpenAI API; integrated Stream Chat for real-time group messaging and Firebase for cross-device sync — improving goal completion rates.',
  },
  {
    title: 'EcoAgeing',
    image: '/images/ecoageing.png',
    category: 'MOBILE',
    tags: ['React Native', 'Firebase', 'i18next', 'Push Notifications'],
    demo: 'https://play.google.com/store/apps/details?id=com.ecoaging',
    icon: 'eco',
    description:
      'Climate education platforms struggled with low retention and poor accessibility across language barriers and demographics.\n\nBuilt a gamified multilingual platform with quizzes, badges, push notifications, and i18next localization — achieving 80% user retention improvement.',
  },
  {
    title: 'ShopEase',
    description:
      'ShopEase is an e-commerce web application built to provide users with a fast, secure, and seamless online shopping experience.\n\nKey Features:\n• User authentication and profile management.\n• Product listing with search and category filtering.\n• Add to cart, wishlist, and secure checkout using Stripe.\n• Firebase integration for backend and order data management.\n• Responsive design optimized for all devices.\n\nOutcome: Modern, responsive e-commerce platform with smooth payment integration and scalable architecture.',
    image: '/images/shopEase.png',
    tags: ['React.js', 'Tailwind CSS', 'Firebase', 'Stripe API'],
    category: 'WEB · E-COMMERCE',
    icon: 'shopping_bag',
    featured: false,
  },
  {
    title: 'Food Recipe App',
    description:
      'The Food Recipe App is a beautifully designed mobile application that allows users to explore, upload, and share their favorite recipes with a vibrant food community.\n\nKey Features:\n• User-Uploaded Recipes with images, ingredients, and step-by-step instructions.\n• Recipe Discovery and social sharing.\n• Secure login using Google and Facebook.\n• Firebase Firestore for recipe data and images.\n\nOutcome: Fully functional cross-platform mobile app with Firebase integration and social authentication.',
    image: '/images/foodRecipe.png',
    tags: ['React Native', 'Firebase', 'Google login', 'Dynamic linking'],
    category: 'MOBILE',
    icon: 'restaurant',
  },
  {
    title: 'Speeching Arts',
    description:
      'Speeching Arts is a tourist assistance mobile application developed for Milan. Originally built with WordPress and converted into a mobile app using Appilix.\n\nProvides guides and recommendations for tourists, with WordPress CMS for easy content updates and a user-friendly navigation experience.',
    image: '/images/speechingArts.png',
    tags: ['WordPress', 'Appilix'],
    category: 'MOBILE',
    icon: 'explore',
  },
];

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
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.08 }}
              className={`glass-card p-6 rounded-xl relative group ${
                project.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="absolute -top-6 -right-2 w-28 h-20 transform group-hover:-translate-y-1 transition-transform duration-500 z-20 rounded-lg overflow-hidden border border-secondary/20 shadow-lg bg-surface-container">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="mb-6 pr-16">
                <span className="font-label text-[12px] font-bold tracking-[0.1em] uppercase text-tertiary bg-tertiary/10 px-3 py-1 rounded mb-3 inline-block">
                  {project.category}
                </span>
                <h3 className="font-headline text-2xl font-semibold text-on-surface mb-1">
                  {project.title}
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

              {'demo' in project && project.demo ? (
                <a
                  className="brutalist-button inline-flex items-center gap-3 bg-tertiary text-on-primary font-bold px-6 py-3 rounded-lg w-full justify-center transition-all"
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span
                    className="material-symbols-outlined"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    {project.icon}
                  </span>
                  View on Play Store
                </a>
              ) : (
                <div className="brutalist-button inline-flex items-center gap-3 bg-secondary-container text-on-secondary-container font-bold px-6 py-3 rounded-lg w-full justify-center">
                  <span
                    className="material-symbols-outlined"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    {project.icon}
                  </span>
                  Case Study
                </div>
              )}
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
