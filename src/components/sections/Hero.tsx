'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { EtheralShadow } from '@/components/ui/etheral-shadow';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const rotatingTexts = ["WEBSITES", "BRANDING", "EXPERIENCES", "3D & CGI"];

export function Hero() {
  const [index, setIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % rotatingTexts.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // GSAP Parallax and Pinning effect similar to Hana Road
    if (!containerRef.current || !cardRef.current) return;
    
    // Scale the card slightly as you scroll down
    gsap.to(cardRef.current, {
      scale: 0.9,
      opacity: 0.2,
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative h-screen min-h-[700px] w-full flex items-center justify-center overflow-hidden bg-background"
    >
      {/* Huge Background Text - Fixed or Parallax */}
      <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-black text-black/5 whitespace-nowrap select-none pointer-events-none tracking-tighter mix-blend-multiply">
        WE CREATE
      </h1>

      {/* Central Floating Card containing the Liquid/Shadow effect */}
      <motion.div 
        ref={cardRef}
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-[90%] max-w-5xl aspect-square md:aspect-[21/9] rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] flex items-center justify-center bg-black border border-white/10"
      >
        <EtheralShadow
          color="rgba(255, 107, 0, 0.6)" // Orange accent
          animation={{ scale: 60, speed: 20 }}
          noise={{ opacity: 0.8, scale: 1.5 }}
          sizing="fill"
          className="absolute inset-0 w-full h-full opacity-80"
        />
        
        {/* The rotating text inside the card */}
        <div className="relative z-20 text-center px-4 w-full">
          <div className="h-[1.5em] relative overflow-hidden flex items-center justify-center w-full">
            <AnimatePresence mode="wait">
              <motion.span
                key={rotatingTexts[index]}
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -60 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="text-white text-4xl md:text-6xl lg:text-8xl font-black tracking-tight absolute whitespace-nowrap"
              >
                {rotatingTexts[index]}
              </motion.span>
            </AnimatePresence>
          </div>
        </div>
      </motion.div>

      {/* Hero Footer Links */}
      <div className="absolute bottom-8 left-8 z-10 hidden md:block text-[11px] tracking-widest font-semibold uppercase text-foreground/40">
        © {new Date().getFullYear()} ANT-CODEX
      </div>
      
      <div className="absolute bottom-8 right-8 z-10 hidden md:flex gap-6 text-[11px] tracking-widest font-semibold uppercase text-foreground/60">
        <a href="#" className="hover:text-accent transition-colors flex items-center gap-1">Instagram ↗</a>
        <a href="#" className="hover:text-accent transition-colors flex items-center gap-1">LinkedIn ↗</a>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-[10px] tracking-widest uppercase text-foreground/40"
      >
        <span className="w-[1px] h-16 bg-foreground/10 relative overflow-hidden">
          <motion.div 
             animate={{ y: ['-100%', '200%'] }}
             transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
             className="absolute top-0 left-0 w-full h-1/2 bg-accent"
          />
        </span>
      </motion.div>
    </section>
  );
}
