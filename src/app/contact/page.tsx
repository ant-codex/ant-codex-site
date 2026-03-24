import { Contact } from "@/components/sections/Contact";

export const metadata = {
  title: "Contact | Ant-Codex Web Design Studio",
  description: "Let's build something great together. Reach out to the Ant-Codex team.",
};

export default function ContactPage() {
  return (
    <main className="pt-24">
      <Contact />
    </main>
  );
}
