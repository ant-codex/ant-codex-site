'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, ChevronRight, ChevronLeft } from 'lucide-react';

const services = [
  {
    id: "web-design",
    name: "Web Design & Development",
    desc: "We design and develop fast, conversion-focused websites tailored to your brand — pixel-perfect, mobile-first, and built to grow with your business.",
    img: "/images/services/web-design.png"
  },
  {
    id: "brand-identity",
    name: "Brand Identity",
    desc: "Your visual identity from the ground up — logo, colour system, typography and brand guidelines that set you apart and scale across every touchpoint.",
    img: "/images/services/brand-identity.png"
  },
  {
    id: "seo",
    name: "SEO & Performance",
    desc: "Speed, structure and visibility. We optimise your site's core web vitals, technical SEO and content architecture so you rank higher and load faster.",
    img: "/images/services/seo.png"
  },
  {
    id: "ecommerce",
    name: "E-commerce",
    desc: "Scalable online stores with seamless UX — from product pages to checkout flow — built on the platforms that fit your volume and ambition.",
    img: "/images/services/ecommerce.png"
  }
];

export function Services() {
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % services.length);
    }, 5000); // Cycle every 5 seconds
    
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="services" className="py-24 md:py-32 bg-[#E5E5E5] dark:bg-zinc-900 transition-colors duration-500 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.85] mb-8 text-[#c8ff00] dark:text-[#c8ff00]">
                OUR <br />
                SERVICES
              </h2>
              <div className="max-w-md">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={activeTab}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-lg md:text-xl text-black/60 dark:text-white/60 leading-relaxed font-medium"
                  >
                    {services[activeTab].desc}
                  </motion.p>
                </AnimatePresence>
              </div>
            </motion.div>

            <nav className="flex flex-col gap-4">
              {services.map((service, index) => (
                <button
                  key={service.id}
                  onClick={() => setActiveTab(index)}
                  className={`text-left py-6 px-8 rounded-2xl transition-all duration-300 border-2 ${
                    activeTab === index 
                      ? "bg-white dark:bg-white/10 border-[#c8ff00] dark:border-[#c8ff00] shadow-xl translate-x-4" 
                      : "border-transparent opacity-40 hover:opacity-100"
                  }`}
                >
                  <span className={`text-xs uppercase tracking-[0.2em] font-black ${
                    activeTab === index ? "text-[#c8ff00] dark:text-[#c8ff00]" : "text-black dark:text-white"
                  }`}>
                    {service.name}
                  </span>
                </button>
              ))}
            </nav>
          </div>

          <div className="w-full lg:w-1/2 sticky top-32">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, scale: 0.95, x: 50 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.95, x: -50 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="relative bg-white dark:bg-zinc-800 rounded-[3rem] p-8 md:p-12 shadow-2xl border border-black/5 dark:border-white/5 overflow-hidden group"
              >
                <div className="flex justify-between items-center mb-12">
                  <h3 className="text-3xl md:text-4xl font-black tracking-tighter text-black dark:text-white">
                    {services[activeTab].name}
                  </h3>
                  <Link 
                    href="/#contact"
                    className="text-[10px] font-black uppercase tracking-widest text-black/40 dark:text-white/40 hover:text-[#c8ff00] dark:hover:text-[#c8ff00] transition-colors flex items-center gap-2 group/link"
                  >
                    LEARN MORE <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  </Link>
                </div>

                <div className="relative aspect-video rounded-[2rem] overflow-hidden bg-zinc-100 dark:bg-zinc-950">
                   <Image 
                     src={services[activeTab].img}
                     alt={services[activeTab].name}
                     fill
                     className="object-cover group-hover:scale-105 transition-transform duration-700"
                     unoptimized
                   />
                </div>
                
                {/* Pagination Dots */}
                <div className="flex gap-2 mt-8 justify-center lg:justify-start">
                  {services.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveTab(i)}
                      className={`h-1.5 rounded-full transition-all duration-500 ${
                        activeTab === i ? 'w-8 bg-[#c8ff00]' : 'w-2 bg-black/10 dark:bg-white/10'
                      }`}
                      aria-label={`Go to service ${i + 1}`}
                    />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
