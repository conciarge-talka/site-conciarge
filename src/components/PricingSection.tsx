import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Star, ArrowRight } from "lucide-react";

const PricingSection = () => {
  const plans = [
    {
      name: "CLÍNICA ESSENCIAL",
      price: "R$ 687",
      period: "/mês",
      description: "Ideal para organizar o atendimento e centralizar a comunicação.",
      isPopular: false,
      features: [
        "Agente Concierge",
        "Agente de Qualificação", 
        "IA Conversacional Avançada",
        "Multi Canais",
        "Automações Personalizadas",
        "CRM Integrado para Vendas",
        "Integrações com Sistemas"
      ],
      buttonText: "CONTRATAR PLANO ESSENCIAL",
      buttonVariant: "outline-hero" as const
    },
    {
      name: "CLÍNICA AVANÇADA",
      price: "R$ 987",
      period: "/mês",
      description: "Para clínicas que buscam a máxima automação, redução de no-show e escala.",
      isPopular: true,
      features: [
        "Tudo do plano Essencial, e mais:",
        "Módulo de Agendamento 100% Automático",
        "Módulo de Follow-Up (FUP) Personalizado",
        "Gestão completa da agenda",
        "Motor anti-no-show com confirmações ativas"
      ],
      specialFeatures: [
        "Módulo de Agendamento 100% Automático",
        "Módulo de Follow-Up (FUP) Personalizado"
      ],
      buttonText: "CONTRATAR PLANO AVANÇADO",
      buttonVariant: "hero" as const
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Escolha o{" "}
            <span className="text-primary">plano ideal</span>{" "}
            para o seu momento
          </h2>
          <p className="text-xl text-muted-foreground">
            Comece a organizar sua operação hoje e escale quando estiver pronto.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`shadow-card border-0 bg-gradient-card hover:shadow-lg transition-all duration-300 relative ${
                plan.isPopular ? 'ring-2 ring-primary shadow-hero scale-105' : ''
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground px-4 py-2 text-sm font-semibold">
                    <Star className="w-4 h-4 mr-1" />
                    MAIS POPULAR
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-8 pt-8">
                <CardTitle className="text-2xl font-bold mb-4">
                  {plan.name}
                </CardTitle>
                <div className="mb-4">
                  <span className="text-4xl md:text-5xl font-bold text-primary">
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground text-lg">
                    {plan.period}
                  </span>
                </div>
                <p className="text-muted-foreground">
                  {plan.description}
                </p>
              </CardHeader>

              <CardContent className="pt-0">
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className={`text-sm ${
                        plan.specialFeatures?.includes(feature) 
                          ? 'font-semibold text-primary' 
                          : 'text-foreground'
                      }`}>
                        {plan.specialFeatures?.includes(feature) && (
                          <Star className="w-4 h-4 inline mr-1" />
                        )}
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button 
                  variant={plan.buttonVariant}
                  size="lg" 
                  className="w-full font-semibold"
                >
                  {plan.buttonText}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12 max-w-2xl mx-auto">
          <p className="text-muted-foreground mb-4">
            💡 <strong>Dica:</strong> O plano Avançado inclui automação completa do agendamento e follow-up, 
            permitindo que sua clínica funcione no piloto automático.
          </p>
          <div className="bg-primary/10 p-4 rounded-lg">
            <p className="text-primary font-medium">
              ✨ Implementação completa incluída em ambos os planos
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;