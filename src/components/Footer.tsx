const Footer = () => (
  <footer className="py-12 section-padding border-t border-border">
    <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
      <p className="font-display font-semibold text-lg tracking-tight">ResourceHub</p>
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} Todos los derechos reservados.
      </p>
    </div>
  </footer>
);

export default Footer;
