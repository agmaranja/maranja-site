
// We need to add shadows to the service cards
// Since this is a read-only file, let's create a new component to replace it
import React from "react";
import ServiceCardWithShadow from "./ServiceCardWithShadow";

// For this read-only file, we create a helper component that will be used instead
const ServicesWithShadow = () => {
  return (
    <section id="servicos" className="py-16 md:py-24 bg-white relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-maranja-darkblue mb-5">
            Nossos Serviços
          </h2>
          <p className="text-maranja-darkblue/70 max-w-2xl mx-auto">
            Oferecemos serviços completos para a automação e marketing de 
            sua clínica, desde implementação de sistemas até estratégias 
            de captação de clientes.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCardWithShadow 
            title="Desenvolvimento de Sistemas"
            description="Criamos sistemas personalizados para otimizar o funcionamento da sua clínica, desde agendamentos até prontuários eletrônicos."
            icon="/lovable-uploads/2749e1c9-f63d-4f1d-8c31-b5f50437f431.png"
          />
          
          <ServiceCardWithShadow 
            title="Marketing Digital"
            description="Estratégias completas de marketing digital para atrair novos clientes e fidelizar os atuais, com foco em resultados."
            icon="/lovable-uploads/ab03f245-a6d5-422f-b497-d8921ebe72ea.png"
          />
          
          <ServiceCardWithShadow 
            title="Chatbots e Atendimento"
            description="Automatize o primeiro contato com seus clientes através de chatbots inteligentes para qualificação de leads e agendamentos."
            icon="/lovable-uploads/a10dbad2-9400-4aa3-a107-909e5ea2a372.png"
          />
          
          <ServiceCardWithShadow 
            title="Gestão de Fila Virtual"
            description="Organize o fluxo de atendimento da sua clínica com sistemas de fila virtual que notificam os clientes por SMS ou WhatsApp."
            icon="/lovable-uploads/df2623b6-6fdc-4547-bd83-34b9b7cb6718.png"
          />
          
          <ServiceCardWithShadow 
            title="Prontuário Digital"
            description="Sistema de prontuário digital completo, seguro e em conformidade com as normativas de proteção de dados."
            icon="/lovable-uploads/2ddcaeda-3309-4314-bc26-ca2ecb302d90.png"
          />
          
          <ServiceCardWithShadow 
            title="Automação de Processos"
            description="Identifique e automatize processos repetitivos da sua clínica para reduzir custos e aumentar a produtividade da equipe."
            icon="/lovable-uploads/781fb56a-1cb8-4504-844e-774d19f133c1.png"
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesWithShadow;
