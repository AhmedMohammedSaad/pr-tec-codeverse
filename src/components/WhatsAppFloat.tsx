import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa6";

const WhatsAppFloat = () => {
  const phoneNumber = "+201080941234";
  const message = "Hello! I'm interested in learning more about PR TEC Academy courses.";

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const number = phoneNumber.replace(/\D/g, ""); // يزيل + وأي رموز
    const whatsappUrl = `https://wa.me/${number}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <motion.div
      onClick={handleWhatsAppClick}
      role="button"
      aria-label="Contact us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 cursor-pointer"
      animate={{ y: [0, -12, 0] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    >
      <FaWhatsapp
        className="w-16 h-16 text-[#25D366] drop-shadow-[0_0_12px_rgba(37,211,102,0.6)] transition-transform duration-300 hover:scale-110"
      />
    </motion.div>
  );
};

export default WhatsAppFloat;
