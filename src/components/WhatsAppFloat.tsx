import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppFloat = () => {
  const phoneNumber = "+201080941234";
  const message = "Hello! I'm interested in learning more about PR TEC Academy courses.";
  
  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-2xl hover:shadow-green-500/25 transition-all duration-300 hover:scale-110 btn-glow"
      size="icon"
    >
      <MessageCircle className="h-8 w-8" />
    </Button>
  );
};

export default WhatsAppFloat;