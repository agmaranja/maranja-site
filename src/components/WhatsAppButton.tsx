
import { MessageSquare } from "lucide-react";

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    // Replace with your actual WhatsApp number
    window.open("https://wa.me/1234567890", "_blank");
  };

  return (
    <button 
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 bg-green-600 hover:bg-green-700 text-white rounded-full p-4 shadow-lg transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
      aria-label="Contato via WhatsApp"
    >
      <MessageSquare className="h-6 w-6" />
    </button>
  );
};

export default WhatsAppButton;
