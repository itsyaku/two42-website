import { Phone, Mail } from "lucide-react";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export function TopBar() {
  return (
    <div className="bg-gold text-charcoal text-sm py-2">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <a
            href="tel:+23055110048"
            className="flex items-center gap-1.5 hover:text-charcoal/70 transition-colors"
          >
            <Phone className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">+230 5511 0048</span>
          </a>
          <a
            href="mailto:info@two42.org"
            className="flex items-center gap-1.5 hover:text-charcoal/70 transition-colors"
          >
            <Mail className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">info@two42.org</span>
          </a>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="https://www.facebook.com/two42church"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-charcoal/70 transition-colors"
            aria-label="Facebook"
          >
            <FacebookIcon className="w-4 h-4" />
          </a>
          <a
            href="https://www.instagram.com/two42_org/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-charcoal/70 transition-colors"
            aria-label="Instagram"
          >
            <InstagramIcon className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
