import {
  BadgeCheck,
  PoundSterling,
  Clock,
  HeartHandshake,
  MapPin,
  Phone,
} from "lucide-react";

const reasons = [
  {
    icon: BadgeCheck,
    title: "SRA Authorised & Regulated",
    description:
      "We are fully authorised and regulated by the Solicitors Regulation Authority (No. 00073856), giving you complete confidence in the quality and integrity of our legal services.",
  },
  {
    icon: PoundSterling,
    title: "Transparent Fixed Fees",
    description:
      "We believe in complete cost clarity. We charge competitive, fixed fees with no hidden extras — and because we pay no referral fees to third parties, those savings go directly to you.",
  },
  {
    icon: Clock,
    title: "Flexible Appointments",
    description:
      "We offer evening appointments until 7:30pm on weekdays, making it easy to get expert legal advice around your work or family commitments without taking time off.",
  },
  {
    icon: HeartHandshake,
    title: "Personal, Caring Service",
    description:
      "Every client receives direct access to their solicitor. We keep you fully informed at every stage of your case and treat you as an individual — not a case number.",
  },
  {
    icon: MapPin,
    title: "Home Visits Available",
    description:
      "For clients unable to visit our Eccles office, we offer home visits across Greater Manchester and North Cheshire, bringing our expertise to your door.",
  },
  {
    icon: Phone,
    title: "30+ Years in the Community",
    description:
      "Established for over three decades in Eccles, we have built our reputation on trust, reliability, and results. Our long-standing presence speaks to the quality of service we provide.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="py-24 relative overflow-hidden"
      style={{
        background: "linear-gradient(160deg, #0a1628 0%, #0f2044 60%, #162a5a 100%)",
      }}
    >
      {/* Decorative gold accent */}
      <div
        className="absolute top-0 left-0 right-0 h-1"
        style={{
          background: "linear-gradient(90deg, transparent 0%, #c9a84c 50%, transparent 100%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 80% 50%, #c9a84c 0%, transparent 50%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-px w-8 bg-[#c9a84c]" />
            <span className="text-[#c9a84c] text-xs font-semibold tracking-[0.2em] uppercase">
              Why Choose Us
            </span>
            <div className="h-px w-8 bg-[#c9a84c]" />
          </div>
          <h2 className="font-serif text-white text-3xl sm:text-4xl font-bold">
            The Martins Solicitors Difference
          </h2>
          <p className="mt-4 text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Choosing the right solicitor matters. Here is why hundreds of
            clients across Greater Manchester trust Martins Solicitors for
            their most important legal needs.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <div
                key={reason.title}
                className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#c9a84c]/40 rounded-2xl p-8 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-[#c9a84c]/15 group-hover:bg-[#c9a84c]/25 flex items-center justify-center mb-5 transition-colors">
                  <Icon className="w-6 h-6 text-[#c9a84c]" />
                </div>
                <h3 className="font-serif text-white text-lg font-bold mb-3 leading-snug">
                  {reason.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Testimonial / trust quote */}
        <div className="mt-20 text-center max-w-3xl mx-auto">
          <div
            className="rounded-2xl p-10 border border-[#c9a84c]/20"
            style={{ background: "rgba(201, 168, 76, 0.05)" }}
          >
            <div className="text-[#c9a84c] text-5xl font-serif leading-none mb-4 opacity-50">
              &ldquo;
            </div>
            <blockquote className="font-serif text-white text-xl leading-relaxed italic mb-6">
              Our commitment is to deliver professional legal advice that
              exactly meets your needs and to build strong relationships with
              our clients. We regard it as particularly important to keep our
              clients fully informed at every stage.
            </blockquote>
            <div className="text-[#c9a84c] text-sm font-semibold tracking-wide">
              Graham Neild — Managing Partner, Martins Solicitors
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
