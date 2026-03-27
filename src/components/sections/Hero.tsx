'use client';

import { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
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

  // Mouse Tilt Logic
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const springConfig = { damping: 30, stiffness: 200, mass: 0.5 };
  const rotateX = useSpring(useTransform(mouseY, [0, 1], [15, -15]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-15, 15]), springConfig);
  // Header tilt (slightly less intense for subtle depth)
  const headerRotateX = useSpring(useTransform(mouseY, [0, 1], [8, -8]), springConfig);
  const headerRotateY = useSpring(useTransform(mouseX, [0, 1], [-8, 8]), springConfig);
  
  const shadowX = useSpring(useTransform(mouseX, [0, 1], [20, -20]), springConfig);
  const shadowY = useSpring(useTransform(mouseY, [0, 1], [20, -20]), springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    mouseX.set(clientX / innerWidth);
    mouseY.set(clientY / innerHeight);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % rotatingTexts.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  // RGB Color Cycling Effect
  useEffect(() => {
    const colors = [
      "rgba(0, 50, 100, 0.6)", 
      "rgba(100, 0, 50, 0.6)", 
      "rgba(0, 100, 50, 0.6)", 
      "rgba(50, 0, 100, 0.6)", 
      "rgba(200, 255, 0, 0.3)",
    ];
    let colorIdx = 0;
    const colorTimer = setInterval(() => {
      colorIdx = (colorIdx + 1) % colors.length;
      setCardColor(colors[colorIdx]);
    }, 4000);
    return () => clearInterval(colorTimer);
  }, []);

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#E5E5E5] perspective-1000"
    >
      {/* Marble Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-multiply" 
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} 
      />
      
      {/* Background Depth Gradient */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/[0.02] to-black/[0.1] pointer-events-none" />

      {/* Huge Overlapping Text (z-30) - Now Synced with Tilt */}
      <motion.h1 
        style={{ rotateX: headerRotateX, rotateY: headerRotateY }}
        className="hero-header absolute top-[22%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-black text-white whitespace-nowrap select-none pointer-events-none tracking-tighter z-30 leading-none drop-shadow-sm transform-gpu"
      >
        WE CREATE
      </motion.h1>

      {/* Motion Card Wrapper (z-10) */}
      <div className="relative z-10 w-[90%] max-w-6xl flex flex-col items-center justify-center pt-24">
        {/* RGB Synced Dynamic Shadow */}
        <motion.div
           style={{ 
             rotateX, 
             rotateY,
             backgroundColor: cardColor,
             opacity: 0.4
           }}
           className="absolute w-[80%] h-[40%] blur-[120px] rounded-full -bottom-10 pointer-events-none transition-colors duration-1000"
        />

        <motion.div 
          ref={cardRef}
          style={{ rotateX, rotateY }}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full aspect-square md:aspect-[21/9] rounded-[3rem] overflow-hidden shadow-2xl flex items-center justify-center bg-[#000814] transform-gpu border border-white/5"
        >
          <motion.div
            animate={{ backgroundColor: cardColor }}
            transition={{ duration: 3, ease: "linear" }}
            className="absolute inset-0 w-full h-full"
          >
            <EtheralShadow
              color={cardColor}
              animation={{ scale: 35, speed: 10 }}
              noise={{ opacity: 0.4, scale: 2 }}
              sizing="fill"
              className="absolute inset-0 w-full h-full opacity-80"
            />
          </motion.div>
          
          {/* Rotating Text (z-20) */}
          <div className="relative z-20 text-center px-4 w-full h-full flex items-center justify-center">
            <div className="relative flex items-center justify-center w-full min-h-[300px]">
              <AnimatePresence mode="wait">
                <motion.span
                  key={rotatingTexts[index]}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -30, scale: 0.9 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="text-white text-5xl md:text-8xl lg:text-[8vw] font-black tracking-tight absolute whitespace-nowrap filter drop-shadow-2xl"
                >
                  {rotatingTexts[index]}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        {/* Static Base Shadow */}
        <motion.div 
          style={{ x: shadowX, y: shadowY }}
          className="w-[70%] h-16 bg-black/10 blur-3xl rounded-[100%] mt-12 scale-x-125" 
        />
      </div>

      {/* Hero Footer */}
      <div className="absolute bottom-8 left-8 z-30 hidden md:block text-[9px] tracking-[0.3em] font-bold uppercase text-black/20">
        © {new Date().getFullYear()} ANT-CODEX STUDIO / PRT 3006
      </div>
      
      <div className="absolute bottom-8 right-8 z-30 hidden md:flex gap-10 text-[9px] tracking-[0.3em] font-bold uppercase text-black/30">
        <a href="https://www.instagram.com/antcodexstudio/" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">Instagram</a>
      </div>
    </section>
  );
}
