'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ArrowRight, ChevronDown, Calendar, Database, Layout } from 'lucide-react';

const services = [
  {
    icon: <Calendar size={20} />,
    title: 'Virtual Assistance',
    description: 'Reclaim your focus while I handle the logistics of your busy day.',
    items: ['Email & Inbox Management', 'Calendar Optimization', 'Travel & Meeting Planning', 'Client Communication', 'Task Prioritization'],
    color: 'primary',
  },
  {
    icon: <Database size={20} />,
    title: 'Administrative Support',
    description: 'Clean data and organized systems for better business decisions.',
    items: ['Data Entry & Management', 'Excel Reports & Analysis', 'Document Preparation', 'Records Maintenance', 'Presentation Design'],
    color: 'secondary',
  },
  {
    icon: <Layout size={20} />,
    title: 'Web Design',
    description: 'Beautiful, high-converting websites that represent your brand.',
    items: ['Landing Page Design', 'Portfolio Development', 'Responsive UI/UX', 'SEO Optimization', 'Website Maintenance'],
    color: 'primary',
  },
];

export default function ServicesSection() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section id="services" className="py-20 bg-background relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-black mb-4">
            Services <span className="text-gradient font-serif italic">I Offer</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tailored solutions to help you scale your business and stay organized.
          </p>
        </motion.div>

        {/* MOBILE: collapsible accordion */}
        <div className="lg:hidden space-y-4">
          {services.map((svc, i) => (
            <div
              key={i}
              className={`glass rounded-3xl overflow-hidden border-primary/5 transition-all duration-300 ${
                expanded === i ? 'ring-2 ring-primary/20 shadow-xl' : ''
              }`}
            >
              <button
                onClick={() => setExpanded(expanded === i ? null : i)}
                className="w-full flex items-center gap-4 p-5 text-left"
              >
                <div className={`w-12 h-12 rounded-2xl ${svc.color === 'primary' ? 'bg-primary/10 text-primary' : 'bg-secondary/10 text-secondary'} flex items-center justify-center flex-shrink-0`}>
                  {svc.icon}
                </div>
                <span className="flex-1 font-bold">{svc.title}</span>
                <motion.div animate={{ rotate: expanded === i ? 180 : 0 }}>
                  <ChevronDown size={20} className="text-muted-foreground" />
                </motion.div>
              </button>
              <AnimatePresence>
                {expanded === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-6 pt-0">
                      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{svc.description}</p>
                      <ul className="space-y-3 mb-6">
                        {svc.items.map((item, j) => (
                          <li key={j} className="flex items-start gap-3">
                            <Check size={16} className="text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-foreground/80 leading-snug">{item}</span>
                          </li>
                        ))}
                      </ul>
                      <a href="#contact" className="inline-flex items-center gap-2 text-sm font-black text-primary">
                        Get Started <ArrowRight size={14} />
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* DESKTOP: cards */}
        <div className="hidden lg:grid grid-cols-3 gap-8">
          {services.map((svc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass p-8 rounded-[2rem] border-primary/5 shadow-lg hover:shadow-2xl transition-all duration-500 group flex flex-col h-full"
            >
              <div className={`w-14 h-14 rounded-2xl ${svc.color === 'primary' ? 'bg-primary/10 text-primary' : 'bg-secondary/10 text-secondary'} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                {svc.icon}
              </div>
              <h3 className="text-xl font-black mb-4">{svc.title}</h3>
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">{svc.description}</p>
              <ul className="space-y-3 mb-8 flex-1">
                {svc.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <Check size={16} className="text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm text-foreground/80 leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
              <a href="#contact" className="inline-flex items-center gap-2 text-sm font-black text-primary group-hover:gap-3 transition-all duration-300">
                Get Started <ArrowRight size={16} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
