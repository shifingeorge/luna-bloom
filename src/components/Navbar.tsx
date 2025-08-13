import React, { useState } from "react";
import { Phone, Mail, Menu, X } from "lucide-react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { path: "#home", label: "Home" },
    { path: "#about", label: "About" },
    { path: "#products", label: "Products" },
    { path: "#services", label: "Services" },
    { path: "#contact", label: "Contact" },
  ];

  return (
    <header className="bg-white shadow-sm">
      {/* Top Contact Bar (centered) */}
      <div className="bg-rose-300 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-center items-center gap-6 flex-wrap">
          <div className="flex items-center gap-2">
            <Phone size={14} />
            <span className="text-sm">+91123456789</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={14} />
            <span className="text-sm">info@lunabloom.com</span>
          </div>
        </div>
      </div>

      {/* Special Offer Banner */}
      <div className="bg-rose-200 text-gray-800 py-3">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div>
            <span className="font-semibold">Special Offer!</span>
            <span className="ml-2">
              Get 20% off on all fresh flower arrangements this month
            </span>
          </div>
          <a
            href="https://enhakkore.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-rose-600 px-4 py-1 rounded-full text-sm font-medium hover:bg-rose-50 transition-colors">
              Shop Now
          </a>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <a href="#home" className="text-2xl font-bold text-gray-900">
              <span
                className="font-serif"
                style={{ fontFamily: "Cormorant Garamond, serif" }}
              >
                LUNA BLOOM
              </span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8 font-sans">
              {navItems.map((item) => (
                <a
                  key={item.path}
                  href={item.path}
                  className="text-gray-700 hover:text-rose-600 transition-colors font-medium"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden pb-4 font-sans">
              <nav className="flex flex-col space-y-2">
                {navItems.map((item) => (
                  <a
                    key={item.path}
                    href={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-gray-700 hover:text-rose-600 transition-colors py-2"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}