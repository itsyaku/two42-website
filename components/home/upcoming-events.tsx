"use client";

import Link from "next/link";
import { Calendar, Clock, MapPin, ArrowRight } from "lucide-react";
import { events } from "@/lib/data/events";
import { AnimateOnScroll } from "@/components/shared/animate-on-scroll";
import { SectionHeading } from "@/components/shared/section-heading";

export function UpcomingEvents() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <AnimateOnScroll>
          <SectionHeading
            title="what's happening"
            subtitle="Stay connected with what's going on at Two42"
          />
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((event, i) => (
            <AnimateOnScroll key={event.slug} delay={i * 0.15}>
              <div className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-xl font-bold text-charcoal mb-3">
                    {event.title}
                  </h3>
                  <div className="space-y-1.5 text-sm text-charcoal-light mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-gold" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-gold" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-gold" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <p className="text-charcoal-light text-sm line-clamp-2">
                    {event.description}
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll delay={0.4}>
          <div className="text-center mt-12">
            <Link
              href="/events"
              className="inline-flex items-center gap-2 text-charcoal hover:text-gold font-medium transition-colors"
            >
              View all events
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
