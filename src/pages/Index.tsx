
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import CallMeForm from "@/components/CallMeForm";
import Footer from "@/components/Footer";
import Leaf from "@/components/Leaf";

const Index = () => {
  return (
    <div className="min-h-screen bg-maranja-beige relative overflow-hidden">
      {/* Original corner leaves with adjusted positions */}
      <Leaf 
        position="top-left" 
        variant="branch-1" 
        size={220} 
        opacity={0.15} 
        color="#1d2d35" 
        className="left-[-20px] top-[-20px]"
      />
      
      <Leaf 
        position="top-right" 
        variant="branch-2" 
        size={220} 
        opacity={0.15} 
        color="#1d2d35" 
        rotation={0}
        className="right-[-30px] top-[-30px]"
      />
      
      <Leaf 
        position="bottom-left" 
        variant="branch-3" 
        size={220} 
        opacity={0.15} 
        color="#1d2d35" 
        rotation={0}
        className="left-[-30px] bottom-[-30px]"
      />
      
      <Leaf 
        position="bottom-right" 
        variant="branch-4" 
        size={220} 
        opacity={0.15} 
        color="#1d2d35" 
        rotation={0}
        className="right-[-30px] bottom-[-30px]"
      />

      {/* New leaf designs from uploaded images */}
      <Leaf 
        variant="leaf-1" 
        size={120} 
        opacity={0.2} 
        color="#1d2d35" 
        className="absolute right-[10%] top-[30%]"
      />
      
      <Leaf 
        variant="leaf-3" 
        size={100} 
        opacity={0.2} 
        color="#1d2d35" 
        rotation={-15}
        className="absolute left-[10%] top-[40%]"
      />
      
      <Leaf 
        variant="leaf-2" 
        size={150} 
        opacity={0.2} 
        color="#1d2d35" 
        rotation={10}
        className="absolute right-[15%] bottom-[30%]"
      />
      
      <Leaf 
        variant="leaf-4" 
        size={120} 
        opacity={0.2} 
        color="#1d2d35" 
        rotation={-5}
        className="absolute left-[15%] bottom-[20%]"
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
