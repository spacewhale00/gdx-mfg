import { Check } from "lucide-react";

const industries = [
  "Aerospace",
  "Defense",
  "Robotics",
  "Automation Equipment",
  "Tech Hardware",
  "Industrial Components",
];

const Industries = () => {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
              Industries <span className="text-rolex-green">Served</span>
            </h2>
            <div className="h-[2px] w-16 bg-rolex-green mx-auto" />
          </div>
          <p className="text-lg text-metal-gray mt-6 max-w-2xl mx-auto">
            Trusted by precision-critical industries across engineering and manufacturing sectors.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {industries.map((industry, index) => (
            <div 
              key={index}
              className="flex items-center gap-3 p-4 border-l-2 border-l-rolex-green bg-card hover:bg-secondary/50 transition-all duration-300 group"
            >
              <Check className="h-5 w-5 text-rolex-green flex-shrink-0" />
              <span className="text-lg font-medium text-foreground group-hover:text-rolex-green transition-colors">
                {industry}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
