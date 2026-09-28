import { CoursesSection } from "@/components/courses-section";
import { HeroSection } from "@/components/hero-section";
import { IntroHeading } from "@/components/intro-heading";
import { PartnerLogos } from "@/components/partner-logos";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <PartnerLogos />
      <IntroHeading />
      <CoursesSection />
    </main>
  );
}