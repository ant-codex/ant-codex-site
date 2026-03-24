'use client';

import { motion } from 'framer-motion';

const plans = [
  { name: "Starter", price: "POA", desc: "Perfect for personal brands and simple landing pages.", featured: false },
  { name: "Dynamic", price: "POA", desc: "Custom business websites with CMS and basic SEO.", featured: true },
  { name: "Pro Shop", price: "POA", desc: "Full e-commerce ecosystem with high conversion design.", featured: false },
  { name: "Enterprise", price: "POA", desc: "Complex digital products and high-scale applications.", featured: false }
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

          <div className="flex flex-col">
            {plans.map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`flex justify-between items-center p-6 md:p-8 border border-border mt-[-1px] cursor-pointer group transition-all duration-300 ${
                  i === 0 ? 'rounded-t-2xl' : ''
                } ${i === plans.length - 1 ? 'rounded-b-2xl' : ''} ${
                  plan.featured ? 'bg-accent/5 border-accent/30' : 'hover:bg-muted'
                }`}
              >
                <div className="flex flex-col">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-lg font-bold tracking-tight">{plan.name}</span>
                    {plan.featured && (
                      <span className="text-[9px] font-bold uppercase tracking-widest bg-accent text-accent-foreground px-2 py-0.5 rounded-full">POPULAR</span>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground max-w-[200px]">{plan.desc}</p>
                </div>
                <div className="flex items-center gap-6">
                  <span className="font-bold text-lg">{plan.price}</span>
                  <span className="text-accent text-xl opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
