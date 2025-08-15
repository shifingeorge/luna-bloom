import React from "react";

type Item = {
  title: string;
  desc: string;
  image: string;
  href: string; // added
};

export function Products() {
  const items: Item[] = [
    {
      title: "Fresh Flowers",
      desc:
        "The ephemeral beauty of nature, captured in vibrant, hand-tied bouquets. Our fresh flowers are sourced daily to ensure unparalleled quality and longevity.",
      image: "https://images.pexels.com/photos/1408221/pexels-photo-1408221.jpeg",
      href: "https://enhakkore.in/products/127/fresh_flower",
    },
    {
      title: "Artificial Flowers",
      desc:
        "The art of illusion. Our collection of premium, real-touch artificial flowers offers all the beauty of fresh blooms with none of the maintenance.",
      image: "https://images.pexels.com/photos/33360452/pexels-photo-33360452.jpeg",
      href: "https://enhakkore.in/products/128/artificial_flower",
    },
    {
      title: "Dry Flowers",
      desc:
        "Everlasting beauty for the modern home. Our dried and preserved arrangements offer timeless elegance and a sustainable way to enjoy nature's artistry.",
      image: "https://images.pexels.com/photos/1799303/pexels-photo-1799303.jpeg",
      href: "https://enhakkore.in/products/153/dry_flower",
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
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                  />
                </div>

                {/* Title underline */}
                <div className="mt-5 border-b border-gray-900/80 pb-3">
                  <h3
                    className="text-xl md:text-2xl font-serif text-gray-900"
                    style={{ fontFamily: "Cormorant Garamond, serif" }}
                  >
                    {item.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="pt-3 text-gray-700 leading-relaxed">{item.desc}</p>

                {/* CTA pinned to bottom */}
                <div className="pt-3 mt-auto">
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-800 hover:underline"
                  >
                    Visit Store →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}