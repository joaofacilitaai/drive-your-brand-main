import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Inventory from "@/components/Inventory";
import Features from "@/components/Features";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Inventory />
      <Features />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
