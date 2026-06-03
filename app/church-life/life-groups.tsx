"use client";

import { AnimateOnScroll } from "@/components/shared/animate-on-scroll";
import { SectionHeading } from "@/components/shared/section-heading";
import { MapPin, Clock, Calendar, Users } from "lucide-react";

const lifeGroups = [
  {
    location: "Trou aux Biches",
    day: "Wednesdays",
    time: "18:30",
  },
  {
    location: "Mont Choisy",
    day: "Thursdays",
    time: "18:00",
  },
  {
    location: "Piton",
    day: "Every 2nd Thursday",
    time: "18:00",
  },
];

export function LifeGroups() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <AnimateOnScroll direction="left">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-gold" />
              </div>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-charcoal lowercase mb-4">
                life groups
              </h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Life Groups are smaller groups in the church that meet during the
                week. They are the heartbeat of our community, where real
                relationships are built and faith is lived out together.
              </p>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Getting together means discussing a topic, chewing on some
                biblical concepts, having dinner together, socialising and
                worshipping together. It is basically a form of doing life
                together.
              </p>
              <p className="text-charcoal-light leading-relaxed">
                Two42 Life Groups meet at three different locations across the
                island. Find one near you and come join the family!
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll direction="right" delay={0.2}>
            <div className="space-y-4">
              {lifeGroups.map((group, i) => (
                <div
                  key={group.location}
                  className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gold flex items-center justify-center shrink-0">
                      <MapPin className="w-6 h-6 text-charcoal" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-charcoal text-lg mb-2">
                        {group.location}
                      </h3>
                      <div className="flex flex-wrap gap-4 text-sm text-charcoal-light">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-4 h-4 text-gold" />
                          <span>{group.day}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Clock className="w-4 h-4 text-gold" />
                          <span>{group.time}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              <div className="text-center pt-4">
                <a
                  href="/connect"
                  className="inline-flex items-center justify-center px-8 py-3 bg-gold text-charcoal font-semibold uppercase tracking-wide text-sm rounded-md hover:bg-gold-dark transition-colors"
                >
                  Join a Life Group
                </a>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
