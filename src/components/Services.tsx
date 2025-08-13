import React, { useRef } from "react";
import { ArrowRight, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";

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

/* ========== Services Section (manual arrows, smooth scroll) ========== */

export function Services() {
  const services = [
    {
      title: "Birthday Bouquets",
      desc: "Bright, thoughtful arrangements full of personality and joy.",
      image: "https://images.pexels.com/photos/1616403/pexels-photo-1616403.jpeg",
    },
    {
      title: "Wedding Arrangements",
      desc:
        "Elegant florals for your special day, crafted to evoke romance and timeless beauty.",
      image: "https://images.pexels.com/photos/931162/pexels-photo-931162.jpeg",
    },
    {
      title: "Sympathy Flowers",
      desc:
        "Gentle tributes crafted with dignity and care, offering comfort in difficult times.",
      image: "https://images.pexels.com/photos/1408221/pexels-photo-1408221.jpeg",
    },
    {
      title: "Housewarming Florals",
      desc: "Welcoming arrangements that bring warmth and life to new spaces.",
      image: "https://images.pexels.com/photos/33347573/pexels-photo-33347573.jpeg",
    },
    {
      title: "Baptism Decorations",
      desc:
        "Delicate compositions with pure white and soft pastels to honor sacred moments.",
      image: "https://images.pexels.com/photos/1408221/pexels-photo-1408221.jpeg",
    },
    {
      title: "Corporate Events",
      desc:
        "Professional arrangements designed to impress and elevate your workspace.",
      image: "https://images.pexels.com/photos/6925158/pexels-photo-6925158.jpeg",
    },
  ];

  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollByCards = (dir: "left" | "right") => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const cardWidth = card ? card.offsetWidth : el.clientWidth * 0.7;
    const gap = 24; // gap-6 = 1.5rem = 24px
    const delta = (cardWidth + gap) * (dir === "right" ? 1 : -1);

    el.scrollBy({ left: delta, behavior: "smooth" });
  };

  return (
    <>
      <PromoCards className="pt-12 md:pt-16 pb-0" />

      <section
        id="services"
        className="bg-gradient-to-b from-rose-50 to-white font-sans text-muted-foreground py-20"
      >
        <div className="mx-auto max-w-7xl px-6">
          <h2
            className="text-4xl font-serif text-center text-gray-900 mb-12"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            Floristry for Every Occasion
          </h2>
        </div>

        <div className="relative">
          {/* Left Arrow */}
          <button
            aria-label="Scroll services left"
            onClick={() => scrollByCards("left")}
            className="hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 z-10 h-10 w-10 items-center justify-center rounded-full bg-white/90 shadow-lg ring-1 ring-black/10 hover:bg-white transition"
          >
            <ChevronLeft className="h-6 w-6 text-gray-800" />
          </button>

          {/* Right Arrow */}
          <button
            aria-label="Scroll services right"
            onClick={() => scrollByCards("right")}
            className="hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 z-10 h-10 w-10 items-center justify-center rounded-full bg-white/90 shadow-lg ring-1 ring-black/10 hover:bg-white transition"
          >
            <ChevronRight className="h-6 w-6 text-gray-800" />
          </button>

          {/* Scroller */}
          <div
            ref={scrollerRef}
            className="mx-auto max-w-7xl px-6 overflow-x-auto scroll-smooth"
            style={{ scrollbarWidth: "thin" }}
          >
            <div className="flex gap-6 pb-2">
              {services.map((s, i) => (
                <section
                  key={i}
                  data-card
                  className="flex-shrink-0 w-[22rem] sm:w-[26rem] lg:w-[28rem]"
                >
                  <div className="group flex h-full flex-col">
                    {/* Arch image frame */}
                    <div className="relative overflow-hidden rounded-t-full rounded-b-none bg-neutral-100 aspect-[3/4]">
                      <img
                        src={s.image}
                        alt={s.title}
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                      />
                    </div>

                    {/* Title underline */}
                    <div className="mt-5 border-b border-gray-900/80 pb-3">
                      <h3
                        className="text-xl md:text-2xl font-serif text-gray-900"
                        style={{ fontFamily: "Cormorant Garamond, serif" }}
                      >
                        {s.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="pt-3 text-gray-700 leading-relaxed">{s.desc}</p>

                    {/* CTA pinned to bottom */}
                    <div className="pt-3 mt-auto">
                      <a
                        href="https://enhakkore.in/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-gray-800 hover:underline"
                      >
                        Visit Store →
                      </a>
                    </div>
                  </div>
                </section>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}