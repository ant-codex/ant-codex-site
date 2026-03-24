import { Services } from "@/components/sections/Services";

export const metadata = {
  title: "Services | Ant-Codex Web Design Studio",
  description: "Explore our full range of web design, development, and brand identity services.",
};

export default function ServicesPage() {
  return (
    <main className="pt-24">
      <Services />
    </main>
  );
}
