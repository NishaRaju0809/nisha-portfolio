'use client';

import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaHeart } from 'react-icons/fa';
import { HiArrowUp } from 'react-icons/hi';
import { FiMapPin } from 'react-icons/fi';

const quickLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
];

const socialLinks = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/nisha-raju/',
    icon: FaLinkedin,
    color: 'hover:text-blue-500',
  },
  {
    name: 'GitHub',
    href: 'https://github.com/NishaRaju0809',
    icon: FaGithub,
    color: 'hover:text-slate-900 dark:hover:text-white',
  },
  {
    name: 'Email',
    href: 'mailto:nisharaju961@gmail.com',
    icon: FaEnvelope,
    color: 'hover:text-indigo-500',
  },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
      {/* Decorative gradient at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {/* Logo */}
              <div className="flex items-center gap-3 mb-4">
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    NR
                  </div>
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 blur opacity-50 -z-10" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
                    Nisha Raju
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Software Engineer
                  </p>
                </div>
              </div>

              <p className="text-slate-600 dark:text-slate-400 mb-6 max-w-md leading-relaxed">
                Passionate about building exceptional digital experiences. Specializing in mobile development with React Native.
              </p>

              {/* Location */}
              <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400 mb-6">
                <FiMapPin className="text-indigo-500" />
                <span className="text-sm">Based in India, Working Remotely</span>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target={social.href.startsWith('http') ? '_blank' : undefined}
                    rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className={`p-3 rounded-xl bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 ${social.color} transition-all duration-300 shadow-md hover:shadow-lg border border-slate-200 dark:border-slate-700`}
                    whileHover={{ y: -3, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.name}
                  >
                    <social.icon className="text-xl" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-indigo-600 dark:bg-indigo-400 transition-all duration-300" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-4">
              Get In Touch
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:nisharaju961@gmail.com"
                  className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors flex items-center gap-2 group"
                >
                  <FaEnvelope className="text-indigo-500 group-hover:scale-110 transition-transform" />
                  <span className="text-sm break-all">nisharaju961@gmail.com</span>
                </a>
              </li>
            </ul>


            <motion.a
              href="#contact"
              className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start a Project
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </motion.a>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          {/* Copyright */}
          <p className="text-sm text-slate-600 dark:text-slate-400 text-center sm:text-left">
            © {new Date().getFullYear()} Nisha Raju.{' '}
            <FaHeart className="inline text-red-500 animate-pulse" />
          </p>

          {/* Back to top button */}
          <motion.button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors group"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            Back to Top
            <HiArrowUp className="text-lg group-hover:-translate-y-1 transition-transform" />
          </motion.button>
        </motion.div>
      </div>

      {/* Decorative gradient at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />
    </footer>
  );
}