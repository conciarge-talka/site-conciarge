import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "O que Fazemos", path: "/o-que-fazemos" },
    { name: "Nossas Soluções", path: "/solucos" },
    { name: "Insights", path: "/insights" },
    { name: "Sobre Nós", path: "/sobre" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <img 
              src="/lovable-uploads/7cc4cd4d-8aaf-47ac-a7d4-aa8df6d3e4c0.png" 
              alt="TALKA" 
              // CORREÇÃO FINAL: Definindo a LARGURA e deixando a altura automática
              className="w-32 h-auto object-contain"
            />
          </Link>

          {/* O resto do componente continua igual... */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium transition-all duration-300 hover:text-accent ${
                  isActive(item.path)
                    ? "text-accent border-b-2 border-accent pb-1"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Button asChild size="sm">
              <Link to="/contato">Contato</Link>
            </Button>
          </div>
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-card rounded-lg mt-2 border border-border">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block px-3 py-2 text-base font-medium rounded-md transition-colors ${
                    isActive(item.path)
                      ? "text-accent bg-accent/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/20"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 py-2">
                <Button asChild size="sm" className="w-full">
                  <Link to="/contato" onClick={() => setIsOpen(false)}>
                    Contato
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;