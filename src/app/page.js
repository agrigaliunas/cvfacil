import { CTA } from "./components/Sections/CTA";
import { Hero } from "./components/Sections/Hero";
import { PYWrapper } from "./components/Sections/PYWrapper";

export default function Home() {
  return (
    <PYWrapper>
      <Hero />
      <CTA />
    </PYWrapper>
  );
}
