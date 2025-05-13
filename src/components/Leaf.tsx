
import { Leaf as LeafIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface LeafProps {
  className?: string;
  size?: number;
  color?: string;
  rotation?: number;
  opacity?: number;
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right" | "center-left" | "center-right";
  variant?: "branch-1" | "branch-2" | "branch-3" | "branch-4" | "leaf-1" | "leaf-2" | "leaf-3" | "leaf-4";
}

const Leaf = ({ 
  className, 
  size = 120, 
  color = "currentColor", 
  rotation = 0,
  opacity = 0.8,
  position = "top-right",
  variant = "branch-1"
}: LeafProps) => {
  const positionClasses = {
    "top-left": "absolute top-0 left-0",
    "top-right": "absolute top-0 right-0",
    "bottom-left": "absolute bottom-0 left-0",
    "bottom-right": "absolute bottom-0 right-0",
    "center-left": "absolute top-1/2 -translate-y-1/2 left-0",
    "center-right": "absolute top-1/2 -translate-y-1/2 right-0",
  };

  const renderLeafSVG = () => {
    switch (variant) {
      case "branch-1":
        // Branch with multiple leaves pointing up-left (top-left corner)
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150" width={size} height={size} fill={color} stroke="none">
            <path d="M15,50 C35,30 55,20 85,15 C75,25 65,30 55,32 C70,30 85,32 100,40 C85,45 70,45 55,42 C70,50 80,60 85,75 C75,70 65,60 60,50 C60,65 55,80 45,95 C40,80 40,65 45,50 C35,60 25,65 10,70 C20,60 25,50 30,40 C20,45 10,45 5,45 C10,35 15,40 15,30" />
          </svg>
        );
      case "branch-2": 
        // Branch with leaves hanging down (top-right corner)
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150" width={size} height={size} fill={color} stroke="none">
            <path d="M120,10 C110,25 100,35 95,60 C95,45 100,30 110,15 C100,30 85,40 70,45 C85,35 95,25 105,15 C90,25 75,30 60,30 C75,25 90,20 105,10 C90,15 75,15 60,15 C75,10 90,5 105,5" />
          </svg>
        );
      case "branch-3":
        // Branch with leaves pointing upward (bottom-left corner)
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150" width={size} height={size} fill={color} stroke="none">
            <path d="M20,120 C30,100 45,85 70,75 C55,90 45,105 40,125 C50,110 65,95 85,85 C70,100 60,115 55,130 C70,115 85,105 100,100 C85,110 75,125 70,140" />
          </svg>
        );
      case "branch-4":
        // Small branch with fewer leaves (bottom-right corner)
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150" width={size} height={size} fill={color} stroke="none">
            <path d="M120,140 C105,130 95,115 85,95 C95,110 105,120 120,125 C110,115 100,100 95,85 C105,100 115,110 130,115 C120,105 110,95 105,80 C115,95 125,105 140,110" />
          </svg>
        );
      case "leaf-1":
        // New leaf design - vertical branch with oval leaves
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 200" width={size} height={size * 2} fill={color} stroke="none">
            <path d="M50,0 C48,50 48,100 50,200 M50,20 C60,25 70,35 65,45 C55,50 45,40 50,20 M50,60 C40,65 30,75 35,85 C45,90 55,80 50,60 M50,100 C60,105 70,115 65,125 C55,130 45,120 50,100 M50,140 C40,145 30,155 35,165 C45,170 55,160 50,140" />
          </svg>
        );
      case "leaf-2":
        // New leaf design - horizontal branch with multiple leaves
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 100" width={size * 2} height={size} fill={color} stroke="none">
            <path d="M0,50 C50,48 150,48 200,50 M20,50 C25,40 35,30 45,35 C50,45 40,55 20,50 M60,50 C65,60 75,70 85,65 C90,55 80,45 60,50 M100,50 C105,40 115,30 125,35 C130,45 120,55 100,50 M140,50 C145,60 155,70 165,65 C170,55 160,45 140,50" />
          </svg>
        );
      case "leaf-3":
        // New leaf design - small branch with oval leaves
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 150" width={size} height={size * 1.5} fill={color} stroke="none">
            <path d="M50,0 C48,40 48,80 50,150 M50,20 C40,25 30,35 35,45 C45,50 55,40 50,20 M50,50 C60,55 70,65 65,75 C55,80 45,70 50,50 M50,80 C40,85 30,95 35,105 C45,110 55,100 50,80 M50,110 C60,115 70,125 65,135 C55,140 45,130 50,110" />
          </svg>
        );
      case "leaf-4":
        // New leaf design based on the side branch image
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 100" width={size * 2} height={size} fill={color} stroke="none">
            <path d="M10,50 C50,40 100,30 190,50 M30,40 C40,30 60,20 70,30 C60,40 50,45 30,40 M60,35 C70,25 90,15 100,25 C90,35 80,40 60,35 M90,30 C100,20 120,10 130,20 C120,30 110,35 90,30 M120,35 C130,25 150,15 160,25 C150,35 140,40 120,35" />
          </svg>
        );
      default:
        return <LeafIcon size={size} color={color} />;
    }
  };

  return (
    <div 
      className={cn(
        "text-maranja-darkblue z-0 pointer-events-none",
        positionClasses[position],
        className
      )}
      style={{ 
        transform: `rotate(${rotation}deg)`,
        opacity: opacity
      }}
    >
      {renderLeafSVG()}
    </div>
  );
};

export default Leaf;
