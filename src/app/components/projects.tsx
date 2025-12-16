"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FiGithub, FiExternalLink, FiStar } from "react-icons/fi";
import Image from "next/image";

const projects = [
  {
  title: "EcoAgeing Project",
   image: "/images/ecoageing.png",
  tags: ["React Native", "Firebase", "Google login", "Firestore cloud", "Multi language support" ],
  demo: 'https://play.google.com/store/apps/details?id=com.ecoaging',
  description: "The EcoAgeing project is an Erasmus+ KA2 initiative co-funded by the European Union, focused on fostering climate education through intergenerational dialogue.\n\nIt encourages collaboration between young people and senior citizens (aged 50+) to explore, learn, and share knowledge about climate change and environmental protection.\n\nKey Focus:\n• Engage multiple generations in meaningful discussions about sustainability.\n• Promote awareness of climate change and eco-friendly daily habits.\n• Motivate communities to adopt sustainable practices and create lasting impact.\n\nOutcome: EcoAgeing inspires a greener and more sustainable future by connecting generations and encouraging shared learning for environmental protection."
},
{
  title: "DriftHome App",
  tags:[ "React Native","Rest Api integration" ,"Google Login", "Apple Login","Tinder like swiping animation", "Real time chat" ],
   image: "/images/drifthome.png",
   demo:"https://play.google.com/store/apps/details?id=com.laddr",
  description: "DriftHome is a smart home management mobile application designed to help users control and monitor their home devices efficiently from anywhere.\n\nKey Features:\n• Secure user authentication using Google and Apple.\n• Manage and monitor smart home devices in real-time.\n• Notifications for device activity and status updates.\n• Firebase Firestore integration for storing user preferences and device data.\n• Modern and minimal UI design for a smooth user experience.\n\nOutcome: This project demonstrates my ability to build IoT-integrated mobile applications with real-time data handling, authentication, and a clean, user-centric interface."
},
  {
    title: "Food Recipe App",
      description: "The Food Recipe App is a beautifully designed mobile application that allows users to explore, upload, and share their favorite recipes with a vibrant food community.\n\nKey Features:\n• User-Uploaded Recipes: Users can create and upload their own recipes with images, ingredients, and step-by-step instructions.\n• Recipe Discovery: Browse and explore a wide variety of recipes shared by other users.\n• Social Sharing: Easily share recipes across social platforms or with friends.\n• Authentication: Secure login using Google and Facebook for seamless access.\n• Cloud Storage: Integrated with Firebase Firestore for storing recipe data and images efficiently.\n• Interactive UI: Includes a carousel for showcasing top recipes and a smooth browsing experience.\n\nOutcome: This project demonstrates my ability to build a fully functional cross-platform mobile app with Firebase integration, social authentication, and a clean, user-focused interface.",
    image: "/images/foodRecipe.png",
    tags: ["React Native", "Firebase", "Google login", "Dynamic linking"],
    
    featured: true,
  },
  {
    title: "FreelanZ app",
      description: "The FreelanZ App is a modern freelancing platform built with React Native that connects clients and freelancers in a simple and interactive way.\n\nKey Features:\n• User Authentication: Secure login using Google and Apple.\n• Job Posting: Clients can create and publish jobs with detailed descriptions, required skills, and images.\n• Application System: Freelancers can browse and apply for jobs directly through the app.\n• Real-time Chat: Instant messaging between clients and freelancers using SignalR.\n• Notifications: Users receive updates for new messages, job posts, and application status.\n• Multi-language Support: Supports English, Arabic, Hebrew, and Russian using i18next.\n\nOutcome: This project demonstrates my ability to build a scalable mobile freelancing platform with Firebase backend, real-time chat functionality, and multilingual user experience.",
     tags: ["React Native", "Firebase", "Google login", "Real-time Chat", "SignalR", 'StreamChat'],
   image: "/images/freelanz.png",
    featured: true,
  },
  {
    title: "Speeching Arts app",
     description: "Speeching Arts is a tourist assistance mobile application developed for Milan. The app was originally built using WordPress and later converted into a mobile application using Appilix.\n\nKey Features:\n• Provides helpful information, guides, and recommendations for tourists visiting Milan.\n• WordPress used as the CMS for easy content updates and management.\n• Converted into a cross-platform app using Appilix for smooth performance.\n• User-friendly design ensuring easy navigation for travelers.\n\nOutcome: This project showcases my ability to transform a WordPress website into a functional mobile app tailored for tourism and city exploration.",
    image: "/images/speechingArts.png",
    tags: ["WordPress", "Appilix"],
    featured: false,
  },
  {
    title: "Weather Forecast App",
      description: "ShopEase is an e-commerce web application built to provide users with a fast, secure, and seamless online shopping experience.\n\nKey Features:\n• User authentication and profile management.\n• Product listing with search and category filtering.\n• Add to cart, wishlist, and secure checkout using Stripe.\n• Firebase integration for backend and order data management.\n• Responsive design optimized for all devices.\n\nOutcome: This project demonstrates my expertise in developing modern, responsive e-commerce platforms with smooth payment integration and scalable architecture.",
     image: "/images/shopEase.png",
     
       tags: ["React.js", "Tailwind CSS", "Firebase","Stripe API"],
    
    featured: false,
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
    hidden: { y: 50, opacity: 0 },
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
      id="projects"
      ref={ref}
      className="relative py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950"
    >
     
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
       
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full mb-6" />
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A showcase of my recent work and side projects
          </p>
        </motion.div>

        {/* Projects grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.article
              key={index}
              className={`group relative rounded-3xl overflow-hidden bg-white dark:bg-slate-800 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 dark:border-slate-700 ${
                project.featured ? "md:col-span-2" : ""
              }`}
            >
              {project.featured && (
                <div className="absolute top-6 right-6 z-20 px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-sm font-semibold rounded-full shadow-lg flex items-center gap-2">
                  <FiStar className="text-sm" />
                  Featured
                </div>
              )}

              <div
                className={`grid ${
                  project.featured ? "md:grid-cols-2" : "grid-cols-1"
                } gap-0`}
              >
                <div className="relative aspect-video md:aspect-square overflow-hidden bg-gradient-to-br from-indigo-500/20 to-purple-500/20">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-400/30 to-purple-400/30 flex items-center justify-center">
                    <div className="text-6xl text-white/50">
                      {project.title.split(" ")[0][0]}
                    </div>
                  </div>

                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">

                    {!!project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white/90 dark:bg-slate-800/90 rounded-xl hover:bg-white dark:hover:bg-slate-700 transition-colors shadow-lg backdrop-blur-sm"
                        aria-label="View live demo"
                      >
                        <FiExternalLink className="text-slate-700 dark:text-slate-300 text-xl" />
                      </a>
                    )}
                  </div>
                </div>

                <div className="p-8 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 text-sm font-medium text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30 rounded-lg"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="absolute inset-0 rounded-3xl border-2 border-indigo-500/50 dark:border-indigo-400/50" />
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <motion.a
            href="https://github.com/nisharaju0809"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiGithub className="text-xl" />
            View All Projects on GitHub
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
