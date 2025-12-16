"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FiAward, FiUsers, FiTrendingUp, FiStar } from "react-icons/fi";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    {
      icon: FiAward,
      value: "10+",
      label: "Production Apps",
      color: "from-indigo-500 to-purple-500",
    },
    {
      icon: FiUsers,
      value: "1K+",
      label: "Downloads",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: FiTrendingUp,
      value: "99.8%",
      label: "Crash-Free Rate",
      color: "from-indigo-500 to-blue-500",
    },
    {
      icon: FiStar,
      value: "4.6+",
      label: "Star Rating",
      color: "from-purple-500 to-indigo-500",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100,
      },
    },
  };

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950"
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
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full mb-6" />
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto px-4">
            Passionate about building exceptional digital experiences
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image/Visual Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-indigo-500/20 to-purple-500/20 backdrop-blur-sm border border-slate-200 dark:border-slate-800">
              {/* Gradient overlay with pattern */}
              <img
                src="/photo.jpeg"
                alt="Nisha React Native Developer"
                className="absolute inset-0 w-full h-full object-cover rounded-3xl opacity-90"
              />

              <motion.div
                className="absolute top-8 right-8 w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl rotate-12 opacity-80"
                animate={{
                  y: [0, -20, 0],
                  rotate: [12, 15, 12],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute bottom-8 left-8 w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl -rotate-12 opacity-80"
                animate={{
                  y: [0, 20, 0],
                  rotate: [-12, -15, -12],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              />
            </div>

            {/* Decorative border */}
            <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-3xl opacity-20 blur-xl -z-10" />
          </motion.div>

          {/* Content Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-6"
          >
            <motion.p
              className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed"
            >
              I'm a passionate{" "}
              <span className="font-semibold text-indigo-600 dark:text-indigo-400">
                Software Engineer
              </span>{" "}
              specializing in mobile and web application development, with over
              3 years of experience crafting high-performance, user-centric
              solutions.
            </motion.p>

            <motion.p
              className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed"
            >
              My expertise lies in{" "}
              <span className="font-semibold text-indigo-600 dark:text-indigo-400">
                React Native
              </span>
              ,{" "}
              <span className="font-semibold text-indigo-600 dark:text-indigo-400">
                React.js
              </span>
              , and{" "}
              <span className="font-semibold text-indigo-600 dark:text-indigo-400">
                Next.js
              </span>{" "}
              development. I've successfully delivered 6+ production mobile
              applications with exceptional crash-free rates, impressive user
              ratings, and web experiences optimized for performance and
              accessibility.
            </motion.p>

            <motion.p
              className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed"
            >
              I'm proficient in modern development practices including{" "}
              <span className="font-semibold text-indigo-600 dark:text-indigo-400">
                CI/CD pipelines
              </span>
              ,{" "}
              <span className="font-semibold text-indigo-600 dark:text-indigo-400">
                state management
              </span>{" "}
              with Redux,{" "}
              <span className="font-semibold text-indigo-600 dark:text-indigo-400">
                RESTful API
              </span>{" "}
              integration, and{" "}
              <span className="font-semibold text-indigo-600 dark:text-indigo-400">
                real-time communication
              </span>{" "}
              systems. I thrive in collaborative environments and continuously
              explore emerging technologies to build seamless cross-platform
              experiences.
            </motion.p>

            {/* CTA Button */}
            <motion.div>
              <motion.a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Let's Work Together
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="group relative p-6 rounded-2xl bg-white dark:bg-slate-800 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 dark:border-slate-700 overflow-hidden"
              whileHover={{ y: -8, scale: 1.02 }}
            >
              {/* Gradient background on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
              />

              <div className="relative z-10">
                <div
                  className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${stat.color} text-white mb-4 shadow-lg group-hover:shadow-xl transition-shadow`}
                >
                  <stat.icon className="text-2xl" />
                </div>

                <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-2">
                  {stat.value}
                </h3>

                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {stat.label}
                </p>
              </div>

              {/* Decorative corner */}
              <div
                className={`absolute -bottom-8 -right-8 w-24 h-24 bg-gradient-to-br ${stat.color} opacity-5 rounded-full blur-2xl group-hover:opacity-20 transition-opacity duration-300`}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
