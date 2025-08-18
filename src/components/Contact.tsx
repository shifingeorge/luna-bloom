import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="section-offset">
      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2
            className="text-3xl font-serif text-center text-gray-900 mb-8"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            Find Our Studio
          </h2>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
  <div className="relative h-96">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.879603840799!2d76.31179137533951!3d10.026792890079957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d1fc36cf895%3A0x6bb42b65e697c6c5!2sLuna%20bloom%20llp!5e0!3m2!1sen!2sin!4v1754914243359!5m2!1sen!2sin"
      className="absolute inset-0 w-full h-full"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Luna Bloom LLP location"
    />

    {/* On-map info card */}
    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur p-4 rounded-lg shadow-lg">
      <h3 className="font-serif font-semibold text-gray-900 mb-1">
        Luna Bloom LLP
      </h3>
      <p className="text-sm text-gray-600 font-sans">Open on Google Maps</p>

      <div className="mt-2 flex items-center gap-2">
        <a
          href="https://maps.app.goo.gl/58ANEhDmWZuXe2YZ9"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-rose-600 hover:underline"
        >
          Get directions
        </a>
        <span className="text-gray-300">•</span>
        <a href="tel:+918113811372" className="text-sm text-gray-700 hover:underline">
          918113811372
        </a>
      </div>
    </div>
  </div>
</div>
        </div>
      </section>

      {/* Quick Contact Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Phone */}
            <div className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Phone className="w-12 h-12 text-rose-600 mx-auto mb-4" />
              <h3
                className="text-xl font-serif text-gray-900 mb-2"
                style={{ fontFamily: "Cormorant Garamond, serif" }}
              >
                Call Us
              </h3>
              <p className="text-gray-600 font-sans">+918113811372</p>
              <p className="text-sm text-gray-500 font-sans mt-2">Mon–Sat: 8AM–7PM</p>
            </div>

            {/* Email */}
            <div className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Mail className="w-12 h-12 text-rose-600 mx-auto mb-4" />
              <h3
                className="text-xl font-serif text-gray-900 mb-2"
                style={{ fontFamily: "Cormorant Garamond, serif" }}
              >
                Email Us
              </h3>
              <p className="text-gray-600 font-sans">Lunabloomkochi@gmail.com</p>
              <p className="text-sm text-gray-500 font-sans mt-2">
                We reply within 24 hours
              </p>
            </div>

            {/* Visit */}
            <div className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <MapPin className="w-12 h-12 text-rose-600 mx-auto mb-4" />
              <h3
                className="text-xl font-serif text-gray-900 mb-2"
                style={{ fontFamily: "Cormorant Garamond, serif" }}
              >
                Visit Us
              </h3>
              <p className="text-gray-600 font-sans">123 Bloom Street</p>
              <p className="text-sm text-gray-500 font-sans mt-2">
                Garden City, GC 12345
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}