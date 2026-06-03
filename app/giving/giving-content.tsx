"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Copy, Check, Heart } from "lucide-react";
import { AnimateOnScroll } from "@/components/shared/animate-on-scroll";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const bankDetails = [
  { label: "Bank Name", value: "ABSA Bank Mauritius" },
  { label: "Account Name", value: "2Forty2 Association" },
  { label: "Account Type", value: "Current Account" },
  { label: "Account Number", value: "252013164" },
  { label: "Swift Code", value: "BARCMUMUMAF" },
  { label: "Reference", value: "Donation" },
];

const faqs = [
  {
    q: "Why should I give?",
    a: "We believe in giving in church because it is a way to honor God with our resources. God so generously gave to us, sending his Son so we can be saved, how can we not live a life of generosity in return?",
  },
  {
    q: "Is tithing still relevant today?",
    a: "Tithing is an act of obedience for us. It is a biblical principle we believe, that acknowledges God's provision in our lives. While the New Testament emphasizes cheerful and generous giving, tithing is a wonderful starting point.",
  },
  {
    q: "How is the money used?",
    a: "Church funds are used to support ministry operations, community outreach, missions, facility costs, and to care for those in need within our community and beyond.",
  },
  {
    q: "Can I give anonymously?",
    a: "Yes, you can make a bank transfer without including your name. Your giving is between you and God.",
  },
];

function CopyButton({ value }: { value: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="p-1.5 rounded-md hover:bg-gold/10 transition-colors text-charcoal-light hover:text-gold"
      aria-label={`Copy ${value}`}
    >
      {copied ? (
        <Check className="w-4 h-4 text-green-500" />
      ) : (
        <Copy className="w-4 h-4" />
      )}
    </button>
  );
}

export function GivingContent() {
  return (
    <>
      {/* Hero */}
      <section className="py-24 bg-charcoal text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-48 h-48 bg-gold/10 rotate-45 translate-x-1/3 -translate-y-1/3" />
        <div className="relative max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gold/20 flex items-center justify-center">
              <Heart className="w-8 h-8 text-gold" />
            </div>
            <h1 className="font-heading text-5xl md:text-7xl font-bold text-white lowercase">
              how can I give
            </h1>
            <p className="mt-6 text-gray-300 text-lg max-w-2xl mx-auto">
              We believe in giving in church because it is a way to honor God
              with our resources. God so generously gave to us, sending his Son
              so we can be saved, how can we not live a life of generosity in
              return?
            </p>
          </motion.div>
        </div>
      </section>

      {/* Bank Details */}
      <section className="py-24 bg-white">
        <div className="max-w-2xl mx-auto px-4">
          <AnimateOnScroll>
            <div className="bg-gray-50 rounded-2xl p-8 md:p-10 border border-gray-100">
              <h2 className="font-heading text-2xl font-bold text-charcoal mb-2 text-center">
                Bank Transfer Details
              </h2>
              <p className="text-charcoal-light text-sm text-center mb-8">
                Click the copy icon to copy any detail to your clipboard
              </p>

              <div className="space-y-4">
                {bankDetails.map((detail) => (
                  <div
                    key={detail.label}
                    className="flex items-center justify-between py-3 border-b border-gray-200 last:border-0"
                  >
                    <div>
                      <span className="text-xs uppercase tracking-wide text-gold font-semibold">
                        {detail.label}
                      </span>
                      <p className="text-charcoal font-medium mt-0.5">
                        {detail.value}
                      </p>
                    </div>
                    <CopyButton value={detail.value} />
                  </div>
                ))}
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4">
          <AnimateOnScroll>
            <h2 className="font-heading text-3xl font-bold text-charcoal lowercase text-center mb-10">
              common questions
            </h2>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.2}>
            <Accordion className="space-y-3">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="bg-white rounded-xl px-6 border border-gray-100"
                >
                  <AccordionTrigger className="text-left font-semibold text-charcoal hover:text-gold transition-colors py-5 hover:no-underline">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-charcoal-light leading-relaxed pb-5">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
