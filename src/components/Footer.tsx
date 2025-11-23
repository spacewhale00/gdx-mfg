import { Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-charcoal text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              GDX<span className="text-rolex-green">MFG</span>
            </h3>
            <p className="text-metal-light leading-relaxed">
              Engineering-driven precision manufacturing and CNC solutions.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-rolex-green">Contact</h4>
            <div className="space-y-3">
              <a 
                href="mailto:sales@gdxmfg.com" 
                className="flex items-center gap-3 text-metal-light hover:text-rolex-green transition-colors group"
              >
                <Mail className="h-5 w-5" />
                <span>sales@gdxmfg.com</span>
              </a>
              <div className="flex items-start gap-3 text-metal-light">
                <MapPin className="h-5 w-5 mt-1 flex-shrink-0" />
                <span>Service Area: Nationwide</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-rolex-green">Certifications</h4>
            <p className="text-metal-light">
              ISO/ITAR compliance ready
            </p>
          </div>
        </div>
        
        <div className="border-t border-metal-dark pt-8 text-center">
          <p className="text-metal-gray">
            © {new Date().getFullYear()} GDXMFG. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
