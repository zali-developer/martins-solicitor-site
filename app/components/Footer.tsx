"use client";

import { Scale, Phone, Mail, MapPin } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Why Choose Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

const serviceLinks = [
  "Conveyancing",
  "Commercial Property",
  "Wills & Probate",
  "Lasting Powers of Attorney",
  "Family Law",
];

export default function Footer() {
  const scrollTo = (href: string) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <footer
      className="relative"
      style={{
        background: "linear-gradient(180deg, #0a1628 0%, #060d1a 100%)",
      }}
    >
      {/* Top gold line */}
      <div
        className="h-0.5 w-full"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, #c9a84c 50%, transparent 100%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full bg-[#c9a84c] flex items-center justify-center flex-shrink-0">
                <Scale className="w-5 h-5 text-[#0f2044]" />
              </div>
              <div>
                <div className="font-serif text-white text-base font-semibold leading-tight">
                  Martins Solicitors
                </div>
                <div className="text-[#c9a84c] text-xs tracking-widest uppercase">
                  Established in Eccles
                </div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Providing professional legal services to the people of Eccles
              and Greater Manchester for over 30 years. Authorised and
              regulated by the Solicitors Regulation Authority.
            </p>
            <div className="inline-flex items-center gap-2 bg-white/5 rounded-lg px-3 py-2 text-xs text-gray-400">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c] flex-shrink-0" />
              SRA No. 00073856
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-wide mb-5 uppercase">
              Navigation
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-gray-400 hover:text-[#c9a84c] text-sm transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-wide mb-5 uppercase">
              Services
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <button
                    onClick={() => scrollTo("#services")}
                    className="text-gray-400 hover:text-[#c9a84c] text-sm transition-colors text-left"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-wide mb-5 uppercase">
              Contact
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:01617073660"
                  className="flex items-start gap-3 text-gray-400 hover:text-[#c9a84c] transition-colors group"
                >
                  <Phone className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#c9a84c]" />
                  <span className="text-sm">0161 707 3660</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:graham@martinslawyers.co.uk"
                  className="flex items-start gap-3 text-gray-400 hover:text-[#c9a84c] transition-colors"
                >
                  <Mail className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#c9a84c]" />
                  <span className="text-sm break-all">
                    graham@martinslawyers.co.uk
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="https://maps.google.com/?q=9+Church+Street,+Eccles,+M30+0DF"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-gray-400 hover:text-[#c9a84c] transition-colors"
                >
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#c9a84c]" />
                  <span className="text-sm">
                    9 Church Street
                    <br />
                    Eccles, M30 0DF
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} Martins Solicitors. All rights
            reserved. Authorised &amp; regulated by the Solicitors Regulation
            Authority (No. 00073856).
          </p>
          <div className="flex items-center gap-6">
            <button
              onClick={() => scrollTo("#contact")}
              className="hover:text-[#c9a84c] transition-colors"
            >
              Complaints Procedure
            </button>
            <button
              onClick={() => scrollTo("#contact")}
              className="hover:text-[#c9a84c] transition-colors"
            >
              Privacy Policy
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
