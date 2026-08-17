'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Eye, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { featuredProjects, type Project } from '@/lib/projects';
import ProjectModal from './ProjectModal';

export default function PortfolioSection() {
  const [selected, setSelected] = useState<Project | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const handleEnter = (id: number) => {
    const v = videoRefs.current[id];
    if (v) {
      v.currentTime = 0;
      v.play().catch(() => {});
    }
  };

  const handleLeave = (id: number) => {
    const v = videoRefs.current[id];
    if (v) {
      v.pause();
      v.currentTime = 0;
    }
  };

  const handleCardKeyDown = (event: React.KeyboardEvent, project: Project) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      setSelected(project);
    }
  };

  return (
    <section id="portfolio" className="py-20 bg-background relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-1/2 left-0 w-full h-1/2 bg-primary/5 -skew-y-3 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-black mb-4">
            Work That <span className="text-gradient font-serif italic">Speaks</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of projects where I helped clients streamline operations and elevate their digital presence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer overflow-hidden rounded-[2rem] border-primary/5 shadow-lg transition-shadow duration-300 hover:shadow-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary lg:hover:-translate-y-2"
              role="button"
              tabIndex={0}
              aria-label={`View ${p.title} project details`}
              onClick={() => setSelected(p)}
              onKeyDown={(event) => handleCardKeyDown(event, p)}
              onMouseEnter={() => handleEnter(p.id)}
              onMouseLeave={() => handleLeave(p.id)}
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={p.thumbnail}
                  alt={p.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
                
                {p.hoverVideo && (
                  <video
                    ref={(el) => { videoRefs.current[p.id] = el; }}
                    src={p.hoverVideo}
                    muted
                    loop
                    playsInline
                    preload="none"
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  />
                )}

                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-white/90 dark:bg-black/90 flex items-center justify-center shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <Eye size={24} className="text-primary" />
                  </div>
                </div>

                <div className="absolute top-4 left-4 glass px-3 py-1 rounded-full border-white/20">
                  <span className="text-[10px] font-black uppercase tracking-widest text-foreground">{p.category}</span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-black mb-2 group-hover:text-primary transition-colors">{p.title}</h3>
                <p className="text-xs text-muted-foreground line-clamp-2">{p.shortDescription}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link href="/projects">
            <motion.span
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full border-2 border-primary/20 font-black text-sm hover:bg-primary/5 transition-all cursor-pointer"
            >
              Explore All Projects <ArrowRight size={16} />
            </motion.span>
          </Link>
        </div>
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
