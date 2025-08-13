// PromoCards.tsx
import React from "react";
import { ArrowRight } from "lucide-react";

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
    subtitle: "For Healthy",
    href: "/shop?tag=best-selling",
    imageUrl:
      "https://images.unsplash.com/photo-1463320726281-696a485928c7?auto=format&fit=crop&w=1200&q=60",
    imageAlt: "Small cactus plants in terracotta pots",
  },
  {
    eyebrow: "Top Products",
    title: "Plant",
    subtitle: "For Home",
    href: "/shop?tag=top-products",
    imageUrl:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1200&q=60",
    imageAlt: "Assorted succulents in ceramic pots",
  },
  {
    eyebrow: "Top Rated",
    title: "Plant",
    subtitle: "For Office",
    href: "/shop?tag=top-rated",
    imageUrl:
      "https://images.unsplash.com/photo-1524594081293-190a2fe0baae?auto=format&fit=crop&w=1200&q=60",
    imageAlt: "Cacti in white pots",
  },
];

type Props = {
  cards?: PromoCard[];
  className?: string; // optional extra classes on the outer section
};

export function PromoCards({ cards = defaultCards, className }: Props) {
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
            className="group relative min-h-[260px] sm:min-h-[300px] overflow-hidden rounded-2xl ring-1 ring-black/10 shadow-sm transition-all duration-200 hover:shadow-lg"
          >
            {/* Background image */}
            <img
              src={card.imageUrl}
              alt={card.imageAlt ?? ""}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/35 transition-colors duration-300 group-hover:bg-black/45" />

            {/* Text */}
            <div className="relative z-10 flex h-full flex-col justify-end p-6 sm:p-7">
              <p className="font-medium text-white/90 uppercase tracking-wide">
                {card.eyebrow}
              </p>

              <h3 className="mt-1 font-serif text-3xl sm:text-4xl leading-tight text-white">
                <span>{card.title}</span>
                <br />
                <span className="font-semibold text-white/95">
                  {card.subtitle}
                </span>
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