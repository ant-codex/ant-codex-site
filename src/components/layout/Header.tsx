'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Menu, X, Sun, Moon } from 'lucide-react';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [hide, setHide] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setScrolled(currentScroll > 50);
      setHide(currentScroll > lastScroll && currentScroll > 200);
      setLastScroll(currentScroll);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScroll]);

  if (!mounted) return null;

  const toggleTheme = () => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: hide ? -100 : 0 }}
        className="fixed top-0 left-0 right-0 z-[900] px-6 md:px-12 py-8 pointer-events-none"
      >
        <div className="max-w-[1400px] mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group pointer-events-auto">
            <div className="w-10 h-10 rounded-full border-2 border-current flex items-center justify-center font-bold italic text-lg tracking-tighter shrink-0">
              a.
            </div>
            <div className="w-px h-8 bg-current opacity-20" />
            <div className="flex flex-col">
              <span className="text-xl font-medium leading-none tracking-tight">ant · codex</span>
              <span className="text-[10px] uppercase tracking-[0.25em] font-light opacity-60">Web Design Studio</span>
            </div>
          </Link>

          {/* Centered Pill Nav */}
          <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 hidden lg:block pointer-events-auto">
            <nav className="flex items-center gap-2 px-2 py-2 bg-background/20 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl">
              {[
                { label: 'Services', href: '/#services' },
                { label: 'Pricing', href: '/#pricing' },
                { label: 'Contact', href: '/#contact' },
              ].map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="px-6 py-2 text-[10px] font-bold uppercase tracking-[0.2em] opacity-60 hover:opacity-100 hover:bg-white/5 rounded-full transition-all"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-4 pointer-events-auto">
            <button
              onClick={toggleTheme}
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors hidden md:flex"
              title={resolvedTheme === 'dark' ? 'Light Mode' : 'Dark Mode'}
            >
              {mounted && (resolvedTheme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />)}
            </button>
            <Link
              href="/contact"
              className="hidden md:inline-flex px-8 py-3 bg-foreground text-background rounded-full hover:opacity-90 transition-all text-[10px] font-black uppercase tracking-widest items-center gap-2 group/btn"
            >
              Let&apos;s build <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
            </Link>
            <button 
              onClick={() => setMenuOpen(true)}
              className="flex flex-col gap-1.5 w-7 lg:hidden"
            >
              <Menu className="w-7 h-7" />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[9999] bg-background p-8 flex flex-col justify-center"
          >
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-8 right-8 text-3xl opacity-60 hover:opacity-100"
            >
              <X className="w-8 h-8" />
            </button>
            <div className="flex flex-col gap-6">
              {[
                { label: 'Services', href: '/#services' },
                { label: 'Pricing', href: '/#pricing' },
                { label: 'Contact', href: '/#contact' },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-5xl md:text-7xl font-bold tracking-tighter hover:text-accent transition-colors"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>
            <div className="absolute bottom-12 left-8 right-8 flex justify-between text-xs text-muted-foreground uppercase tracking-widest">
              <span>&copy; 2026 Ant-Codex</span>
              <div className="flex gap-4">
                <a href="https://www.instagram.com/antcodexstudio/" target="_blank" rel="noopener noreferrer">Insta</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
