'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiGit,
  SiFigma,
  SiRedux,
  SiFirebase,
  SiPostman,
} from 'react-icons/si';
import { FiCode, FiDatabase, FiTool, FiSmartphone } from 'react-icons/fi';

const skillCategories = [
  {
    title: 'Mobile Development',
    icon: FiSmartphone,
    color: 'from-indigo-500 to-blue-500',
    skills: [
      { name: 'React Native', icon: SiReact },
      { name: 'Redux', icon: SiRedux },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'JavaScript', icon: SiJavascript },
    ],
  },
  {
    title: 'Frontend Development',
    icon: FiCode,
    color: 'from-purple-500 to-pink-500',
    skills: [
      { name: 'React.js', icon: SiReact },
      { name: 'Next.js', icon: SiNextdotjs },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
      { name: 'TypeScript', icon: SiTypescript },
    ],
  },
  {
    title: 'Backend & Database',
    icon: FiDatabase,
    color: 'from-emerald-500 to-teal-500',
    skills: [
      { name: 'Node.js', icon: SiNodedotjs },
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'Firebase', icon: SiFirebase },
      { name: 'REST APIs', icon: SiPostman },
    ],
  },
  {
    title: 'Tools & Others',
    icon: FiTool,
    color: 'from-orange-500 to-red-500',
    skills: [
      { name: 'Git & GitHub', icon: SiGit },
      { name: 'Figma', icon: SiFigma },
      { name: 'Postman', icon: SiPostman },
    ],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'spring',
        damping: 15,
        stiffness: 100,
      },
    },
  };

  return (
    <section
      id="skills"
      ref={ref}
      className="relative py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Skills & Expertise
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full mb-6" />
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Technologies and tools I work with to build exceptional applications
          </p>
        </motion.div>

        {/* Skills categories grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="group relative p-8 rounded-3xl bg-white dark:bg-slate-800 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 dark:border-slate-700"
            >
              {/* Category header */}
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-4 rounded-2xl bg-gradient-to-br ${category.color} text-white shadow-lg group-hover:shadow-xl transition-shadow`}>
                  <category.icon className="text-2xl" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  {category.title}
                </h3>
              </div>

              {/* Skills grid */}
              <div className="grid grid-cols-2 gap-2 sm:gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 rounded-xl bg-slate-50 dark:bg-slate-700/50 hover:bg-slate-100 dark:hover:bg-slate-700 transition-all duration-300 group/skill min-w-0"
                    whileHover={{ scale: 1.05, y: -2 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{
                      duration: 0.3,
                      delay: categoryIndex * 0.1 + skillIndex * 0.05,
                    }}
                  >
                    <div className={`p-1.5 sm:p-2 rounded-lg bg-gradient-to-br ${category.color} text-white shadow-md group-hover/skill:shadow-lg transition-shadow flex-shrink-0`}>
                      <skill.icon className="text-base sm:text-lg" />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 truncate">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Decorative corner gradient */}
              <div className={`absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br ${category.color} opacity-5 rounded-full blur-2xl group-hover:opacity-10 transition-opacity duration-300`} />
            </motion.div>
          ))}
        </motion.div>

        {/* Additional info section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 grid md:grid-cols-2 gap-6"
        >
          {/* Learning card */}
          <div className="p-8 rounded-3xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-200 dark:border-indigo-800 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
              Always Learning 📚
            </h3>
            <p className="text-slate-600 dark:text-slate-400">
              Continuously expanding my skillset and staying updated with the latest technologies and best practices
            </p>
          </div>

          {/* Experience card */}
          <div className="p-8 rounded-3xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-200 dark:border-purple-800 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
              3+ Years Experience 💼
            </h3>
            <p className="text-slate-600 dark:text-slate-400">
              Hands-on experience building production-ready applications with modern technologies
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}