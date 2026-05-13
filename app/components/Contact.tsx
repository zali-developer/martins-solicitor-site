"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";

const contactDetails = [
  {
    icon: Phone,
    label: "Telephone",
    value: "0161 707 3660",
    href: "tel:01617073660",
    subtext: "Mon–Fri, with evening appts until 7:30pm",
  },
  {
    icon: Mail,
    label: "Email",
    value: "graham@martinslawyers.co.uk",
    href: "mailto:graham@martinslawyers.co.uk",
    subtext: "We aim to respond within one business day",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "9 Church Street, Eccles, M30 0DF",
    href: "https://maps.google.com/?q=9+Church+Street,+Eccles,+M30+0DF",
    subtext: "Near Eccles Metrolink, rail & bus interchange",
  },
  {
    icon: Clock,
    label: "Office Hours",
    value: "Mon–Fri: 9am – 5:30pm",
    href: null,
    subtext: "Evening appointments available until 7:30pm",
  },
];

const services = [
  "Conveyancing",
  "Commercial Property",
  "Wills & Probate",
  "Lasting Powers of Attorney",
  "Family Law",
  "Other",
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-px w-8 bg-[#c9a84c]" />
            <span className="text-[#c9a84c] text-xs font-semibold tracking-[0.2em] uppercase">
              Contact Us
            </span>
            <div className="h-px w-8 bg-[#c9a84c]" />
          </div>
          <h2 className="font-serif text-[#0f2044] text-3xl sm:text-4xl font-bold">
            Get in Touch
          </h2>
          <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Ready to discuss your legal matter? Contact us today for a free,
            no-obligation quote. We are here to help.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact info */}
          <div>
            <h3 className="font-serif text-[#0f2044] text-xl font-bold mb-8">
              How to Reach Us
            </h3>

            <div className="space-y-6 mb-10">
              {contactDetails.map(({ icon: Icon, label, value, href, subtext }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#0f2044] flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-[#c9a84c]" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 uppercase tracking-wide font-medium mb-0.5">
                      {label}
                    </div>
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith("https://maps") ? "_blank" : undefined}
                        rel={href.startsWith("https://maps") ? "noopener noreferrer" : undefined}
                        className="text-[#0f2044] font-semibold hover:text-[#c9a84c] transition-colors"
                      >
                        {value}
                      </a>
                    ) : (
                      <div className="text-[#0f2044] font-semibold">{value}</div>
                    )}
                    <div className="text-gray-500 text-sm mt-0.5">{subtext}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Map link */}
            <a
              href="https://maps.google.com/?q=9+Church+Street,+Eccles,+M30+0DF"
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-2xl overflow-hidden border border-gray-100 h-56 bg-gray-50 hover:bg-gray-100 transition-colors group relative"
            >
              {/* Stylised map placeholder */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                <div className="w-14 h-14 rounded-full bg-[#0f2044] flex items-center justify-center mb-4 group-hover:bg-[#162a5a] transition-colors">
                  <MapPin className="w-7 h-7 text-[#c9a84c]" />
                </div>
                <span className="text-[#0f2044] font-serif font-bold text-base group-hover:text-[#c9a84c] transition-colors">
                  9 Church Street, Eccles, M30 0DF
                </span>
                <p className="text-gray-500 text-sm mt-1.5">
                  Near Eccles Metrolink &amp; rail station
                </p>
                <span className="mt-3 text-xs text-[#c9a84c] font-semibold tracking-wide uppercase">
                  Open in Google Maps →
                </span>
              </div>
              {/* Subtle grid lines for map feel */}
              <svg
                className="absolute inset-0 w-full h-full opacity-5"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <pattern
                    id="grid"
                    width="40"
                    height="40"
                    patternUnits="userSpaceOnUse"
                  >
                    <path
                      d="M 40 0 L 0 0 0 40"
                      fill="none"
                      stroke="#0f2044"
                      strokeWidth="1"
                    />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
            </a>

            {/* SRA compliance note */}
            <div className="mt-8 p-5 bg-gray-50 rounded-xl border border-gray-100 text-sm text-gray-600">
              <strong className="text-[#0f2044]">
                Authorised &amp; Regulated by the SRA
              </strong>{" "}
              (No. 00073856). If you have a complaint, please contact Graham
              Neild in the first instance. If unresolved, you may contact the{" "}
              <strong>Legal Ombudsman</strong> at{" "}
              <a
                href="https://www.legalombudsman.org.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0f2044] underline hover:text-[#c9a84c]"
              >
                www.legalombudsman.org.uk
              </a>{" "}
              or call 0300 555 0333.
            </div>
          </div>

          {/* Contact form */}
          <div>
            <h3 className="font-serif text-[#0f2044] text-xl font-bold mb-8">
              Send Us a Message
            </h3>

            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full min-h-80 text-center py-16 px-8 bg-gray-50 rounded-2xl border border-gray-100">
                <CheckCircle className="w-14 h-14 text-[#c9a84c] mb-5" />
                <h4 className="font-serif text-[#0f2044] text-xl font-bold mb-3">
                  Thank You, {formData.name.split(" ")[0]}!
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  Your message has been received. A member of our team will be
                  in touch with you shortly.
                </p>
                <p className="text-gray-500 text-sm mt-4">
                  For urgent matters, please call us on{" "}
                  <a
                    href="tel:01617073660"
                    className="text-[#c9a84c] font-semibold"
                  >
                    0161 707 3660
                  </a>
                  .
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1.5"
                    >
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#c9a84c]/50 focus:border-[#c9a84c] transition-colors"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-1.5"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. 07700 900000"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#c9a84c]/50 focus:border-[#c9a84c] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1.5"
                  >
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#c9a84c]/50 focus:border-[#c9a84c] transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-medium text-gray-700 mb-1.5"
                  >
                    Area of Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#c9a84c]/50 focus:border-[#c9a84c] transition-colors bg-white"
                  >
                    <option value="">Select a service...</option>
                    {services.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1.5"
                  >
                    Your Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Please briefly describe your legal matter and how we can help..."
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#c9a84c]/50 focus:border-[#c9a84c] transition-colors resize-none"
                  />
                </div>

                <p className="text-xs text-gray-500">
                  By submitting this form, you agree to us contacting you
                  regarding your enquiry. We will never share your details with
                  third parties.
                </p>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-[#0f2044] hover:bg-[#162a5a] text-white font-semibold rounded-lg transition-colors duration-200 shadow-lg shadow-navy-950/20"
                >
                  <Send className="w-4 h-4" />
                  Send Enquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
