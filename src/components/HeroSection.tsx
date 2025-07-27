import * as React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, HeartPulse, TrendingUp } from "lucide-react";

const HeroSection = () => {
  const flowSteps = [
    {
      icon: Users,
      label: "Volume Alto de Leads",
    },
    {
      icon: HeartPulse,
      label: "Capacidade de Atendimento",
    },
    {
      icon: TrendingUp,
      label: "Conversão em Vendas",
    },
  ];

  return (
    <section className="bg-background pt-32 pb-20 text-center">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Título Principal */}
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-brand-navy">
            A plataforma de inteligência comercial que{" "}
            <span className="text-primary">
              transforma sua clínica em uma máquina de resultados
            </span>
          </h1>

          {/* Subtítulo */}
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Unifique agendamentos, marketing e vendas em um só lugar. O
            Conciarge é o sistema com IA que automatiza processos, qualifica
            pacientes e te dá o controle total da sua operação para escalar com
            segurança.
          </p>
        </div>

        {/* Diagrama de Fluxo */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-12">
          {flowSteps.map((step, index) => {
            const Icon = step.icon; // Renomeia para uma variável com letra maiúscula
            return (
              <React.Fragment key={index}>
                <div className="flex items-center gap-3 rounded-lg border bg-muted/50 p-3 text-sm font-medium text-muted-foreground">
                  <Icon className="w-5 h-5 text-primary" />
                  <span>{step.label}</span>
                </div>
                {index < flowSteps.length - 1 && (
                  <ArrowRight className="w-6 h-6 text-border hidden md:block" />
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* Botão de Chamada para Ação (CTA) */}
        <div className="space-y-4">
          <Button variant="hero" size="lg" className="text-lg px-8 py-4 shadow-hero">
            AGENDAR DEMONSTRAÇÃO ESTRATÉGICA
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <p className="text-sm text-muted-foreground">
            Descubra o real retorno sobre seu investimento em marketing.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;