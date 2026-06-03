"use client";

import { AnimateOnScroll } from "@/components/shared/animate-on-scroll";
import { SectionHeading } from "@/components/shared/section-heading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const beliefs = [
  {
    title: "The Bible",
    content:
      "We believe the Bible is the inspired, infallible Word of God, the supreme authority in all matters of faith and conduct.",
  },
  {
    title: "God",
    content:
      "We believe in one eternal God who exists as three distinct persons: Father, Son, and Holy Spirit. Creator and Sustainer of all things.",
  },
  {
    title: "Jesus Christ",
    content:
      "We believe in Jesus Christ, the Son of God, who was born of a virgin, lived a sinless life, died on the cross for our sins, rose again on the third day, and ascended to heaven where He sits at the right hand of the Father.",
  },
  {
    title: "The Holy Spirit",
    content:
      "We believe in the Holy Spirit who convicts the world of sin, regenerates believers, and empowers them for godly living and service. We believe in the present-day ministry of the Holy Spirit and the gifts of the Spirit.",
  },
  {
    title: "Salvation",
    content:
      "We believe that salvation is by grace alone, through faith alone, in Christ alone. It is a free gift from God, not earned by human effort or good works.",
  },
  {
    title: "The Church",
    content:
      "We believe the church is the body of Christ, a community of believers called to worship God, make disciples, and demonstrate the love of Christ to the world.",
  },
  {
    title: "Baptism",
    content:
      "We believe in water baptism by immersion as an outward expression of an inward reality, a public declaration of faith in Jesus Christ.",
  },
];

export function Beliefs() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <AnimateOnScroll>
          <SectionHeading
            title="what we believe"
            subtitle="Our core beliefs are rooted in the Word of God"
          />
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.2}>
          <Accordion className="space-y-3">
            {beliefs.map((belief, i) => (
              <AccordionItem
                key={i}
                value={`belief-${i}`}
                className="bg-gray-50 rounded-xl px-6 border border-gray-100"
              >
                <AccordionTrigger className="text-left font-heading text-lg font-semibold text-charcoal hover:text-gold transition-colors py-5 no-underline hover:no-underline">
                  {belief.title}
                </AccordionTrigger>
                <AccordionContent className="text-charcoal-light leading-relaxed pb-5">
                  {belief.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
