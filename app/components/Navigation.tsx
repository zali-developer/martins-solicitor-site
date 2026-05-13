"use client";

import { useState, useEffect } from "react";
import { Menu, X, Scale } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Why Choose Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0f2044] shadow-lg shadow-black/20"
          : "bg-[#0f2044]/95 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => handleNavClick("#home")}
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 rounded-full bg-[#c9a84c] flex items-center justify-center flex-shrink-0">
              <Scale className="w-5 h-5 text-[#0f2044]" />
            </div>
            <div className="text-left">
              <div className="font-serif text-white text-lg leading-tight font-semibold">
                Martins Solicitors
              </div>
              <div className="text-[#c9a84c] text-xs tracking-widest uppercase">
                Established in Eccles
              </div>
            </div>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-gray-300 hover:text-[#c9a84c] text-sm font-medium tracking-wide transition-colors duration-200"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick("#contact")}
              className="ml-2 px-5 py-2.5 bg-[#c9a84c] hover:bg-[#e0c06d] text-[#0f2044] text-sm font-semibold rounded transition-colors duration-200"
            >
              Free Quote
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-white hover:text-[#c9a84c] transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-[#0a1628] border-t border-white/10 px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="block w-full text-left px-4 py-3 text-gray-300 hover:text-[#c9a84c] hover:bg-white/5 rounded text-sm font-medium tracking-wide transition-colors"
            >
              {link.label}
            </button>
          ))}
          <div className="pt-2">
            <button
              onClick={() => handleNavClick("#contact")}
              className="block w-full px-4 py-3 bg-[#c9a84c] hover:bg-[#e0c06d] text-[#0f2044] text-sm font-semibold rounded text-center transition-colors"
            >
              Get a Free Quote
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
