
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import CallMeForm from "@/components/CallMeForm";
import Footer from "@/components/Footer";
import Leaf from "@/components/Leaf";

const Index = () => {
  return (
    <div className="min-h-screen bg-maranja-beige relative overflow-hidden">
      {/* Decorative leaves */}
      <Leaf 
        position="top-left" 
        variant="branch-1" 
        size={180} 
        opacity={0.8} 
        color="#1d2d35" 
      />
      
      <Leaf 
        position="top-right" 
        variant="branch-2" 
        size={150} 
        opacity={0.8} 
        color="#1d2d35" 
        rotation={0}
      />
      
      <Leaf 
        position="bottom-left" 
        variant="branch-3" 
        size={180} 
        opacity={0.8} 
        color="#1d2d35" 
        rotation={0}
      />
      
      <Leaf 
        position="bottom-right" 
        variant="branch-4" 
        size={150} 
        opacity={0.8} 
        color="#1d2d35" 
        rotation={0}
      />

      <Header />
      <main>
        <Hero />
        <Services />
        <CallMeForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
