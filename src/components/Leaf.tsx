
import { Leaf as LeafIcon, LeafyGreen, Trees, TreeDeciduous, TreePalm, TreePine, TentTree, Shrub } from "lucide-react";
import { cn } from "@/lib/utils";

type LeafType = "standard" | "leafy" | "trees" | "deciduous" | "palm" | "pine" | "tent-tree" | "shrub";

interface LeafProps {
  className?: string;
  size?: number;
  color?: string;
  rotation?: number;
  opacity?: number;
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right" | "center-left" | "center-right";
  leafType?: LeafType;
}

const Leaf = ({ 
  className, 
  size = 24, 
  color = "currentColor", 
  rotation = 0,
  opacity = 0.2,
  position = "top-right",
  leafType = "standard"
}: LeafProps) => {
  const positionClasses = {
    "top-left": "absolute top-4 left-4",
    "top-right": "absolute top-4 right-4",
    "bottom-left": "absolute bottom-4 left-4",
    "bottom-right": "absolute bottom-4 right-4",
    "center-left": "absolute top-1/2 -translate-y-1/2 left-4",
    "center-right": "absolute top-1/2 -translate-y-1/2 right-4",
  };

  const getLeafIcon = () => {
    switch (leafType) {
      case "leafy":
        return <LeafyGreen size={size} color={color} />;
      case "trees":
        return <Trees size={size} color={color} />;
      case "deciduous":
        return <TreeDeciduous size={size} color={color} />;
      case "palm":
        return <TreePalm size={size} color={color} />;
      case "pine":
        return <TreePine size={size} color={color} />;
      case "tent-tree":
        return <TentTree size={size} color={color} />;
      case "shrub":
        return <Shrub size={size} color={color} />;
      default:
        return <LeafIcon size={size} color={color} />;
    }
  };

  return (
    <div 
      className={cn(
        "text-maranja-darkblue transition-all duration-700",
        positionClasses[position],
        className
      )}
      style={{ 
        transform: `rotate(${rotation}deg)`,
        opacity: opacity
      }}
    >
      {getLeafIcon()}
    </div>
  );
};

export default Leaf;
