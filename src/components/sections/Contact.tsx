'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export function Contact() {
  const [focused, setFocused] = useState<string | null>(null);
  const [form, setForm] = useState({ name: '', email: '', service: '', msg: '' });

  return (
    <section id="contact" className="py-24 md:py-32 border-t border-border/50">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-4">Contact us</p>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">Let's build<br />something bold.</h2>
            <p className="text-muted-foreground max-w-md leading-relaxed mb-12">
              Ready to start your next project? Drop us a line and we'll get back to you within 24 hours.
            </p>
            <a href="mailto:contact@antcodex.pro" className="text-xl font-medium text-accent border-b border-accent/30 pb-1 hover:border-accent transition-all">
              contact@antcodex.pro
            </a>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12"
          >
            {[
              { id: 'name', label: 'FullName', type: 'text' },
              { id: 'email', label: 'EmailAddress', type: 'email' },
            ].map((field) => (
              <div key={field.id} className="relative group">
                <input
                  type={field.type}
                  id={field.id}
                  placeholder=" "
                  onFocus={() => setFocused(field.id)}
                  onBlur={() => setFocused(null)}
                  onChange={(e) => setForm({ ...form, [field.id]: e.target.value })}
                  className="w-full bg-transparent border-b border-border py-2 px-0 outline-none focus:border-accent transition-colors peer"
                />
                <label
                  htmlFor={field.id}
                  className={`absolute top-2 left-0 text-muted-foreground text-sm pointer-events-none transition-all duration-300 peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-accent peer-focus:uppercase peer-focus:tracking-widest ${
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
                className="w-full bg-transparent border-b border-border py-2 px-0 outline-none focus:border-accent transition-colors peer appearance-none cursor-pointer"
              >
                <option value="" disabled selected></option>
                <option value="web" className="bg-background">Web Design</option>
                <option value="brand" className="bg-background">Branding</option>
                <option value="shop" className="bg-background">E-commerce</option>
              </select>
              <label
                className={`absolute top-2 left-0 text-muted-foreground text-sm pointer-events-none transition-all duration-300 peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-accent peer-focus:uppercase peer-focus:tracking-widest ${
                  form.service ? '-top-4 text-[10px] text-accent uppercase tracking-widest' : ''
                }`}
              >
                Project Interest
              </label>
            </div>

            <div className="relative group sm:col-span-2">
              <textarea
                id="msg"
                placeholder=" "
                onFocus={() => setFocused('msg')}
                onBlur={() => setFocused(null)}
                onChange={(e) => setForm({ ...form, msg: e.target.value })}
                className="w-full bg-transparent border-b border-border py-2 px-0 outline-none focus:border-accent transition-colors peer min-h-[100px] resize-none"
              />
              <label
                className={`absolute top-2 left-0 text-muted-foreground text-sm pointer-events-none transition-all duration-300 peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-accent peer-focus:uppercase peer-focus:tracking-widest ${
                  form.msg ? '-top-4 text-[10px] text-accent uppercase tracking-widest' : ''
                }`}
              >
                Your Message
              </label>
            </div>

            <div className="sm:col-span-2">
              <button
                type="submit"
                className="w-full py-4 bg-accent text-accent-foreground font-bold tracking-widest uppercase text-xs rounded-xl hover:bg-accent/90 transform transition-all hover:-translate-y-1 flex items-center justify-center gap-2 group"
              >
                Send Brief <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
