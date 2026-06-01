"use client";

import { Clock, MapPin, ArrowRight } from "lucide-react";
import { AnimateOnScroll } from "@/components/shared/animate-on-scroll";

export function ServiceTimes() {
  return (
    <section className="relative py-24 bg-charcoal overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-48 h-48 bg-gold/10 rotate-45 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gold/5 rotate-45 translate-x-1/3 translate-y-1/3" />

      <div className="relative max-w-4xl mx-auto px-4 text-center">
        <AnimateOnScroll>
          <span className="text-gold uppercase tracking-widest text-sm mb-4 block">
            Join Us
          </span>
          <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8">
            Sundays @ <span className="text-gold">10 AM</span>
          </h2>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.2}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-300 mb-10">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-gold" />
              <span>Prayer at 9:30 AM &bull; Service at 10:00 AM</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-gold" />
              <span>Royal Road, Pointe aux Canonniers</span>
            </div>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.3}>
          <a
            href="https://www.google.com/maps/place/Two42+Christian+Church/@-20.0060387,57.556542,17z"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-gold text-charcoal font-semibold uppercase tracking-wide text-sm rounded-md hover:bg-gold-dark transition-colors"
          >
            Get Directions
            <ArrowRight className="w-4 h-4" />
          </a>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
