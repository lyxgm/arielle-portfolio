// FAQ section component with collapsible questions and answers
// Uses framer-motion for animations and state management for open/close functionality
// The FAQ data is hardcoded in the component for simplicity, but can be moved to a separate file or fetched from an API if needed

'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  { q: 'What services do you offer?', a: 'I offer virtual assistance, administrative support, and web design services. This includes email management, data entry, scheduling, Excel reports, landing pages, and more.' },
  { q: 'How do we communicate and collaborate?', a: 'I use tools like Zoom and Google Meet for communication. I keep you updated regularly and adapt to whichever platform works best for your workflow.' },
  { q: 'What are your rates?', a: 'Rates vary depending on the scope, complexity, and duration of the project. I offer both hourly and project-based pricing. Contact me for a free consultation and quote.' },
  { q: 'Are you available for long-term projects?', a: 'Absolutely! I am open to both short-term and long-term collaborations. I enjoy building lasting relationships with clients and becoming a reliable part of their team.' },
  { q: 'How long does a typical project take?', a: 'Timelines depend on the scope of work. A landing page typically takes 3–7 days, while ongoing VA support can start immediately. I always provide a timeline estimate upfront.' },
  { q: 'Do you offer revisions?', a: 'Yes! Client satisfaction is my priority. I include a set number of revision rounds in all packages to ensure the final deliverable meets your expectations.' },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-10 sm:py-14 bg-white dark:bg-zinc-900">
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-8 sm:mb-10">
          <p className="text-[10.5px] font-bold uppercase tracking-[0.22em] text-violet-500 dark:text-violet-400 mb-2">Frequently Asked Questions</p>
          <h2 className="text-[1.9rem] sm:text-4xl font-black text-gray-900 dark:text-white">
            Got <span className="text-violet-600 dark:text-violet-400 italic" style={{ fontFamily: 'var(--font-playfair)' }}>Questions?</span>
          </h2>
        </motion.div>

        <div className="space-y-2.5">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                open === i ? 'border-violet-200 bg-violet-50/50 dark:bg-violet-900/20 dark:border-violet-800' : 'border-gray-100 dark:border-zinc-700 bg-white dark:bg-zinc-800'
              }`}
            >
              <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex items-center justify-between p-3.5 text-left sm:p-4">
                <span className="pr-3 text-[12px] font-semibold text-gray-900 dark:text-white sm:text-[12.5px]">{faq.q}</span>
                <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${open === i ? 'bg-violet-600 text-white' : 'bg-gray-100 dark:bg-zinc-600 text-gray-500 dark:text-gray-300'}`}>
                  {open === i ? <Minus size={11} /> : <Plus size={11} />}
                </div>
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }} className="overflow-hidden">
                    <p className="px-4 pb-4 text-[12px] text-gray-600 dark:text-gray-300 leading-relaxed">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
