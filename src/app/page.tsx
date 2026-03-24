import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Clients } from "@/components/sections/Clients";
import { Work } from "@/components/sections/Work";
import { Pricing } from "@/components/sections/Pricing";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Clients />
      <Work />
      <Pricing />
      <Contact />
    </>
  );
}
