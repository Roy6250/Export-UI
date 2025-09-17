const LucifyFooter = () => {
  return (
    <footer className="relative overflow-hidden">
      {/* Gradient Background */}
      <div className="footer-gradient">
        <div className="container mx-auto px-6 py-16">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Logo and Main Info */}
            <div className="md:col-span-2">
              <h2 className="text-4xl font-bold text-light-custom mb-6">
                Lucify
              </h2>
              <p className="text-light-custom/80 leading-relaxed max-w-md">
                Transforming businesses through innovative AI and digital solutions. 
                We create cutting-edge technology that drives growth and efficiency.
              </p>
            </div>
            
            {/* Links */}
            <div>
              <h3 className="text-lg font-semibold text-light-custom mb-4">Services</h3>
              <ul className="space-y-2 text-light-custom/80">
                <li><a href="#" className="hover:text-light-custom transition-colors">Cloud Computing</a></li>
                <li><a href="#" className="hover:text-light-custom transition-colors">Data Analytics</a></li>
                <li><a href="#" className="hover:text-light-custom transition-colors">AI Solutions</a></li>
                <li><a href="#" className="hover:text-light-custom transition-colors">Digital Strategy</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-light-custom mb-4">Company</h3>
              <ul className="space-y-2 text-light-custom/80">
                <li><a href="#" className="hover:text-light-custom transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-light-custom transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-light-custom transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-light-custom transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/20 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-light-custom/60 text-sm">
                © 2024 Lucify. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-light-custom/60 hover:text-light-custom transition-colors text-sm">
                  Terms of Service
                </a>
                <a href="#" className="text-light-custom/60 hover:text-light-custom transition-colors text-sm">
                  Privacy Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default LucifyFooter;