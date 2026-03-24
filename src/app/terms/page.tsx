'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-black text-white py-32 px-6">
      <div className="container max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-12"
        >
          <Link href="/" className="group flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] opacity-40 hover:opacity-100 transition-opacity">
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Back to Home
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-16 uppercase italic">Terms of <span className="text-[#c8ff00]">Service</span></h1>
          
          <div className="space-y-12 text-zinc-400 leading-relaxed font-light">
            <section>
              <h2 className="text-white text-xl font-bold uppercase tracking-widest mb-4">1. Acceptance of Terms</h2>
              <p>By accessing and using the Ant-Codex website and services, you agree to comply with and be bound by these Terms of Service. If you do not agree, please refrain from using our services.</p>
            </section>

            <section>
              <h2 className="text-white text-xl font-bold uppercase tracking-widest mb-4">2. Service Description</h2>
              <p>Ant-Codex provides high-end web design, e-commerce development, and branding services. Each project is subject to a separate service agreement detailing specific deliverables and timelines.</p>
            </section>

            <section>
              <h2 className="text-white text-xl font-bold uppercase tracking-widest mb-4">3. Intellectual Property</h2>
              <p>All content created by Ant-Codex remains our property until full payment is received, at which point ownership of specified deliverables transfers to the client as per the project agreement.</p>
            </section>

            <section>
              <h2 className="text-white text-xl font-bold uppercase tracking-widest mb-4">4. Limitation of Liability</h2>
              <p>Ant-Codex shall not be liable for any indirect, incidental, or consequential damages resulting from the use or inability to use our digital products or services.</p>
            </section>

            <section>
              <h2 className="text-white text-xl font-bold uppercase tracking-widest mb-4 text-[#c8ff00]">5. Governing Law</h2>
              <p>These terms are governed by the laws of the jurisdiction in which Ant-Codex operates (London, United Kingdom).</p>
            </section>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
