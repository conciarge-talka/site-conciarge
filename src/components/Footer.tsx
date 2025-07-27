import { Separator } from "@/components/ui/separator";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-brand-navy text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <img 
              src="/lovable-uploads/LOGOLATERAL.CONCIARGE.png" 
              alt="Conciarge" 
              className="h-10 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-white/80 mb-6 max-w-md">
              A plataforma de inteligência que transforma leads em pacientes agendados, 
              automatizando o atendimento para clínicas e profissionais de saúde.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>contato@conciarge.com.br</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+55 (81) 99108-5679</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>São Paulo, SP - Brasil</span>
              </div>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="font-semibold mb-4">Soluções</h3>
            <ul className="space-y-2 text-white/80 text-sm">
              <li><a href="#solucao" className="hover:text-white transition-colors">Agente Concierge</a></li>
              <li><a href="#solucao" className="hover:text-white transition-colors">Agente de Qualificação</a></li>
              <li><a href="#solucao" className="hover:text-white transition-colors">Agendamento Automático</a></li>
              <li><a href="#solucao" className="hover:text-white transition-colors">Follow-Up Personalizado</a></li>
              <li><a href="#recursos" className="hover:text-white transition-colors">CRM Integrado</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4">Suporte</h3>
            <ul className="space-y-2 text-white/80 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Central de Ajuda</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Documentação</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Treinamentos</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Status da Plataforma</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contato</a></li>
            </ul>
          </div>
        </div>

        <Separator className="bg-white/20 mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-white/60">
          <div className="mb-4 md:mb-0">
            © 2024 Conciarge. Todos os direitos reservados.
          </div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-white transition-colors">LGPD</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;