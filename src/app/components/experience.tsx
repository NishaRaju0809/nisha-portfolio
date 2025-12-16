'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaBriefcase, FaMapMarkerAlt, FaCalendar } from 'react-icons/fa';
import { HiCheckCircle } from 'react-icons/hi';

const experiences = [
  {
    title: 'Software Engineer',
    company: 'Explore Crest',
    location: 'Remote (Canada)',
    period: 'April 2025 – Present',
    current: true,
    achievements: [
      'Architected and developed innovative mobile features including Tinder-like swiping animations to enhance user engagement and interaction',
      'Implemented In-App Purchase (IAP) functionality to drive revenue growth and improve monetization strategy',
      'Built real-time chat system using SignalR, enabling seamless communication between users',
      'Successfully deployed applications to both Apple App Store and Google Play Store, managing the entire release process',
    ],
  },
  // {
  //   title: 'Software Engineer',
  //   company: 'Daxonix Infotech Pvt. Ltd.',
  //   location: 'Surat, India',
  //   period: 'January 2025 – January 2025',
  //   current: false,
  //   achievements: [
  //     'Developed and maintained multiple React Native applications ensuring consistent cross-platform functionality for Android and iOS',
  //     'Implemented RESTful API integrations and advanced state management solutions using Redux and Context API',
  //     'Optimized app performance by 20% through identifying and resolving platform-specific issues and enhancing responsiveness',
  //   ],
  // },
  {
    title: 'Software Engineer',
    company: 'Diligentic Infotech Pvt. Ltd.',
    location: 'Hoshiarpur, India',
    period: 'February 2023 – August 2024',
    current: false,
    achievements: [
      'Developed and launched 3 full-featured React Native apps achieving 99.8% crash-free rate, 10K+ downloads, and 4.6+ star ratings',
      'Reduced app loading time by 35% through code optimization and implementing efficient state management with Redux',
      'Collaborated with cross-functional teams to implement 15+ new features that increased user engagement by 28%',
      'Architected and implemented RESTful API integrations that improved data synchronization speed by 40%',
    ],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        damping: 15,
        stiffness: 100,
      },
    },
  };

  return (
    <section
      id="experience"
      ref={ref}
      className="relative py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900"
    >

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 -left-20 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 -right-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Professional Experience
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full mb-6" />
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A journey of growth, innovation, and impact
          </p>
        </motion.div>


        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="relative"
        >

          <div className="hidden lg:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500" />


          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="relative"
              >

                <div className="hidden lg:flex absolute left-8 -translate-x-1/2 items-center justify-center">
                  <motion.div
                    className={`w-4 h-4 rounded-full ${
                      exp.current
                        ? 'bg-gradient-to-br from-indigo-500 to-purple-500 shadow-lg shadow-indigo-500/50'
                        : 'bg-gradient-to-br from-purple-500 to-pink-500'
                    }`}
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                  />
                  

                  {exp.current && (
                    <motion.div
                      className="absolute w-4 h-4 rounded-full bg-indigo-500"
                      animate={{
                        scale: [1, 2, 1],
                        opacity: [0.5, 0, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    />
                  )}
                </div>


                <div className="lg:ml-20 group">
                  <motion.div
                    className="relative p-8 rounded-3xl bg-white dark:bg-slate-800 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 dark:border-slate-700 overflow-hidden"
                    whileHover={{ y: -5 }}
                  >

                    {exp.current && (
                      <div className="absolute top-6 right-6 flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-sm font-semibold rounded-full shadow-lg">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                        </span>
                        Current
                      </div>
                    )}


                    <div className="mb-6">
                      <div className="flex items-start gap-3 mb-3">
                        <div className="p-3 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 text-white shadow-lg group-hover:shadow-xl transition-shadow">
                          <FaBriefcase className="text-xl" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">
                            {exp.title}
                          </h3>
                          <h4 className="text-lg font-semibold text-indigo-600 dark:text-indigo-400">
                            {exp.company}
                          </h4>
                        </div>
                      </div>


                      <div className="flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-400">
                        <div className="flex items-center gap-2">
                          <FaMapMarkerAlt className="text-indigo-500" />
                          <span>{exp.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <FaCalendar className="text-indigo-500" />
                          <span>{exp.period}</span>
                        </div>
                      </div>
                    </div>


                    <div className="space-y-3">
                      {exp.achievements.map((achievement, achIndex) => (
                        <motion.div
                          key={achIndex}
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{
                            duration: 0.5,
                            delay: index * 0.2 + achIndex * 0.1 + 0.3,
                          }}
                          className="flex items-start gap-3 group/item"
                        >
                          <HiCheckCircle className="text-indigo-500 text-xl flex-shrink-0 mt-0.5 group-hover/item:text-purple-500 transition-colors" />
                          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                            {achievement}
                          </p>
                        </motion.div>
                      ))}
                    </div>


                    <div className="absolute -bottom-12 -right-12 w-40 h-40 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl group-hover:opacity-100 opacity-0 transition-opacity duration-300" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}