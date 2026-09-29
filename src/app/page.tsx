import { CategoriesSection } from "@/components/categories-section";
import { CreatorCtaSection } from "@/components/creator-cta-section";
import { CoursesSection } from "@/components/courses-section";
import { HeroSection } from "@/components/hero-section";
import { IntroHeading } from "@/components/intro-heading";
import { PartnerLogos } from "@/components/partner-logos";
import { ProfessionalGrowthSection } from "@/components/professional-growth-section";
import { SiteFooter } from "@/components/site-footer";
import { TestimonialsSection } from "@/components/testimonials-section";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <PartnerLogos />
      <IntroHeading />
      <CoursesSection />
      <CategoriesSection />
      <ProfessionalGrowthSection />
      <CreatorCtaSection />
      <TestimonialsSection />
      <SiteFooter />
    </main>
  );
}
