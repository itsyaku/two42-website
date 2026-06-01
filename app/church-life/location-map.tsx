"use client";

import { AnimateOnScroll } from "@/components/shared/animate-on-scroll";
import { MapPin, ArrowRight } from "lucide-react";

export function LocationMap() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <AnimateOnScroll>
          <div className="text-center mb-12">
            <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gold/10 flex items-center justify-center">
              <MapPin className="w-7 h-7 text-gold" />
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-charcoal lowercase mb-3">
              find us
            </h2>
            <p className="text-charcoal-light text-lg">
              Royal Road, Pointe aux Canonniers, Mauritius
            </p>
            <a
              href="https://www.google.com/maps/place/Two42+Christian+Church/@-20.0060387,57.556542,17z"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 text-gold hover:text-gold-dark font-medium transition-colors"
            >
              Get Directions <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.2}>
          <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3745.5!2d57.556542!3d-20.0060387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x217dab569feaae6f%3A0x41d09af27f2460de!2sTwo42%20Christian%20Church!5e0!3m2!1sen!2s!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Two42 Church Location"
            />
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
