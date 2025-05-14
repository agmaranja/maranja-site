
import { useState } from "react";
import { Flag } from "lucide-react";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

type Language = "pt-BR" | "en-GB";

const LanguageSelector = () => {
  const navigate = useNavigate();
  const currentPath = window.location.pathname;
  const isEnglish = currentPath.includes("/en");
  const [currentLanguage, setCurrentLanguage] = useState<Language>(isEnglish ? "en-GB" : "pt-BR");

  const handleLanguageChange = (language: Language) => {
    setCurrentLanguage(language);
    
    if (language === "en-GB" && !isEnglish) {
      navigate("/en");
    } else if (language === "pt-BR" && isEnglish) {
      navigate("/");
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="flex items-center gap-2 px-2">
          {currentLanguage === "pt-BR" ? (
            <>
              <div className="w-6 h-4 relative overflow-hidden rounded-sm">
                <div className="absolute inset-0 bg-green-500"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-4 h-4 bg-yellow-400 transform rotate-45 translate-y-0.5"></div>
                  <div className="absolute w-3 h-3 bg-blue-700 rounded-full flex items-center justify-center">
                    <div className="text-white text-[6px]">BR</div>
                  </div>
                </div>
              </div>
              <span className="text-xs">PT</span>
            </>
          ) : (
            <>
              <div className="w-6 h-4 relative overflow-hidden rounded-sm">
                <div className="absolute inset-0 bg-blue-600"></div>
                <div className="absolute inset-0">
                  <div className="absolute top-0 left-0 w-full h-full">
                    <div className="absolute top-0 left-0 w-full h-[20%] bg-white"></div>
                    <div className="absolute top-[40%] left-0 w-full h-[20%] bg-white"></div>
                    <div className="absolute top-0 left-0 h-full w-[20%] bg-white"></div>
                    <div className="absolute top-0 left-[40%] h-full w-[20%] bg-white"></div>
                  </div>
                </div>
              </div>
              <span className="text-xs">EN</span>
            </>
          )}
          <Flag className="h-3 w-3" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => handleLanguageChange("pt-BR")} className="cursor-pointer">
          <div className="w-6 h-4 relative overflow-hidden rounded-sm mr-2">
            <div className="absolute inset-0 bg-green-500"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-4 h-4 bg-yellow-400 transform rotate-45 translate-y-0.5"></div>
              <div className="absolute w-3 h-3 bg-blue-700 rounded-full flex items-center justify-center">
                <div className="text-white text-[6px]">BR</div>
              </div>
            </div>
          </div>
          Português
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleLanguageChange("en-GB")} className="cursor-pointer">
          <div className="w-6 h-4 relative overflow-hidden rounded-sm mr-2">
            <div className="absolute inset-0 bg-blue-600"></div>
            <div className="absolute inset-0">
              <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-0 left-0 w-full h-[20%] bg-white"></div>
                <div className="absolute top-[40%] left-0 w-full h-[20%] bg-white"></div>
                <div className="absolute top-0 left-0 h-full w-[20%] bg-white"></div>
                <div className="absolute top-0 left-[40%] h-full w-[20%] bg-white"></div>
              </div>
            </div>
          </div>
          English
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSelector;
