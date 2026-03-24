'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function PrivacyPage() {
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
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-16 uppercase italic">Privacy <span className="text-[#c8ff00]">Policy</span></h1>
          
          <div className="space-y-12 text-zinc-400 leading-relaxed font-light">
            <section>
              <h2 className="text-white text-xl font-bold uppercase tracking-widest mb-4">1. Data Collection</h2>
              <p>We only collect data that you explicitly provide through our contact forms or brief submission. This typically includes your name, email address, and project details.</p>
            </section>

            <section>
              <h2 className="text-white text-xl font-bold uppercase tracking-widest mb-4">2. Use of Information</h2>
              <p>Your information is used solely for the purpose of communicating with you about your project and improving our digital offerings. We do not sell or share your data with third parties.</p>
            </section>

            <section>
              <h2 className="text-white text-xl font-bold uppercase tracking-widest mb-4">3. Data Security</h2>
              <p>We implement robust security measures to protect your digital assets and personal information from unauthorized access, loss, or disclosure.</p>
            </section>

            <section>
              <h2 className="text-white text-xl font-bold uppercase tracking-widest mb-4">4. Cookies</h2>
              <p>This website uses essential cookies to ensure peak performance and a smooth user experience. We do not use intrusive tracking cookies.</p>
            </section>

            <section>
              <h2 className="text-white text-xl font-bold uppercase tracking-widest mb-4 text-[#c8ff00]">5. Your Rights</h2>
              <p>You have the right to request access to, correction of, or deletion of any personal data we hold about you. Contact us at hello@ant-codex.studio for any privacy-related inquiries.</p>
            </section>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
