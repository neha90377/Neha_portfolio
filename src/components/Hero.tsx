import { Download, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const handleDownloadResume = () => {
    // Use the actual resume PDF from public folder
    const link = document.createElement('a');
    link.href = '/DA cv.pdf';
    link.download = 'Neha_MP_Resume.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 hero-gradient opacity-95"></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary-glow/20 rounded-full animate-float"></div>
      <div className="absolute bottom-32 right-20 w-16 h-16 bg-accent/20 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/3 right-10 w-12 h-12 bg-primary-glow/30 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="section-container relative z-10">
        <div className="text-center text-white animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Neha M P
          </h1>
          
          <div className="text-xl md:text-2xl mb-8 opacity-90 animate-slide-in-left" style={{ animationDelay: '0.2s' }}>
            <span className="text-white">
              Computer Science Graduate
            </span>
            <br />
            <span className="text-lg md:text-xl">
              Data Analyst | Business Analyst | Associate Software Engineer
            </span>
          </div>
          
          <div className="max-w-3xl mx-auto mb-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <p className="text-lg md:text-xl leading-relaxed opacity-90">
              Recent Computer Science Engineering graduate from Suguna College of Engineering with a passion for 
              transforming data into actionable insights and building scalable software solutions.
            </p>
            <p className="text-base md:text-lg mt-4 opacity-80">
              Combining analytical thinking with technical expertise to solve complex business challenges 
              and drive innovation through code and data.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Button 
              onClick={handleDownloadResume}
              size="lg"
              className="bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white hover:text-primary transition-all duration-300 px-8 py-4 text-lg shadow-glow animate-glow-pulse"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
            
            <Button 
              onClick={scrollToAbout}
              variant="ghost"
              size="lg"
              className="text-white border border-white/30 hover:bg-white/10 transition-all duration-300 px-8 py-4 text-lg"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-8 w-8 text-white/70" />
      </div>
    </section>
  );
};

export default Hero;