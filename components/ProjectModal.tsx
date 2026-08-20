'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { X, ExternalLink, Github, Wrench, Target, Lightbulb, FileText, Star } from 'lucide-react';
import type { Project } from '@/lib/projects';
import ScreenshotCarousel from './ScreenshotCarousel';

interface Props {
  project: Project | null;
  onClose: () => void;
}

const sections = [
  { key: 'overview' as const, icon: FileText, label: 'Project Overview' },
  { key: 'problem' as const, icon: Target, label: 'The Problem' },
  { key: 'solution' as const, icon: Lightbulb, label: 'The Solution' },
  { key: 'features' as const, icon: Star, label: 'Features' },
];

export default function ProjectModal({ project, onClose }: Props) {
  console.log('Project:', project?.title);
  console.log('Live URL:', project?.caseStudy.liveUrl);
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-background rounded-[2.5rem] max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-primary/10"
          >
            {/* Header with thumbnail */}
            <div className="relative h-56 sm:h-80 overflow-hidden">
              <Image
                src={project.thumbnail}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 768px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              
              <button
                onClick={onClose}
                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-black/20 backdrop-blur-md text-white flex items-center justify-center hover:bg-black/40 transition-colors z-20"
                aria-label="Close"
              >
                <X size={20} />
              </button>

              <div className="absolute bottom-6 left-8 right-8">
                <span className="inline-block glass px-3 py-1 rounded-full border-white/20 text-[10px] font-black uppercase tracking-widest mb-3">
                  {project.category}
                </span>
                <h2 className="text-2xl sm:text-4xl font-black leading-tight">{project.title}</h2>
              </div>
            </div>

            {/* Body */}
            <div className="p-8 sm:p-10">
              {/* Overview / Problem / Solution / Features */}
              <div className="space-y-8 mb-10">
                {sections.map(({ key, icon: Icon, label }) => (
                  <div key={key} className="relative pl-8">
                    <div className="absolute left-0 top-1 w-6 h-6 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                      <Icon size={14} />
                    </div>

                    <h3 className="text-sm font-black uppercase tracking-wider mb-2">
                      {label}
                    </h3>

                    {key === 'features' ? (
                      <ul className="list-disc pl-5 space-y-2 text-muted-foreground text-[15px] leading-relaxed">
                        {project.caseStudy.features.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-muted-foreground text-[15px] leading-relaxed">
                        {project.caseStudy[key]}
                      </p>
                    )}
                  </div>
                ))}
              </div>

              {/* Technologies */}
              <div className="mb-10 pl-8">
                <div className="flex items-center gap-2 mb-4">
                  <Wrench size={16} className="text-primary" />
                  <h3 className="text-sm font-black uppercase tracking-wider">Technologies Used</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.caseStudy.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-bold bg-muted text-foreground px-4 py-2 rounded-xl border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Screenshots */}
              {project.caseStudy.screenshots && project.caseStudy.screenshots.length > 0 && (
                <div className="mb-10 pl-8">
                  <h3 className="text-sm font-black uppercase tracking-wider mb-4">Gallery</h3>
                  <ScreenshotCarousel screenshots={project.caseStudy.screenshots} title={project.title} />
                </div>
              )}

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-border">
                {project.caseStudy.liveUrl && (
                  <a
                    href={project.caseStudy.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-primary text-primary-foreground font-black py-4 rounded-2xl shadow-lg shadow-primary/20 hover:opacity-90 transition-all"
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </a>
                )}
                {project.caseStudy.githubUrl && (
                  <a
                    href={project.caseStudy.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 border-2 border-border font-black py-4 rounded-2xl hover:bg-muted transition-all"
                  >
                    <Github size={18} />
                    View Source
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
