import {
  AreasSection,
  ContactSection,
  CredentialsSection,
  ExperienceSection,
  GallerySection,
  HeroSection,
  IntroSection,
  PhilosophySection,
} from "@/components/sections";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <IntroSection />
      <CredentialsSection />
      <ExperienceSection />
      <AreasSection />
      <PhilosophySection />
      <GallerySection />
      <ContactSection />
    </>
  );
}
