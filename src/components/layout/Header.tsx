'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { motion, AnimatePresence } from 'framer-motion';

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
        className={`fixed top-0 left-0 right-0 z-[900] px-6 md:px-12 py-6 transition-all duration-300 ${
          scrolled ? 'bg-background/80 backdrop-blur-xl border-b py-4' : 'bg-transparent border-b-transparent'
        }`}
      >
        <div className="max-w-[1400px] mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full border-2 border-current flex items-center justify-center font-bold italic text-lg tracking-tighter shrink-0">
              a.
            </div>
            <div className="w-px h-8 bg-current opacity-20" />
            <div className="flex flex-col">
              <span className="text-xl font-medium leading-none tracking-tight">ant · codex</span>
              <span className="text-[10px] uppercase tracking-[0.25em] font-light opacity-60">Web Design Studio</span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-10">
            {['Services', 'Work', 'Pricing', 'Contact'].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-xs font-medium uppercase tracking-widest opacity-80 hover:opacity-100 transition-opacity relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-current transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-6">
            <button
              onClick={toggleTheme}
              className="text-[11px] uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors hidden md:block"
            >
              {resolvedTheme === 'dark' ? 'Light Mode' : 'Dark Mode'}
            </button>
            <Link
              href="#contact"
              className="hidden md:inline-flex px-6 py-2.5 rounded-full border hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all duration-300 text-xs font-semibold tracking-wider"
            >
              Let's build →
            </Link>
            <button 
              onClick={() => setMenuOpen(true)}
              className="flex flex-col gap-1.5 w-7 lg:hidden"
            >
              <span className="h-0.5 w-full bg-current" />
              <span className="h-0.5 w-3/4 bg-current" />
              <span className="h-0.5 w-full bg-current" />
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
              ✕
            </button>
            <div className="flex flex-col gap-6">
              {['Services', 'Work', 'Pricing', 'Contact'].map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                >
                  <Link
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setMenuOpen(false)}
                    className="text-5xl md:text-7xl font-bold tracking-tighter hover:text-accent transition-colors"
                  >
                    {item}
                  </Link>
                </motion.div>
              ))}
            </div>
            <div className="absolute bottom-12 left-8 right-8 flex justify-between text-xs text-muted-foreground uppercase tracking-widest">
              <span>© 2026 Ant-Codex</span>
              <div className="flex gap-4">
                <a href="#">Insta</a>
                <a href="#">Linked</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
