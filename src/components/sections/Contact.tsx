'use client';

import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function Contact() {
  const [focused, setFocused] = useState<string | null>(null);
  const [form, setForm] = useState({ name: '', email: '', service: '', msg: '' });
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !textRef.current) return;

    gsap.fromTo(textRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="py-24 md:py-40 bg-foreground text-background rounded-t-[3rem] -mt-[3rem] relative z-20">
      <div className="container px-4 md:px-8 mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-32">
          
          {/* Left Side: Huge Typography */}
          <div ref={textRef} className="flex flex-col justify-center">
            <p className="text-[11px] uppercase tracking-widest text-background/50 mb-6 font-bold">Collaboration</p>
            <h2 className="text-[clamp(4rem,10vw,8rem)] font-black tracking-tighter leading-[0.85] uppercase mb-8">
              Let's <br /><span className="text-accent">Create</span>
            </h2>
            <p className="text-background/70 max-w-md leading-relaxed text-lg font-medium mb-12">
              Ready to start your next project? Drop us a line and we'll get back to you within 24 hours to discuss how we can elevate your brand.
            </p>
            <a href="mailto:hello@ant-codex.studio" className="w-fit text-2xl md:text-4xl font-black uppercase tracking-tight text-background hover:text-accent transition-colors duration-300">
              HELLO@ANT-CODEX.STUDIO
            </a>
          </div>

          {/* Right Side: Contact Form */}
          <form className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12 content-center pb-8 border-b border-background/10 lg:border-none">
            {[
              { id: 'name', label: 'FULL NAME', type: 'text' },
              { id: 'email', label: 'EMAIL ADDRESS', type: 'email' },
            ].map((field) => (
              <div key={field.id} className="relative group">
                <input
                  type={field.type}
                  id={field.id}
                  placeholder=" "
                  onFocus={() => setFocused(field.id)}
                  onBlur={() => setFocused(null)}
                  onChange={(e) => setForm({ ...form, [field.id]: e.target.value })}
                  className="w-full bg-transparent border-b border-background/20 py-4 px-0 outline-none focus:border-accent text-background transition-colors peer text-lg font-medium"
                />
                <label
                  htmlFor={field.id}
                  className={`absolute top-4 left-0 text-background/40 text-sm font-bold tracking-widest pointer-events-none transition-all duration-300 peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-accent peer-focus:uppercase ${
                    form[field.id as keyof typeof form] ? '-top-4 text-[10px] text-accent uppercase tracking-widest' : ''
                  }`}
                >
                  {field.label}
                </label>
              </div>
            ))}

            <div className="relative group sm:col-span-2">
              <select
                id="service"
                onFocus={() => setFocused('service')}
                onBlur={() => setFocused(null)}
                onChange={(e) => setForm({ ...form, service: e.target.value })}
                className="w-full bg-transparent border-b border-background/20 py-4 px-0 outline-none focus:border-accent text-background transition-colors peer appearance-none cursor-pointer text-lg font-medium"
              >
                <option value="" disabled selected></option>
                <option value="web" className="text-foreground">Web Design</option>
                <option value="brand" className="text-foreground">Branding</option>
                <option value="shop" className="text-foreground">E-commerce</option>
              </select>
              <label
                className={`absolute top-4 left-0 text-background/40 text-sm font-bold tracking-widest pointer-events-none transition-all duration-300 peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-accent peer-focus:uppercase ${
                  form.service ? '-top-4 text-[10px] text-accent uppercase tracking-widest' : ''
                }`}
              >
                PROJECT INTEREST
              </label>
            </div>

            <div className="relative group sm:col-span-2">
              <textarea
                id="msg"
                placeholder=" "
                onFocus={() => setFocused('msg')}
                onBlur={() => setFocused(null)}
                onChange={(e) => setForm({ ...form, msg: e.target.value })}
                className="w-full bg-transparent border-b border-background/20 py-4 px-0 outline-none focus:border-accent text-background transition-colors peer min-h-[120px] resize-none text-lg font-medium"
              />
              <label
                className={`absolute top-4 left-0 text-background/40 text-sm font-bold tracking-widest pointer-events-none transition-all duration-300 peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-accent peer-focus:uppercase ${
                  form.msg ? '-top-4 text-[10px] text-accent uppercase tracking-widest' : ''
                }`}
              >
                YOUR MESSAGE
              </label>
            </div>

            <div className="sm:col-span-2 mt-4">
              <button
                type="submit"
                className="w-full py-6 bg-accent text-accent-foreground font-black tracking-widest uppercase text-sm rounded-2xl hover:bg-white hover:text-black transform transition-all duration-300 flex items-center justify-center gap-4"
              >
                SEND BRIEF
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
            </div>
          </form>

        </div>
      </div>
    </section>
  );
}
