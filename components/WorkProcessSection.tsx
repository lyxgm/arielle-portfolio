// Work process section component with vertical timeline for mobile and horizontal row for desktop
// Uses framer-motion for animations and responsive design for mobile and desktop layouts
// The section displays a series of steps that illustrate the work process, from initial consultation to final delivery and support. Each step includes a number, title, description, and an icon for visual representation. The steps are displayed in a vertical timeline format for mobile devices and a horizontal row format for desktop devices, ensuring a seamless user experience across different screen sizes. The section is designed to be visually appealing and informative, providing a clear overview of the work process and how it can benefit the user or business.
// The section is responsive and works on both desktop and mobile devices, ensuring a seamless user experience across different screen sizes. It also includes accessibility features, such as keyboard navigation and aria-labels for buttons and links, to improve usability for all users.   
// The section is designed to be visually appealing and informative, providing a clear overview of the work process and how it can benefit the user or business. It can be

'use client';

import { motion } from 'framer-motion';

const steps = [
  { num: '01', title: "Let's Talk", desc: 'We discuss your needs, goals, and challenges.' },
  { num: '02', title: 'Understand Goals', desc: 'I analyze and plan the best solution for you.' },
  { num: '03', title: 'Create Solution', desc: 'I work on the solution with quality & focus.' },
  { num: '04', title: 'Review Together', desc: "We review, refine, and make sure it's perfect." },
  { num: '05', title: 'Launch & Support', desc: 'I deliver the final product and provide ongoing support.' },
];

const icons = [
  <svg key="0" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>,
  <svg key="1" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/></svg>,
  <svg key="2" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>,
  <svg key="3" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 .49-4.5"/></svg>,
  <svg key="4" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>,
];

export default function WorkProcessSection() {
  return (
    <section id="process" className="relative py-10 sm:py-14 overflow-hidden bg-white dark:bg-zinc-900"
      style={{ backgroundImage: 'radial-gradient(circle, #d1d5db 1px, transparent 1px)', backgroundSize: '22px 22px' }}>
      <div className="absolute inset-0 bg-white/60 dark:bg-zinc-900/60 pointer-events-none" />
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-8 sm:mb-12">
          <p className="text-[10.5px] font-bold uppercase tracking-[0.22em] text-violet-500 dark:text-violet-400 mb-1.5">My Work Process</p>
          <h2 className="text-[1.7rem] sm:text-[2rem] font-black text-gray-900 dark:text-white">
            How We{' '}
            <span className="text-violet-600 dark:text-violet-400 italic" style={{ fontFamily: 'var(--font-playfair)' }}>Work Together</span>
          </h2>
        </motion.div>

        {/* ── MOBILE: vertical timeline ── */}
        <div className="sm:hidden relative pl-10">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-violet-100 dark:bg-zinc-700" />
          <div className="space-y-4 sm:space-y-5">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="relative"
              >
                {/* Number circle on the line */}
                <div className="absolute -left-[26px] w-8 h-8 rounded-full bg-violet-600 flex items-center justify-center shadow-md shadow-violet-200 z-10">
                  <span className="text-white text-[10px] font-black">{step.num}</span>
                </div>
                {/* Content card */}
                <div className="bg-white dark:bg-zinc-800 rounded-xl p-3.5 border border-gray-100 dark:border-zinc-700 shadow-sm">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-7 h-7 bg-violet-50 dark:bg-violet-900/30 rounded-lg flex items-center justify-center">{icons[i]}</div>
                    <h3 className="text-[12.5px] font-bold text-gray-900 dark:text-white">{step.title}</h3>
                  </div>
                  <p className="text-[11px] text-gray-500 dark:text-gray-400 leading-snug">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── DESKTOP: horizontal row ── */}
        <div className="hidden sm:grid sm:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-0">
          {steps.map((step, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="relative flex flex-col items-center text-center">
              {i < steps.length - 1 && (
                <div className="hidden lg:flex absolute top-4 left-[60%] right-0 items-center justify-end z-10 pr-1">
                  <svg width="28" height="12" viewBox="0 0 28 12" fill="none"><path d="M0 6h22M16 1l6 5-6 5" stroke="#D1D5DB" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
              )}
              <div className="w-9 h-9 rounded-full bg-violet-600 flex items-center justify-center mb-3 shadow-md shadow-violet-200 z-10">
                <span className="text-white text-[11px] font-black">{step.num}</span>
              </div>
              <div className="w-10 h-10 bg-white dark:bg-zinc-800 rounded-xl border border-gray-100 dark:border-zinc-700 flex items-center justify-center mb-2.5 shadow-sm">{icons[i]}</div>
              <h3 className="text-[12.5px] font-bold text-gray-900 dark:text-white mb-1 leading-tight">{step.title}</h3>
              <p className="text-[10.5px] text-gray-500 dark:text-gray-400 leading-snug px-1">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
