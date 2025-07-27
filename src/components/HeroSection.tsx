import { Button } from "@/components/ui/button";
import { ArrowRight, Users, MessageSquare, Calendar, TrendingUp } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero flex items-center justify-center overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-white rounded-full animate-pulse delay-300"></div>
        <div className="absolute bottom-32 left-1/3 w-16 h-16 bg-white rounded-full animate-pulse delay-700"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Sua clínica transforma{" "}
            <span className="text-yellow-300">todos os leads</span>{" "}
            em pacientes?
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto leading-relaxed">
            Sua clínica recebe muitos leads, mas a capacidade de atendimento limita a conversão em vendas? 
            O <strong>Conciarge</strong> é a plataforma de inteligência que resolve essa equação, 
            automatizando o atendimento para transformar um alto volume de interessados em pacientes agendados.
          </p>

          {/* Lead Flow Animation */}
          <div className="my-12 flex items-center justify-center space-x-4 md:space-x-8">
            <div className="flex flex-col items-center space-y-2">
              <div className="bg-white/20 p-4 rounded-full">
                <Users className="w-8 h-8" />
              </div>
              <span className="text-sm">Muitos Leads</span>
            </div>
            
            <ArrowRight className="w-6 h-6 animate-pulse" />
            
            <div className="flex flex-col items-center space-y-2">
              <div className="bg-yellow-300 p-4 rounded-full">
                <MessageSquare className="w-8 h-8 text-brand-navy" />
              </div>
              <span className="text-sm">Conciarge IA</span>
            </div>
            
            <ArrowRight className="w-6 h-6 animate-pulse" />
            
            <div className="flex flex-col items-center space-y-2">
              <div className="bg-white/20 p-4 rounded-full">
                <Calendar className="w-8 h-8" />
              </div>
              <span className="text-sm">Agendamentos</span>
            </div>
          </div>

          <Button 
            variant="hero" 
            size="lg" 
            className="text-lg px-8 py-4 shadow-hero"
          >
            AGENDAR DEMONSTRAÇÃO ESTRATÉGICA
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">300%</div>
              <div className="text-sm opacity-80">Aumento na conversão</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-sm opacity-80">Atendimento automático</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">100%</div>
              <div className="text-sm opacity-80">Leads atendidos</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;