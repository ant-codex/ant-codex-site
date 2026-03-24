'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Check, ArrowRight, ArrowUpRight } from 'lucide-react';

const plans = [
  { 
    name: "Starter", 
    price: "POA", 
    desc: "Perfect for personal brands and simple landing pages.", 
    featured: false,
    features: ["Responsive Design", "Basic SEO", "1 Round of Revisions"]
  },
  { 
    name: "Dynamic", 
    price: "POA", 
    desc: "Custom business websites with CMS and basic SEO.", 
    featured: true,
    features: ["Custom CMS Integration", "Advanced SEO", "3 Rounds of Revisions", "Performance Optimization"]
  },
  { 
    name: "Pro Shop", 
    price: "POA", 
    desc: "Full e-commerce ecosystem with high conversion design.", 
    featured: false,
    features: ["Shopify/Stripe Integration", "Product Strategy", "Conversion Tracking", "Post-Launch Support"]
  },
  { 
    name: "Enterprise", 
    price: "POA", 
    desc: "Complex digital products and high-scale applications.", 
    featured: false,
    features: ["Custom Web Apps", "API Integrations", "Dedicated Support", "Scalable Infrastructure"]
  }
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 md:py-32">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-4">Pricing</p>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">Invest in your digital future.</h2>
            <p className="text-muted-foreground max-w-sm leading-relaxed mb-10">
              Transparent scaling, premium execution. All projects include responsive design, basic SEO, and high-performance hosting setup.
            </p>
            <a href="#contact" className="inline-flex px-8 py-3 bg-foreground text-background rounded-full font-semibold tracking-wider text-xs uppercase hover:bg-accent hover:text-accent-foreground transition-all">
              Request a Quote
            </a>
          </motion.div>

          <div className="flex flex-col gap-4">
            {plans.map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative group p-8 rounded-3xl border transition-all duration-500 overflow-hidden ${
                  plan.featured 
                    ? 'bg-zinc-900 border-[#c8ff00]/30 shadow-[0_0_40px_rgba(200,255,0,0.05)]' 
                    : 'bg-white/5 border-white/10 hover:border-white/20'
                }`}
              >
                {/* Visual Accent for Featured */}
                {plan.featured && (
                  <div className="absolute top-0 right-0 p-4">
                    <span className="text-[9px] font-black uppercase tracking-[0.2em] bg-[#c8ff00] text-black px-3 py-1 rounded-full shadow-lg shadow-[#c8ff00]/20">
                      Top Choice
                    </span>
                  </div>
                )}

                <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 relative z-10">
                  <div className="max-w-xs">
                    <h3 className="text-2xl font-black tracking-tighter mb-2 group-hover:text-[#c8ff00] transition-colors uppercase italic">
                      {plan.name}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                      {plan.desc}
                    </p>
                    <div className="flex flex-wrap gap-2">
                       {plan.features.slice(0, 2).map((f, idx) => (
                         <span key={idx} className="text-[10px] uppercase tracking-widest bg-white/5 px-2 py-1 rounded border border-white/5 opacity-60">
                           {f}
                         </span>
                       ))}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center gap-6 md:min-w-[240px] justify-end">
                    <div className="text-right">
                      <span className="text-[10px] uppercase tracking-[0.3em] opacity-40 block mb-1">Starting from</span>
                      <span className="text-4xl font-black tracking-tighter">{plan.price}</span>
                    </div>
                    
                    <Link
                      href="/#contact"
                      className={`w-full sm:w-auto px-10 py-4 rounded-full font-black uppercase tracking-widest text-[10px] transition-all flex items-center justify-center gap-3 relative overflow-hidden group/btn ${
                        plan.featured
                          ? 'bg-[#c8ff00] text-black hover:shadow-[0_0_30px_rgba(200,255,0,0.3)]'
                          : 'bg-white text-black hover:bg-zinc-200'
                      }`}
                    >
                      Get Started
                      <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
