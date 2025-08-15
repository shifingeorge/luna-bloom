import React, { useRef } from "react";
import { ArrowRight, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { href } from "react-router-dom";



/* ========== Services Section (manual arrows, smooth scroll) ========== */

export function Services() {
  const services = [
    {
      title: "Birthday Decorations",
      desc: "Bright, thoughtful arrangements full of personality and joy.",
      image: "https://images.pexels.com/photos/1616403/pexels-photo-1616403.jpeg",
      href: "https://enhakkore.in/products/62/birthday_decoration"
    },
    {
      title: "Wedding Decorations",
      desc:
        "Elegant florals for your special day, crafted to evoke romance and timeless beauty.",
      image: "https://images.pexels.com/photos/931162/pexels-photo-931162.jpeg",
      href: "https://enhakkore.in/products/68/wedding_decoration_"
    },
    {
      title: "Thomp Decorations",
      desc:"Gentle tributes crafted with dignity and care, offering comfort in difficult times.",
      image: "https://images.pexels.com/photos/1408221/pexels-photo-1408221.jpeg",
      href: "https://enhakkore.in/products/71/thomp_decoration_"
    },
    {
      title: "Housewarming Florals",
      desc: "Welcoming arrangements that bring warmth and life to new spaces.",
      image: "https://images.pexels.com/photos/33347573/pexels-photo-33347573.jpeg",
      href: "https://enhakkore.in/products/63/house_warming"
    },
    {
      title: "Baptism Decorations",
      desc:
        "Delicate compositions with pure white and soft pastels to honor sacred moments.",
      image: "https://images.pexels.com/photos/1408221/pexels-photo-1408221.jpeg",
      href: "https://enhakkore.in/products/62/birthday_decoration"
    },
    {
      title: "Corporate Events",
      desc:"Professional arrangements designed to impress and elevate your workspace.",
      image: "https://images.pexels.com/photos/6925158/pexels-photo-6925158.jpeg",
      href: "https://enhakkore.in/products/64/shop_inaugration"
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
                        href={s.href}
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