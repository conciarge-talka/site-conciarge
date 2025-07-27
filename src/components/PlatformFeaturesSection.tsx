import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  MessageSquare, 
  Share2, 
  Settings, 
  Calendar, 
  Puzzle, 
  BarChart3,
  Mic,
  Smartphone,
  Zap,
  Clock,
  Link,
  TrendingUp
} from "lucide-react";

const PlatformFeaturesSection = () => {
  const features = [
    {
      icon: MessageSquare,
      title: "IA Conversacional Avançada",
      description: "Nossa plataforma garante um atendimento ágil e inteligente. Os áudios são transcritos automaticamente, e os agentes virtuais se comunicam com fluidez: ouvem, falam, leem documentos e imagens, organizam e dividem mensagens conforme a necessidade.",
      highlights: ["Transcrição automática", "Compreensão contextual", "Múltiplos formatos"]
    },
    {
      icon: Share2,
      title: "Multi Canais",
      description: "Conecte várias contas da mesma rede social – como múltiplos perfis do Instagram, Facebook, WhatsApp, Telegram e outras – em um único lugar para uma gestão centralizada.",
      highlights: ["WhatsApp Business", "Instagram Direct", "Facebook Messenger", "Telegram"]
    },
    {
      icon: Settings,
      title: "Automações Personalizadas",
      description: "Crie conversas personalizadas e automáticas com ações e condições lógicas para aumentar as conversões e a satisfação do paciente em diferentes etapas da jornada.",
      highlights: ["Fluxos inteligentes", "Condições lógicas", "Personalização avançada"]
    },
    {
      icon: Calendar,
      title: "Gestão de Agendas",
      description: "Nossos agentes gerenciam a agenda dos profissionais de forma automática e eficiente, enviando confirmações e programando lembretes para evitar faltas e otimizar a ocupação da clínica.",
      highlights: ["Sincronização em tempo real", "Lembretes automáticos", "Anti no-show"]
    },
    {
      icon: Puzzle,
      title: "Principais Integrações",
      description: "Integrações diretas com os principais prontuários eletrônicos (como Feegow, iClinic) e os principais CRMs de mercado, como Pipefy, Pipedrive, RD Station, entre outros.",
      highlights: ["Feegow", "iClinic", "Pipedrive", "RD Station"]
    },
    {
      icon: BarChart3,
      title: "CRM Integrado para Vendas",
      description: "Acompanhe visualmente a conversão de leads em um quadro Kanban. Gerencie cada etapa do funil e tenha previsibilidade total do seu processo comercial, da primeira mensagem até a consulta agendada.",
      highlights: ["Quadro Kanban", "Funil visual", "Métricas de conversão"]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Descubra os{" "}
            <span className="text-primary">Recursos da Nossa Plataforma</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Toda a tecnologia que seus Agentes e Módulos precisam para entregar a máxima performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="shadow-card border-0 bg-gradient-card hover:shadow-lg transition-all duration-300 h-full">
              <CardHeader className="pb-4">
                <div className="bg-primary/10 p-3 rounded-lg w-fit mb-4">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl mb-2 leading-tight">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {feature.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {feature.highlights.map((highlight, highlightIndex) => (
                    <span 
                      key={highlightIndex}
                      className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full font-medium"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-hero p-8 rounded-2xl max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Veja a plataforma em ação
            </h3>
            <p className="text-white/90 mb-6">
              Agende uma demonstração personalizada e descubra como o Conciarge pode transformar sua clínica
            </p>
            <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors">
              Agendar Demonstração
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformFeaturesSection;