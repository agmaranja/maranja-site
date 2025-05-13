
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import CallMeForm from "@/components/CallMeForm";
import Footer from "@/components/Footer";
import Leaf from "@/components/Leaf";

const Index = () => {
  return (
    <div className="min-h-screen bg-maranja-beige relative overflow-hidden">
      {/* Background corner leaves */}
      <Leaf 
        position="top-left" 
        variant="branch-1" 
        size={180} 
        opacity={0.15} 
        color="#1d2d35" 
        className="left-[-20px] top-[-20px]"
      />
      
      <Leaf 
        position="top-right" 
        variant="branch-2" 
        size={180} 
        opacity={0.15} 
        color="#1d2d35" 
        rotation={0}
        className="right-[-30px] top-[-30px]"
      />
      
      <Leaf 
        position="bottom-left" 
        variant="branch-3" 
        size={180} 
        opacity={0.15} 
        color="#1d2d35" 
        rotation={0}
        className="left-[-30px] bottom-[-30px]"
      />
      
      <Leaf 
        position="bottom-right" 
        variant="branch-4" 
        size={180} 
        opacity={0.15} 
        color="#1d2d35" 
        rotation={0}
        className="right-[-30px] bottom-[-30px]"
      />

      {/* New leaf designs on the sides of the page */}
      {/* Left side leaves */}
      <Leaf 
        variant="new-leaf-1" 
        size={160} 
        opacity={0.15} 
        color="#1d2d35" 
        className="absolute left-0 top-[20%]"
      />
      
      <Leaf 
        variant="new-leaf-3" 
        size={140} 
        opacity={0.15} 
        color="#1d2d35" 
        className="absolute left-0 top-[60%]"
      />

      {/* Right side leaves */}
      <Leaf 
        variant="new-leaf-2" 
        size={160} 
        opacity={0.15} 
        color="#1d2d35" 
        rotation={0}
        className="absolute right-0 top-[30%]"
      />
      
      <Leaf 
        variant="new-leaf-4" 
        size={140} 
        opacity={0.15} 
        color="#1d2d35" 
        rotation={0}
        className="absolute right-0 top-[70%]"
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
