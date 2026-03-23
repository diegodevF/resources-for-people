import { useEffect, useRef, useState } from "react";
import { useTranslation } from 'react-i18next';
import { WhatsAppButton } from "./WhatsAppButton";

const CTASection = () => {
  const { t } = useTranslation();
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 lg:py-32 section-padding">
      <div
        ref={ref}
        className="max-w-4xl mx-auto bg-primary rounded-2xl p-12 sm:p-16 text-center"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(20px)",
          filter: visible ? "blur(0)" : "blur(4px)",
          transition: "all 0.7s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground tracking-tight mb-4">
          {t('cta.title')}
        </h2>
        <p className="text-primary-foreground/65 text-lg max-w-lg mx-auto mb-8 leading-relaxed">
          {t('cta.description')}
        </p>
        <WhatsAppButton size="lg" />
      </div>
    </section>
  );
};

export default CTASection;
