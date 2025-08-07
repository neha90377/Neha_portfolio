import { Heart, Mail, Linkedin, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-primary text-white py-12 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-secondary"></div>
      
      <div className="section-container">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Left section */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2">Neha M P</h3>
            <p className="text-sm bg-gradient-to-r from-gray-800 to-gray-900 text-white px-3 py-1 rounded-full inline-block mb-2">
              Computer Science Graduate
            </p>
            <p className="text-sm opacity-75">
              Data Analyst | Business Analyst | Software Engineer
            </p>
          </div>

          {/* Center section */}
          <div className="text-center">
            <div className="flex justify-center space-x-6 mb-4">
              <a
                href="mailto:nehamp200@gmail.com"
                className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 hover:scale-110"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/in/neha-m-p-20793b265"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
            <p className="text-sm opacity-75">
              Let's connect and build something amazing together!
            </p>
          </div>

          {/* Right section */}
          <div className="text-center md:text-right">
            <Button
              onClick={scrollToTop}
              variant="ghost"
              size="sm"
              className="text-white hover:bg-white/20 mb-4"
            >
              <ArrowUp className="h-4 w-4 mr-2" />
              Back to Top
            </Button>
            <div className="text-sm opacity-75">
              <p>&copy; {currentYear} Neha M P</p>
            </div>
          </div>
        </div>

        
      </div>
    </footer>
  );
};

export default Footer;