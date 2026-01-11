import Hero from "@/components/Hero";
import TechMarquee from "@/components/TechMarquee";
import Systems from "@/components/Systems";
import ProblemSection from "@/components/ProblemSection";
import Methodology from "@/components/Methodology";
import PlatformLinks from "@/components/PlatformLinks";
import Faq from "@/components/Faq";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <TechMarquee />
      <ProblemSection /> 
      <Systems />
      <Methodology />
      <PlatformLinks />
      <Faq />
      <ContactForm />
      <Footer />
    </main>
  );
}