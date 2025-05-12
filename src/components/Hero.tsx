
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section 
      id="inicio" 
      className="relative py-16 md:py-24 bg-maranja-beige overflow-hidden"
    >
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_30%,rgba(29,45,53,0.4),transparent)]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-maranja-darkblue">
              Marketing e automação para <span className="text-transparent bg-clip-text bg-gradient-to-r from-maranja-darkblue to-maranja-darkblue/70">clínicas</span>
            </h1>
            
            <p className="text-lg md:text-xl text-maranja-darkblue/80 mb-8 max-w-lg">
              Potencialize sua clínica com soluções completas de marketing e automação. 
              Atraia mais pacientes e ofereça uma experiência superior.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                className="bg-maranja-darkblue hover:bg-maranja-darkblue/90 text-white"
                onClick={() => document.getElementById("ligue-para-mim")?.scrollIntoView({behavior: "smooth"})}
              >
                Fale conosco
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="border-maranja-darkblue text-maranja-darkblue hover:bg-maranja-darkblue hover:text-white"
                onClick={() => document.getElementById("servicos")?.scrollIntoView({behavior: "smooth"})}
              >
                Conheça nossos serviços
              </Button>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <img 
                src="/lovable-uploads/50f07d24-de5a-4a93-83dc-bab13718a7cf.png" 
                alt="Maranjá Logo" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
        
        <div className="mt-16 md:mt-24 text-center">
          <p className="text-sm uppercase tracking-wider text-maranja-darkblue/60 mb-6">
            Confiado por diversas clínicas
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {/* Aqui entrariam logos de clientes - usando placeholders */}
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="h-12 w-32 bg-maranja-darkblue/10 rounded-md flex items-center justify-center">
                <span className="text-maranja-darkblue/40 font-medium">Cliente {item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
