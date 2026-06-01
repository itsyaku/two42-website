"use client";

import { AnimateOnScroll } from "@/components/shared/animate-on-scroll";
import { SectionHeading } from "@/components/shared/section-heading";

const leaders = [
  {
    name: "Eugene van Loggerenberg",
    role: "Lead Elder",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    bio: "Eugene leads Two42 Christian Church with a passion for discipleship and community. His heart is to see ordinary people empowered to live extraordinary lives for Christ.",
  },
  {
    name: "Trevor Piercy",
    role: "Elder",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
    bio: "Trevor serves as Elder at Two42, bringing wisdom, pastoral care, and a deep love for the Word of God to the leadership of the church.",
  },
];

export function Leadership() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4">
        <AnimateOnScroll>
          <SectionHeading
            title="our leadership"
            subtitle="Meet the elders who shepherd our church family"
          />
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-3xl mx-auto">
          {leaders.map((leader, i) => (
            <AnimateOnScroll key={leader.name} delay={i * 0.15}>
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 text-center">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <div className="p-8">
                  <h3 className="font-heading text-2xl font-bold text-charcoal">
                    {leader.name}
                  </h3>
                  <p className="text-gold font-semibold uppercase tracking-wide text-sm mt-1 mb-4">
                    {leader.role}
                  </p>
                  <p className="text-charcoal-light text-sm leading-relaxed">
                    {leader.bio}
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
