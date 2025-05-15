
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

interface EnglishServiceCardWithShadowProps {
  title: string;
  description: string;
  icon: string;
}

const EnglishServiceCardWithShadow = ({ title, description, icon }: EnglishServiceCardWithShadowProps) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:translate-y-[-5px] shadow-md hover:shadow-lg">
      <CardContent className="p-6 flex flex-col items-center text-center">
        <div className="mb-4">
          <img 
            src={icon} 
            alt={title} 
            className="h-16 w-16 object-contain"
            style={{ background: '#FAF6EE' }}
          />
        </div>
        <h3 className="text-xl font-bold text-maranja-darkblue mb-3">{title}</h3>
        <p className="text-maranja-darkblue/70">{description}</p>
      </CardContent>
    </Card>
  );
};

export default EnglishServiceCardWithShadow;
