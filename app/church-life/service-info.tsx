"use client";

import { AnimateOnScroll } from "@/components/shared/animate-on-scroll";
import { Clock, Heart, Users, Smile } from "lucide-react";

const details = [
  {
    icon: Clock,
    title: "Service Times",
    text: "Sunday mornings at 10:00 AM. Prayer meeting at 9:30 AM — all are welcome.",
  },
  {
    icon: Heart,
    title: "What to Expect",
    text: "Warm fellowship, contemporary worship, biblical teaching, and a welcoming community that feels like family.",
  },
  {
    icon: Users,
    title: "For Everyone",
    text: "Whether you're new to church or a longtime believer, there's a place for you here. Come as you are.",
  },
  {
    icon: Smile,
    title: "Children",
    text: "Children are welcome and celebrated at Two42. They are an important part of our church family.",
  },
];

export function ServiceInfo() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <AnimateOnScroll direction="left">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1508963493744-76fce69379c0?w=800&q=80"
                alt="Church gathering"
                className="w-full h-full object-cover grayscale"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gold rounded-xl -z-10 hidden lg:block" />
            </div>
          </AnimateOnScroll>

          <div>
            <AnimateOnScroll direction="right">
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-charcoal lowercase mb-4">
                church life
              </h2>
              <p className="text-charcoal-light leading-relaxed mb-10">
                Church is more than a Sunday meeting. We believe church is made
                up of people who do life together by loving God and loving one
                another.
              </p>
            </AnimateOnScroll>

            <div className="space-y-6">
              {details.map((item, i) => (
                <AnimateOnScroll key={item.title} delay={i * 0.1} direction="right">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center shrink-0">
                      <item.icon className="w-6 h-6 text-gold" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-charcoal mb-1">
                        {item.title}
                      </h3>
                      <p className="text-charcoal-light text-sm leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
