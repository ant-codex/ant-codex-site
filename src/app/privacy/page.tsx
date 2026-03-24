export const metadata = {
  title: "Privacy Policy | Ant-Codex Web Design Studio",
};

export default function PrivacyPage() {
  return (
    <main className="pt-32 pb-24 container max-w-3xl">
      <h1 className="text-4xl font-black tracking-tight mb-2">Privacy Policy</h1>
      <p className="text-muted-foreground text-sm mb-12">Last updated: March 2026</p>

      <div className="prose prose-invert max-w-none space-y-8">
        <section>
          <h2 className="text-xl font-bold mb-3">1. Information We Collect</h2>
          <p className="text-muted-foreground leading-relaxed">
            We collect information you voluntarily provide when contacting us, such as your name, email address,
            company name, and project details. We do not sell or share your personal data with third parties.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold mb-3">2. How We Use Your Information</h2>
          <p className="text-muted-foreground leading-relaxed">
            Your information is used solely to respond to your inquiries, deliver our services, and improve
            your experience with Ant-Codex Studio.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold mb-3">3. Cookies</h2>
          <p className="text-muted-foreground leading-relaxed">
            This website uses minimal cookies for analytics and performance. You can disable cookies
            in your browser settings at any time.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold mb-3">4. Contact</h2>
          <p className="text-muted-foreground leading-relaxed">
            If you have any questions about this policy, please contact us at{' '}
            <a href="mailto:hello@ant-codex.com" className="text-accent underline">hello@ant-codex.com</a>.
          </p>
        </section>
      </div>
    </main>
  );
}
