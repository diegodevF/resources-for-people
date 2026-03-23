import { Palette, Film, Code2, Package } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const categories = [
  {
    icon: Palette,
    title: "Para Diseñadores",
    description: "Plantillas UI/UX, kits de iconos, mockups, paletas de color y tipografías seleccionadas.",
    items: ["Plantillas Figma", "Mockups PSD", "Kits de iconos", "Paletas curadas"],
  },
  {
    icon: Film,
    title: "Para Editores",
    description: "Presets de color, LUTs, transiciones, overlays y packs de audio para tus proyectos.",
    items: ["Presets Lightroom", "LUTs para video", "Transiciones", "Packs de audio"],
  },
  {
    icon: Code2,
    title: "Para Programadores",
    description: "Snippets, componentes, boilerplates y configuraciones listas para producción.",
    items: ["Componentes React", "Snippets útiles", "Boilerplates", "Configs DevOps"],
  },
  {
    icon: Package,
    title: "Packs Combo",
    description: "Bundles multidisciplinarios con descuento. Ideal para equipos y freelancers.",
    items: ["Bundle creativo", "Pack freelancer", "Kit startup", "Pack agencia"],
  },
];

const ResourceCard = ({ category, index }: { category: typeof categories[0]; index: number }) => {
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

  const Icon = category.icon;

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
        {category.items.map((item) => (
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
  return (
    <section id="recursos" className="py-24 lg:py-32 section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-xl mb-16">
          <p className="text-accent font-display font-medium tracking-wider uppercase text-sm mb-4">
            Catálogo
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Recursos para cada disciplina
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Archivos profesionales listos para usar. Actualizados constantemente.
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
