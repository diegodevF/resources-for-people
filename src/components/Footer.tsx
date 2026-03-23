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
        <button
          onClick={toggleLanguage}
          className="px-3 py-1 bg-primary text-primary-foreground rounded hover:bg-primary/90 transition-colors"
        >
          {i18n.language === 'en' ? 'ES' : 'EN'}
        </button>
        <p className="text-sm text-muted-foreground">
          {t('footer.copyright', { year: new Date().getFullYear() })}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
