import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check, Star, ArrowRight, Bot, PhoneCall } from "lucide-react";

type BillingCycle = "monthly" | "quarterly" | "semiannually" | "annually";

const PricingSection = () => {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>("monthly");

  const plans = [
    {
      name: "CLÍNICA ESSENCIAL",
      basePrices: {
        monthly: 799,
        quarterly: 1977,
        semiannually: 3894,
        annually: 7188
      },
      description: "Ideal para organizar o atendimento e centralizar a comunicação.",
      isPopular: false,
      features: [
        <span key="concierge" className="line-through">Agente IA Concierge (SDR)</span>,
        <span key="qualificacao" className="line-through">Agente IA de Qualificação</span>,
        <span key="ia" className="line-through">IA Conversacional Avançada</span>,
        "Chatbot Multi Canais (Whatsapp, Instagram e Site)",
        "Automações Personalizadas",
        "CRM Integrado para Vendas",
        "Integrações com Sistemas de Agendamento"
      ],
      buttonText: "CONTRATAR PLANO ESSENCIAL",
      buttonVariant: "outline-hero" as const
    },
    {
      name: "CLÍNICA AVANÇADA",
      basePrices: {
        monthly: 1197,
        quarterly: 3405,
        semiannually: 6210,
        annually: 11844
      },
      description: "Para clínicas que buscam a máxima automação, redução de no-show e escala.",
      isPopular: true,
      features: [
        "Agente IA Concierge (SDR)",
        "Agente IA de Qualificação",
        "IA Conversacional Avançada",
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

  const billingOptions = {
    monthly: { label: "Mensal", months: 1 },
    quarterly: { label: "Trimestral", months: 3 },
    semiannually: { label: "Semestral", months: 6 },
    annually: { label: "Anual", months: 12 },
  };

  const formatCurrency = (value: number) =>
    new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Escolha o <span className="text-primary">plano ideal</span> para o seu momento
          </h2>
          <p className="text-xl text-muted-foreground">
            Comece a organizar sua operação hoje e escale quando estiver pronto.
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <Tabs value={billingCycle} onValueChange={(value) => setBillingCycle(value as BillingCycle)} className="w-auto">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="monthly">Mensal</TabsTrigger>
              <TabsTrigger value="quarterly">Trimestral</TabsTrigger>
              <TabsTrigger value="semiannually">Semestral</TabsTrigger>
              <TabsTrigger value="annually">Anual</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto items-stretch">
          {plans.map((plan) => {
            const currentOption = billingOptions[billingCycle];
            const monthlyPrice = plan.basePrices[billingCycle] / currentOption.months;
            const upfrontPrice = plan.basePrices[billingCycle] * 0.95;

            return (
              <Card
                key={plan.name}
                className={`flex flex-col shadow-card border-0 bg-gradient-card hover:shadow-lg transition-all duration-300 relative ${
                  plan.isPopular ? 'ring-2 ring-primary shadow-hero lg:scale-105' : ''
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
                  <CardTitle className="text-2xl font-bold mb-2 h-14 flex items-center justify-center">{plan.name}</CardTitle>
                  <p className="text-muted-foreground h-12">{plan.description}</p>
                </CardHeader>

                <CardContent className="pt-0 flex flex-col flex-grow">
                  <div className="text-center mb-6">
                    <div>
                      <span className="text-4xl md:text-5xl font-bold text-primary">
                        {formatCurrency(monthlyPrice)}
                      </span>
                      <span className="text-muted-foreground text-lg">/mês</span>
                    </div>
                    {billingCycle !== 'monthly' && (
                      <p className="text-sm text-muted-foreground mt-2">
                        Total de {formatCurrency(plan.basePrices[billingCycle])} no plano {currentOption.label.toLowerCase()}
                      </p>
                    )}
                    <p className="text-sm text-green-600 font-semibold mt-2">
                      ou {formatCurrency(upfrontPrice)} à vista com +5% de desconto
                    </p>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className={`text-sm ${
                          typeof feature === "string" && plan.specialFeatures?.includes(feature)
                            ? 'font-semibold text-primary'
                            : 'text-foreground'
                        }`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto">
                    <Button
                      variant={plan.buttonVariant}
                      size="lg"
                      className="w-full font-semibold"
                    >
                      {plan.buttonText}
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}

          <Card className="flex flex-col shadow-card border-0 bg-gradient-card hover:shadow-lg transition-all duration-300">
            <CardHeader className="text-center pb-8 pt-8">
              <CardTitle className="text-2xl font-bold mb-2 h-14 flex items-center justify-center">PLANO PERSONALIZADO</CardTitle>
              <p className="text-muted-foreground h-12">Para operações complexas que precisam de uma solução sob medida.</p>
            </CardHeader>
            <CardContent className="pt-0 flex flex-col flex-grow">
              <div className="text-center mb-6">
                <Bot className="w-12 h-12 text-primary mx-auto mb-4" />
                <p className="text-lg font-semibold">Vamos construir juntos?</p>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-foreground">Agentes e Módulos customizados</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-foreground">Integrações com sistemas legados</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-foreground">Volume de contatos enterprise</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-foreground">Suporte e gerente de contas dedicado</span>
                </li>
              </ul>
              <div className="mt-auto">
                <Button variant="hero" size="lg" className="w-full font-semibold">
                  Fale com um especialista
                  <PhoneCall className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
