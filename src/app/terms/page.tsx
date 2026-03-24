export const metadata = {
  title: "Terms of Service | Ant-Codex Web Design Studio",
};

export default function TermsPage() {
  return (
    <main className="pt-32 pb-24 container max-w-3xl">
      <h1 className="text-4xl font-black tracking-tight mb-2">Terms of Service</h1>
      <p className="text-muted-foreground text-sm mb-12">Last updated: March 2026</p>

      <div className="prose prose-invert max-w-none space-y-8">
        <section>
          <h2 className="text-xl font-bold mb-3">1. Acceptance of Terms</h2>
          <p className="text-muted-foreground leading-relaxed">
            By engaging Ant-Codex Studio for any services, you agree to be bound by these Terms of Service.
            Please read them carefully before proceeding.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold mb-3">2. Services</h2>
          <p className="text-muted-foreground leading-relaxed">
            Ant-Codex Studio provides web design, development, and brand identity services. The scope of any
            project is defined in a separate project agreement or proposal agreed upon by both parties.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold mb-3">3. Payment</h2>
          <p className="text-muted-foreground leading-relaxed">
            All projects require a deposit before work begins. Final deliverables will be provided upon receipt
            of the final payment. Payment terms are specified in each project agreement.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold mb-3">4. Intellectual Property</h2>
          <p className="text-muted-foreground leading-relaxed">
            Upon full payment, the client receives full ownership of the final deliverables. Ant-Codex reserves
            the right to display the work in its portfolio unless otherwise agreed in writing.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold mb-3">5. Contact</h2>
          <p className="text-muted-foreground leading-relaxed">
            For questions, contact us at{' '}
            <a href="mailto:hello@ant-codex.com" className="text-accent underline">hello@ant-codex.com</a>.
          </p>
        </section>
      </div>
    </main>
  );
}
