'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const categories = ["ALL", "E-COMMERCE", "BRANDING", "WEBSITES"];

const projects = [
  {
    title: "Nova Fashion",
    cat: "E-COMMERCE",
    img: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80",
    desc: "A premium minimalist fashion store with seamless transitions and lightning-fast checkout."
  },
  {
    title: "Aura Skincare",
    cat: "BRANDING",
    img: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80",
    desc: "Organic skincare brand identity focusing on purity, elegance, and sustainable packaging."
  },
  {
    title: "Zenith Agency",
    cat: "WEBSITES",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
    desc: "Digital consultancy website with complex interactive grids and WebGL experiences."
  }
];

export function Work() {
  const [activeCat, setActiveCat] = useState("ALL");
  const filtered = activeCat === "ALL" ? projects : projects.filter(p => p.cat === activeCat);
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // We re-trigger GSAP scroll animations when the filter changes
    ScrollTrigger.refresh();
  }, [activeCat]);

  return (
    <section id="work" ref={containerRef} className="py-24 md:py-40 bg-background text-foreground">
      <div className="container px-4 md:px-8 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="mb-16 md:mb-24"
        >
          <p className="text-[11px] uppercase tracking-widest text-muted-foreground mb-6 font-semibold">Selected Work</p>
          <h2 className="text-[clamp(3rem,8vw,7rem)] font-black tracking-tighter leading-[0.9] uppercase uppercase text-balance">
            Crafting Digital <br /><span className="text-muted-foreground">Excellence.</span>
          </h2>
        </motion.div>

        {/* Filters */}
        <div className="flex gap-8 mb-16 border-b border-border/50 overflow-x-auto no-scrollbar pb-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCat(cat)}
              className={`text-xs md:text-sm font-black uppercase tracking-widest transition-colors relative whitespace-nowrap ${
                activeCat === cat ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {cat}
              {activeCat === cat && (
                <motion.div layoutId="work-tab" className="absolute -bottom-6 left-0 right-0 h-1 bg-accent" />
              )}
            </button>
          ))}
        </div>

        {/* Work Grid/List */}
        <div className="flex flex-col gap-16 md:gap-32 mt-12">
          <AnimatePresence mode="popLayout">
            {filtered.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="group relative flex flex-col gap-6 w-full"
              >
                <div className="w-full aspect-video md:aspect-[21/9] overflow-hidden rounded-[2rem] bg-muted relative pointer-events-none">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-[1.5s] ease-[0.16,1,0.3,1] group-hover:scale-110"
                    sizes="(max-width: 1400px) 100vw, 1400px"
                  />
                </div>
                <div className="flex flex-col md:flex-row md:items-end justify-between px-2 gap-4">
                  <div>
                    <span className="text-[11px] font-bold tracking-widest text-accent mb-3 block">{item.cat}</span>
                    <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">{item.title}</h3>
                    <p className="text-lg text-muted-foreground max-w-lg font-medium">{item.desc}</p>
                  </div>
                  <Link href="#" className="flex items-center gap-4 text-sm font-bold uppercase tracking-widest group-hover:text-accent transition-colors duration-300">
                    VIEW PROJECT
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-border/50 group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transform -rotate-45 group-hover:rotate-0 transition-transform duration-500">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </div>
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
