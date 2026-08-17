'use client';

import { motion } from 'framer-motion';
import { Download, Mail, Linkedin, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const quickLinks = [
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/#services' },
  { label: 'Portfolio', href: '/#portfolio' },
  { label: 'FAQ', href: '/#faq' },
];

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border pt-20 pb-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link href="/" className="flex items-baseline group">
              <span className="text-2xl font-black italic font-serif group-hover:text-primary transition-colors">
                Arielle
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-secondary ml-1" />
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Helping entrepreneurs and startups reclaim their time through expert virtual assistance and high-impact web design.
            </p>
            <div className="flex flex-wrap gap-3">
              <motion.a
                href="https://www.fiverr.com/s/3AG8yLA"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                className="inline-flex items-center gap-2 rounded-xl bg-muted px-4 py-3 text-xs font-semibold text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                Fiverr <ArrowUpRight size={14} />
              </motion.a>
              <motion.a
                href="https://www.upwork.com/freelancers/~01a76a99ea694547f5?mp_source=share"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                className="inline-flex items-center gap-2 rounded-xl bg-muted px-4 py-3 text-xs font-semibold text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                Upwork <ArrowUpRight size={14} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/princess-arielle-t-0127a942a/"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                className="inline-flex items-center gap-2 rounded-xl bg-muted px-4 py-3 text-xs font-semibold text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                LinkedIn <ArrowUpRight size={14} />
              </motion.a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-black uppercase tracking-widest mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {quickLinks.map(link => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-black uppercase tracking-widest mb-6">Resources</h4>
            <ul className="space-y-4">
              <li>
                <a href="/Resume.pdf" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                  <Download size={14} /> Resume
                </a>
              </li>
              <li>
                <a href="/Resume.pdf" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                  <Download size={14} /> Portfolio PDF
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-black uppercase tracking-widest mb-6">Let&apos;s Connect</h4>
            <a href="mailto:princessatungpalan@gmail.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-4">
              <Mail size={14} /> princessatungpalan@gmail.com
            </a>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Based in the Philippines. Available for global collaboration.
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">© 2026 Arielle. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
