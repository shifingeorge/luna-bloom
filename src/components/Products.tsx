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
        "At Luna Bloom, the best flower shop in Kochi, we celebrate the fleeting beauty of nature through vibrant, hand-tied bouquets. Our fresh flowers are carefully sourced every day to ensure unmatched quality, fragrance, and longevity—perfect for making every moment unforgettable.",
      image: "https://images.pexels.com/photos/1408221/pexels-photo-1408221.jpeg",
      href: "https://enhakkore.in/products/127/fresh_flower",
    },
    {
      title: "Artificial Flowers",
      desc:
        "Discover the art of illusion at Luna Bloom, the best flower shop in Kochi. Our collection of premium, real-touch artificial flowers captures the beauty and charm of fresh blooms—without the need for maintenance. Perfect for timeless décor, thoughtful gifts, and everlasting elegance.",
      image: "https://images.pexels.com/photos/33360452/pexels-photo-33360452.jpeg",
      href: "https://enhakkore.in/products/128/artificial_flower",
    },
    {
      title: "Dry Flowers",
      desc:
        "At Luna Bloom, the best flower shop in Kochi, we bring you everlasting beauty through our dried and preserved arrangements. Designed for the modern home, these creations offer timeless elegance, sustainability, and a unique way to enjoy nature’s artistry—long after the season has passed.",
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