'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Grid3x3, ArrowRight, Mail, Calendar, FolderOpen, Code2 } from 'lucide-react';

const floatCards = [
  {
    bg: 'bg-indigo-100 dark:bg-indigo-900/40',
    icon: <Calendar size={15} className="text-indigo-600 dark:text-indigo-400" />,
    title: 'Virtual Assistance',
    sub: 'Keeping your day organized.',
  },
  {
    bg: 'bg-amber-100 dark:bg-amber-900/40',
    icon: <FolderOpen size={15} className="text-amber-500 dark:text-amber-400" />,
    title: 'Admin Support',
    sub: 'Organized data. Better decisions.',
  },
  {
    bg: 'bg-pink-100 dark:bg-pink-900/40',
    icon: <Code2 size={15} className="text-pink-500 dark:text-pink-400" />,
    title: 'Web Design',
    sub: 'Beautiful websites that work.',
  },
];

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-border/40 bg-background pt-[52px]"
    >
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20 dark:opacity-10">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-primary blur-[120px]" />
        <div className="absolute top-[20%] -right-[10%] w-[30%] h-[30%] rounded-full bg-secondary blur-[100px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* MOBILE layout */}
        <div className="lg:hidden flex flex-col justify-start gap-1 pt-3 pb-5">
          <div className="relative flex flex-col items-center px-1 pt-1 pb-0 sm:pt-3 sm:pb-2">
            <div className="pointer-events-none absolute left-1/2 top-8 h-[270px] w-[270px] -translate-x-1/2 rounded-full bg-secondary/20 sm:h-[340px] sm:w-[340px]" />

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.55 }}
              className="relative z-10 h-[clamp(240px,66vw,295px)] w-[clamp(205px,72vw,245px)] sm:h-[400px] sm:w-[310px]"
            >
              <Image
                src="/images/arielle-new.png"
                alt="Arielle"
                fill
                className="object-contain object-bottom"
                priority
                sizes="(max-width: 640px) 250px, 310px"
              />
            </motion.div>

            {/* Mobile floating cards: kept below the portrait for a cleaner narrow layout. */}
            <div className="relative z-20 mt-0 grid w-full grid-cols-3 gap-1.5 sm:mt-2 sm:gap-2">
              {floatCards.map((card, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 + idx * 0.1 }}
                  className="glass flex min-w-0 items-start gap-1.5 rounded-xl p-2.5 shadow-lg sm:gap-2 sm:rounded-2xl sm:p-3"
                >
                  <div className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg sm:h-8 sm:w-8 sm:rounded-xl ${card.bg}`}>
                    {card.icon}
                  </div>
                  <div className="min-w-0">
                    <p className="truncate text-[8.5px] font-bold leading-tight sm:text-[10.5px]">{card.title}</p>
                    <p className="mt-0.5 line-clamp-2 text-[7.5px] leading-snug text-muted-foreground sm:text-[9.5px]">{card.sub}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="px-0 pb-2 pt-1 text-center sm:pb-8 sm:pt-4">
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12 }}
              className="mb-2 flex items-center justify-center gap-2 sm:mb-3"
            >
              <motion.span
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1.5 h-1.5 rounded-full bg-green-500"
              />
              <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
                Available for Projects
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-2 sm:mb-3"
            >
              <h1 className="text-[clamp(1.9rem,7.5vw,2.8rem)] font-black leading-[1.02] tracking-[-0.03em]">
                Streamlining your
              </h1>
              <h1 className="text-[clamp(1.9rem,7.5vw,2.8rem)] font-black leading-[1.04] tracking-[-0.03em] text-gradient italic font-serif">
                workflow & growth.
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.27 }}
              className="mx-auto mb-3 max-w-[34rem] text-[clamp(0.9rem,2.2vw,0.98rem)] leading-[1.5] text-muted-foreground sm:mb-5 sm:leading-[1.65]"
            >
              Expert virtual assistance, organized administration, and modern web design tailored for entrepreneurs.
            </motion.p>

            <div className="mb-3 grid grid-cols-2 gap-2.5 sm:mb-5">
              <motion.a
                href="#contact"
                whileTap={{ scale: 0.97 }}
                className="min-h-11 w-full flex items-center justify-center gap-1.5 bg-primary text-primary-foreground text-[12px] font-bold px-4 py-3 rounded-full shadow-lg shadow-primary/20 hover:opacity-90 transition-all sm:text-[14px] sm:px-5"
              >
                Hire Me <ArrowRight size={15} />
              </motion.a>
              <motion.a
                href="#portfolio"
                whileTap={{ scale: 0.97 }}
                className="min-h-11 w-full flex items-center justify-center gap-1.5 border-2 border-border text-foreground text-[12px] font-bold px-4 py-2.5 rounded-full hover:border-primary/50 transition-all sm:text-[14px] sm:px-5"
              >
                View My Work <Grid3x3 size={14} />
              </motion.a>
            </div>
          </div>
        </div>

        {/* DESKTOP layout */}
        <div className="hidden lg:grid lg:grid-cols-[1fr_1fr] items-center min-h-[calc(100vh-52px)] gap-12">
          <div className="relative z-20 py-8">
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 }}
              className="flex items-center gap-2 mb-4"
            >
              <motion.span
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1.5 h-1.5 rounded-full bg-green-500"
              />
              <span className="text-[10.5px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
                Available for Projects
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.14 }}
              className="mb-6"
            >
              <h1 className="text-[clamp(2.5rem,4.2vw,3.6rem)] font-black leading-[1.04] tracking-tight">
                Streamlining your
              </h1>
              <h1 className="text-[clamp(2.5rem,4.2vw,3.6rem)] font-black leading-[1.08] tracking-tight text-gradient italic font-serif">
                workflow & growth.
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.22 }}
              className="text-muted-foreground text-[clamp(0.95rem,1.8vw,1rem)] leading-[1.7] max-w-[480px] mb-8"
            >
              I help busy entrepreneurs and growing startups reclaim their time through reliable virtual assistance, strategic administration, and high-impact web design.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.28 }}
              className="flex items-center gap-4 mb-8"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 bg-primary text-primary-foreground text-[15px] font-bold px-8 py-3 rounded-full shadow-xl shadow-primary/20 hover:opacity-90 transition-all"
              >
                Hire Me <ArrowRight size={16} />
              </motion.a>
              <motion.a
                href="#portfolio"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 border-2 border-border text-foreground text-[15px] font-bold px-7 py-2.5 rounded-full hover:border-primary/50 transition-all"
              >
                View My Work <Grid3x3 size={15} />
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.36 }}
              className="flex items-center gap-4"
            >
              <span className="text-[13px] text-muted-foreground font-medium">Find me on:</span>
              <a href="https://www.fiverr.com/s/3AG8yLA" target="_blank" rel="noreferrer" className="text-foreground font-bold hover:text-primary transition-colors">Fiverr</a>
              <a href="https://www.upwork.com/freelancers/~01a76a99ea694547f5?mp_source=share" target="_blank" rel="noreferrer" className="text-foreground font-bold hover:text-primary transition-colors">Upwork</a>
              <a href="mailto:princessatungpalan@gmail.com" className="flex items-center gap-1 text-[13px] text-muted-foreground hover:text-primary transition-colors">
                <Mail size={14} /> Email
              </a>
            </motion.div>
          </div>

          <div className="relative flex justify-center items-center h-full">
            <div className="absolute w-[450px] h-[450px] rounded-full bg-secondary/10 animate-pulse" />
            <div className="absolute w-[350px] h-[350px] rounded-full bg-primary/5" />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, type: 'spring' }}
              className="relative z-10 w-[400px] h-[500px]"
            >
              <Image
                src="/images/arielle-new.png"
                alt="Arielle"
                fill
                className="object-contain"
              />
            </motion.div>

            {/* Desktop Floating Cards */}
            {floatCards.map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + idx * 0.15, duration: 0.6 }}
                className={`absolute ${idx === 0 ? 'top-[10%] -left-[10%]' : idx === 1 ? 'top-[40%] -right-[15%]' : 'bottom-[10%] -left-[5%]'} glass rounded-2xl shadow-2xl p-4 w-[160px] xl:w-[180px] z-20 flex items-start gap-3`}
              >
                <div className={`w-10 h-10 rounded-xl ${card.bg} flex items-center justify-center flex-shrink-0`}>
                  {card.icon}
                </div>
                <div>
                  <p className="text-[13px] font-bold leading-tight">{card.title}</p>
                  <p className="text-[11px] text-muted-foreground mt-1 leading-snug">{card.sub}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
