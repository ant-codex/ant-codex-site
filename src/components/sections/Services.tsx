'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    num: "01",
    name: "Web Design & Development",
    desc: "We design and develop fast, conversion-focused websites tailored to your brand — pixel-perfect, mobile-first, and built to grow with your business.",
    color: "bg-card"
  },
  {
    num: "02",
    name: "Landing Pages",
    desc: "Single-page experiences engineered to convert. We combine sharp copy, bold design and proven UX patterns to turn visitors into clients.",
    color: "bg-card"
  },
  {
    num: "03",
    name: "Brand Identity",
    desc: "Your visual identity from the ground up — logo, colour system, typography and brand guidelines that set you apart and scale across every touchpoint.",
    color: "bg-card"
  },
  {
    num: "04",
    name: "SEO & Performance",
    desc: "Speed, structure and visibility. We optimise your site's core web vitals, technical SEO and content architecture so you rank higher and load faster.",
    color: "bg-card"
  }
];

export function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    // Staggered slide-up for cards
    cardsRef.current.forEach((card, index) => {
      if (!card) return;
      gsap.fromTo(card, 
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section id="services" ref={sectionRef} className="py-24 md:py-40 bg-background text-foreground relative z-10 w-full rounded-t-[3rem] -mt-[3rem]">
      <div className="container px-4 md:px-8 mx-auto max-w-7xl">
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
          >
            <p className="text-[11px] uppercase tracking-widest text-muted-foreground mb-6 font-semibold">Our Expertise</p>
            <h2 className="text-[clamp(3rem,8vw,7rem)] font-black tracking-tighter leading-[0.9] uppercase">We Build<br /><span className="text-accent">Digital</span><br />Experiences</h2>
          </motion.div>
        </div>

        <div className="flex flex-col gap-8 md:gap-12">
          {services.map((service, i) => (
            <div
              key={i}
              ref={el => { cardsRef.current[i] = el; }}
              className={`group flex flex-col md:flex-row items-start md:items-center justify-between p-8 md:p-16 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer ${service.color} border border-border/50`}
            >
              <div className="flex-1">
                <span className="text-sm font-bold text-accent mb-4 block tracking-widest">{service.num}</span>
                <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-6 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-foreground group-hover:to-accent transition-all duration-500">
                  {service.name}
                </h3>
                <p className="text-lg text-muted-foreground max-w-xl leading-relaxed font-medium">
                  {service.desc}
                </p>
              </div>
              
              <div className="mt-8 md:mt-0 flex items-center justify-center w-16 h-16 rounded-full bg-secondary/50 group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transform -rotate-45 group-hover:rotate-0 transition-transform duration-500">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
