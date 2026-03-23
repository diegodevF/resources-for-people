import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'es' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <footer className="py-14 section-padding border-t border-border">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="font-display font-semibold text-lg tracking-tight">{t('footer.brand')}</p>
        <div className="flex items-center gap-4">
          <button
            onClick={() => i18n.changeLanguage('en')}
            className={`px-4 py-2 rounded-full font-medium transition-all duration-200 ${
              i18n.language === 'en'
                ? 'bg-primary text-primary-foreground shadow-sm'
                : 'bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80'
            }`}
          >
            EN
          </button>
          <button
            onClick={() => i18n.changeLanguage('es')}
            className={`px-4 py-2 rounded-full font-medium transition-all duration-200 ${
              i18n.language === 'es'
                ? 'bg-primary text-primary-foreground shadow-sm'
                : 'bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80'
            }`}
          >
            ES
          </button>
        </div>
        <p className="text-sm text-muted-foreground">
          {t('footer.copyright', { year: new Date().getFullYear() })}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
