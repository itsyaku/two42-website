"use client";

import { motion } from "framer-motion";

export function ChurchLifeHero() {
  return (
    <section className="relative h-[70vh] min-h-[500px] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-charcoal">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1920&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/70 to-transparent" />
      </div>

      {/* Yellow accent shapes */}
      <div className="absolute right-0 top-1/4 w-48 h-48 bg-gold rotate-45 translate-x-1/3 hidden lg:block" />
      <div className="absolute right-20 top-1/2 w-32 h-32 bg-gold/60 rotate-45 hidden lg:block" />

      <div className="relative max-w-7xl mx-auto px-4 w-full">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white uppercase leading-tight">
            Loving
            <br />
            Strangers
            <br />
            <span className="text-gold">Into Family</span>
          </h1>
          <p className="mt-6 text-gold uppercase tracking-[0.3em] text-sm">
            Sunday @ 10AM
          </p>
        </motion.div>
      </div>
    </section>
  );
}
