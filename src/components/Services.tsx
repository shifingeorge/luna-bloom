import React from "react";
import { ArrowRight, ExternalLink } from "lucide-react";

/* ========== Promo Cards ========== */

export type PromoCard = {
  eyebrow: string;
  title: string;
  subtitle: string;
  href: string;
  imageUrl: string;
  imageAlt?: string;
};

const defaultCards: PromoCard[] = [
  {
    eyebrow: "Best Selling",
    title: "Plant",
    subtitle: "For Home Decor",
    href: "https://enhakkore.in/",
    imageUrl:
      "https://images.unsplash.com/photo-1463320726281-696a485928c7?auto=format&fit=crop&w=1200&q=60",
    imageAlt: "Small cactus plants in terracotta pots",
  },
  {
    eyebrow: "New Bouquets",
    title: "Plant",
    subtitle: "For Events",
    href: "https://enhakkore.in/",
    imageUrl:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1200&q=60",
    imageAlt: "Assorted succulents in ceramic pots",
  },
  {
    eyebrow: "Top Rated",
    title: "Plant",
    subtitle: "For Office",
    href: "https://enhakkore.in/",
    imageUrl:
      "https://images.unsplash.com/photo-1524594081293-190a2fe0baae?auto=format&fit=crop&w=1200&q=60",
    imageAlt: "Cacti in white pots",
  },
];

type PromoProps = {
  cards?: PromoCard[];
  className?: string;
};

function PromoCards({ cards = defaultCards, className }: PromoProps) {
  return (
    <section
      aria-label="Featured product highlights"
      className={`w-full px-4 sm:px-6 md:px-10 lg:px-16 py-12 md:py-16 ${className ?? ""}`}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card) => (
          <a
            key={card.eyebrow}
            href={card.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative min-h-[260px] sm:min-h-[300px] overflow-hidden rounded-2xl ring-1 ring-black/10 shadow-sm transition-all duration-200 hover:shadow-lg"
          >
            <img
              src={card.imageUrl}
              alt={card.imageAlt ?? ""}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/35 transition-colors duration-300 group-hover:bg-black/45" />

            <div className="relative z-10 flex h-full flex-col justify-end p-6 sm:p-7">
              <p className="font-medium text-white/90 uppercase tracking-wide">
                {card.eyebrow}
              </p>

              <h3 className="mt-1 font-serif text-3xl sm:text-4xl leading-tight text-white">
                <span>{card.title}</span>
                <br />
                <span className="font-semibold text-white/95">{card.subtitle}</span>
              </h3>

              <span className="mt-4 inline-flex items-center gap-3 text-white font-bold uppercase tracking-wide">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border-2 border-white/90 bg-white/0 transition-all duration-200 group-hover:bg-white/10 group-hover:scale-105">
                  <ArrowRight size={18} className="text-white" strokeWidth={2.5} />
                </span>
                Shop Now
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

/* ========== Services Section (single row, horizontal scroll) ========== */

export function Services() {
  const services = [
    {
      title: "Birthday Bouquets",
      desc: "Bright, thoughtful arrangements full of personality and joy.",
      image: "https://images.pexels.com/photos/1616403/pexels-photo-1616403.jpeg",
      highlights: ["Custom birthday themes", "Cheerful color palettes", "Fun-sized bouquets"],
    },
    {
      title: "Wedding Arrangements",
      desc:
        "Elegant florals for your special day, crafted to evoke romance and timeless beauty.",
      image: "https://images.pexels.com/photos/931162/pexels-photo-931162.jpeg",
      highlights: ["Bridal bouquets", "Ceremony arches", "Reception centerpieces"],
    },
    {
      title: "Sympathy Flowers",
      desc:
        "Gentle tributes crafted with dignity and care, offering comfort in difficult times.",
      image: "https://images.pexels.com/photos/1408221/pexels-photo-1408221.jpeg",
      highlights: ["Peaceful arrangements", "Soft tones", "Memorial tributes"],
    },
    {
      title: "Housewarming Florals",
      desc: "Welcoming arrangements that bring warmth and life to new spaces.",
      image: "https://images.pexels.com/photos/33347573/pexels-photo-33347573.jpeg",
      highlights: ["Home-friendly plants", "Fresh greenery", "Comfort-themed bouquets"],
    },
    {
      title: "Baptism Decorations",
      desc:
        "Delicate compositions with pure white and soft pastels to honor sacred moments.",
      image: "https://images.pexels.com/photos/1408221/pexels-photo-1408221.jpeg",
      highlights: ["Sacred symbolism", "Custom altar blooms", "Gentle tones"],
    },
    {
      title: "Corporate Events",
      desc:
        "Professional arrangements designed to impress and elevate your workspace.",
      image: "https://images.pexels.com/photos/6925158/pexels-photo-6925158.jpeg",
      highlights: ["Grand opening florals", "Sophisticated palettes", "Client-ready styling"],
    },
  ];

  return (
    <>
      {/* PromoCards above */}
      <PromoCards className="pt-12 md:pt-16 pb-0" />

      {/* Services below (horizontal scroller) */}
      <section
        id="services"
        className="px-6 py-20 bg-gradient-to-b from-rose-50 to-white font-sans text-muted-foreground"
      >
        <div className="mx-auto max-w-7xl">
          <h2
            className="text-4xl font-serif text-center text-gray-900 mb-12"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            Floristry for Every Occasion
          </h2>

          {/* Horizontal scroll track */}
          <div
            aria-label="Services carousel"
            className="relative"
          >
            <div
              className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-2"
              // Optional: hide scrollbar on Firefox
              style={{ scrollbarWidth: "thin" }}
            >
              {services.map((service, index) => (
                <div
                  key={index}
                  className="snap-start flex-none w-80 sm:w-96 md:w-[26rem] lg:w-[28rem] bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-64 object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  <div className="p-6">
                    <h3
                      className="text-2xl font-serif text-gray-900 mb-3 text-center"
                      style={{ fontFamily: "Cormorant Garamond, serif" }}
                    >
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4 text-center">
                      {service.desc}
                    </p>
                    <ul className="space-y-1 mb-6">
                      {service.highlights.map((highlight, idx) => (
                        <li
                          key={idx}
                          className="flex items-center text-sm text-gray-500 font-sans"
                        >
                          <span className="w-1.5 h-1.5 bg-rose-400 rounded-full mr-2" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                    <div className="text-center">
                      <a
                        href="https://enhakkore.in/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center bg-rose-600 text-white px-6 py-2 rounded-full font-medium hover:bg-rose-700 transition duration-300 space-x-2"
                      >
                        <span>Visit Store</span>
                        <ExternalLink size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Optional fade edges (uncomment to add visual hint of scroll)
            <div className="pointer-events-none absolute inset-y-0 left-0 w-6 bg-gradient-to-r from-rose-50 to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-6 bg-gradient-to-l from-white to-transparent" />
            */}
          </div>
        </div>
      </section>
    </>
  );
}