import { useTranslation } from 'react-i18next';
import heroImg from "@/assets/hero-workspace.jpg";
import { WhatsAppButton } from "./WhatsAppButton";

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Espacio de trabajo creativo"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/80" />
      </div>

      <div className="relative z-10 section-padding w-full max-w-7xl mx-auto py-24">
        <div className="max-w-2xl space-y-8">
          <p
            className="text-accent font-display font-medium tracking-wider uppercase text-sm"
            style={{ animationDelay: "0.1s" }}
          >
            {t('hero.subtitle')}
          </p>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground leading-[1.05] tracking-tight"
            style={{ animationDelay: "0.25s" }}
          >
            {t('hero.title')}
          </h1>
          <p
            className="text-primary-foreground/70 text-lg sm:text-xl max-w-lg leading-relaxed"
            style={{ animationDelay: "0.4s" }}
          >
            {t('hero.description')}
          </p>
          <div
            className="flex flex-col sm:flex-row gap-4 pt-4"
            style={{ animationDelay: "0.55s" }}
          >
            <WhatsAppButton size="lg" />
            <a
              href="#recursos"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg border border-primary-foreground/20 text-primary-foreground font-medium transition-all duration-200 hover:bg-primary-foreground/10 active:scale-[0.97]"
            >
              {t('hero.viewResources')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
