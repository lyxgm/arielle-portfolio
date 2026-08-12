'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { MapPin, GraduationCap, Briefcase, ArrowRight, Sparkles, Layout, Heart, CheckCircle } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import Footer from '@/components/Footer';

const approaches = [
  { text: 'Organization creates clarity.', icon: Layout },
  { text: 'Good communication builds trust.', icon: Heart },
  { text: 'Small details make a big difference.', icon: Sparkles },
  { text: 'Every project deserves thoughtful execution.', icon: CheckCircle },
];

const toolGroups = [
  {
    label: 'Communication & Project Management',
    tools: [
      { name: 'Notion', logo: 'https://cdn.simpleicons.org/notion/000000' },
      // { name: 'Slack', logo: 'https://cdn.simpleicons.org/slack/4A154B' },
      { name: 'Microsoft Teams', logo: 'https://cdn.simpleicons.org/microsoftteams/6264A7' },
      { name: 'Zoom', logo: 'https://cdn.simpleicons.org/zoom/2D8CFF' },
      { name: 'Google Meet', logo: 'https://cdn.simpleicons.org/googlemeet/00897B' },
      { name: 'Google Drive', logo: 'https://cdn.simpleicons.org/googledrive/4285F4' },
      // { name: 'Dropbox', logo: 'https://cdn.simpleicons.org/dropbox/0061FF' },
      // { name: 'Trello', logo: 'https://cdn.simpleicons.org/trello/0052CC' },
      // { name: 'Asana', logo: 'https://cdn.simpleicons.org/asana/F06A6A' },
      // { name: 'ClickUp', logo: 'https://cdn.simpleicons.org/clickup/7B68EE' },
      // { name: 'Monday.com', logo: 'https://cdn.simpleicons.org/monday/FF3D57' },
      // { name: 'Jira', logo: 'https://cdn.simpleicons.org/jira/0052CC' },
    ],
  },

  {
    label: 'Design & Development',
    tools: [
      { name: 'Figma', logo: 'https://cdn.simpleicons.org/figma/F24E1E' },
      { name: 'Canva', logo: 'https://cdn.simpleicons.org/canva/00C4CC' },
      // { name: 'Photoshop', logo: 'https://cdn.simpleicons.org/adobephotoshop/31A8FF' },
      // { name: 'Illustrator', logo: 'https://cdn.simpleicons.org/adobeillustrator/FF9A00' },
      { name: 'Framer', logo: 'https://cdn.simpleicons.org/framer/0055FF' },
      // { name: 'Webflow', logo: 'https://cdn.simpleicons.org/webflow/146EF5' },
      // { name: 'WordPress', logo: 'https://cdn.simpleicons.org/wordpress/21759B' },
      { name: 'Next.js', logo: 'https://cdn.simpleicons.org/nextdotjs/000000' },
      { name: 'React', logo: 'https://cdn.simpleicons.org/react/61DAFB' },
      { name: 'Tailwind CSS', logo: 'https://cdn.simpleicons.org/tailwindcss/06B6D4' },
      { name: 'JavaScript', logo: 'https://cdn.simpleicons.org/javascript/F7DF1E' },
      { name: 'TypeScript', logo: 'https://cdn.simpleicons.org/typescript/3178C6' },
      { name: 'Python', logo: 'https://cdn.simpleicons.org/python/3776AB' },
      { name: 'GitHub', logo: 'https://cdn.simpleicons.org/github/181717' },
      { name: 'VS Code', logo: 'https://cdn.simpleicons.org/visualstudiocode/007ACC' },
    ],
  },

  {
    label: 'AI & Automation',
    tools: [
      { name: 'ChatGPT', logo: 'https://cdn.simpleicons.org/openai/412991' },
      { name: 'Claude', logo: 'https://cdn.simpleicons.org/anthropic/000000' },
      { name: 'Google Gemini', logo: 'https://cdn.simpleicons.org/googlegemini/8E75FF' },
      { name: 'Microsoft Copilot', logo: 'https://cdn.simpleicons.org/microsoftcopilot/000000' },
      { name: 'Perplexity', logo: 'https://cdn.simpleicons.org/perplexity/20B8CD' },
      { name: 'Higgsfield AI', logo: 'https://cdn.simpleicons.org/higgsfield/000000' },
      { name: 'Motion AI', logo: 'https://cdn.simpleicons.org/motion/000000' },
      // { name: 'Midjourney', logo: 'https://cdn.simpleicons.org/midjourney/000000' },
      // { name: 'Runway', logo: 'https://cdn.simpleicons.org/runway/000000' },
      // { name: 'Adobe Firefly', logo: 'https://cdn.simpleicons.org/adobefirefly/FF4F00' },
      // { name: 'Zapier', logo: 'https://cdn.simpleicons.org/zapier/FF4A00' },
      // { name: 'Make', logo: 'https://cdn.simpleicons.org/make/6D00CC' },
      // { name: 'n8n', logo: 'https://cdn.simpleicons.org/n8n/EA4B71' },
    ],
  },

  {
    label: 'Productivity & Business',
    tools: [
      { name: 'Google Docs', logo: 'https://cdn.simpleicons.org/googledocs/4285F4' },
      { name: 'Google Sheets', logo: 'https://cdn.simpleicons.org/googlesheets/34A853' },
      { name: 'Google Calendar', logo: 'https://cdn.simpleicons.org/googlecalendar/4285F4' },
      { name: 'Microsoft Word', logo: 'https://cdn.simpleicons.org/microsoftword/2B579A' },
      { name: 'Microsoft Excel', logo: 'https://cdn.simpleicons.org/microsoftexcel/217346' },
      { name: 'PowerPoint', logo: 'https://cdn.simpleicons.org/microsoftpowerpoint/B7472A' },
      { name: 'Gmail', logo: 'https://cdn.simpleicons.org/gmail/EA4335' },
      // { name: 'Calendly', logo: 'https://cdn.simpleicons.org/calendly/006BFF' },
      // { name: 'Airtable', logo: 'https://cdn.simpleicons.org/airtable/18BFFF' },
      // { name: 'Loom', logo: 'https://cdn.simpleicons.org/loom/625DF5' },
      // { name: 'HubSpot', logo: 'https://cdn.simpleicons.org/hubspot/FF7A59' },
    ],
  },
];

