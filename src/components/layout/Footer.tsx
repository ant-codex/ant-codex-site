'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import dynamic from 'next/dynamic';

const Map = dynamic(() => import('@/components/common/Map'), { 
  ssr: false,
  loading: () => <div className="w-full h-full bg-zinc-900 animate-pulse rounded-[2rem]" />
});

export function Footer() {
  const footerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["start end", "end end"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-100, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.8, 1], [0, 0.3, 0.6]);

  return (
    <footer ref={footerRef} className="relative bg-black pt-32 overflow-hidden border-t border-white/5">
      {/* Dynamic London Map Background */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 z-0 pointer-events-none px-6 md:px-12"
      >
        <div className="relative w-full h-full max-w-[1400px] mx-auto">
          <Map />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-black/40 pointer-events-none" />
        </div>
      </motion.div>

      <div className="container relative z-10">
        {/* Let's Create Section (Top of Footer) */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-32 border-b border-white/10 pb-24">
          <motion.h2 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-6xl md:text-[10vw] font-black tracking-tighter leading-none uppercase italic"
          >
            LET'S <span className="text-[#c8ff00]">CREATE</span>
          </motion.h2>
          
          <Link 
            href="/#contact"
            className="w-24 h-24 md:w-32 md:h-32 rounded-full border border-white/20 flex items-center justify-center group hover:bg-[#c8ff00] hover:border-[#c8ff00] transition-all duration-500"
          >
            <ArrowUpRight className="w-8 h-8 md:w-12 md:h-12 group-hover:text-black group-hover:scale-110 transition-transform" />
          </Link>
        </div>

        <div className="flex flex-col items-center mb-24 text-center">
          <div className="w-14 h-14 rounded-full border-2 border-[#c8ff00] flex items-center justify-center font-bold italic text-2xl mb-6 text-[#c8ff00] shadow-[0_0_20px_rgba(200,255,0,0.1)]">
            a.
          </div>
          <h3 className="text-xl font-medium tracking-tight mb-1">ant &middot; codex</h3>
          <p className="text-[10px] uppercase tracking-[0.3em] font-light opacity-50">High-End Web Design Studio</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 py-16 border-t border-white/10 text-center md:text-left">
          <div className="flex flex-col gap-4">
            <h4 className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground opacity-30">Social</h4>
            <div className="flex flex-col gap-3">
              <a href="https://www.instagram.com/antcodexstudio/" target="_blank" rel="noopener noreferrer" className="text-sm font-medium hover:text-[#c8ff00] transition-colors">Instagram</a>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground opacity-30">Contact</h4>
            <div className="flex flex-col gap-3">
              <a href="mailto:hello@ant-codex.studio" className="text-sm font-medium hover:text-[#c8ff00] transition-colors">hello@ant-codex.studio</a>
              <Link href="/#contact" className="text-sm font-medium hover:text-[#c8ff00] transition-colors uppercase tracking-widest text-[9px]">Start a Project</Link>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground opacity-30">Legal</h4>
            <div className="flex flex-col gap-3">
              <Link href="/privacy" className="text-sm font-medium hover:text-[#c8ff00] transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="text-sm font-medium hover:text-[#c8ff00] transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center py-8 border-t border-white/10 text-[9px] text-muted-foreground uppercase tracking-[0.2em] font-medium">
          <p>&copy; 2026 ANT-CODEX STUDIO. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8 mt-4 md:mt-0 opacity-40 italic">
            <p>DESIGNED BY ANT-CODEX</p>
            <p>BUILT WITH NEXT.JS</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
