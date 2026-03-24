'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    num: "01",
    name: "Web Design & Development",
    desc: "We design and develop fast, conversion-focused websites tailored to your brand ÔÇö pixel-perfect, mobile-first, and built to grow with your business."
  },
  {
    num: "02",
    name: "Landing Pages",
    desc: "Single-page experiences engineered to convert. We combine sharp copy, bold design and proven UX patterns to turn visitors into clients."
  },
  {
    num: "03",
    name: "Brand Identity",
    desc: "Your visual identity from the ground up ÔÇö logo, colour system, typography and brand guidelines that set you apart and scale across every touchpoint."
  },
  {
    num: "04",
    name: "SEO & Performance",
    desc: "Speed, structure and visibility. We optimise your site's core web vitals, technical SEO and content architecture so you rank higher and load faster."
  },
  {
    num: "05",
    name: "E-commerce",
    desc: "Scalable online stores with seamless UX ÔÇö from product pages to checkout flow ÔÇö built on the platforms that fit your volume and ambition."
  }
];

export function Services() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="services" className="py-24 md:py-32 border-t border-border/50">
      <div className="container overflow-hidden">
        <div className="grid md:grid-cols-2 gap-8 mb-20 items-end">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-4">Our Services</p>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1]">What we<br />deliver.</h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-muted-foreground max-w-md md:ml-auto leading-relaxed"
          >
            From sharp design to solid code ÔÇö we handle every layer of your digital presence so you can focus on what matters.
          </motion.p>
        </div>

        <div className="border-t border-border">
          {services.map((service, i) => (
            <motion.div
              key={i}
              onMouseEnter={() => setActiveIndex(i)}
              onMouseLeave={() => setActiveIndex(null)}
              onClick={() => setActiveIndex(activeIndex === i ? null : i)}
              className="grid grid-cols-[3rem_1fr_auto] md:grid-cols-[4rem_1fr_auto] py-8 border-b border-border group cursor-pointer transition-colors hover:border-foreground/20"
            >
              <span className="text-xs font-semibold text-muted-foreground py-1">{service.num}</span>
              <div className="flex flex-col">
                <h3 className={`text-xl md:text-2xl font-semibold tracking-tight transition-colors duration-300 ${activeIndex === i ? 'text-accent' : 'group-hover:text-accent'}`}>
                  {service.name}
                </h3>
                <motion.div
                  initial={false}
                  animate={{ 
                    height: activeIndex === i ? 'auto' : 0,
                    opacity: activeIndex === i ? 1 : 0,
                    marginTop: activeIndex === i ? 16 : 0
                  }}
                  className="overflow-hidden"
                >
                  <p className="text-muted-foreground leading-relaxed max-w-2xl">{service.desc}</p>
                </motion.div>
              </div>
              <motion.span
                animate={{ opacity: activeIndex === i ? 1 : 0 }}
                className="hidden md:block text-[10px] uppercase tracking-widest text-accent self-center"
              >
                Learn more ÔåÆ
              </motion.span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
