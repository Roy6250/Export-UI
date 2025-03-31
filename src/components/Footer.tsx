export const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-green-100 via-green-200 to-green-300 text-gray-800 py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-gray-300 pb-6">
          {/* Company Info */}
          <div>
            <h2 className="text-2xl font-bold text-green-700">UMA EXPORTS <span className="text-gray-800">LTD.</span></h2>
            <p className="mt-2 text-sm text-gray-700">Leading exporter of agro commodities from India.</p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-orange-600">Contact Us</h3>
            <p className="mt-2 text-sm">Phone: <span className="font-medium">+91-33-22811396/97</span></p>
            <p className="text-sm">Email: <a href="mailto:info@umaexports.net.in" className="text-orange-500 hover:underline">info@umaexports.net.in</a></p>
            <p className="text-sm">Address: Kolkata - 700 017, India</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-orange-600">Quick Links</h3>
            <ul className="mt-2 space-y-2 text-sm">
              <li><a href="/about" className="hover:text-green-700 transition">About Us</a></li>
              <li><a href="/policy" className="hover:text-green-700 transition">Policy</a></li>
              <li><a href="/investors" className="hover:text-green-700 transition">Investors</a></li>
              <li><a href="/careers" className="hover:text-green-700 transition">Careers</a></li>
              <li><a href="/contact" className="hover:text-green-700 transition">Contact Us</a></li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-6 text-sm text-gray-700">
          <p>&copy; {new Date().getFullYear()} UMA EXPORTS LTD. All Rights Reserved.</p>
          <div className="flex space-x-4 mt-3 md:mt-0">
            <a href="#" className="hover:text-orange-600">Privacy Policy</a>
            <a href="#" className="hover:text-orange-600">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

