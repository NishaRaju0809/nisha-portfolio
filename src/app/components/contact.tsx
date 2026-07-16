'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import Image from 'next/image';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 3000);
    }, 1500);
  };

  const labelClass = (field: string) =>
    `font-label text-[12px] font-bold tracking-[0.1em] uppercase ml-1 transition-colors ${
      focused === field ? 'text-tertiary' : 'text-on-surface-variant'
    }`;

  const inputClass =
    'w-full bg-surface-container-lowest border border-secondary/20 focus:border-tertiary focus:ring-0 rounded-xl px-6 py-3 text-on-surface placeholder:text-outline-variant transition-all outline-none';

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-section px-gutter min-h-screen flex items-center"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            className="lg:col-span-5 space-y-12 order-2 lg:order-1"
          >
            <div className="relative group">
              <div className="illustration-float overflow-visible w-full aspect-[4/3] max-w-[400px] mx-auto lg:mx-0 relative">
                <Image
                  src="/images/illustrations/contact-girl.png"
                  alt="Let's connect illustration"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="font-display text-[40px] sm:text-[56px] lg:text-[64px] font-extrabold text-on-surface leading-none">
                Let&apos;s <span className="text-tertiary text-glow">Connect</span>
              </h2>
              <p className="text-lg text-on-surface-variant max-w-md leading-relaxed">
                Whether you have a question about my work or just want to talk
                shop, my inbox is always open. Let&apos;s build something
                extraordinary together.
              </p>
            </div>

            <div className="flex flex-wrap gap-6 pt-6">
              <a
                className="glass-panel px-6 py-3 rounded-xl flex items-center gap-1 text-on-surface-variant hover:text-tertiary hover:border-tertiary transition-all"
                href="https://www.linkedin.com/in/nisha-raju/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="material-symbols-outlined text-tertiary">link</span>
                <span className="font-label text-[12px] font-bold tracking-[0.1em] uppercase">
                  LinkedIn
                </span>
              </a>
              <a
                className="glass-panel px-6 py-3 rounded-xl flex items-center gap-1 text-on-surface-variant hover:text-tertiary hover:border-tertiary transition-all"
                href="https://github.com/NishaRaju0809"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="material-symbols-outlined text-tertiary">
                  terminal
                </span>
                <span className="font-label text-[12px] font-bold tracking-[0.1em] uppercase">
                  GitHub
                </span>
              </a>
              <a
                className="glass-panel px-6 py-3 rounded-xl flex items-center gap-1 text-on-surface-variant hover:text-tertiary hover:border-tertiary transition-all"
                href="mailto:nisharaju961@gmail.com"
              >
                <span className="material-symbols-outlined text-tertiary">mail</span>
                <span className="font-label text-[12px] font-bold tracking-[0.1em] uppercase">
                  Email
                </span>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="lg:col-span-7 order-1 lg:order-2"
          >
            <div className="glass-panel p-6 md:p-8 rounded-3xl space-y-6 relative">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-1">
                    <label htmlFor="name" className={labelClass('name')}>
                      Full Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setFocused('name')}
                      onBlur={() => setFocused(null)}
                      required
                      className={inputClass}
                      placeholder="John Doe"
                      type="text"
                    />
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="email" className={labelClass('email')}>
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocused('email')}
                      onBlur={() => setFocused(null)}
                      required
                      className={inputClass}
                      placeholder="john@example.com"
                      type="email"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label htmlFor="subject" className={labelClass('subject')}>
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    onFocus={() => setFocused('subject')}
                    onBlur={() => setFocused(null)}
                    required
                    className={inputClass}
                    placeholder="Inquiry about project..."
                    type="text"
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor="message" className={labelClass('message')}>
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocused('message')}
                    onBlur={() => setFocused(null)}
                    required
                    className={`${inputClass} resize-none`}
                    placeholder="Tell me about your vision..."
                    rows={5}
                  />
                </div>

                <button
                  className={`w-full py-6 rounded-xl font-headline text-xl font-bold neo-brutalist-btn flex items-center justify-center gap-3 group transition-all ${
                    submitted
                      ? 'bg-secondary text-on-secondary'
                      : 'bg-tertiary text-on-tertiary'
                  }`}
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="material-symbols-outlined animate-spin">
                        progress_activity
                      </span>
                      Sending...
                    </>
                  ) : submitted ? (
                    <>
                      <span className="material-symbols-outlined">check_circle</span>
                      Message Sent!
                    </>
                  ) : (
                    <>
                      Send Message
                      <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
                        send
                      </span>
                    </>
                  )}
                </button>
              </form>

              <div className="absolute -top-6 -right-6 bg-surface-container-highest p-6 rounded-full border border-tertiary/30 shadow-lg hidden md:flex items-center justify-center">
                <span
                  className="material-symbols-outlined text-tertiary text-4xl"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  mark_email_unread
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
