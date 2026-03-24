'use client';

import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-secondary/30 pt-24 border-t border-border/50">
      <div className="container">
        <div className="flex flex-col items-center mb-24 text-center">
          <div className="w-14 h-14 rounded-full border-2 border-foreground flex items-center justify-center font-bold italic text-2xl mb-6">
            a.
          </div>
          <h3 className="text-xl font-medium tracking-tight mb-1">ant · codex</h3>
          <p className="text-[10px] uppercase tracking-[0.3em] font-light opacity-50">Web Design Studio</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 py-16 border-t border-border">
          <div className="flex flex-col gap-4">
            <h4 className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">Studio</h4>
            <div className="flex flex-col gap-2">
              <Link href="#work" className="text-sm hover:text-accent transition-colors">Work</Link>
              <Link href="#services" className="text-sm hover:text-accent transition-colors">Services</Link>
              <Link href="#pricing" className="text-sm hover:text-accent transition-colors">Pricing</Link>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">Social</h4>
            <div className="flex flex-col gap-2">
              <a href="#" className="text-sm hover:text-accent transition-colors">Instagram</a>
              <a href="#" className="text-sm hover:text-accent transition-colors">LinkedIn</a>
              <a href="#" className="text-sm hover:text-accent transition-colors">Behance</a>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">Contact</h4>
            <div className="flex flex-col gap-2">
              <p className="text-sm">Based in Sheffield, UK</p>
              <p className="text-sm">Available Globally</p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">Legal</h4>
            <div className="flex flex-col gap-2">
              <Link href="#" className="text-sm hover:text-accent transition-colors">Privacy Policy</Link>
              <Link href="#" className="text-sm hover:text-accent transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center py-8 border-t border-border text-[10px] text-muted-foreground uppercase tracking-wider">
          <p>© 2026 ANT-CODEX STUDIO. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <p>DESIGNED BY ANT-CODEX</p>
            <p>BUILT WITH NEXT.JS</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
