'use client';

import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-foreground text-background/80 pt-12 pb-8 relative z-20">
      <div className="container px-4 md:px-8 mx-auto max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 py-16 border-t border-background/10">
          <div className="flex flex-col gap-6">
            <h4 className="text-[10px] uppercase tracking-widest font-bold text-background/40">Studio</h4>
            <div className="flex flex-col gap-3">
              <Link href="#work" className="text-sm font-medium hover:text-accent transition-colors">Work</Link>
              <Link href="#services" className="text-sm font-medium hover:text-accent transition-colors">Services</Link>
              <Link href="#pricing" className="text-sm font-medium hover:text-accent transition-colors">Pricing</Link>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h4 className="text-[10px] uppercase tracking-widest font-bold text-background/40">Social</h4>
            <div className="flex flex-col gap-3">
              <a href="#" className="text-sm font-medium hover:text-accent transition-colors">Instagram</a>
              <a href="#" className="text-sm font-medium hover:text-accent transition-colors">LinkedIn</a>
              <a href="#" className="text-sm font-medium hover:text-accent transition-colors">Behance</a>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h4 className="text-[10px] uppercase tracking-widest font-bold text-background/40">Contact</h4>
            <div className="flex flex-col gap-3">
              <p className="text-sm font-medium">Based in Sheffield, UK</p>
              <p className="text-sm font-medium opacity-60">Available Globally</p>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h4 className="text-[10px] uppercase tracking-widest font-bold text-background/40">Brand</h4>
            <div className="flex flex-col gap-3 items-start">
              <div className="w-12 h-12 rounded-full border-2 border-background/20 flex items-center justify-center font-bold italic text-xl mb-2 text-background">
                a.
              </div>
              <h3 className="text-lg font-bold tracking-tight text-background">ANT-CODEX</h3>
              <p className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-40">Web Design Studio</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center py-8 border-t border-background/10 text-[10px] font-bold text-background/40 uppercase tracking-widest">
          <p>© {new Date().getFullYear()} ANT-CODEX STUDIO. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <p className="hover:text-background transition-colors cursor-pointer">PRIVACY POLICY</p>
            <p className="hover:text-background transition-colors cursor-pointer">TERMS</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
