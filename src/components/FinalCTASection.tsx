import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, TrendingUp, Users, Zap } from "lucide-react";

const FinalCTASection = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Clareza",
      description: "Visibilidade completa do seu funil de conversão"
    },
    {
      icon: Zap,
      title: "Controle", 
      description: "Gestão centralizada de todos os canais de atendimento"
    },
    {
      icon: Users,
      title: "Crescimento",
      description: "Escale suas operações sem perder qualidade"
    }
  ];

  return (
    <section className="py-20 bg-gradient-hero text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-32 h-32 bg-white rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-white rounded-full animate-pulse delay-300"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full animate-pulse delay-700"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Pronto para ter{" "}
            <span className="text-yellow-300">clareza, controle e crescimento</span>?
          </h2>
          
          <p className="text-xl md:text-2xl mb-12 opacity-90 leading-relaxed">
            Aumente sua capacidade de atendimento, converta mais leads em vendas 
            e foque no que você faz de melhor: <strong>cuidar da saúde das pessoas</strong>.
          </p>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="bg-white/10 p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <benefit.icon className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold mb-2">{benefit.title}</h3>
                <p className="opacity-90">{benefit.description}</p>
              </div>
            ))}
          </div>

          {/* Main CTA */}
          <div className="space-y-6">
            <Button 
              variant="hero" 
              size="lg" 
              className="text-xl px-12 py-6 bg-white text-primary hover:bg-white/90 shadow-hero text-brand-navy"
            >
              QUERO TRANSFORMAR MINHA CLÍNICA
              <ArrowRight className="ml-3 w-6 h-6" />
            </Button>
            
            <p className="text-sm opacity-80">
              Demonstração gratuita • Sem compromisso • Resultados garantidos
            </p>
          </div>

          {/* Social Proof */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-white/20 pt-12">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">500+</div>
              <div className="text-sm opacity-80">Usuários</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">95%</div>
              <div className="text-sm opacity-80">Taxa de satisfação</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">1 semana</div>
              <div className="text-sm opacity-80">Para implementação</div>
            </div>
          </div>

          {/* Trust badges */}
          <div className="mt-12 flex flex-wrap justify-center items-center gap-6 opacity-80">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5" />
              <span className="text-sm">LGPD Compliant</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5" />
              <span className="text-sm">Suporte 24/7</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5" />
              <span className="text-sm">99.9% Uptime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;