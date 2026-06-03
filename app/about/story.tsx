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
                  chapter 2, verses 42 through 47, a passage that describes
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
              <div className="aspect-[4/5] rounded-2xl overflow-hidden relative bg-charcoal">
                {/* Decorative bible-inspired background */}
                <div className="absolute inset-0">
                  {/* Subtle cross watermark */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1px] h-full bg-white/[0.04]" />
                  <div className="absolute top-[30%] left-0 w-full h-[1px] bg-white/[0.04]" />
                  {/* Radial glow */}
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(252,219,59,0.08)_0%,_transparent_70%)]" />
                  {/* Subtle texture lines */}
                  <div className="absolute inset-0 opacity-[0.03]" style={{
                    backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 24px, rgba(255,255,255,0.3) 24px, rgba(255,255,255,0.3) 25px)`,
                  }} />
                  {/* Corner ornaments */}
                  <div className="absolute top-6 left-6 w-12 h-12 border-t-2 border-l-2 border-gold/20 rounded-tl-sm" />
                  <div className="absolute bottom-6 right-6 w-12 h-12 border-b-2 border-r-2 border-gold/20 rounded-br-sm" />
                </div>

                {/* Scripture content */}
                <div className="relative z-10 h-full flex flex-col items-center justify-center px-8 md:px-12 text-center">
                  <span className="text-gold/60 text-xs uppercase tracking-[0.4em] mb-6">
                    The Holy Bible
                  </span>
                  <h3 className="text-gold font-bold text-lg md:text-xl mb-8 tracking-wide">
                    Acts 2:42&ndash;47
                  </h3>
                  <div className="space-y-4 text-white/80 text-sm md:text-base leading-relaxed italic">
                    <p>
                      <sup className="text-gold/50 text-xs mr-1 not-italic">42</sup>
                      They devoted themselves to the apostles&apos; teaching and to
                      fellowship, to the breaking of bread and to prayer.
                    </p>
                    <p>
                      <sup className="text-gold/50 text-xs mr-1 not-italic">43</sup>
                      Everyone was filled with awe at the many wonders and signs
                      performed by the apostles.
                    </p>
                    <p>
                      <sup className="text-gold/50 text-xs mr-1 not-italic">44</sup>
                      All the believers were together and had everything in common.
                    </p>
                    <p>
                      <sup className="text-gold/50 text-xs mr-1 not-italic">45</sup>
                      They sold property and possessions to give to anyone who had need.
                    </p>
                    <p>
                      <sup className="text-gold/50 text-xs mr-1 not-italic">46</sup>
                      Every day they continued to meet together in the temple courts.
                      They broke bread in their homes and ate together with glad and
                      sincere hearts,
                    </p>
                    <p>
                      <sup className="text-gold/50 text-xs mr-1 not-italic">47</sup>
                      praising God and enjoying the favor of all the people. And the
                      Lord added to their number daily those who were being saved.
                    </p>
                  </div>
                  <div className="mt-8 w-16 h-[1px] bg-gold/30" />
                  <span className="mt-4 text-gold/40 text-xs uppercase tracking-[0.3em]">
                    NIV
                  </span>
                </div>
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
