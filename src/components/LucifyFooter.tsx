import React from 'react';
// Assuming the `Button` component might be used for consistency if there's a CTA in the footer,
// but for a typical footer, plain links are more common.
// import { Button } from "@/components/ui/button";

const LucifyFooter = () => {
  // Using colors that fit the light background and complement the gradient
  const headerGradientFrom = '#0070e0';
  const headerGradientVia = '#00a68d';
  // const headerGradientVia ="043d4a"
  const headerGradientTo = '#71e000';
  const linkHoverColor = '#00a68d'; // A middle color from the gradient for subtle hovers
  const defaultTextColor = '#4b5563'; // A dark gray for good contrast on light background

  return (
    <footer
      id="contact"
      className="bg-white/95 backdrop-blur-sm border-t border-gray-100 text-gray-800 py-16" // Light background, subtle top border
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-8 border-b border-gray-100 py-10"> {/* Subtle inner border */}
          {/* Company Info (Tradeology Data) */}
          <div className="md:col-span-2 lg:col-span-2">
            <h2 className="text-3xl font-bold mb-6"> {/* Slightly smaller than header, still prominent */}
              <span
                className="inline-block text-transparent bg-clip-text bg-gradient-to-r"
                style={{
                  backgroundImage: `linear-gradient(to right, ${headerGradientFrom}, ${headerGradientVia}, ${headerGradientTo})`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Tradeology
              </span>{' '}
              <span className="text-gray-800">Exim Solutions LLP</span>
            </h2>
            <p className="leading-relaxed max-w-md" style={{ color: defaultTextColor }}>
              Empowering Indian farmers and artisans by connecting them to global markets.
            </p>
          </div>

          {/* Contact Info (Tradeology Data) */}
          <div>
            <h3 className="text-lg font-semibold mb-4" style={{ color: linkHoverColor }}>Contact Us</h3> {/* Accent color for headers */}
            <p className="text-sm" style={{ color: defaultTextColor }}>
              Phone: <span className="font-medium">+91 93290 05277</span>
            </p>
            <p className="text-sm mt-1" style={{ color: defaultTextColor }}>
              Email:{' '}
              <a
                href="mailto:info@tradeology.co.in"
                className="hover:underline"
                style={{ color: linkHoverColor }} // Accent color for email link
              >
                info@tradeology.co.in
              </a>
            </p>
            <p className="text-sm mt-1" style={{ color: defaultTextColor }}>
              Address: 1st Floor, Plot 23, Okhla Phase III, New Delhi, India - 110020
            </p>
          </div>

          {/* Quick Links (Tradeology Data) */}
          <div>
            <h3 className="text-lg font-semibold mb-4" style={{ color: linkHoverColor }}>Quick Links</h3> {/* Accent color for headers */}
            <ul className="space-y-2 text-sm">
              <li><a href="/about" className="hover:underline transition-colors" style={{ color: defaultTextColor }} onMouseEnter={e => e.currentTarget.style.color = linkHoverColor} onMouseLeave={e => e.currentTarget.style.color = defaultTextColor}>About Us</a></li>
              <li><a href="/products" className="hover:underline transition-colors" style={{ color: defaultTextColor }} onMouseEnter={e => e.currentTarget.style.color = linkHoverColor} onMouseLeave={e => e.currentTarget.style.color = defaultTextColor}>Our Products</a></li>
              <li><a href="/policy" className="hover:underline transition-colors" style={{ color: defaultTextColor }} onMouseEnter={e => e.currentTarget.style.color = linkHoverColor} onMouseLeave={e => e.currentTarget.style.color = defaultTextColor}>Policy</a></li>
              <li><a href="/careers" className="hover:underline transition-colors" style={{ color: defaultTextColor }} onMouseEnter={e => e.currentTarget.style.color = linkHoverColor} onMouseLeave={e => e.currentTarget.style.color = defaultTextColor}>Careers</a></li>
              <li><a href="/contact" className="hover:underline transition-colors" style={{ color: defaultTextColor }} onMouseEnter={e => e.currentTarget.style.color = linkHoverColor} onMouseLeave={e => e.currentTarget.style.color = defaultTextColor}>Contact Us</a></li>
            </ul>
          </div>

          {/* Empty column (keeping the grid structure) */}
          <div></div>
        </div>

        {/* Bottom Footer (Tradeology Data) */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-8 text-sm" style={{ color: defaultTextColor }}>
          <p>&copy; {new Date().getFullYear()} Tradeology Exim Solutions LLP. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="/privacy" className="hover:underline transition-colors" style={{ color: defaultTextColor }} onMouseEnter={e => e.currentTarget.style.color = linkHoverColor} onMouseLeave={e => e.currentTarget.style.color = defaultTextColor}>
              Privacy Policy
            </a>
            <a href="/terms" className="hover:underline transition-colors" style={{ color: defaultTextColor }} onMouseEnter={e => e.currentTarget.style.color = linkHoverColor} onMouseLeave={e => e.currentTarget.style.color = defaultTextColor}>
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default LucifyFooter;