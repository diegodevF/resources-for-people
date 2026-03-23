import { MessageCircle } from "lucide-react";
import { useTranslation } from 'react-i18next';

interface WhatsAppButtonProps {
  size?: "default" | "lg";
  className?: string;
}

export const WhatsAppButton = ({ size = "default", className = "" }: WhatsAppButtonProps) => {
  const { t } = useTranslation();
  const WHATSAPP_NUMBER = "14085850307"; // Reemplazar con número real
  const MESSAGE = encodeURIComponent("¡Hola! Me interesan los recursos digitales.");
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${MESSAGE}`;

  const sizeClasses = size === "lg"
    ? "px-8 py-3.5 text-base gap-3"
    : "px-6 py-2.5 text-sm gap-2";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center rounded-lg bg-whatsapp text-whatsapp-foreground font-medium shadow-lg shadow-whatsapp/25 transition-all duration-200 hover:shadow-xl hover:shadow-whatsapp/30 hover:brightness-110 active:scale-[0.97] ${sizeClasses} ${className}`}
    >
      <MessageCircle className={size === "lg" ? "w-5 h-5" : "w-4 h-4"} />
      {t('buttons.whatsapp')}
    </a>
  );
};
