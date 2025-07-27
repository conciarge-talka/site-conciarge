import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-brand-navy z-50 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-24"> {/* Altura aumentada para h-24 */}
          {/* Logo */}
          <a href="#" className="flex items-center space-x-2">
            <img 
              src="/logolateral.png" 
              alt="Conciarge" 
              className="h-14 w-auto brightness-0 invert" // Altura do logo aumentada para h-14
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#solucao" className="text-white/90 hover:text-white transition-colors font-medium">
              Solução
            </a>
            <a href="#recursos" className="text-white/90 hover:text-white transition-colors font-medium">
              Recursos
            </a>
            <a href="#planos" className="text-white/90 hover:text-white transition-colors font-medium">
              Planos
            </a>
            <a href="#faq" className="text-white/90 hover:text-white transition-colors font-medium">
              FAQ
            </a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button variant="outline" className="bg-white text-primary hover:bg-white/90 hover:text-primary border-white">
              Demonstração Gratuita
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-controls="mobile-menu"
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-white/20" id="mobile-menu">
            <nav className="flex flex-col space-y-4 p-4">
              <a 
                href="#solucao" 
                className="text-white/90 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Solução
              </a>
              <a 
                href="#recursos" 
                className="text-white/90 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Recursos
              </a>
              <a 
                href="#planos" 
                className="text-white/90 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Planos
              </a>
              <a 
                href="#faq" 
                className="text-white/90 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </a>
              <Button variant="outline" className="w-fit bg-white text-primary hover:bg-white/90 hover:text-primary mt-2 border-white">
                Demonstração Gratuita
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;