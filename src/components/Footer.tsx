import React from "react";
import { Heart, Facebook, Instagram, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white" id="footer">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Heart className="text-rose-400" size={24} />
              <span className="text-xl font-bold">Luna Bloom</span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-4">
              Creating magical moments with the finest flowers for every occasion since 2025.
            </p>
            <div className="flex space-x-4">
              <Facebook
                size={20}
                className="text-gray-400 hover:text-rose-400 cursor-pointer transition-colors"
              />
              <Instagram
                size={20}
                className="text-gray-400 hover:text-rose-400 cursor-pointer transition-colors"
              />
              <Twitter
                size={20}
                className="text-gray-400 hover:text-rose-400 cursor-pointer transition-colors"
              />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <a href="#home" className="block text-gray-400 hover:text-white transition-colors">
                Home
              </a>
              <a href="#about" className="block text-gray-400 hover:text-white transition-colors">
                About Us
              </a>
              <a
                href="#products"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Products
              </a>
              <a
                href="#services"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Services
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <div className="space-y-2">
              {[
                "Wedding Decorations",
                "Birthday Celebrations",
                "Funeral Services",
                "Office Events",
                "House Warming",
                "Baptism Decorations"
              ].map((service) => (
                <span key={service} className="block text-gray-400">
                  {service}
                </span>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact Info</h3>
            <div className="space-y-2 text-gray-400">
              <p>123 Bloom Street</p>
              <p>Garden City, GC 12345</p>
              <p>Phone: +1 (555) 123-BLOOM</p>
              <p>Email: info@lunabloom.com</p>
              <p>Mon–Sat: 8AM–7PM</p>
              <p>Sun: 10AM–5PM</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © 2025 Luna Bloom. All rights reserved. |{" "}
              <span className="inline-flex items-center gap-1">
                Designed with
                <Heart className="inline w-4 h-4 text-rose-400" aria-hidden="true" />
                by
                <a
                href="https://www.marketingwithnaina.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-1 text-rose-400 hover:text-rose-300 transition-colors"
                >
                  Nainas Digital Advertisement Agency
                </a>
              </span>
            </p>
          </div>
        </div>
      </div>
  </footer>
  );
}