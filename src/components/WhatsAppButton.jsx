import { FaWhatsapp } from "react-icons/fa";

const WHATSAPP_LINK = "https://wa.me/+2348130864392";

export default function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noreferrer"
      aria-label="Message Favour Lawrence on WhatsApp"
      className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_10px_30px_-8px_rgba(0,0,0,0.35)] hover:scale-105 active:scale-95 transition-transform"
    >
      <FaWhatsapp size={26} />
    </a>
  );
}