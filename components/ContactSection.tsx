import { ArrowUpRight, BriefcaseBusiness, Linkedin, Mail } from 'lucide-react';

const contactLinks = [
  {
    label: 'Email',
    value: 'princessatungpalan@gmail.com',
    href: 'mailto:princessatungpalan@gmail.com',
    icon: Mail,
  },
  {
    label: 'LinkedIn',
    value: '/in/princess-arielle-t-0127a942a/',
    href: 'https://www.linkedin.com/in/princess-arielle-t-0127a942a/',
    icon: Linkedin,
  },
  {
    label: 'Fiverr',
    value: 'fiverr.com/s/3AG8yLA',
    href: 'https://www.fiverr.com/s/3AG8yLA',
    icon: BriefcaseBusiness,
  },
  {
    label: 'Upwork',
    value: 'upwork.com/freelancers/~01a76a99ea694547f5',
    href: 'https://www.upwork.com/freelancers/~01a76a99ea694547f5?mp_source=share',
    icon: BriefcaseBusiness,
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="relative overflow-hidden py-12 sm:py-16 lg:py-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="pointer-events-none absolute -right-32 top-12 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-secondary/10 blur-3xl" />

      <div className="relative mx-auto grid w-full max-w-6xl gap-8 px-4 sm:px-6 md:gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:gap-16 lg:px-8">
        <div className="max-w-2xl">
          <span className="mb-3 block text-[10px] font-black uppercase tracking-[0.2em] text-primary sm:mb-4 sm:text-xs">
            Get In Touch
          </span>
          <h2 className="text-[clamp(1.75rem,7vw,4.75rem)] font-black leading-[0.98] tracking-[-0.05em]">
            Let&apos;s build something{' '}
            <span className="font-serif italic text-gradient">great.</span>
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:mt-5 sm:text-lg">
            Have a project in mind? Choose the channel that works best for you and let&apos;s start a conversation.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-border/70 bg-background/70 shadow-xl shadow-primary/5 backdrop-blur-sm sm:rounded-[1.75rem]">
          {contactLinks.map(({ label, value, href, icon: Icon }, index) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noreferrer' : undefined}
              className={`group flex min-h-[62px] items-center gap-3 px-4 py-3 transition-colors hover:bg-primary/[0.06] focus-visible:z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary sm:min-h-[76px] sm:gap-4 sm:px-6 sm:py-4 ${
                index < contactLinks.length - 1 ? 'border-b border-border/70' : ''
              }`}
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform duration-200 group-hover:-rotate-6 group-hover:scale-105 sm:h-10 sm:w-10 sm:rounded-2xl">
                <Icon size={16} strokeWidth={2.2} className="sm:h-[18px] sm:w-[18px]" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-base font-black tracking-tight sm:text-xl">
                  {label}
                </span>
                <span className="mt-0.5 block truncate text-[11px] font-medium text-muted-foreground sm:mt-1 sm:text-sm">
                  {value}
                </span>
              </span>
              <ArrowUpRight
                size={18}
                className="shrink-0 text-muted-foreground transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary sm:h-5 sm:w-5"
                aria-hidden="true"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
