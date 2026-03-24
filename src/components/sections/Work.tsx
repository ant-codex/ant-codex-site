'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const categories = ["All", "E-commerce", "Brand Identity", "Websites"];

const projects = [
  {
    title: "Nova Fashion",
    cat: "E-commerce",
    img: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80",
    desc: "A premium minimalist fashion store with seamless transitions."
  },
  {
    title: "Aura Skincare",
    cat: "Brand Identity",
    img: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80",
    desc: "Organic skincare branding focusing on purity and elegance."
  },
  {
    title: "Zenith Agency",
    cat: "Websites",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
    desc: "Digital consultancy website with complex interactive grids."
  }
];

export function Work() {
  const [activeCat, setActiveCat] = useState("All");

  const filtered = activeCat === "All" ? projects : projects.filter(p => p.cat === activeCat);

  return (
    <section id="work" className="py-24 md:py-32 bg-secondary/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-4">Our Selected Work</p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-12">Crafting digital<br />excellence.</h2>
        </motion.div>

        <div className="flex gap-8 mb-12 border-b border-border overflow-x-auto no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCat(cat)}
              className={`pb-4 text-xs font-semibold uppercase tracking-widest transition-colors relative whitespace-nowrap ${
                activeCat === cat ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {cat}
              {activeCat === cat && (
                <motion.div layoutId="tab-underline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent" />
              )}
            </button>
          ))}
        </div>

        <div className="grid gap-8">
          <AnimatePresence mode="popLayout">
            {filtered.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.5 }}
                className="group relative aspect-[21/9] overflow-hidden rounded-2xl bg-muted"
              >
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1400px) 100vw, 1400px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <p className="text-[10px] uppercase tracking-widest opacity-60 mb-2">{item.cat}</p>
                  <h3 className="text-3xl font-bold tracking-tight mb-2">{item.title}</h3>
                  <p className="text-sm opacity-80 max-w-md mb-6">{item.desc}</p>
                  <Link href="#" className="text-xs uppercase tracking-widest text-accent border-b border-accent/40 pb-1 hover:border-accent transition-colors">
                    View Project ÔåÆ
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
