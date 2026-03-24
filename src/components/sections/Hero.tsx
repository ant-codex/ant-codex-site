'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { EtheralShadow } from '@/components/ui/etheral-shadow';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const rotatingTexts = ["SITES", "EXPERIENCES", "BRANDS", "INTERFACES"];

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
    if (!containerRef.current || !cardRef.current) return;
    
    gsap.to(cardRef.current, {
      y: -20,
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
      className="relative h-screen min-h-[700px] w-full flex items-center justify-center overflow-hidden bg-[#E5E5E5]"
    >
      {/* Huge Overlapping Text - Foreground Layer (z-20) */}
      <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[18vw] font-black text-white whitespace-nowrap select-none pointer-events-none tracking-tighter z-20 leading-none">
        WE CREATE
      </h1>

      {/* Central Floating Card Layer (z-10) */}
      <div className="relative z-10 w-[90%] max-w-5xl flex flex-col items-center justify-center">
        <motion.div 
          ref={cardRef}
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full aspect-square md:aspect-[21/9] rounded-[2.5rem] overflow-hidden shadow-2xl flex items-center justify-center bg-[#000814] border border-white/5"
        >
          <EtheralShadow
            color="rgba(0, 50, 100, 0.5)" // Deep blue liquid
            animation={{ scale: 50, speed: 15 }}
            noise={{ opacity: 0.6, scale: 2 }}
            sizing="fill"
            className="absolute inset-0 w-full h-full opacity-70"
          />
          
          {/* Rotating Text inside the card */}
          <div className="relative z-20 text-center px-4 w-full">
            <div className="h-[1.5em] relative overflow-hidden flex items-center justify-center w-full">
              <AnimatePresence mode="wait">
                <motion.span
                  key={rotatingTexts[index]}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -40 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="text-white text-3xl md:text-5xl lg:text-7xl font-black tracking-tight absolute whitespace-nowrap opacity-40 mix-blend-screen"
                >
                  {rotatingTexts[index]}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        {/* Floating Floor Shadow (Soft light beneath the card) */}
        <div className="w-[60%] h-12 bg-black/10 blur-3xl rounded-[100%] mt-12 scale-x-125" />
      </div>

      {/* Hero Footer Links */}
      <div className="absolute bottom-8 left-8 z-30 hidden md:block text-[10px] tracking-widest font-bold uppercase text-black/30">
        © {new Date().getFullYear()} ANT-CODEX STUDIO
      </div>
      
      <div className="absolute bottom-8 right-8 z-30 hidden md:flex gap-8 text-[10px] tracking-widest font-bold uppercase text-black/40">
        <a href="#" className="hover:text-black transition-colors">Instagram</a>
        <a href="#" className="hover:text-black transition-colors">LinkedIn</a>
      </div>
    </section>
  );
}
