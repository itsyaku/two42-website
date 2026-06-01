"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-charcoal">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=1920&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/40 to-charcoal/80" />
      </div>

      {/* Decorative yellow diamond */}
      <div className="absolute -right-20 top-1/4 w-64 h-64 bg-gold/20 rotate-45 hidden lg:block" />
      <div className="absolute -right-10 top-1/4 mt-20 w-40 h-40 bg-gold/30 rotate-45 hidden lg:block" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block px-4 py-1.5 bg-gold/20 text-gold rounded-full text-sm uppercase tracking-widest mb-6 border border-gold/30">
            Sundays @ 10 AM
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.1] mb-6 uppercase"
        >
          Loving
          <br />
          Strangers
          <br />
          <span className="text-gold">Into Family</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-gray-300 text-lg md:text-xl max-w-xl mx-auto mb-10"
        >
          A community built on love for God and people, inspired by Acts 2:42-47
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/church-life"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-gold text-charcoal font-semibold uppercase tracking-wide text-sm rounded-md hover:bg-gold-dark transition-colors"
          >
            Plan Your Visit
          </Link>
          <Link
            href="/connect"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-transparent text-white font-semibold uppercase tracking-wide text-sm rounded-md border-2 border-white/30 hover:border-gold hover:text-gold transition-colors"
          >
            Get in Touch
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center pt-2"
        >
          <div className="w-1 h-2 bg-gold rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
