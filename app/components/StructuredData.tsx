export default function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: "Martins Solicitors",
    alternateName: "Martins Lawyers",
    url: "https://www.martinslawyers.co.uk",
    logo: "https://www.martinslawyers.co.uk/logo.png",
    image: "https://www.martinslawyers.co.uk/logo.png",
    description:
      "Martins Solicitors in Eccles, Greater Manchester — providing professional legal services including Conveyancing, Commercial Property, Wills & Probate, Lasting Powers of Attorney, and Family Law for over 30 years.",
    telephone: "+441617073660",
    email: "graham@martinslawyers.co.uk",
    address: {
      "@type": "PostalAddress",
      streetAddress: "9 Church Street",
      addressLocality: "Eccles",
      addressRegion: "Greater Manchester",
      postalCode: "M30 0DF",
      addressCountry: "GB",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 53.4837,
      longitude: -2.3345,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
        ],
        opens: "09:00",
        closes: "17:30",
      },
    ],
    priceRange: "££",
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 53.4837,
        longitude: -2.3345,
      },
      geoRadius: "30000",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Legal Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Conveyancing" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Commercial Property" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Wills & Probate" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Lasting Powers of Attorney" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Family Law" } },
      ],
    },
    sameAs: ["https://www.martinslawyers.co.uk"],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
