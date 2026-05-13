"use client";

import { Phone, Mail, ChevronDown } from "lucide-react";

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #070f1f 0%, #0f2044 45%, #162a5a 100%)",
      }}
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-10"
          style={{
            background:
              "radial-gradient(circle, #c9a84c 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-0 -left-24 w-80 h-80 rounded-full opacity-5"
          style={{
            background:
              "radial-gradient(circle, #c9a84c 0%, transparent 70%)",
          }}
        />
        {/* Gold horizontal rule accent */}
        <div
          className="absolute left-0 right-0 top-[55%] h-px opacity-10"
          style={{ background: "linear-gradient(90deg, transparent, #c9a84c, transparent)" }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="h-px w-8 bg-[#c9a84c]" />
            <span className="text-[#c9a84c] text-xs font-semibold tracking-[0.2em] uppercase">
              Established · Eccles · Greater Manchester
            </span>
            <div className="h-px w-8 bg-[#c9a84c]" />
          </div>

          {/* Headline */}
          <h1 className="font-serif text-white text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Legal Expertise You{" "}
            <span className="text-[#c9a84c]">Can Trust</span>
            <span className="block text-3xl sm:text-4xl lg:text-5xl mt-2 font-normal text-white/90">
              For Over Three Decades
            </span>
          </h1>

          {/* Strapline */}
          <p className="text-gray-300 text-lg sm:text-xl leading-relaxed mb-10 max-w-2xl">
            Martins Solicitors has proudly served the people of Eccles and
            Greater Manchester with professional, personal legal advice —
            delivering fixed-fee transparency and genuine care for every client.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-14">
            <button
              onClick={() => scrollTo("contact")}
              className="px-8 py-4 bg-[#c9a84c] hover:bg-[#e0c06d] text-[#0f2044] font-semibold text-base rounded transition-all duration-200 shadow-lg shadow-[#c9a84c]/20 hover:shadow-[#c9a84c]/30"
            >
              Get a Free Quote
            </button>
            <button
              onClick={() => scrollTo("services")}
              className="px-8 py-4 border border-white/30 hover:border-[#c9a84c] text-white hover:text-[#c9a84c] font-semibold text-base rounded transition-all duration-200"
            >
              Our Services
            </button>
          </div>

          {/* Contact strip */}
          <div className="flex flex-col sm:flex-row gap-6">
            <a
              href="tel:01617073660"
              className="flex items-center gap-3 text-gray-300 hover:text-[#c9a84c] transition-colors group"
            >
              <div className="w-9 h-9 rounded-full border border-white/20 group-hover:border-[#c9a84c] flex items-center justify-center transition-colors">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs text-gray-500 uppercase tracking-wide">
                  Call us
                </div>
                <div className="font-medium">0161 707 3660</div>
              </div>
            </a>
            <a
              href="mailto:graham@martinslawyers.co.uk"
              className="flex items-center gap-3 text-gray-300 hover:text-[#c9a84c] transition-colors group"
            >
              <div className="w-9 h-9 rounded-full border border-white/20 group-hover:border-[#c9a84c] flex items-center justify-center transition-colors">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs text-gray-500 uppercase tracking-wide">
                  Email us
                </div>
                <div className="font-medium">graham@martinslawyers.co.uk</div>
              </div>
            </a>
          </div>
        </div>

        {/* Stats bar */}
        <div className="mt-20 pt-10 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-8">
          {[
            { value: "30+", label: "Years Experience" },
            { value: "5", label: "Areas of Law" },
            { value: "SRA", label: "Regulated" },
            { value: "Fixed", label: "Fee Pricing" },
          ].map((stat) => (
            <div key={stat.label} className="text-center sm:text-left">
              <div className="font-serif text-3xl font-bold text-[#c9a84c]">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollTo("about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-500 hover:text-[#c9a84c] transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown className="w-5 h-5" />
      </button>
    </section>
  );
}
