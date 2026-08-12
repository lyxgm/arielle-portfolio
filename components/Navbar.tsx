'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from 'next-themes';
import { Menu, X, Moon, Sun, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/#services', label: 'Services' },
  { href: '/#portfolio', label: 'Portfolio' },
  { href: '/#process', label: 'Process' },
  { href: '/#faq', label: 'FAQ' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background/80 backdrop-blur-lg border-b border-border shadow-sm py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[48px]">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-baseline group">
              <span className="text-2xl font-black italic font-serif group-hover:text-primary transition-colors">
                Arielle
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-secondary ml-1" />
            </Link>
          </div>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[14px] font-bold text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <motion.button
              onClick={toggleTheme}
              aria-label="Toggle dark mode"
              whileTap={{ scale: 0.95 }}
              className="relative w-10 h-10 rounded-full flex items-center justify-center bg-muted hover:bg-muted/80 transition-colors overflow-hidden"
            >
              <span className="absolute inset-0 rounded-full bg-primary/10 dark:bg-primary/20 transition-colors" />
              <AnimatePresence mode="wait">
                {mounted ? (
                  theme === 'dark' ? (
                    <motion.span
                      key="sun-icon"
                      initial={{ rotate: -20, opacity: 0, scale: 0.7 }}
                      animate={{ rotate: 0, opacity: 1, scale: 1 }}
                      exit={{ rotate: 20, opacity: 0, scale: 0.7 }}
                      transition={{ duration: 0.2 }}
                      className="relative z-10 flex items-center justify-center"
                    >
                      <Sun size={16} />
                    </motion.span>
                  ) : (
                    <motion.span
                      key="moon-icon"
                      initial={{ rotate: 20, opacity: 0, scale: 0.7 }}
                      animate={{ rotate: 0, opacity: 1, scale: 1 }}
                      exit={{ rotate: -20, opacity: 0, scale: 0.7 }}
                      transition={{ duration: 0.2 }}
                      className="relative z-10 flex items-center justify-center"
                    >
                      <Moon size={16} />
                    </motion.span>
                  )
                ) : (
                  <span className="relative z-10 block h-4 w-4 rounded-full bg-slate-300/80" />
                )}
              </AnimatePresence>
            </motion.button>
            
            <motion.a
              href="/#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-primary text-primary-foreground text-[14px] font-black px-6 py-2.5 rounded-full shadow-lg shadow-primary/20 hover:opacity-90 transition-all"
            >
              Get in Touch <ArrowUpRight size={16} />
            </motion.a>
          </div>

          {/* Mobile hamburger */}
          <div className="flex lg:hidden items-center gap-3">
            <motion.button
              onClick={toggleTheme}
              aria-label="Toggle dark mode"
              whileTap={{ scale: 0.95 }}
              className="relative w-9 h-9 rounded-full flex items-center justify-center bg-muted hover:bg-muted/80 transition-colors overflow-hidden"
            >
              <span className="absolute inset-0 rounded-full bg-primary/10 dark:bg-primary/20 transition-colors" />
              <AnimatePresence mode="wait">
                {mounted ? (
                  theme === 'dark' ? (
                    <motion.span
                      key="sun-icon-mobile"
                      initial={{ rotate: -20, opacity: 0, scale: 0.7 }}
                      animate={{ rotate: 0, opacity: 1, scale: 1 }}
                      exit={{ rotate: 20, opacity: 0, scale: 0.7 }}
                      transition={{ duration: 0.2 }}
                      className="relative z-10 flex items-center justify-center"
                    >
                      <Sun size={16} />
                    </motion.span>
                  ) : (
                    <motion.span
                      key="moon-icon-mobile"
                      initial={{ rotate: 20, opacity: 0, scale: 0.7 }}
                      animate={{ rotate: 0, opacity: 1, scale: 1 }}
                      exit={{ rotate: -20, opacity: 0, scale: 0.7 }}
                      transition={{ duration: 0.2 }}
                      className="relative z-10 flex items-center justify-center"
                    >
                      <Moon size={16} />
                    </motion.span>
                  )
                ) : (
                  <span className="relative z-10 block h-4 w-4 rounded-full bg-slate-300/80" />
                )}
              </AnimatePresence>
            </motion.button>
            <button
              className="relative flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background/80 text-foreground shadow-sm transition-all duration-200 hover:scale-105 hover:bg-muted/80"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              <span className="sr-only">Toggle menu</span>
              <motion.span
                animate={mobileOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -3 }}
                transition={{ duration: 0.2 }}
                className="absolute block h-0.5 w-5 rounded-full bg-current"
              />
              {/* <motion.span
                animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.2 }}
                className="absolute block h-0.5 w-5 rounded-full bg-current"
              /> */}
              <motion.span
                animate={mobileOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 3 }}
                transition={{ duration: 0.2 }}
                className="absolute block h-0.5 w-5 rounded-full bg-current"
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: -10, height: 0 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="lg:hidden overflow-hidden border-b border-border bg-background/95 backdrop-blur-md"
          >
            <nav className="flex flex-col gap-2 p-4 sm:p-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-2xl px-4 py-3 text-base font-semibold text-foreground transition-colors hover:bg-muted/70 hover:text-primary"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="/#contact"
                onClick={() => setMobileOpen(false)}
                className="mt-2 flex w-full items-center justify-center gap-2 rounded-2xl bg-primary px-4 py-3 text-center font-black text-primary-foreground shadow-lg shadow-primary/20"
              >
                Get in Touch <ArrowUpRight size={18} />
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
