'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const clients = [
  "Logitech", "Sony Music", "Coca-Cola", "PepsiCo", "Universal",
  "Montreux Jazz", "Adobe", "Shopify", "Stripe", "Notion",
  "Figma", "Webflow", "Loom", "Linear", "Vercel",
];

export function Clients() {
  // Duplicate the list to create an infinite seamless loop
  const doubledClients = [...clients, ...clients];

  return (
    <section className="relative py-24 bg-background overflow-hidden">
      {/* Header */}
      <div className="container mb-16">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
          <div className="max-w-sm">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight">
              We collaborate with{' '}
              <span className="text-accent">leading</span>{' '}
              companies
            </h2>
          </div>
          <div className="flex flex-col items-start md:items-end gap-8">
            <p className="text-sm text-muted-foreground max-w-xs">
              Our Clients: Our Success. From{' '}
              <span className="text-accent font-medium">startups</span>{' '}
              to industry{' '}
              <span className="underline">leaders</span>, we tailor our
              services to meet every need.
            </p>
            <Link
              href="/contact"
              className="group flex items-center gap-3 text-sm font-bold uppercase tracking-[0.2em] text-accent hover:opacity-70 transition-opacity"
            >
              LET&apos;S CREATE
              <span className="text-lg transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Infinite Scrolling Ticker */}
      <div className="relative w-full">
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div className="bg-white/5 border border-border/50 rounded-2xl py-6 overflow-hidden">
          <motion.div
            className="flex items-center gap-16 whitespace-nowrap"
            animate={{ x: [0, '-50%'] }}
            transition={{
              repeat: Infinity,
              repeatType: 'loop',
              duration: 25,
              ease: 'linear',
            }}
          >
            {doubledClients.map((client, i) => (
              <span
                key={`${client}-${i}`}
                className="text-lg md:text-2xl font-black uppercase tracking-widest text-foreground/40 hover:text-foreground/80 transition-colors cursor-default inline-block shrink-0"
              >
                {client}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
