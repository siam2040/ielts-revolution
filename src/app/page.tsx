import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/home/HeroSection';
import FreeToolsSection from '@/components/home/FreeToolsSection';
import FeaturedContentSection from '@/components/home/FeaturedContentSection';
import PopularCoursesSection from '@/components/home/PopularCoursesSection';
import StatsBar from '@/components/home/StatsBar';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import BlogPreviewSection from '@/components/home/BlogPreviewSection';
import CTABanner from '@/components/home/CTABanner';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '72px' }}>
        <HeroSection />
        <FreeToolsSection />
        <FeaturedContentSection />
        <PopularCoursesSection />
        <StatsBar />
        <TestimonialsSection />
        <BlogPreviewSection />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
