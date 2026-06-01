"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import { AnimateOnScroll } from "@/components/shared/animate-on-scroll";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

// Replace with your Behold Feed ID from behold.so dashboard
const BEHOLD_FEED_ID = "hvo4c4GE6fFRQVFfR3wA";

const INSTAGRAM_URL = "https://www.instagram.com/two42_org/";

const placeholderImages = [
  { src: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=400&q=80", alt: "Church worship" },
  { src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&q=80", alt: "Community fellowship" },
  { src: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=400&q=80", alt: "Outreach" },
  { src: "https://images.unsplash.com/photo-1508963493744-76fce69379c0?w=400&q=80", alt: "Sunday gathering" },
  { src: "https://images.unsplash.com/photo-1445445290350-18a3b86e0b5a?w=400&q=80", alt: "Prayer" },
  { src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80", alt: "Community life" },
];

function InstagramHeader() {
  return (
    <AnimateOnScroll>
      <a
        href={INSTAGRAM_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-3 mb-10 group"
      >
        <InstagramIcon className="w-6 h-6 text-gold" />
        <span className="text-charcoal font-semibold text-lg group-hover:text-gold transition-colors">
          @two42_org
        </span>
        <span className="text-charcoal-light text-sm">
          — Follow us on Instagram
        </span>
      </a>
    </AnimateOnScroll>
  );
}

function PlaceholderGrid() {
  return (
    <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
      {placeholderImages.map((image, i) => (
        <AnimateOnScroll key={i} delay={i * 0.05}>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block aspect-square overflow-hidden rounded-lg group relative"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/40 transition-all duration-300 flex items-center justify-center">
              <InstagramIcon className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </a>
        </AnimateOnScroll>
      ))}
    </div>
  );
}

export function InstagramFeed() {
  const [feedValid, setFeedValid] = useState<boolean | null>(null);

  useEffect(() => {
    if (!BEHOLD_FEED_ID) {
      setFeedValid(false);
      return;
    }
    fetch(`https://feeds.behold.so/${BEHOLD_FEED_ID}`, { method: "HEAD" })
      .then((res) => setFeedValid(res.ok))
      .catch(() => setFeedValid(false));
  }, []);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <InstagramHeader />

        {feedValid === true ? (
          <AnimateOnScroll delay={0.1}>
            <div className="behold-feed-wrapper">
              {/* @ts-expect-error - Behold web component */}
              <behold-widget feed-id={BEHOLD_FEED_ID} />
              <Script
                src="https://w.behold.so/widget.js"
                type="module"
                strategy="lazyOnload"
              />
            </div>
          </AnimateOnScroll>
        ) : (
          <PlaceholderGrid />
        )}
      </div>
    </section>
  );
}
