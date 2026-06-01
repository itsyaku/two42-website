"use client";

import { motion } from "framer-motion";

export function AboutHero() {
  return (
    <section className="relative py-32 bg-charcoal overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=1920&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/80 to-charcoal/60" />

      <div className="relative max-w-4xl mx-auto px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-heading text-5xl md:text-7xl font-bold text-white lowercase"
        >
          who we are
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 text-gray-300 text-lg max-w-2xl mx-auto"
        >
          A community built on the foundation of love for God and people, and
          the immense joy of spreading His Kingdom.
        </motion.p>
      </div>
    </section>
  );
}
