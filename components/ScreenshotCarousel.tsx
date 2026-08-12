// Screenshot carousel component for project pages
// Uses framer-motion for animations and swipe gestures for navigation
// The carousel displays screenshots of the project and allows users to navigate through them using arrows, swipe gestures, or pagination dots. It is responsive and works on both desktop and mobile devices. The component also includes accessibility features, such as keyboard navigation and aria-labels for buttons and images.
// The carousel is designed to be visually appealing and informative, providing a clear overview of the project and its features. It can be easily integrated into project pages and customized with different screenshots and titles.

'use client';

import { useState, useRef, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Props {
  screenshots: string[];
  title: string;
}

export default function ScreenshotCarousel({ screenshots, title }: Props) {
  const [index, setIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const hasMultiple = screenshots.length > 1;

  const goTo = useCallback(
    (i: number) => setIndex((i + screenshots.length) % screenshots.length),
    [screenshots.length]
  );

  const next = useCallback(() => goTo(index + 1), [index, goTo]);
  const prev = useCallback(() => goTo(index - 1), [index, goTo]);

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
    setTouchEnd(null);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.touches[0].clientX);
  };

  const onTouchEnd = () => {
    if (touchStart === null || touchEnd === null) return;
    const diff = touchStart - touchEnd;
    if (Math.abs(diff) > 40) {
      if (diff > 0) next();
      else prev();
    }
    setTouchStart(null);
    setTouchEnd(null);
  };

  useEffect(() => {
    if (!hasMultiple) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    const el = containerRef.current;
    el?.addEventListener('keydown', onKey);
    return () => el?.removeEventListener('keydown', onKey);
  }, [prev, next, hasMultiple]);

  if (!hasMultiple) {
    return (
      <div className="relative h-56 sm:h-64 rounded-xl overflow-hidden border border-gray-100 dark:border-zinc-700">
        <Image
          src={screenshots[0]}
          alt={`${title} screenshot`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 768px"
        />
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      tabIndex={0}
      className="relative rounded-xl overflow-hidden border border-gray-100 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-violet-300"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <div className="relative h-56 sm:h-64 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="absolute inset-0"
          >
            <Image
              src={screenshots[index]}
              alt={`${title} screenshot ${index + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </motion.div>
        </AnimatePresence>

        {/* Arrows */}
        <button
          onClick={prev}
          aria-label="Previous screenshot"
          className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/60 dark:bg-zinc-800/60 backdrop-blur-sm flex items-center justify-center text-gray-700 dark:text-gray-200 hover:bg-white/90 dark:hover:bg-zinc-700 hover:opacity-100 opacity-70 transition-all shadow-sm"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          onClick={next}
          aria-label="Next screenshot"
          className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/60 dark:bg-zinc-800/60 backdrop-blur-sm flex items-center justify-center text-gray-700 dark:text-gray-200 hover:bg-white/90 dark:hover:bg-zinc-700 hover:opacity-100 opacity-70 transition-all shadow-sm"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      {/* Pagination dots */}
      <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 flex gap-1.5">
        {screenshots.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to screenshot ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-200 ${
              i === index ? 'w-5 bg-white' : 'w-1.5 bg-white/50 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
