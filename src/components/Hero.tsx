
import { Button } from "@/components/ui/button";
import { MessageSquare, Phone, Search, Sparkles, Star } from "lucide-react";

const Hero = () => {
  const handleWhatsAppClick = () => {
    // Replace with your actual WhatsApp number
    window.open("https://wa.me/1234567890", "_blank");
  };

  return (
    <section 
      id="inicio" 
      className="relative py-24 md:py-32 bg-maranja-beige overflow-hidden"
    >
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_30%,rgba(29,45,53,0.6),transparent)]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center md:justify-between">
          <div className="w-full md:w-1/2 mb-12 md:mb-0 md:pr-8">
            <div className="mb-2 flex items-center">
              <Sparkles className="h-5 w-5 text-maranja-darkblue/60 mr-2" />
              <span className="text-sm uppercase tracking-widest font-medium text-maranja-darkblue/60">
                Marketing Premium para Clínicas
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-maranja-darkblue leading-tight">
              Marketing e automação para <span className="text-transparent bg-clip-text bg-gradient-to-r from-maranja-darkblue to-maranja-darkblue/70">clínicas</span>
            </h1>
            
            <p className="text-lg md:text-xl text-maranja-darkblue/80 mb-8 max-w-lg">
              Potencialize sua clínica com soluções completas de marketing e automação. 
              Atraia mais pacientes e ofereça uma experiência superior.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-12">
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-maranja-darkblue/10 flex items-center justify-center mr-3">
                  <Star className="h-5 w-5 text-maranja-darkblue" />
                </div>
                <p className="text-sm text-maranja-darkblue">Marketing Premium</p>
              </div>
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-maranja-darkblue/10 flex items-center justify-center mr-3">
                  <Search className="h-5 w-5 text-maranja-darkblue" />
                </div>
                <p className="text-sm text-maranja-darkblue">SEO Otimizado</p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg"
                className="bg-maranja-darkblue hover:bg-maranja-darkblue/90 text-white"
                onClick={() => document.getElementById("ligue-para-mim")?.scrollIntoView({behavior: "smooth"})}
              >
                <Phone className="h-4 w-4 mr-2" />
                Fale Conosco
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="border-maranja-darkblue text-maranja-darkblue hover:bg-maranja-darkblue hover:text-white"
                onClick={() => document.getElementById("servicos")?.scrollIntoView({behavior: "smooth"})}
              >
                Conheça nossos serviços
              </Button>
              
              {/* WhatsApp Button */}
              <Button 
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white"
                onClick={handleWhatsAppClick}
              >
                <MessageSquare className="h-4 w-4 mr-2" />
                WhatsApp
              </Button>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <div className="relative w-72 h-72 md:w-[400px] md:h-[400px]">
              <img 
                src="/lovable-uploads/50f07d24-de5a-4a93-83dc-bab13718a7cf.png" 
                alt="Maranjá Logo" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
        
        <div className="mt-20 md:mt-32 relative">
          <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-maranja-darkblue/20 to-transparent"></div>
          
          <div className="text-center pt-16">
            <p className="text-sm uppercase tracking-wider text-maranja-darkblue/60 mb-10">
              Confiado por diversas clínicas premium
            </p>
            
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
              {/* Premium clients section with improved styling */}
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="h-16 w-40 bg-white/50 border border-maranja-darkblue/10 rounded-md flex items-center justify-center shadow-sm transition-all hover:shadow-md">
                  <span className="text-maranja-darkblue/70 font-medium">Cliente Premium {item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
