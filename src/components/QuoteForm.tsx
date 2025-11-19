import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Upload, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const QuoteForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Quote Request Submitted",
        description: "We'll review your request and get back to you within 24 hours.",
      });
      setIsSubmitting(false);
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <section id="quote" className="py-24 bg-muted/30">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-block">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
              Request a <span className="text-rolex-green">Quote</span>
            </h2>
            <div className="h-[2px] w-16 bg-rolex-green mx-auto" />
          </div>
          <p className="text-lg text-metal-gray mt-6">
            Attach prints, models, or RFQ packages. We'll respond within 24 hours.
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6 bg-card p-8 rounded-lg border-l-4 border-l-rolex-green shadow-lg">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm font-medium">
                Name *
              </Label>
              <Input 
                id="name" 
                placeholder="John Smith" 
                required 
                className="border-border focus:border-rolex-green focus:ring-rolex-green/20"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium">
                Email *
              </Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="john@company.com" 
                required 
                className="border-border focus:border-rolex-green focus:ring-rolex-green/20"
              />
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="company" className="text-sm font-medium">
                Company
              </Label>
              <Input 
                id="company" 
                placeholder="Acme Manufacturing" 
                className="border-border focus:border-rolex-green focus:ring-rolex-green/20"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-sm font-medium">
                Phone
              </Label>
              <Input 
                id="phone" 
                type="tel" 
                placeholder="(555) 123-4567" 
                className="border-border focus:border-rolex-green focus:ring-rolex-green/20"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="message" className="text-sm font-medium">
              Project Details *
            </Label>
            <Textarea 
              id="message" 
              placeholder="Describe your project requirements, quantities, materials, tolerances, and timeline..." 
              rows={5}
              required 
              className="border-border focus:border-rolex-green focus:ring-rolex-green/20 resize-none"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="files" className="text-sm font-medium flex items-center gap-2">
              <Upload className="h-4 w-4 text-rolex-green" />
              Attach Files (Prints, Models, Drawings)
            </Label>
            <Input 
              id="files" 
              type="file" 
              multiple 
              className="border-border focus:border-rolex-green focus:ring-rolex-green/20 file:bg-rolex-green/10 file:text-rolex-green file:border-0 file:mr-4 file:py-2 file:px-4 file:rounded file:font-medium hover:file:bg-rolex-green/20 cursor-pointer"
            />
            <p className="text-sm text-muted-foreground">
              Supported formats: PDF, STEP, IGES, STL, DWG, DXF
            </p>
          </div>
          
          <Button 
            type="submit" 
            size="lg"
            disabled={isSubmitting}
            className="w-full bg-rolex-green hover:bg-rolex-glow text-white font-semibold py-6 text-lg transition-all duration-300 shadow-lg hover:shadow-rolex group"
          >
            {isSubmitting ? (
              "Submitting..."
            ) : (
              <>
                Submit Quote Request
                <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default QuoteForm;
