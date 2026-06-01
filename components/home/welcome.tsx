"use client";

import Link from "next/link";
import { AnimateOnScroll } from "@/components/shared/animate-on-scroll";

export function Welcome() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <AnimateOnScroll direction="left">
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=800&q=80"
                  alt="Church community"
                  className="w-full h-full object-cover grayscale"
                />
              </div>
              {/* Yellow accent block */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gold rounded-2xl -z-10 hidden lg:block" />
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll direction="right" delay={0.2}>
            <div>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-charcoal lowercase mb-6">
                who we are
              </h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                As a community, Two42 Christian Church is built on the
                foundation of love for God and people, and the immense joy of
                spreading His Kingdom.
              </p>
              <p className="text-charcoal-light leading-relaxed mb-8">
                We wholeheartedly believe that loving God cannot be separated
                from loving people. Guided by the Holy Spirit, our deepest
                desire is to foster a family where Jesus is the Head of His
                church, inspiring each one of us to follow Him with unwavering
                passion, as detailed in Acts 2:42-47.
              </p>
              <Link
                href="/connect"
                className="inline-flex items-center justify-center px-8 py-3 bg-gold text-charcoal font-semibold uppercase tracking-wide text-sm rounded-md hover:bg-gold-dark transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
