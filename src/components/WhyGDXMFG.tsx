import { Check } from "lucide-react";

const benefits = [
  "Engineering-first manufacturing approach",
  "Precision, repeatability, and quality assurance",
  "Rapid prototyping to scalable production",
  "Focus on manufacturability and cost reduction",
  "Experience with aerospace, defense, robotics, and industrial markets",
];

const WhyGDXMFG = () => {
  return (
    <section className="py-24 technical-gradient text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block mb-6">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                Why GDX<span className="text-rolex-green">MFG</span>
              </h2>
              <div className="h-[2px] w-16 bg-rolex-green mt-4" />
            </div>
            <p className="text-xl text-metal-light mb-8 leading-relaxed">
              Elite engineering expertise meets precision manufacturing. We don't just make parts—we engineer manufacturing solutions.
            </p>
          </div>
          
          <div className="space-y-4">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="flex items-start gap-4 p-4 rounded bg-white/5 border-l-2 border-l-rolex-green hover:bg-white/10 transition-all duration-300 animate-slide-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex-shrink-0">
                  <div className="w-6 h-6 rounded-full bg-rolex-green flex items-center justify-center">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p className="text-lg text-white leading-relaxed">
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyGDXMFG;
