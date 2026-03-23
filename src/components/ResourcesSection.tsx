import { Palette, Film, Code2, Package } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from 'react-i18next';

const icons = [Palette, Film, Code2, Package];

const ResourceCard = ({ category, index }: { category: any; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2, rootMargin: "0px" }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const Icon = icons[index];

  return (
    <div
      ref={ref}
      className="group relative bg-card rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        filter: visible ? "blur(0)" : "blur(4px)",
        transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index * 100}ms`,
      }}
    >
      <div className="w-12 h-12 rounded-lg bg-accent/15 flex items-center justify-center mb-6 group-hover:bg-accent/25 transition-colors duration-300">
        <Icon className="w-6 h-6 text-accent" />
      </div>
      <h3 className="text-xl font-display font-semibold mb-3">{category.title}</h3>
      <p className="text-muted-foreground leading-relaxed mb-6">{category.description}</p>
      <ul className="space-y-2">
        {category.items.map((item: string) => (
          <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

const ResourcesSection = () => {
  const { t } = useTranslation();
  const categories = (t('resources.categories', { returnObjects: true }) as any[]).map((cat, i) => ({ ...cat, icon: icons[i] }));

  return (
    <section id="recursos" className="py-24 lg:py-32 section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-xl mb-16">
          <p className="text-accent font-display font-medium tracking-wider uppercase text-sm mb-4">
            {t('resourcesSection.subtitle')}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            {t('resourcesSection.title')}
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            {t('resourcesSection.description')}
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, i) => (
            <ResourceCard key={cat.title} category={cat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
