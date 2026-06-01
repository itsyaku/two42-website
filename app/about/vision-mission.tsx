"use client";

import { AnimateOnScroll } from "@/components/shared/animate-on-scroll";
import { Eye, Target } from "lucide-react";

export function VisionMission() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimateOnScroll delay={0}>
            <div className="bg-white rounded-2xl p-10 shadow-sm border border-gray-100 h-full">
              <div className="w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-gold" />
              </div>
              <h3 className="font-heading text-3xl font-bold text-charcoal lowercase mb-4">
                vision
              </h3>
              <p className="text-charcoal-light leading-relaxed text-lg">
                To love God passionately, sincerely love one another, and
                actively make disciples of Jesus.
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.15}>
            <div className="bg-charcoal rounded-2xl p-10 shadow-sm h-full">
              <div className="w-14 h-14 rounded-2xl bg-gold/20 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-gold" />
              </div>
              <h3 className="font-heading text-3xl font-bold text-white lowercase mb-4">
                mission
              </h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                To empower ordinary people to live extraordinary lives by making
                disciples of all nations, baptizing them, and teaching them to
                obey everything Jesus has commanded.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
