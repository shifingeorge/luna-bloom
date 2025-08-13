import React, { useEffect, useRef } from "react";
import { ArrowRight, ExternalLink } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

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

/* ========== Services Section (GSAP horizontal scroll like your example) ========== */

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

  const wrapperRef = useRef<HTMLDivElement>(null); // pinned section
  const trackRef = useRef<HTMLDivElement>(null);   // flex track containing panels

  useEffect(() => {
    // Only on md+ and if user doesn’t prefer reduced motion
    const mdUp = window.matchMedia("(min-width: 768px)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!mdUp || reduced) return;

    const wrapper = wrapperRef.current;
    const track = trackRef.current;
    if (!wrapper || !track) return;

    const panels = gsap.utils.toArray<HTMLElement>(".service-panel");
    if (panels.length <= 1) return;

    // Animate panels with xPercent like your example
    const tween = gsap.to(panels, {
      xPercent: -100 * (panels.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: wrapper,
        pin: true,
        scrub: 1,
        snap: 1 / (panels.length - 1),
        invalidateOnRefresh: true,
        end: () => "+=" + (track.scrollWidth - window.innerWidth),
      },
    });

    const onResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, []);

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

        {/* Pinned wrapper on md+; native horizontal scroll on mobile */}
        <div
          ref={wrapperRef}
          className="relative md:h-[560px] h-[460px] md:overflow-hidden"
        >
          <div
            ref={trackRef}
            className="flex h-full overflow-x-auto md:overflow-visible scroll-smooth"
            style={{ scrollSnapType: "x mandatory" }}
          >
            {services.map((s, i) => (
              <section
                key={i}
                className="service-panel flex-shrink-0 w-screen h-full flex items-center justify-center px-6"
              >
                <div className="w-[22rem] sm:w-[26rem] lg:w-[28rem] bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="relative overflow-hidden">
                    <img
                      src={s.image}
                      alt={s.title}
                      className="w-full h-64 object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  <div className="p-6">
                    <h3
                      className="text-2xl font-serif text-gray-900 mb-3 text-center"
                      style={{ fontFamily: "Cormorant Garamond, serif" }}
                    >
                      {s.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6 text-center">
                      {s.desc}
                    </p>
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
              </section>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}