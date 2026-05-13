import { Award, Users, Clock, MapPin } from "lucide-react";

const team = [
  {
    name: "Graham Neild",
    role: "Managing Partner",
    description:
      "With over 35 years of experience, Graham specialises in residential and commercial property, wills, probate, and Court of Protection matters. He leads the firm with a commitment to personal, fixed-fee service.",
  },
  {
    name: "Judith Brass",
    role: "Partner",
    description:
      "Judith brings over a decade of expertise in family law, handling matrimonial disputes, children proceedings, and cohabitation agreements with sensitivity and professional rigour.",
  },
  {
    name: "Barbara Wrennall",
    role: "Consultant",
    description:
      "Barbara has extensive experience advising on family law matters including divorce, financial settlements, and custody disputes, ensuring clients receive compassionate and effective representation.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-px w-8 bg-[#c9a84c]" />
            <span className="text-[#c9a84c] text-xs font-semibold tracking-[0.2em] uppercase">
              About Us
            </span>
            <div className="h-px w-8 bg-[#c9a84c]" />
          </div>
          <h2 className="font-serif text-[#0f2044] text-3xl sm:text-4xl font-bold">
            A Trusted Name in Eccles
          </h2>
          <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            For over three decades, Martins Solicitors has been at the heart of
            the Eccles community, delivering honest, expert legal advice to
            individuals and businesses across Greater Manchester.
          </p>
        </div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h3 className="font-serif text-[#0f2044] text-2xl font-bold mb-6">
              Our Commitment to You
            </h3>
            <div className="space-y-5 text-gray-600 leading-relaxed">
              <p>
                Our commitment is to deliver professional legal advice that
                exactly meets your needs and to build strong, lasting
                relationships with our clients. We regard it as particularly
                important to keep you fully informed on the progress of your
                case or transaction every step of the way.
              </p>
              <p>
                We provide a professional and reliable service to the local and
                regional community. Unlike many firms, we do not pay referral
                fees to estate agents or any other third parties — this means we
                can pass those savings directly to you through highly competitive
                fixed fees.
              </p>
              <p>
                Conveniently located in the centre of Eccles, close to the
                railway station, Metrolink, and bus interchange, we are easily
                accessible. We also offer home visits across Greater Manchester
                and North Cheshire, and evening appointments until 7:30pm on
                weekdays for those unable to attend during office hours.
              </p>
            </div>

            {/* Quick facts */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { icon: Clock, text: "Evening appts until 7:30pm" },
                { icon: MapPin, text: "Home visits available" },
                { icon: Award, text: "SRA Authorised & Regulated" },
                { icon: Users, text: "No referral fees paid" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded bg-[#c9a84c]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon className="w-4 h-4 text-[#c9a84c]" />
                  </div>
                  <span className="text-sm text-gray-700 font-medium leading-snug">
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* SRA card + location card */}
          <div className="space-y-6">
            <div
              className="rounded-2xl p-8"
              style={{
                background:
                  "linear-gradient(135deg, #0a1628 0%, #0f2044 100%)",
              }}
            >
              <div className="text-[#c9a84c] text-xs font-semibold tracking-widest uppercase mb-3">
                Regulatory Status
              </div>
              <h4 className="font-serif text-white text-xl font-bold mb-3">
                Authorised &amp; Regulated
              </h4>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                Martins Solicitors is authorised and regulated by the
                Solicitors Regulation Authority. You can trust that your legal
                matters are handled with the highest professional standards.
              </p>
              <div className="inline-flex items-center gap-2 bg-white/10 rounded-lg px-4 py-2">
                <Award className="w-4 h-4 text-[#c9a84c]" />
                <span className="text-white text-sm font-medium">
                  SRA Registration No. 00073856
                </span>
              </div>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-gray-50 p-8">
              <div className="text-[#c9a84c] text-xs font-semibold tracking-widest uppercase mb-3">
                Find Us
              </div>
              <h4 className="font-serif text-[#0f2044] text-xl font-bold mb-3">
                Centrally Located in Eccles
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Our office is situated in the heart of Eccles, with excellent
                transport links including the Metrolink, railway station, and
                bus interchange — all within easy walking distance.
              </p>
              <address className="not-italic text-sm text-gray-700">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#c9a84c] mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">9 Church Street</div>
                    <div>Eccles, M30 0DF</div>
                    <div>Greater Manchester</div>
                  </div>
                </div>
              </address>
            </div>
          </div>
        </div>

        {/* Team */}
        <div>
          <div className="text-center mb-10">
            <h3 className="font-serif text-[#0f2044] text-2xl font-bold">
              Meet Our Team
            </h3>
            <div className="mt-2 h-0.5 w-16 bg-[#c9a84c] mx-auto" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member) => (
              <div
                key={member.name}
                className="group bg-white border border-gray-100 rounded-2xl p-8 hover:border-[#c9a84c]/30 hover:shadow-lg hover:shadow-[#c9a84c]/5 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-full bg-[#0f2044] flex items-center justify-center mb-5">
                  <span className="font-serif text-[#c9a84c] text-xl font-bold">
                    {member.name.charAt(0)}
                  </span>
                </div>
                <h4 className="font-serif text-[#0f2044] text-lg font-bold">
                  {member.name}
                </h4>
                <div className="text-[#c9a84c] text-sm font-medium tracking-wide mb-3">
                  {member.role}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
