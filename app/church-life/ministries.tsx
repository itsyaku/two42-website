"use client";

import { AnimateOnScroll } from "@/components/shared/animate-on-scroll";
import { SectionHeading } from "@/components/shared/section-heading";
import { Music, Users, Smile, Baby } from "lucide-react";

const ministries = [
  {
    icon: Music,
    title: "Worship",
    description:
      "Our worship team leads us into God's presence through contemporary and heartfelt praise every Sunday.",
  },
  {
    icon: Users,
    title: "Life Groups",
    description:
      "Doing life together, meeting during the week to discuss, eat, socialise, and grow in faith as a family.",
  },
  {
    icon: Smile,
    title: "Young Adults",
    description:
      "A vibrant community for young adults to connect, grow, and navigate life and faith together.",
  },
  {
    icon: Baby,
    title: "Kids Church",
    description:
      "A fun, safe, and engaging environment where children learn about God's love through age-appropriate teaching.",
  },
];

export function Ministries() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <AnimateOnScroll>
          <SectionHeading
            title="get involved"
            subtitle="There are many ways to be part of the Two42 family"
          />
        </AnimateOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ministries.map((ministry, i) => (
            <AnimateOnScroll key={ministry.title} delay={i * 0.1}>
              <div className="bg-white rounded-2xl p-8 text-center shadow-sm border border-gray-100 hover:shadow-md transition-shadow h-full">
                <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-gold/10 flex items-center justify-center">
                  <ministry.icon className="w-8 h-8 text-gold" />
                </div>
                <h3 className="font-heading text-xl font-bold text-charcoal mb-3">
                  {ministry.title}
                </h3>
                <p className="text-charcoal-light text-sm leading-relaxed">
                  {ministry.description}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
