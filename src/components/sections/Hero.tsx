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
  const [cardColor, setCardColor] = useState("rgba(0, 50, 100, 0.5)");

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % rotatingTexts.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  // RGB Color Cycling Effect
  useEffect(() => {
    const colors = [
      "rgba(0, 50, 100, 0.6)",   // Deep Blue
      "rgba(100, 0, 50, 0.6)",   // Deep Magenta
      "rgba(0, 100, 50, 0.6)",   // Deep Green
      "rgba(50, 0, 100, 0.6)",   // Deep Purple
      "rgba(200, 255, 0, 0.3)",  // Neon Yellow/Green
    ];
    let colorIdx = 0;

    const colorTimer = setInterval(() => {
      colorIdx = (colorIdx + 1) % colors.length;
      setCardColor(colors[colorIdx]);
    }, 4000);

    return () => clearInterval(colorTimer);
  }, []);

  useEffect(() => {
    if (!containerRef.current || !cardRef.current) return;
    
    gsap.to(cardRef.current, {
      y: -40,
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
      {/* Huge Overlapping Text - Foreground Layer (z-30) */}
      <h1 className="absolute top-[25%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-[12vw] font-black text-white whitespace-nowrap select-none pointer-events-none tracking-tighter z-30 leading-none drop-shadow-sm">
        WE CREATE
      </h1>

      {/* Central Floating Card Layer (z-10) */}
      <div className="relative z-10 w-[95%] max-w-6xl flex flex-col items-center justify-center">
        <motion.div 
          ref={cardRef}
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full aspect-square md:aspect-[21/9] rounded-[3rem] overflow-hidden shadow-2xl flex items-center justify-center bg-[#000814] border border-white/10"
        >
          <motion.div
            animate={{ backgroundColor: cardColor }}
            transition={{ duration: 3, ease: "linear" }}
            className="absolute inset-0 w-full h-full"
          >
            <EtheralShadow
              color={cardColor}
              animation={{ scale: 40, speed: 12 }}
              noise={{ opacity: 0.5, scale: 2 }}
              sizing="fill"
              className="absolute inset-0 w-full h-full opacity-80"
            />
          </motion.div>
          
          {/* Rotating Text inside the card - Mid Layer (z-20) */}
          <div className="relative z-20 text-center px-4 w-full h-full flex items-center justify-center pt-24">
            <div className="relative flex items-center justify-center w-full min-h-[300px]">
              <AnimatePresence mode="wait">
                <motion.span
                  key={rotatingTexts[index]}
                  initial={{ opacity: 0, y: 50, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -50, scale: 0.8 }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="text-white text-4xl md:text-8xl lg:text-[10vw] font-black tracking-tight absolute whitespace-nowrap filter drop-shadow-2xl"
                >
                  {rotatingTexts[index]}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        {/* Floating Floor Shadow (Soft light beneath the card) */}
        <div className="w-[70%] h-16 bg-black/15 blur-3xl rounded-[100%] mt-16 scale-x-125" />
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
