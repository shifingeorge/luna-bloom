import React from "react";
import { ArrowRight } from "lucide-react";

export type PromoCard = {
  eyebrow: string;
  subtitle: string;
  href: string;
  imageUrl: string;
  imageAlt?: string;
};

const defaultCards: PromoCard[] = [
  {
    eyebrow: "Best Selling",
    subtitle: "Plants For Home Decor",
    href: "https://enhakkore.in/products/91/indoor_plants",
    imageUrl:"https://images.pexels.com/photos/33294213/pexels-photo-33294213.jpeg",
    imageAlt: "Indor Plants in a modern living room",
  },
  {
    eyebrow: "New Bouquets",
    subtitle: "For Every Events",
    href: "https://enhakkore.in/",
    imageUrl:
      "https://images.pexels.com/photos/15818868/pexels-photo-15818868.jpeg?_gl=1*jgnrm2*_ga*OTQxNzg2MDc3LjE3NTUyMzczNzQ.*_ga_8JE65Q40S6*czE3NTUyMzczNzMkbzEkZzEkdDE3NTUyMzc3MTkkajUwJGwwJGgw",
    imageAlt: "Bike Packed With Flowers",
  },
  {
    eyebrow: "Top Rated",
    subtitle: "Gifts",
    href: "https://enhakkore.in/sub_category_list/5",
    imageUrl:"https://images.pexels.com/photos/23094209/pexels-photo-23094209.jpeg?_gl=1*1dr1tnt*_ga*OTQxNzg2MDc3LjE3NTUyMzczNzQ.*_ga_8JE65Q40S6*czE3NTUyMzczNzMkbzEkZzEkdDE3NTUyMzc3ODckajQ0JGwwJGgw",
    imageAlt: "Close-up of Bunches of Pink Buttercups Wrapped in a Transparent Paper",
  },
];

type PromoProps = {
  cards?: PromoCard[];
  className?: string;
};

export function PromoCard({ cards = defaultCards, className }: PromoProps) {
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