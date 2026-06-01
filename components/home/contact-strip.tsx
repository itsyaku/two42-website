"use client";

import { Phone, Mail, MapPin } from "lucide-react";
import { AnimateOnScroll } from "@/components/shared/animate-on-scroll";

export function ContactStrip() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4">
        <AnimateOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <a
              href="tel:+23055110048"
              className="group flex flex-col items-center gap-3"
            >
              <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                <Phone className="w-6 h-6 text-gold" />
              </div>
              <div>
                <p className="font-semibold text-charcoal">Call Us</p>
                <p className="text-charcoal-light text-sm">+230 5511 0048</p>
              </div>
            </a>

            <a
              href="mailto:info@two42.org"
              className="group flex flex-col items-center gap-3"
            >
              <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                <Mail className="w-6 h-6 text-gold" />
              </div>
              <div>
                <p className="font-semibold text-charcoal">Email Us</p>
                <p className="text-charcoal-light text-sm">info@two42.org</p>
              </div>
            </a>

            <a
              href="https://www.google.com/maps/place/Two42+Christian+Church/@-20.0060387,57.556542,17z"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-3"
            >
              <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                <MapPin className="w-6 h-6 text-gold" />
              </div>
              <div>
                <p className="font-semibold text-charcoal">Visit Us</p>
                <p className="text-charcoal-light text-sm">
                  Royal Road, Pointe aux Canonniers
                </p>
              </div>
            </a>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
