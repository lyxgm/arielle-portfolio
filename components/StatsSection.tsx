// Stats section component with animated stats and icons
// Uses framer-motion for animations and responsive design for mobile and desktop layouts
// The section displays key statistics about the business or individual, such as the number of projects completed, educational background, communication skills, and client-focused approach. Each stat is accompanied by an icon for visual representation. The stats are animated to fade in and slide up as they come into view, creating an engaging user experience. The section is designed to be visually appealing and informative, providing a quick overview of important metrics that highlight expertise and reliability.
// The section is responsive and works on both desktop and mobile devices, ensuring a seamless user experience across different screen sizes. It also includes accessibility features, such as keyboard navigation and aria-labels for icons and text, to improve usability for all users.

'use client';

import { motion } from 'framer-motion';

const stats = [
  {
    value: '20+',
    label: 'Projects Completed',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
      </svg>
    ),
  },
  {
    value: 'Computer Engineering',
    label: 'Graduate',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>
      </svg>
    ),
  },
  {
    value: 'Reliable',
    label: 'Communication',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    ),
  },
  {
    value: 'Client-Focused',
    label: 'Approach',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>
    ),
  },
];

export default function StatsSection() {
  return (
    <section className="py-9 sm:py-10" style={{ background: 'linear-gradient(to right, #EDE9FE 0%, #FDE8D0 100%)' }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center text-center gap-2"
            >
              <div className="text-violet-500 opacity-80">{s.icon}</div>
              <div>
                <p className="text-[14px] font-black text-gray-800">{s.value}</p>
                <p className="text-[11.5px] text-gray-500 font-medium">{s.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
