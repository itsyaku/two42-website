"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, MapPin } from "lucide-react";
import { events } from "@/lib/data/events";
import { AnimateOnScroll } from "@/components/shared/animate-on-scroll";

export function EventsContent() {
  return (
    <>
      {/* Hero */}
      <section className="py-24 bg-charcoal text-center">
        <div className="max-w-4xl mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-heading text-5xl md:text-7xl font-bold text-white lowercase"
          >
            what&apos;s happening
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-gray-300 text-lg max-w-2xl mx-auto"
          >
            As a community, Two42 Christian Church is built on the foundation of
            love for God and people and the immense joy of spreading His Kingdom.
          </motion.p>
        </div>
      </section>

      {/* Events List */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="space-y-8">
            {events.map((event, i) => (
              <AnimateOnScroll key={event.slug} delay={i * 0.1}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-0">
                    <div className="aspect-[16/10] md:aspect-auto overflow-hidden">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                      />
                    </div>
                    <div className="p-8">
                      <h2 className="font-heading text-2xl font-bold text-charcoal mb-4">
                        {event.title}
                      </h2>
                      <div className="flex flex-wrap gap-4 text-sm text-charcoal-light mb-4">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-4 h-4 text-gold" />
                          {event.date}
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Clock className="w-4 h-4 text-gold" />
                          {event.time}
                        </div>
                        <div className="flex items-center gap-1.5">
                          <MapPin className="w-4 h-4 text-gold" />
                          {event.location}
                        </div>
                      </div>
                      <p className="text-charcoal-light leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
