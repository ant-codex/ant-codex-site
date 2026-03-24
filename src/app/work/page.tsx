import { Work } from "@/components/sections/Work";

export const metadata = {
  title: "Work | Ant-Codex Web Design Studio",
  description: "Browse our portfolio of websites, digital products, and brand experiences we've built.",
};

export default function WorkPage() {
  return (
    <main className="pt-24">
      <Work />
    </main>
  );
}
