"use client";

import { Home, Building2, FileText, Shield, Heart, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Conveyancing",
    subtitle: "Residential & Re-mortgage",
    description:
      "We provide a fast, efficient, and low-cost conveyancing service whether you are buying, selling, re-mortgaging, or transferring equity. Our experienced solicitors guide you through every step with full transparency on costs.",
    features: [
      "Buying & selling property",
      "Re-mortgaging",
      "Transfer of equity",
      "Fixed competitive fees",
      "No referral fees to agents",
    ],
    color: "from-blue-900 to-[#0f2044]",
  },
  {
    icon: Building2,
    title: "Commercial Property",
    subtitle: "Business Property Matters",
    description:
      "From commercial leases to property acquisitions, our solicitors provide expert advice to businesses of all sizes. We handle the full spectrum of commercial property transactions with efficiency and precision.",
    features: [
      "Commercial leases",
      "Property acquisitions",
      "Business premises",
      "Landlord & tenant matters",
      "Commercial mortgages",
    ],
    color: "from-slate-800 to-[#0f2044]",
  },
  {
    icon: FileText,
    title: "Wills & Probate",
    subtitle: "Planning & Estate Administration",
    description:
      "We help you plan for the future with professionally drafted wills, and guide your family through the probate process with care and sensitivity. Protect what matters most and ensure your wishes are honoured.",
    features: [
      "Will drafting",
      "Estate administration",
      "Grant of probate",
      "Intestacy advice",
      "Trust creation",
    ],
    color: "from-[#0f2044] to-indigo-900",
  },
  {
    icon: Shield,
    title: "Lasting Powers of Attorney",
    subtitle: "Protecting Your Future",
    description:
      "A Lasting Power of Attorney lets you appoint trusted individuals to manage your financial, property, or healthcare decisions if you become unable to do so. We make the process straightforward and reassuring.",
    features: [
      "Property & financial LPAs",
      "Health & welfare LPAs",
      "Registration with the OPJ",
      "Court of Protection matters",
      "Deputyship applications",
    ],
    color: "from-[#162a5a] to-[#0a1628]",
  },
  {
    icon: Heart,
    title: "Family Law",
    subtitle: "Matrimonial, Children & Cohabitation",
    description:
      "When family relationships break down, we provide sensitive and practical legal advice. Our experienced family lawyers handle divorce and separation, children matters, and cohabitation agreements with empathy.",
    features: [
      "Divorce & separation",
      "Children law (residence & contact)",
      "Financial settlements",
      "Cohabitation agreements",
      "Care proceedings",
    ],
    color: "from-rose-900 to-[#0f2044]",
  },
];

export default function Services() {
  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-px w-8 bg-[#c9a84c]" />
            <span className="text-[#c9a84c] text-xs font-semibold tracking-[0.2em] uppercase">
              Our Services
            </span>
            <div className="h-px w-8 bg-[#c9a84c]" />
          </div>
          <h2 className="font-serif text-[#0f2044] text-3xl sm:text-4xl font-bold">
            Comprehensive Legal Services
          </h2>
          <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            From moving home to planning your estate, we cover the full range
            of legal needs for individuals and businesses across Greater
            Manchester with expert advice and fixed-fee clarity.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className={`group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-[#c9a84c]/30 hover:shadow-xl hover:shadow-[#c9a84c]/5 transition-all duration-300 flex flex-col ${
                  index === 4 ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                {/* Card header */}
                <div
                  className={`bg-gradient-to-br ${service.color} p-8 relative overflow-hidden`}
                >
                  <div className="absolute top-0 right-0 w-32 h-32 opacity-10 rounded-full bg-[#c9a84c] translate-x-8 -translate-y-8" />
                  <div className="relative">
                    <div className="w-12 h-12 rounded-xl bg-[#c9a84c]/20 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-[#c9a84c]" />
                    </div>
                    <h3 className="font-serif text-white text-xl font-bold leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-[#c9a84c] text-sm font-medium mt-1 opacity-90">
                      {service.subtitle}
                    </p>
                  </div>
                </div>

                {/* Card body */}
                <div className="p-8 flex flex-col flex-1">
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <ul className="space-y-2 mb-8 flex-1">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-sm text-gray-700"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-[#c9a84c] flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={scrollToContact}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#0f2044] hover:text-[#c9a84c] group-hover:gap-3 transition-all duration-200 mt-auto"
                  >
                    Get a free quote
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">
            Not sure which service you need? We are happy to advise.
          </p>
          <button
            onClick={scrollToContact}
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#0f2044] hover:bg-[#162a5a] text-white font-semibold rounded transition-colors duration-200"
          >
            Speak to a Solicitor
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
