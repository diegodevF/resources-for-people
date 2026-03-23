import { Receipt } from "lucide-react";
import Paypal from "../assets/paypal-svgrepo-com.svg"
import { useTranslation } from 'react-i18next';

interface PaypalButtonProps {
  size?: "default" | "lg";
  className?: string;
}

export const PaypalButton = ({ size = "default", className = "" }: PaypalButtonProps) => {
  const { t } = useTranslation();
  const href = "";

  const sizeClasses = size === "lg"
    ? "px-4 py-3.5 text-xs gap-3"
    : "px-2 py-2.5 text-sm gap-2";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-[#003087] to-[#009cde] text-white font-medium shadow-lg shadow-[#003087]/25 transition-all duration-200 hover:shadow-xl hover:shadow-[#003087]/30 hover:brightness-110 active:scale-[0.97] ${sizeClasses} ${className}`}
    >
      <img src={Paypal} className={size === "lg" ? "w-5 h-5" : "w-4 h-4"} />
      {t('buttons.paypal')}
    </a>
  );
};
