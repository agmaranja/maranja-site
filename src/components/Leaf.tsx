import { Leaf as LeafIcon, LeafyGreen, Trees, TreeDeciduous, TreePalm, TreePine, TentTree, Shrub } from "lucide-react";
import { cn } from "@/lib/utils";

type LeafType = "standard" | "leafy" | "trees" | "deciduous" | "palm" | "pine" | "tent-tree" | "shrub" | 
                "ipe" | "jatoba" | "acai" | "guarana" | "araucaria";

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

  // Custom SVG paths for Brazilian leaf types
  const getBrazilianLeafSVG = () => {
    switch (leafType) {
      case "ipe":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2C8 5 5 8 5 12C5 16 8 19 12 22C16 19 19 16 19 12C19 8 16 5 12 2Z" />
            <path d="M12 6C9 8 8 9 8 12C8 15 9 16 12 18C15 16 16 15 16 12C16 9 15 8 12 6Z" />
          </svg>
        );
      case "jatoba":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2C7 7 5 10 5 14C5 18 8 22 12 22C16 22 19 18 19 14C19 10 17 7 12 2Z" />
            <path d="M12 18C13.6569 18 15 16.6569 15 15C15 13.3431 13.6569 12 12 12C10.3431 12 9 13.3431 9 15C9 16.6569 10.3431 18 12 18Z" />
          </svg>
        );
      case "acai":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2C7 2 3 6 3 12C3 18 7 22 12 22C17 22 21 18 21 12C21 6 17 2 12 2Z" />
            <path d="M12 6C10 6 8 8 8 12C8 16 10 18 12 18C14 18 16 16 16 12C16 8 14 6 12 6Z" />
            <path d="M12 2L12 6" />
            <path d="M12 18L12 22" />
          </svg>
        );
      case "guarana":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2L6 12L12 16L18 12L12 2Z" />
            <path d="M12 16L12 22" />
            <path d="M9 19L12 22L15 19" />
          </svg>
        );
      case "araucaria":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2L8 7L4 14L12 14L20 14L16 7L12 2Z" />
            <path d="M12 14L12 22" />
            <path d="M9 11L12 14L15 11" />
            <path d="M7 8L12 11L17 8" />
          </svg>
        );
      default:
        return null;
    }
  };

  const getLeafIcon = () => {
    // Check for Brazilian leaf types first
    const brazilianLeaf = getBrazilianLeafSVG();
    if (brazilianLeaf) return brazilianLeaf;

    // Otherwise use standard Lucide icons
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
