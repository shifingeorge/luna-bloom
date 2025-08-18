import React from "react";

export function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <img
              src="https://images.pexels.com/photos/931162/pexels-photo-931162.jpeg"
              alt="Florist arranging flowers"
              className="w-full h-[500px] object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Text Section */}
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl font-serif text-gray-900 mb-6">
              Our Story in Full Bloom
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed font-sans">
              <p>
                At Luna Bloom, we believe every arrangement is more than just flowers—it’s a story waiting to be told. Founded from a passion for botanical artistry, we’ve dedicated ourselves to creating extraordinary floral experiences that celebrate life’s most precious moments.
              </p>
              <p>
                Our expert florists blend traditional techniques with contemporary design, sourcing the finest blooms to craft creations that capture both beauty and emotion. Each piece is thoughtfully made to reflect love, joy, and connection.
              </p>
              <p>
                From intimate gatherings to grand celebrations, we pour meticulous attention into every detail—transforming your vision into a living work of art. And it’s this commitment to quality, creativity, and heartfelt design that makes us the best flower shop in Kochi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}