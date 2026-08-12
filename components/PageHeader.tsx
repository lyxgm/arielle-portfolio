// Page header component with back to home link and logo
// Used for About and Project pages

'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function PageHeader() {
  return (
    <header className="sticky top-0 z-30 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md border-b border-gray-100 dark:border-zinc-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-12 flex items-center justify-between">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-gray-500 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
        >
          <ArrowLeft size={14} /> Back to Home
        </Link>
        <Link href="/" className="flex items-baseline gap-0.5">
          <span
            className="text-[18px] font-bold text-gray-900 dark:text-white leading-none"
            style={{ fontFamily: 'var(--font-playfair)', fontStyle: 'italic' }}
          >
            Arielle
          </span>
          <span className="text-amber-400 font-bold text-[14px]">+</span>
        </Link>
      </div>
    </header>
  );
}
