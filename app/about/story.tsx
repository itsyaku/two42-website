"use client";

import { AnimateOnScroll } from "@/components/shared/animate-on-scroll";
import Link from "next/link";

export function Story() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <AnimateOnScroll direction="left">
            <div>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-charcoal lowercase mb-6">
                our story
              </h2>
              <div className="space-y-4 text-charcoal-light leading-relaxed">
                <p>
                  Two42 Christian Church takes its name from the book of Acts,
                  chapter 2, verses 42 through 47 — a passage that describes
                  the early church devoted to the apostles' teaching, to
                  fellowship, to breaking of bread, and to prayer.
                </p>
                <p>
                  We are a community in Pointe aux Canonniers, Mauritius, that
                  seeks to live out this same authentic, New Testament
                  Christianity. We wholeheartedly believe that loving God cannot
                  be separated from loving people.
                </p>
                <p>
                  Guided by the Holy Spirit, our deepest desire is to foster a
                  family where Jesus is the Head of His church, inspiring each
                  one of us to follow Him with unwavering passion.
                </p>
              </div>
              <Link
                href="/connect"
                className="inline-flex items-center justify-center px-8 py-3 mt-8 bg-gold text-charcoal font-semibold uppercase tracking-wide text-sm rounded-md hover:bg-gold-dark transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll direction="right" delay={0.2}>
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1445445290350-18a3b86e0b5a?w=800&q=80"
                  alt="Hands joined in prayer"
                  className="w-full h-full object-cover grayscale"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gold rounded-xl -z-10 hidden lg:block" />
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gold/30 rotate-45 hidden lg:block" />
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
