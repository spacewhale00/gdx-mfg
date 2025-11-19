import Hero from "@/components/Hero";
import Capabilities from "@/components/Capabilities";
import WhyGDXMFG from "@/components/WhyGDXMFG";
import Industries from "@/components/Industries";
import QuoteForm from "@/components/QuoteForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Capabilities />
      <WhyGDXMFG />
      <Industries />
      <QuoteForm />
      <Footer />
    </div>
  );
};

export default Index;
