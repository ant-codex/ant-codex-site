import { Pricing } from "@/components/sections/Pricing";

export const metadata = {
  title: "Pricing | Ant-Codex Web Design Studio",
  description: "Flexible, transparent pricing plans for websites, landing pages, and brand identity projects.",
};

export default function PricingPage() {
  return (
    <main className="pt-24">
      <Pricing />
    </main>
  );
}
