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
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMobileOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth >= 1024) setMobileOpen(false);
    };

    document.addEventListener('keydown', onKeyDown);
    window.addEventListener('resize', onResize);
    document.body.style.overflow = mobileOpen ? 'hidden' : '';

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('resize', onResize);
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');
  const closeMobileMenu = () => setMobileOpen(false);

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
              className="relative h-10 w-10 rounded-full flex items-center justify-center bg-muted hover:bg-muted/80 transition-colors overflow-hidden"
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
              type="button"
              className="relative flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background/80 text-foreground shadow-sm transition-colors duration-200 hover:bg-muted/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              onClick={() => setMobileOpen((open) => !open)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation"
            >
              <span className="sr-only">{mobileOpen ? 'Close menu' : 'Open menu'}</span>
              <AnimatePresence initial={false} mode="wait">
                {mobileOpen ? (
                  <motion.span key="close" initial={{ opacity: 0, rotate: -45 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: 45 }}>
                    <X size={19} aria-hidden="true" />
                  </motion.span>
                ) : (
                  <motion.span key="menu" initial={{ opacity: 0, rotate: 45 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: -45 }}>
                    <Menu size={19} aria-hidden="true" />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div
          id="mobile-navigation"
          role="dialog"
          aria-label="Mobile navigation"
          className="lg:hidden max-h-[calc(100dvh-4.5rem)] overflow-y-auto border-b border-border bg-background/95 backdrop-blur-md"
        >
          <nav className="flex flex-col gap-1.5 px-4 py-3 sm:px-6 sm:py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMobileMenu}
                className="rounded-xl px-4 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-muted/70 hover:text-primary"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/#contact"
              onClick={closeMobileMenu}
              className="mt-1 flex min-h-11 w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-center text-sm font-black text-primary-foreground shadow-lg shadow-primary/20"
            >
              Get in Touch <ArrowUpRight size={18} />
            </a>
          </nav>
        </div>
      )}
    </motion.header>
  );
}
