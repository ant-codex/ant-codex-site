'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { EtheralShadow } from '@/components/ui/etheral-shadow';

const rotatingTexts = ["Websites", "Landing Pages", "Brand Identities", "Digital Experiences"];

export function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % rotatingTexts.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Component */}
      <div className="absolute inset-0 z-0">
        <EtheralShadow
          color="rgba(200, 255, 0, 0.08)"
          animation={{ scale: 80, speed: 40 }}
          noise={{ opacity: 0.5, scale: 1 }}
          sizing="fill"
          className="w-full h-full opacity-60"
        />
        <div className="absolute inset-0 bg-background/20 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_60%_40%,rgba(200,255,0,0.05)_0%,transparent_70%)]" />
        
        {/* Grid Overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
             style={{ 
               backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
               backgroundSize: '60px 60px'
             }} 
        />
      </div>

      <div className="relative z-10 text-center px-4">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-[clamp(4rem,10vw,9rem)] font-black leading-[0.95] tracking-[-0.03em] flex flex-col items-center"
        >
          <span>We build</span>
          <div className="h-[1.1em] relative overflow-hidden flex items-center justify-center w-full">
            <AnimatePresence mode="wait">
              <motion.span
                key={rotatingTexts[index]}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="text-accent absolute whitespace-nowrap"
              >
                {rotatingTexts[index]}
              </motion.span>
            </AnimatePresence>
          </div>
        </motion.h1>
      </div>

      {/* Hero Footer */}
      <div className="absolute bottom-0 left-0 right-0 z-10 flex items-center justify-between p-6 md:px-12 text-[10px] tracking-[0.12em] uppercase text-muted-foreground">
        <span>© 2026 ANT-CODEX</span>
        <div className="flex gap-6">
          <a href="#" className="hover:text-foreground transition-colors">Instagram</a>
          <a href="#" className="hover:text-foreground transition-colors">LinkedIn</a>
        </div>
      </div>

      {/* Learn More */}
      <motion.a 
        href="#services"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-16 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-[11px] tracking-[0.18em] uppercase text-muted-foreground hover:text-foreground transition-colors"
      >
        LEARN MORE
        <motion.span 
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
          className="text-lg"
        >
          ↓
        </motion.span>
      </motion.a>
    </section>
  );
}
