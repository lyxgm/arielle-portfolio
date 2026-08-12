'use client';

import { motion } from 'framer-motion';

const groups = [
  {
    label: 'Communication & Project Management',
    tools: [
      { name: 'Notion', icon: '/icons/notion.svg' },
      // { name: 'Slack', icon: '/icons/slack.svg' },
      { name: 'Microsoft Teams', icon: '/icons/teams.svg' },
      { name: 'Zoom', icon: '/icons/zoom.svg' },
      { name: 'Google Meet', icon: '/icons/google-meet.svg' },
      { name: 'Google Drive', icon: '/icons/google-drive.svg' },
      // { name: 'Dropbox', icon: '/icons/dropbox.svg' },
      // { name: 'Trello', icon: '/icons/trello.svg' },
      // { name: 'Asana', icon: '/icons/asana.svg' },
      // { name: 'ClickUp', icon: '/icons/clickup.svg' },
      // { name: 'Monday.com', icon: '/icons/monday.svg' },
      { name: 'Jira', icon: '/icons/jira.svg' },
      // { name: 'Linear', icon: '/icons/linear.svg' },
      // { name: 'Basecamp', icon: '/icons/basecamp.svg' },
    ],
  },

  {
    label: 'Design & Development',
    tools: [
      { name: 'Figma', icon: '/icons/figma.svg' },
      { name: 'Canva', icon: '/icons/canva.svg' },
      // { name: 'Adobe Photoshop', icon: '/icons/photoshop.svg' },
      // { name: 'Adobe Illustrator', icon: '/icons/illustrator.svg' },
      { name: 'Framer', icon: '/icons/framer.svg' },
      // { name: 'Webflow', icon: '/icons/webflow.svg' },
      // { name: 'WordPress', icon: '/icons/wordpress.svg' },
      { name: 'Next.js', icon: '/icons/nextjs.svg' },
      { name: 'React', icon: '/icons/react.svg' },
      { name: 'Tailwind CSS', icon: '/icons/tailwind.svg' },
      { name: 'JavaScript', icon: '/icons/javascript.svg' },
      { name: 'TypeScript', icon: '/icons/typescript.svg' },
      { name: 'Python', icon: '/icons/python.svg' },
      { name: 'GitHub', icon: '/icons/github.svg' },
      { name: 'Git', icon: '/icons/git.svg' },
      { name: 'VS Code', icon: '/icons/vscode.svg' },
    ],
  },

  {
    label: 'AI & Automation',
    tools: [
      { name: 'ChatGPT', icon: '/icons/chatgpt.svg' },
      { name: 'Claude', icon: '/icons/claude.svg' },
      { name: 'Google Gemini', icon: '/icons/gemini.svg' },
      { name: 'Microsoft Copilot', icon: '/icons/copilot.svg' },
      { name: 'Perplexity', icon: '/icons/perplexity.svg' },
      { name: 'Higgsfield AI', icon: '/icons/higgsfield.svg' },
      { name: 'Motion AI', icon: '/icons/motion.svg' },
      // { name: 'Midjourney', icon: '/icons/midjourney.svg' },
      // { name: 'Runway', icon: '/icons/runway.svg' },
      // { name: 'Adobe Firefly', icon: '/icons/firefly.svg' },
      // { name: 'Zapier', icon: '/icons/zapier.svg' },
      // { name: 'Make', icon: '/icons/make.svg' },
      // { name: 'n8n', icon: '/icons/n8n.svg' },
    ],
  },

  {
    label: 'Productivity & Business',
    tools: [
      { name: 'Google Docs', icon: '/icons/google-docs.svg' },
      { name: 'Google Sheets', icon: '/icons/google-sheets.svg' },
      { name: 'Google Calendar', icon: '/icons/google-calendar.svg' },
      { name: 'Microsoft Word', icon: '/icons/word.svg' },
      { name: 'Microsoft Excel', icon: '/icons/excel.svg' },
      { name: 'Microsoft PowerPoint', icon: '/icons/powerpoint.svg' },
      { name: 'Gmail', icon: '/icons/gmail.svg' },
      // { name: 'Calendly', icon: '/icons/calendly.svg' },
      // { name: 'Airtable', icon: '/icons/airtable.svg' },
      // { name: 'Loom', icon: '/icons/loom.svg' },
      // { name: 'HubSpot', icon: '/icons/hubspot.svg' },
    ],
  },
];

export default function ToolsSection() {
  return (
    <section className="w-full overflow-hidden py-16 sm:py-20">
      <div className="mx-auto w-full max-w-6xl px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.22em] text-muted-foreground">
            My Toolkit
          </p>

          <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
            Tools{' '}
            <span
              className="bg-gradient-to-r from-violet-500 via-fuchsia-400 to-amber-400 bg-clip-text italic text-transparent"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              I Use
            </span>
          </h2>
        </motion.div>

        {/* Categories */}
        <div className="space-y-9">
          {groups.map((group, groupIndex) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: groupIndex * 0.06,
              }}
            >
              {/* Category */}
              <div className="mb-4 flex items-center gap-4">
                <span className="shrink-0 text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
                  {group.label}
                </span>

                <div className="h-px flex-1 bg-border/50" />
              </div>

              {/* Carousel */}
              <div className="relative overflow-hidden">

                {/* Left fade */}
                <div
                  className="
                    pointer-events-none
                    absolute left-0 top-0 bottom-0
                    z-10 w-12 sm:w-20
                    bg-gradient-to-r
                    from-background
                    to-transparent
                  "
                />

                {/* Right fade */}
                <div
                  className="
                    pointer-events-none
                    absolute right-0 top-0 bottom-0
                    z-10 w-12 sm:w-20
                    bg-gradient-to-l
                    from-background
                    to-transparent
                  "
                />

                {/* Moving track */}
                <motion.div
                  className="flex w-max gap-2.5"
                  animate={{
                    x:
                      groupIndex % 2 === 0
                        ? ['0%', '-50%']
                        : ['-50%', '0%'],
                  }}
                  transition={{
                    x: {
                      duration: 35 + groupIndex * 5,
                      repeat: Infinity,
                      ease: 'linear',
                    },
                  }}
                >
                  {/* First set */}
                  <div className="flex shrink-0 gap-2.5">
                    {group.tools.map((tool) => (
                      <ToolPill
                        key={`first-${tool.name}`}
                        tool={tool}
                      />
                    ))}
                  </div>

                  {/* Second set */}
                  <div className="flex shrink-0 gap-2.5">
                    {group.tools.map((tool) => (
                      <ToolPill
                        key={`second-${tool.name}`}
                        tool={tool}
                      />
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

function ToolPill({
  tool,
}: {
  tool: {
    name: string;
    icon: string;
  };
}) {
  return (
    <div
      className="
        flex shrink-0 items-center gap-2.5
        rounded-full
        border border-border/60
        bg-background
        px-4 py-2.5
        text-xs sm:text-sm
        font-medium
        text-foreground
        transition-all duration-200
        hover:border-primary/30
      "
    >
      <img
        src={tool.icon}
        alt=""
        aria-hidden="true"
        className="h-4 w-4 sm:h-[18px] sm:w-[18px] object-contain"
      />

      <span>{tool.name}</span>
    </div>
  );
}