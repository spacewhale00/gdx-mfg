import { Cpu, Wrench, Settings, Code, Lightbulb, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";

const capabilities = [
  {
    icon: Cpu,
    title: "CNC Machining",
    description: "3-axis, 4-axis, and 5-axis precision machining with tight tolerances.",
  },
  {
    icon: Wrench,
    title: "Fixture & Workholding",
    description: "Custom fixture design and engineering for optimal part positioning.",
  },
  {
    icon: Settings,
    title: "CNC Applications Engineering",
    description: "Expert machine setup, programming, and process optimization.",
  },
  {
    icon: Code,
    title: "CAM Programming",
    description: "Advanced toolpath optimization for efficiency and surface finish.",
  },
  {
    icon: Lightbulb,
    title: "DFM/DFA Engineering",
    description: "Design for manufacturability and assembly consultation.",
  },
  {
    icon: TrendingUp,
    title: "Process Improvement",
    description: "Production efficiency analysis and cost reduction strategies.",
  },
];

const Capabilities = () => {
  return (
    <section id="capabilities" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
              Capabilities
            </h2>
            <div className="h-[2px] w-16 bg-rolex-green mx-auto" />
          </div>
          <p className="text-lg text-metal-gray mt-6 max-w-2xl mx-auto">
            Engineering-first manufacturing solutions from prototype to production.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;
            return (
              <Card 
                key={index}
                className="p-6 border-l-2 border-l-rolex-green hover:shadow-elevated transition-all duration-300 group bg-card hover:bg-secondary/50"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded bg-rolex-green/10 group-hover:bg-rolex-green/20 transition-colors">
                    <Icon className="h-6 w-6 text-rolex-green" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-rolex-green transition-colors">
                      {capability.title}
                    </h3>
                    <p className="text-metal-gray leading-relaxed">
                      {capability.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
