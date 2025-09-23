import React from 'react';

const LucifyFooter = () => {
  const headerGradientFrom = '#0070e0';
  const headerGradientVia = '#00a68d';
  const headerGradientTo = '#71e000';
  const linkHoverColor = '#00a68d';
  const defaultTextColor = '#4b5563';

  return (
    <footer
      id="contact"
      className="bg-white/95 backdrop-blur-sm border-t border-gray-100 text-gray-800 py-16"
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-8 border-b border-gray-100 py-10">
          {/* Company Info */}
          <div className="md:col-span-2 lg:col-span-2">
            <h2 className="text-3xl font-bold mb-6">
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

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4" style={{ color: linkHoverColor }}>
              Contact Us
            </h3>
            {/* Flexbox for Phone Numbers */}
            <div className="flex text-sm" style={{ color: defaultTextColor }}>
              <p className="mr-2">Phone:</p> {/* "Phone:" in the first column */}
              <div className="flex flex-col"> {/* Two numbers in two rows in the second column */}
                <span className="font-medium">+91 92118 08368</span>
                <span className="font-medium">+91 98105 66436</span>
              </div>
            </div>
            <p className="text-sm mt-1" style={{ color: defaultTextColor }}>
              Email:{' '}
              <a
                href="mailto:info@tradeology.co.in"
                className="hover:underline"
                style={{ color: linkHoverColor }}
              >
                info@tradeology.co.in
              </a>
            </p>
            <p className="text-sm mt-1" style={{ color: defaultTextColor }}>
              Address: <br />
              293, Lane-2, Westend Marg, <br />
              Near Saket Metro Station Gate No - 02, <br />
              Saket, New Delhi, Delhi 110030
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4" style={{ color: linkHoverColor }}>
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                { href: '/about', label: 'About Us' },
                { href: '/products', label: 'Our Products' },
                { href: '/policy', label: 'Policy' },
                { href: '/careers', label: 'Careers' },
                { href: '/contact', label: 'Contact Us' },
              ].map(link => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hover:underline transition-colors"
                    style={{ color: defaultTextColor }}
                    onMouseEnter={e => e.currentTarget.style.color = linkHoverColor}
                    onMouseLeave={e => e.currentTarget.style.color = defaultTextColor}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Empty column to keep grid layout */}
          <div></div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-8 text-sm" style={{ color: defaultTextColor }}>
          <p>&copy; {new Date().getFullYear()} Tradeology Exim Solutions LLP. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {[
              { href: '/privacy', label: 'Privacy Policy' },
              { href: '/terms', label: 'Terms of Service' },
            ].map(link => (
              <a
                key={link.href}
                href={link.href}
                className="hover:underline transition-colors"
                style={{ color: defaultTextColor }}
                onMouseEnter={e => e.currentTarget.style.color = linkHoverColor}
                onMouseLeave={e => e.currentTarget.style.color = defaultTextColor}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default LucifyFooter;