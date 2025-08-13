import React, { useEffect, useState } from "react";

/* ================= Products ================= */

type Item = {
  title: string;
  desc: string;
  image: string;
};

export function Products() {
  const items: Item[] = [
    {
      title: "Fresh Flowers",
      desc:
        "The ephemeral beauty of nature, captured in vibrant, hand-tied bouquets. Our fresh flowers are sourced daily to ensure unparalleled quality and longevity.",
      image: "https://images.pexels.com/photos/1408221/pexels-photo-1408221.jpeg",
    },
    {
      title: "Artificial Flowers",
      desc:
        "The art of illusion. Our collection of premium, real-touch artificial flowers offers all the beauty of fresh blooms with none of the maintenance.",
      image: "https://images.pexels.com/photos/33360452/pexels-photo-33360452.jpeg",
    },
    {
      title: "Dry Flowers",
      desc:
        "Everlasting beauty for the modern home. Our dried and preserved arrangements offer timeless elegance and a sustainable way to enjoy nature's artistry.",
      image: "https://images.pexels.com/photos/1799303/pexels-photo-1799303.jpeg",
    },
  ];

  return (
    <>
      <section
        id="products"
        className="section-offset px-6 py-20 bg-white font-sans text-muted-foreground"
      >
        <div className="mx-auto max-w-7xl">
          <h2
            className="text-4xl font-serif text-center text-gray-900 mb-16"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            Curated Floral Collections
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 items-stretch">
            {items.map((item, index) => (
              <div key={index} className="group flex h-full flex-col">
                {/* Arch image frame */}
                <div className="relative overflow-hidden rounded-t-full rounded-b-none bg-neutral-100 aspect-[3/4]">
                <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.06]"/>
              </div>
              {/* Title underline */}
              <div className="mt-5 border-b border-gray-900/80 pb-3">
                <h3 className="text-xl md:text-2xl font-serif text-gray-900" style={{ fontFamily: "Cormorant Garamond, serif" }}>
                  {item.title}
                </h3>
              </div>
              {/* Description */}
              <p className="pt-3 text-gray-700 leading-relaxed">
                {item.desc}
              </p>
              {/* CTA pinned to bottom */}
              <div className="pt-3 mt-auto">
                <a href="https://enhakkore.in/" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-800 hover:underline">
                Visit Store →
                </a>
              </div>
            </div>
            ))}
          </div>
        </div>
      </section>

      {/* Banner Carousel directly under the Products section */}
      <BannerCarousel />
    </>
  );
}

/* ================= Banner Carousel (with hero-style gutters) ================= */

type Slide = {
  title: string;
  description: string;
  image: string;
};

function BannerCarousel() {
  const slides: Slide[] = [
    {
      title: "Discover the beauty of fresh, handpicked flowers.",
      description:
        "Curated blooms and thoughtful arrangements for every moment.",
      image:
        "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1600&q=70",
    },
    {
      title: "Timeless arrangements crafted with care.",
      description:
        "From everyday bouquets to grand gestures—delivered with love.",
      image:
        "https://images.unsplash.com/photo-1491002052546-bf38f186afbc?auto=format&fit=crop&w=1600&q=70",
    },
    {
      title: "Bring natural elegance into your space.",
      description:
        "Explore fresh, artificial, and dried flowers to match your style.",
      image:
        "https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg",
    },
  ];

  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);
  const next = () => setIndex((i) => (i + 1) % slides.length);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section
      aria-label="Promotional banner carousel"
      className="relative my-12 md:my-16 bg-white"
    >
      {/* Spacer to set height; the absolute child fills it */}
      <div
        aria-hidden="true"
        className="h-[380px] sm:h-[420px] md:h-[480px] lg:h-[520px]"
      />

      {/* Hero-style gutters: left/right only, responsive */}
      <div className="absolute inset-y-0 left-4 right-4 sm:left-6 sm:right-6 md:left-10 md:right-10 lg:left-16 lg:right-16">
        <div className="relative h-full w-full overflow-hidden rounded-3xl ring-1 ring-black/10 shadow-md">
          {/* Track */}
          <div
            className="flex h-full w-full transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {slides.map((slide, i) => (
              <article key={i} className="relative min-w-full h-full">
                {/* Cover image */}
                <img
                  src={slide.image}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover"
                />
                {/* Overlays */}
                <div className="absolute inset-0 bg-black/40" />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                {/* Content */}
                <div className="relative z-10 flex h-full items-center">
                  <div className="mx-auto w-full max-w-3xl px-6 text-center">
                    <p className="mb-3 text-sm tracking-[0.2em] uppercase text-white/80">
                      Our Flowers
                    </p>
                    <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl leading-tight text-white drop-shadow-[0_6px_24px_rgba(0,0,0,0.35)]">
                      {slide.title}
                    </h3>
                    <p className="mt-4 text-white/90 text-base md:text-lg">
                      {slide.description}
                    </p>
                    <div className="mt-8">
                      <a
                        href="https://enhakkore.in/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 rounded-full bg-white/95 px-7 py-3 font-medium text-gray-900 shadow-sm ring-1 ring-black/10 hover:bg-white transition"
                      >
                        Visit Store
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          className="h-5 w-5"
                        >
                          <path d="M5 12h14" />
                          <path d="m12 5 7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Arrows */}
          <button
            aria-label="Previous slide"
            onClick={prev}
            className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 grid place-items-center h-11 w-11 rounded-full bg-black/40 text-white backdrop-blur ring-1 ring-white/30 hover:bg-black/55 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-6 w-6"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            aria-label="Next slide"
            onClick={next}
            className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 grid place-items-center h-11 w-11 rounded-full bg-black/40 text-white backdrop-blur ring-1 ring-white/30 hover:bg-black/55 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-6 w-6"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>

          {/* Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-2.5 w-2.5 rounded-full ring-2 ring-white transition ${
                  index === i ? "bg-white" : "bg-white/40 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
    
  );
}