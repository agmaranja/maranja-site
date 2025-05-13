
import { Leaf as LeafIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface LeafProps {
  className?: string;
  size?: number;
  color?: string;
  rotation?: number;
  opacity?: number;
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right" | "center-left" | "center-right";
  variant?: "branch-1" | "branch-2" | "branch-3" | "branch-4";
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
