// Project data and types for the portfolio website

export type ProjectCategory =
  | 'Web Design'
  | 'UI/UX'
  | 'Graphics'
  | 'Business Support'
  | 'Academic'
  | 'Personal';

export interface CaseStudy {
  overview: string;
  problem: string;
  solution: string;
  features: string[];
  technologies: string[];
  screenshots?: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export interface Project {
  id: number;
  title: string;
  shortDescription: string;
  category: ProjectCategory;
  thumbnail: string;
  hoverVideo?: string;
  featured: boolean;
  caseStudy: CaseStudy;
}

export const projectCategories: (ProjectCategory | 'All')[] = [
  'All',
  'Web Design',
  'UI/UX',
  'Graphics',
  'Business Support',
  'Academic',
  'Personal',
];

export const projects: Project[] = [
  {
    id: 1,
    title: 'OtakuList',
    shortDescription: 'Anime Tracking Platform',
    category: 'Web Design',
    thumbnail: '/images/projects/otakushelf/01.png',
    hoverVideo: '/images/projects/otakushelf/00.mp4',
    featured: true,

    caseStudy: {
      overview:
        'A dark-themed anime tracking web app where fans can search titles, build watchlists, log episode progress, and rate series — all in one fast, personal interface.',

      problem:
        'Anime fans were juggling spreadsheets, browser bookmarks, and memory to track what they were watching. Existing trackers were cluttered, ad-heavy, or required sign-ups that felt intrusive for casual users who just wanted a simple list.',

      solution:
        'Built a lightweight, dark-mode-first tracker with a card-based browse view and a compact list view. Users can search a public anime API in real time, tag series by status (Watching / Completed / Dropped), and log episodes with one click — no friction, no clutter.',

      features: [
        'Organize your anime, manga, and light novel collection',
        'Save and manage your favorite series',
        'Track your reading and watching progress',
        'Discover new series to enjoy',
      ],

      technologies: [
        'React',
        'TypeScript',
        'Supabase',
        'Vite',
        'Tailwind CSS',
        'Anilist API',
      ],

      screenshots: [
        '/images/projects/otakushelf/01.png',
        '/images/projects/otakushelf/02.png',
        '/images/projects/otakushelf/03.png',
        '/images/projects/otakushelf/04.png',
        '/images/projects/otakushelf/05.png',
        '/images/projects/otakushelf/06.png',
        '/images/projects/otakushelf/07.png',
        '/images/projects/otakushelf/08.png',
      ],

      liveUrl: 'https://otakushelf-three.vercel.app',
    },
  },

  {
    id: 2,
    title: 'Video Editor Creative Portfolio',
    shortDescription: 'Creative Portfolio Website',
    category: 'Web Design',
    thumbnail: '/images/projects/creative-video-editor-portfolio/01.png',
    hoverVideo: '/images/projects/creative-video-editor-portfolio/00.mp4',
    featured: false,

    caseStudy: {
      overview:
        'A bold, dark-themed portfolio website for a multimedia artist showcasing creative work.',

      problem:
        'The artist needed a striking online presence that reflected their aesthetic without overwhelming the artwork.',

      solution:
        'Designed a documentary film-themed portfolio with large imagery and smooth transitions that feels like sharing a story.',

      features: [
        'Interactive video portfolio',
        'Featured showreel',
        'Smooth animations and transitions',
        'Responsive design',
      ],

      technologies: [
        'React',
        'TypeScript',
        'Tailwind CSS',
        'Framer Motion',
        'Next.js',
      ],
      
      screenshots: [
        '/images/projects/creative-video-editor-portfolio/01.png',
        '/images/projects/creative-video-editor-portfolio/02.png',
        '/images/projects/creative-video-editor-portfolio/03.png',
        '/images/projects/creative-video-editor-portfolio/04.png',
      ],

      liveUrl: 'https://creativefolio-video-editor.vercel.app',
    },
  },

  {
    id: 3,
    title: 'Homeo Wellness System',
    shortDescription: 'Online Booking for Wellness & Healthcare Website',
    category: 'Web Design',
    thumbnail: '/images/projects/homeo-wellness/01.png',
    hoverVideo: '/images/projects/homeo-wellness/00.mp4',
    featured: true,

    caseStudy: {
      overview:
        'A calming, professional website for a holistic wellness brand offering consultations, supplements, and guided wellness programs, designed to build trust and gently convert visitors into clients.',

      problem:
        'The client had no web presence and relied entirely on social media. Without a dedicated site, potential clients had nowhere to learn about services, read testimonials, or book consultations — resulting in missed leads and low brand credibility.',

      solution:
        'Designed a warm, sage-and-cream themed website with a clear user journey: land, learn about services, read testimonials, and book via an integrated Calendly form. Built on a headless CMS so the client can update content without touching code.',

      features: [
        'Clean landing page with hero and services overview',
        'Service listings with detailed descriptions',
        'Calendly-integrated booking form',
        'Fully mobile-responsive',
      ],

      technologies: [
        'React',
        'Next.js',
        'Tailwind CSS',
        'Headless CMS',
        'Supabase',
      ],

      screenshots: [
        '/images/projects/homeo-wellness/01.png',
        '/images/projects/homeo-wellness/02.png',
        '/images/projects/homeo-wellness/03.png',
        '/images/projects/homeo-wellness/04.png',
        '/images/projects/homeo-wellness/05.png',
        '/images/projects/homeo-wellness/06.png',
        '/images/projects/homeo-wellness/07.png',
        '/images/projects/homeo-wellness/08.png',
        '/images/projects/homeo-wellness/09.png'
      ],

      liveUrl: 'https://homeo-wellness.vercel.app',
    },
  },

  {
    id: 4,
    title: 'Store Inventory & Sales System',
    shortDescription: 'Web-Based Inventory and Sales Management System',
    category: 'Business Support',
    thumbnail: '/images/projects/sims/01.png',
    hoverVideo: '/images/projects/sims/00.mp4',
    featured: true,

    caseStudy: {
      overview:
        'A retail management system designed to help small stores manage inventory, sales, unpaid balances, restocking, and reports in one centralized interface.',

      problem:
        'Small stores may rely on manual records or spreadsheets, making it difficult to accurately track stock, sales, customer balances, and products that need restocking.',

      solution:
        'A streamlined store-management solution that makes everyday inventory and sales operations faster, clearer, and more organized.',

      features: [
        'Dashboard with sales, inventory value, and low-stock monitoring',
        'Inventory management with product search, categories, and stock tracking',
        'Paid and Utang sales recording with automatic stock updates',
        'Restocking workflow with low-stock and out-of-stock monitoring',
        'Transaction history with sales, Utang, and restock records',
        'Reports and exports in CSV, Excel, and PDF formats',
      ],

      technologies: [
        'React',
        'TypeScript',
        'Vite',
        'Tailwind CSS',
        'Recharts',
        'Lucide React',
        'SheetJS',
        'jsPDF',
        'localStorage',
      ],

      screenshots: [
        '/images/projects/sims/01.png',
        '/images/projects/sims/02.png',
        '/images/projects/sims/03.png',
        '/images/projects/sims/04.png',
        '/images/projects/sims/05.png',
        '/images/projects/sims/06.png',
        '/images/projects/sims/07.png',
        '/images/projects/sims/08.png',
        '/images/projects/sims/09.png',
        '/images/projects/sims/10.png',
        '/images/projects/sims/11.png',
        '/images/projects/sims/12.png'
      ],

      liveUrl: 'https://sims-rust-sigma.vercel.app',
    },
  },
];

export const featuredProjects = projects.filter(
  (project) => project.featured
);

export const otherProjects = projects
  .filter((project) => !project.featured)
  .sort((a, b) => a.title.localeCompare(b.title));