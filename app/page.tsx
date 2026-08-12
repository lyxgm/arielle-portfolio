// This is the main page of the portfolio website, which includes all the sections of the homepage. It imports and renders the Navbar, HeroSection, TransformSection, ServicesSection, PortfolioSection, StatsSection, WorkProcessSection, FAQSection, ContactSection, and Footer components. The main element has a class of "overflow-x-hidden" to prevent horizontal scrolling on smaller screens. Each section is designed to be visually appealing and informative, providing a clear overview of the services offered and encouraging potential clients to reach out for more information or assistance. The sections are responsive and work on both desktop and mobile devices, ensuring a seamless user experience across different screen sizes.
// The page is structured to provide a smooth and engaging user experience, with each section transitioning seamlessly into the next. The use of framer-motion for animations enhances the visual appeal and interactivity of the page, while accessibility features such as keyboard navigation and aria-labels ensure that the site is usable by all visitors. Overall, this page serves as a comprehensive introduction to the portfolio, showcasing the individual's skills, services, and expertise in a professional and visually appealing manner.

import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import TransformSection from '@/components/TransformSection';
import ServicesSection from '@/components/ServicesSection';
import PortfolioSection from '@/components/PortfolioSection';
import StatsSection from '@/components/StatsSection';
import WorkProcessSection from '@/components/WorkProcessSection';
import FAQSection from '@/components/FAQSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <TransformSection />
      <ServicesSection />
      <PortfolioSection />
      <StatsSection />
      <WorkProcessSection />
      <ContactSection />
      <FAQSection />
      <Footer />
    </main>
  );
}
