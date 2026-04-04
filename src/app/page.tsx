import { HeroSection } from "@/components/HeroSection";
import { SignetSection } from "@/components/SignetSection";
import { PillarsSection } from "@/components/PillarsSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <SignetSection />
      <PillarsSection />
      <Footer />
    </main>
  );
}
