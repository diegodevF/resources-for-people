import { WhatsAppButton } from "./WhatsAppButton";

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/50">
    <div className="max-w-7xl mx-auto section-padding flex items-center justify-between h-16">
      <a href="/" className="font-display font-bold text-xl tracking-tight">
        ResourceHub
      </a>
      <div className="flex items-center gap-6">
        <a href="#recursos" className="hidden sm:block text-sm text-muted-foreground hover:text-foreground transition-colors">
          Recursos
        </a>
        <WhatsAppButton />
      </div>
    </div>
  </nav>
);

export default Navbar;
