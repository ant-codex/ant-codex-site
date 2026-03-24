'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const clients = [
  "LUMINA", "VERTEX", "AURA", "NEBULA", "PULSE", "SYNTHETIX", 
  "OASIS", "FLUX", "NOVA", "IGNITE", "ZENITH", "PRISM"
];

export function Clients() {
  return (
    <section className="py-24 bg-zinc-950 overflow-hidden text-white">
      <div className="max-w-[1400px] mx-auto px-6 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div className="max-w-xl">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black tracking-tighter leading-[0.9] mb-6"
          >
            TRUSTED BY <br />
            <span className="text-[#c8ff00]">FAST-GROWING</span> <br />
            COMPANIES.
          </motion.h2>
        </div>
        
        <Link 
          href="/contact"
          className="group flex items-center gap-4 text-sm font-bold uppercase tracking-[0.2em] hover:text-[#c8ff00] transition-colors"
        >
          LET&apos;S CREATE 
          <span className="w-12 h-12 rounded-full border border-foreground/10 flex items-center justify-center group-hover:bg-[#c8ff00] group-hover:border-[#c8ff00] group-hover:text-black transition-all">
            ↗
          </span>
        </Link>
      </div>

      <div className="relative">
        {/* White Pill Ticker Track */}
        <div className="bg-white py-12 md:py-16 shadow-xl relative z-10 mx-6 md:mx-12 rounded-[4rem] flex flex-col gap-8 overflow-hidden">
          <div className="flex overflow-hidden select-none">
            <motion.div 
              animate={{ x: [0, -1000] }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="flex items-center gap-20 md:gap-40 whitespace-nowrap min-w-full"
            >
              {[...clients, ...clients].map((client, i) => (
                <span 
                  key={i} 
                  className="text-black text-2xl md:text-4xl font-black tracking-tighter opacity-80 hover:opacity-100 transition-opacity cursor-default"
                >
                  {client}
                </span>
              ))}
            </motion.div>
          </div>

          <div className="flex overflow-hidden select-none">
            <motion.div 
              animate={{ x: [-1000, 0] }}
              transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
              className="flex items-center gap-20 md:gap-40 whitespace-nowrap min-w-full"
            >
              {[...clients, ...clients].reverse().map((client, i) => (
                <span 
                  key={i} 
                  className="text-black/20 text-2xl md:text-4xl font-black tracking-tighter hover:text-black transition-colors cursor-default"
                >
                  {client}
                </span>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Background labels like "leading" and "startups" in inspiration */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full flex justify-between px-20 pointer-events-none opacity-5">
           <span className="text-[15vw] font-black italic tracking-tighter uppercase">leading</span>
           <span className="text-[15vw] font-black italic tracking-tighter uppercase">startups</span>
        </div>
      </div>
    </section>
  );
}
