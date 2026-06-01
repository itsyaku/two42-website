"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, Check } from "lucide-react";
import { AnimateOnScroll } from "@/components/shared/animate-on-scroll";

const categories = [
  "I'm looking for a church",
  "I'd like to know more about Jesus",
  "Prayer request",
  "I want to join a team",
  "General enquiry",
];

export function ConnectContent() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    category: categories[0],
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="py-24 bg-charcoal text-center">
        <div className="max-w-4xl mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-heading text-5xl md:text-7xl font-bold text-white lowercase"
          >
            let&apos;s connect
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-gray-300 text-lg max-w-2xl mx-auto"
          >
            Have questions or want to get in touch? We&apos;d love to hear from
            you! Whether you&apos;re exploring faith, looking for a community,
            or need prayer — reach out.
          </motion.p>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-16">
            {/* Contact Info */}
            <AnimateOnScroll direction="left">
              <div className="space-y-8">
                <div>
                  <h2 className="font-heading text-3xl font-bold text-charcoal lowercase mb-6">
                    get in touch
                  </h2>
                  <p className="text-charcoal-light leading-relaxed">
                    We&apos;re here for you. Reach out through any of these
                    channels or fill out the form and we&apos;ll get back to you
                    as soon as possible.
                  </p>
                </div>

                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-gold/10 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <p className="font-semibold text-charcoal text-sm">
                        Eugene van Loggerenberg
                      </p>
                      <a
                        href="tel:+23055110048"
                        className="text-charcoal-light text-sm hover:text-gold transition-colors"
                      >
                        +230 5511 0048
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-gold/10 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <p className="font-semibold text-charcoal text-sm">
                        Email
                      </p>
                      <a
                        href="mailto:info@two42.org"
                        className="text-charcoal-light text-sm hover:text-gold transition-colors"
                      >
                        info@two42.org
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-gold/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <p className="font-semibold text-charcoal text-sm">
                        Location
                      </p>
                      <p className="text-charcoal-light text-sm">
                        Royal Road, Pointe aux Canonniers
                        <br />
                        Mauritius
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>

            {/* Form */}
            <AnimateOnScroll direction="right" delay={0.2}>
              {submitted ? (
                <div className="bg-gray-50 rounded-2xl p-12 text-center border border-gray-100">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center">
                    <Check className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-charcoal mb-3">
                    Thank you!
                  </h3>
                  <p className="text-charcoal-light">
                    We&apos;ve received your message and will get back to you
                    soon.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-gray-50 rounded-2xl p-8 md:p-10 border border-gray-100 space-y-6"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-charcoal mb-2"
                      >
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 text-charcoal placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-charcoal mb-2"
                      >
                        Contact Number
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 text-charcoal placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors"
                        placeholder="+230 5XXX XXXX"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-charcoal mb-2"
                    >
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 text-charcoal placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="category"
                      className="block text-sm font-medium text-charcoal mb-2"
                    >
                      I&apos;d like to... <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="category"
                      value={formData.category}
                      onChange={(e) =>
                        setFormData({ ...formData, category: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 text-charcoal focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors"
                    >
                      {categories.map((cat) => (
                        <option key={cat} value={cat}>
                          {cat}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-charcoal mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 text-charcoal placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors resize-none"
                      placeholder="Tell us more..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-gold text-charcoal font-semibold uppercase tracking-wide text-sm rounded-md hover:bg-gold-dark transition-colors"
                  >
                    <Send className="w-4 h-4" />
                    Submit
                  </button>
                </form>
              )}
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="h-[400px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3745.5!2d57.556542!3d-20.0060387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x217dab569feaae6f%3A0x41d09af27f2460de!2sTwo42%20Christian%20Church!5e0!3m2!1sen!2s!4v1"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Two42 Church Location"
        />
      </section>
    </>
  );
}
