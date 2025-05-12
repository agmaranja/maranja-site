
import { Leaf as LeafIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface LeafProps {
  className?: string;
  size?: number;
  color?: string;
  rotation?: number;
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right" | "center-left" | "center-right";
}

const Leaf = ({ 
  className, 
  size = 24, 
  color = "currentColor", 
  rotation = 0,
  position = "top-right" 
}: LeafProps) => {
  const positionClasses = {
    "top-left": "absolute top-4 left-4",
    "top-right": "absolute top-4 right-4",
    "bottom-left": "absolute bottom-4 left-4",
    "bottom-right": "absolute bottom-4 right-4",
    "center-left": "absolute top-1/2 -translate-y-1/2 left-4",
    "center-right": "absolute top-1/2 -translate-y-1/2 right-4",
  };

  return (
    <div 
      className={cn(
        "text-maranja-darkblue/20 transition-all duration-700",
        positionClasses[position],
        className
      )}
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      <LeafIcon size={size} color={color} />
    </div>
  );
};

export default Leaf;
