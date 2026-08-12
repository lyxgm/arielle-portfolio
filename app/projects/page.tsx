'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Eye } from 'lucide-react';
import { projects, projectCategories, type Project, type ProjectCategory } from '@/lib/projects';
import ProjectModal from '@/components/ProjectModal';
import PageHeader from '@/components/PageHeader';
import Footer from '@/components/Footer';

export default function ProjectsPage() {
  const [filter, setFilter] = useState<ProjectCategory | 'All'>('All');
  const [selected, setSelected] = useState<Project | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const filtered =
    filter === 'All'
      ? [...projects].sort((a, b) => a.title.localeCompare(b.title))
      : projects.filter((p) => p.category === filter).sort((a, b) => a.title.localeCompare(b.title));

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

  return (
    <main className="bg-background min-h-screen">
      <PageHeader />

      {/* Header */}
      <section className="py-20 lg:py-28 bg-muted/30 border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="text-sm font-black uppercase tracking-widest text-primary mb-4 block">All Projects</span>
            <h1 className="text-4xl sm:text-6xl font-black mb-6 leading-tight">
              My <span className="text-gradient font-serif italic">Work</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A comprehensive collection of my professional journey across administrative support, creative design, and technical engineering.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters + Grid */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter tabs */}
          <div className="flex flex-wrap gap-3 mb-12">
            {projectCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2.5 rounded-full text-sm font-black border-2 transition-all duration-300 ${
                  filter === cat
                    ? 'bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20'
                    : 'bg-background text-foreground border-border hover:border-primary/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filtered.map((p, i) => (
                <motion.div
                  key={p.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  whileHover={{ y: -10 }}
                  className="glass rounded-[2rem] overflow-hidden border-primary/5 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer group"
                  onClick={() => setSelected(p)}
                  onMouseEnter={() => handleEnter(p.id)}
                  onMouseLeave={() => handleLeave(p.id)}
                >
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={p.thumbnail}
                      alt={p.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
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
                        className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
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
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <div className="text-center py-24 text-muted-foreground">
              <p className="text-lg font-bold">No projects in this category yet.</p>
              <button onClick={() => setFilter('All')} className="text-primary hover:underline mt-2">View all projects</button>
            </div>
          )}
        </div>
      </section>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
      <Footer />
    </main>
  );
}
