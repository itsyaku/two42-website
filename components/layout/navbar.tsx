"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X, Search } from "lucide-react";
import { Logo } from "./logo";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "Who We Are" },
  { href: "/church-life", label: "Church Life" },
  { href: "/events", label: "Events" },
  { href: "/giving", label: "Giving" },
  { href: "/connect", label: "Connect" },
];

const searchablePages = [
  { href: "/", title: "Home", keywords: "home welcome who we are values christ family holy spirit acts sunday service" },
  { href: "/about", title: "Who We Are", keywords: "about vision mission beliefs leadership elders eugene trevor story" },
  { href: "/church-life", title: "Church Life", keywords: "church life service sunday worship prayer small groups outreach discipleship ministries location map directions" },
  { href: "/events", title: "Events", keywords: "events happening sunday service prayer meeting community outreach" },
  { href: "/giving", title: "Giving", keywords: "give giving tithe offering bank transfer donation absa" },
  { href: "/connect", title: "Connect", keywords: "connect contact form prayer request join team email phone" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchInputRef = useRef<HTMLInputElement>(null);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [searchOpen]);

  const filteredPages = searchQuery.trim()
    ? searchablePages.filter(
        (page) =>
          page.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          page.keywords.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  const handleSearchSelect = (href: string) => {
    setSearchOpen(false);
    setSearchQuery("");
    router.push(href);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <Logo />

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "px-4 py-2 text-sm font-medium uppercase tracking-wide transition-colors rounded-md",
                    pathname === link.href
                      ? "text-gold"
                      : "text-charcoal hover:text-gold"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            className="p-2 ml-1 text-charcoal hover:text-gold transition-colors"
            aria-label="Search"
          >
            <Search className="w-5 h-5" />
          </button>
        </div>

        {/* Mobile toggle */}
        <div className="lg:hidden flex items-center gap-1">
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            className="p-2 text-charcoal hover:text-gold transition-colors"
            aria-label="Search"
          >
            <Search className="w-5 h-5" />
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 text-charcoal hover:text-gold transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Search overlay */}
      {searchOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-lg z-50">
          <div className="max-w-3xl mx-auto px-4 py-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Escape") {
                    setSearchOpen(false);
                    setSearchQuery("");
                  }
                  if (e.key === "Enter" && filteredPages.length > 0) {
                    handleSearchSelect(filteredPages[0].href);
                  }
                }}
                placeholder="Search the website..."
                className="w-full pl-11 pr-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-charcoal placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors"
              />
              <button
                onClick={() => {
                  setSearchOpen(false);
                  setSearchQuery("");
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-gray-400 hover:text-charcoal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {searchQuery.trim() && (
              <div className="mt-3 space-y-1">
                {filteredPages.length > 0 ? (
                  filteredPages.map((page) => (
                    <button
                      key={page.href}
                      onClick={() => handleSearchSelect(page.href)}
                      className="w-full text-left px-4 py-3 rounded-lg hover:bg-gold/5 transition-colors flex items-center gap-3"
                    >
                      <Search className="w-4 h-4 text-gold shrink-0" />
                      <span className="text-charcoal font-medium">
                        {page.title}
                      </span>
                    </button>
                  ))
                ) : (
                  <p className="px-4 py-3 text-charcoal-light text-sm">
                    No results found for &ldquo;{searchQuery}&rdquo;
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <ul className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "block px-4 py-3 text-sm font-medium uppercase tracking-wide rounded-lg transition-colors",
                    pathname === link.href
                      ? "text-gold bg-gold/5"
                      : "text-charcoal hover:text-gold hover:bg-gold/5"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
