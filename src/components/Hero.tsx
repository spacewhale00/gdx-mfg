import { Button } from "@/components/ui/button";
import { ArrowRight, FileText } from "lucide-react";
import heroImage from "@/assets/hero-precision-machining.jpg";

const Hero = () => {
  const scrollToQuote = () => {
    document.getElementById('quote')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToCapabilities = () => {
    document.getElementById('capabilities')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Precision CNC Machining" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/95 via-charcoal/90 to-charcoal/95" />
      </div>
      
      {/* Rolex Green Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-rolex-green z-10" />
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Engineering-Driven<br />
            <span className="text-rolex-green">Manufacturing Solutions</span>
          </h1>
          <div className="h-[2px] w-24 bg-rolex-green mx-auto mb-8" />
          <p className="text-xl md:text-2xl text-metal-light max-w-3xl mx-auto mb-12 leading-relaxed">
            Precision CNC machining, fixture design, and production optimization.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              onClick={scrollToQuote}
              className="bg-rolex-green hover:bg-rolex-glow text-white font-semibold px-8 py-6 text-lg transition-all duration-300 shadow-lg hover:shadow-rolex group"
            >
              Request a Quote
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={scrollToCapabilities}
              className="border-2 border-metal-gray text-white hover:bg-white/10 hover:border-white font-semibold px-8 py-6 text-lg transition-all duration-300"
            >
              <FileText className="mr-2 h-5 w-5" />
              Capabilities
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
