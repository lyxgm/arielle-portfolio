'use client';

import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const steps = [
  {
    label: 'Too many tasks,\nnot enough time.',
    visual: (
      <div className="relative w-14 h-14">
        <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-muted rounded-b-sm" />
        <div className="absolute bottom-1.5 left-1 right-1 h-9 bg-foreground rounded-t-lg flex items-center justify-center overflow-hidden">
          <div className="grid grid-cols-3 gap-0.5 p-0.5">
            {['bg-primary/60','bg-secondary/60','bg-primary/40','bg-secondary/40','bg-primary/20','bg-secondary/20'].map((c,i)=>(
              <div key={i} className={`w-2 h-2 ${c} rounded-sm`} />
            ))}
          </div>
        </div>
      </div>
    ),
  },
  {
    label: 'I organize, manage,\nand streamline.',
    visual: (
      <div className="relative w-14 h-14 flex items-center justify-center">
        <div className="w-11 h-8 bg-secondary rounded-lg shadow-md relative">
          <div className="absolute -top-1.5 left-1.5 w-4 h-1.5 bg-secondary/80 rounded-t-md" />
          <div className="absolute top-1 left-1 w-9 h-6 bg-white/20 rounded-md" />
        </div>
      </div>
    ),
  },
  {
    label: 'You save time and\nfocus on growth.',
    visual: (
      <div className="relative w-14 h-14 flex items-end justify-center pb-1">
        <div className="flex items-end gap-1">
          {[4,7,5,8,6].map((h,i)=>(
            <div key={i} className="w-2 rounded-t-sm" style={{ height: `${h*4}px`, background: i===3 ? 'hsl(var(--primary))' : i===1 ? 'hsl(var(--secondary))' : 'hsl(var(--muted))' }} />
          ))}
        </div>
      </div>
    ),
  },
  {
    label: 'Your business\nmoves forward.',
    visual: (
      <div className="relative w-14 h-14 flex items-center justify-center">
        <svg width="32" height="38" viewBox="0 0 38 44" fill="none">
          <path d="M19 2 C19 2 32 10 32 26 L19 38 L6 26 C6 10 19 2 19 2Z" fill="hsl(var(--primary))"/>
          <circle cx="19" cy="18" r="5" fill="white" opacity="0.9"/>
        </svg>
      </div>
    ),
  },
];

export default function TransformSection() {
  return (
    <section className="py-8 sm:py-20 bg-muted/20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-7 sm:mb-16"
        >
          <p className="text-base font-bold text-muted-foreground sm:text-lg">
            I help you go from <span className="text-foreground font-black">overwhelmed</span> to{' '}
            <span className="text-primary font-black underline decoration-wavy decoration-secondary/50 underline-offset-8">
              organized.
            </span>
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-4 sm:gap-8 lg:grid-cols-4">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="mb-3 h-14 w-14 rounded-2xl bg-background shadow-lg flex items-center justify-center transition-transform duration-500 group-hover:scale-110 sm:mb-6 sm:h-20 sm:w-20 sm:rounded-3xl">
                {step.visual}
              </div>
              <p className="text-sm font-bold text-muted-foreground leading-relaxed whitespace-pre-line group-hover:text-foreground transition-colors">
                {step.label}
              </p>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-20 opacity-20">
                  <ChevronRight size={24} />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
