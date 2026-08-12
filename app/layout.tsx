// This is the root layout of the Next.js application, which wraps all pages and components. It imports global styles, sets up metadata for the website, and includes a ThemeProvider for managing light and dark themes. The layout uses Google Fonts (Inter and Playfair Display) for typography, and applies them to the HTML and body elements. The children prop allows nested components to be rendered within the layout, ensuring a consistent structure across all pages of the application.
// The layout is designed to provide a seamless user experience across different devices and screen sizes, with responsive design and accessibility features. The ThemeProvider component manages the theme state and provides context for the application, allowing users to switch between light and dark themes. The metadata object defines the title and description of the website, which can be used for SEO and social media sharing. Overall, this root layout serves as the foundation for the Next.js application, ensuring a consistent look and feel across all pages and components.

import './globals.css';
import type { Metadata, Viewport } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import ThemeProvider from '@/components/ThemeProvider';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  weight: ['400', '700', '900'],
  variable: '--font-playfair',
});

export const metadata: Metadata = {
  title: 'Arielle — Virtual Assistant & Web Designer',
  description:
    'Helping entrepreneurs and small businesses save time through reliable virtual assistance, organized administration, and modern websites.',
  // openGraph: {
  //   images: [{ url: 'https://bolt.new/static/og_default.png' }],
  // },
  // twitter: {
  //   card: 'summary_large_image',
  //   images: [{ url: 'https://bolt.new/static/og_default.png' }],
  // },
  icons: {
    icon: '/images/logo/icon.png',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  viewportFit: 'cover',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`} suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