const timeline = [
  { type: 'experience', title: 'Freelance Virtual Assistant', org: 'Upwork & Fiverr', year: '2023 – Present', icon: Briefcase },
  { type: 'experience', title: 'Web Designer', org: 'Freelance', year: '2023 – Present', icon: Briefcase },
  { type: 'education', title: 'B.S. Computer Engineering', org: 'University', year: '2023', icon: GraduationCap },
  { type: 'education', title: 'Capstone: IoT Monitoring System', org: 'Graduation Project', year: '2023', icon: GraduationCap },
];

export default function AboutPage() {
  return (
    <main className="bg-background min-h-screen">
      <PageHeader />

      {/* Hero / Intro */}
      <section id="about" className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 pointer-events-none" />
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-sm font-black uppercase tracking-widest text-primary mb-4 block">About Me</span>
              <h1 className="text-4xl sm:text-6xl font-black mb-8 leading-tight">
                Hi, I&apos;m <span className="text-gradient font-serif italic">Arielle</span>
              </h1>
              <div className="flex items-center gap-2 text-muted-foreground mb-8">
                <MapPin size={18} className="text-secondary" />
                <span className="font-bold">Based in the Philippines</span>
              </div>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  I&apos;m a Computer Engineering graduate who discovered a passion for helping others scale their businesses through technology and organization.
                </p>
                <p>
                  I bridge the gap between technical complexity and everyday business needs. Whether it&apos;s automating a spreadsheet or designing a high-converting landing page, I focus on systems that work for you, not the other way around.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white dark:border-zinc-800"
            >
              <Image 
                src="/images/arielle-2-nobg.png"
                alt="Arielle" 
                fill 
                className="object-cover bg-secondary/10" 
                priority 
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* My Approach */}
      <section className="py-24 bg-secondary/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-black mb-4">My <span className="text-gradient font-serif italic">Approach</span></h2>
            <p className="text-muted-foreground">The principles that guide my work and relationships.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {approaches.map((a, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ delay: i * 0.1 }}
                className="glass p-8 rounded-3xl border-primary/5 hover:border-primary/20 transition-all text-center group"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <a.icon size={24} />
                </div>
                <p className="font-bold leading-relaxed">{a.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Toolkit */}
      <section className="py-20 bg-background">
        <div className="mx-auto w-full max-w-6xl px-6">

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-black">
              My{' '}
              <span className="text-gradient font-serif italic">
                Toolkit
              </span>
            </h2>

            <p className="mt-3 text-muted-foreground">
              Tools I use to keep projects moving and workflows smooth.
            </p>
          </motion.div>

          {/* Tool Rows */}
          <div className="space-y-8">
            {toolGroups.map((group, groupIndex) => (
              <motion.div
                key={group.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: groupIndex * 0.06 }}
              >
                {/* Category */}
                <div className="flex items-center gap-4 mb-4">
                  <span className="shrink-0 text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                    {group.label}
                  </span>

                  <div className="h-px flex-1 bg-border/50" />
                </div>

                {/* Carousel */}
                <div className="relative overflow-hidden">

                  {/* Fade edges */}
                  <div className="absolute left-0 top-0 bottom-0 w-10 z-10 pointer-events-none bg-gradient-to-r from-background to-transparent" />

                  <div className="absolute right-0 top-0 bottom-0 w-10 z-10 pointer-events-none bg-gradient-to-l from-background to-transparent" />

                  {/* Track */}
                  <div
                    className={`flex w-max gap-2.5 ${
                      groupIndex % 2 === 0
                        ? 'animate-tools-left'
                        : 'animate-tools-right'
                    }`}
                  >
                    {/* First copy */}
                    <div className="flex shrink-0 gap-2.5">
                      {group.tools.map((tool) => (
                        <div
                          key={`first-${tool.name}`}
                          className="
                            flex shrink-0 items-center gap-2.5
                            rounded-full
                            border border-border/60
                            bg-background
                            px-4 py-2.5
                            text-sm font-medium
                          "
                        >
                          <img
                            src={tool.logo}
                            alt=""
                            aria-hidden="true"
                            className="h-5 w-5 object-contain"
                          />

                          <span>{tool.name}</span>
                        </div>
                      ))}
                    </div>

                    {/* Second copy */}
                    <div className="flex shrink-0 gap-2.5">
                      {group.tools.map((tool) => (
                        <div
                          key={`second-${tool.name}`}
                          className="
                            flex shrink-0 items-center gap-2.5
                            rounded-full
                            border border-border/60
                            bg-background
                            px-4 py-2.5
                            text-sm font-medium
                          "
                        >
                          <img
                            src={tool.logo}
                            alt=""
                            aria-hidden="true"
                            className="h-5 w-5 object-contain"
                          />

                          <span>{tool.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      

      {/* CTA */}
      <section className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass p-12 rounded-[3rem] border-primary/10 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 to-secondary/5 pointer-events-none" />
            <h2 className="text-3xl sm:text-4xl font-black mb-6 relative z-10">Ready to work <span className="text-gradient font-serif italic">together?</span></h2>
            <p className="text-muted-foreground mb-10 relative z-10 max-w-xl mx-auto">
              I&apos;m currently open to new projects and collaborations. Let&apos;s talk about how I can help you grow.
            </p>
            <motion.a
              href="/#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-black px-10 py-5 rounded-2xl shadow-xl shadow-primary/20 hover:opacity-90 transition-all relative z-10"
            >
              Get in Touch <ArrowRight size={20} />
            </motion.a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
