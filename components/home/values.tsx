"use client";

import { BookOpen, Users, MessageCircle, GraduationCap } from "lucide-react";
import { AnimateOnScroll } from "@/components/shared/animate-on-scroll";

const values = [
  {
    icon: BookOpen,
    title: "Christ-Centered",
    description:
      "We place Jesus at the center of everything we do, following His example of love, service, and discipleship",
  },
  {
    icon: Users,
    title: "Family of Believers",
    description:
      "Two42 is a family of believers who live out our faith together, who grows together and does life together",
  },
  {
    icon: MessageCircle,
    title: "Holy Spirit-Led",
    description:
      "We are guided by the Holy Spirit, seeking His presence and leading in all aspects of our lives and church",
  },
  {
    icon: GraduationCap,
    title: "Acts 2:42-47 Inspired",
    description:
      "Our church seeks to live out authentic Christianity as seen in Acts 2:42-47",
  },
];

export function Values() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, i) => (
            <AnimateOnScroll key={value.title} delay={i * 0.1}>
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                  <value.icon className="w-8 h-8 text-gold" />
                </div>
                <h3 className="font-heading text-xl font-bold text-charcoal mb-3">
                  {value.title}
                </h3>
                <p className="text-charcoal-light text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
