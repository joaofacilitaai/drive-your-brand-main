import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Send, CheckCircle } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "@/hooks/use-toast";

interface ProposalFormProps {
  vehicleName: string;
  vehiclePrice: string;
}

const ProposalForm = ({ vehicleName, vehiclePrice }: ProposalFormProps) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: `Olá! Tenho interesse no ${vehicleName}. Gostaria de mais informações.`,
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validação básica
    if (!formData.name.trim() || !formData.phone.trim()) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha nome e telefone.",
        variant: "destructive",
      });
      return;
    }

    // Simula envio
    setIsSubmitted(true);
    toast({
      title: "Proposta enviada!",
      description: "Em breve entraremos em contato.",
    });
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      `Olá! Tenho interesse no ${vehicleName} (${vehiclePrice}). Gostaria de mais informações.`
    );
    window.open(`https://wa.me/5511999999999?text=${message}`, "_blank");
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="card-glow p-8 text-center"
      >
        <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-primary" />
        </div>
        <h3 className="font-display font-bold text-xl text-foreground mb-2">
          Proposta Enviada!
        </h3>
        <p className="text-muted-foreground mb-6">
          Nossa equipe entrará em contato em breve.
        </p>
        <Button onClick={handleWhatsApp} className="btn-primary-gradient gap-2">
          <MessageCircle className="w-5 h-5" />
          Falar no WhatsApp
        </Button>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="card-glow p-6"
    >
      <h3 className="font-display font-bold text-xl text-foreground mb-2">
        Enviar Proposta
      </h3>
      <p className="text-sm text-muted-foreground mb-6">
        Preencha o formulário ou fale diretamente no WhatsApp
      </p>

      {/* WhatsApp Button */}
      <Button
        onClick={handleWhatsApp}
        className="w-full btn-primary-gradient gap-2 mb-6"
      >
        <MessageCircle className="w-5 h-5" />
        Falar no WhatsApp
      </Button>

      <div className="relative flex items-center gap-4 mb-6">
        <div className="flex-1 h-px bg-border" />
        <span className="text-sm text-muted-foreground">ou</span>
        <div className="flex-1 h-px bg-border" />
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="text-sm text-muted-foreground mb-2 block">
            Nome *
          </label>
          <Input
            placeholder="Seu nome completo"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>
        <div>
          <label className="text-sm text-muted-foreground mb-2 block">
            Telefone *
          </label>
          <Input
            placeholder="(00) 00000-0000"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          />
        </div>
        <div>
          <label className="text-sm text-muted-foreground mb-2 block">
            E-mail
          </label>
          <Input
            type="email"
            placeholder="seu@email.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>
        <div>
          <label className="text-sm text-muted-foreground mb-2 block">
            Mensagem
          </label>
          <Textarea
            placeholder="Sua mensagem..."
            className="min-h-[100px]"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          />
        </div>
        <Button type="submit" variant="outline" className="w-full gap-2">
          <Send className="w-4 h-4" />
          Enviar Proposta
        </Button>
      </form>
    </motion.div>
  );
};

export default ProposalForm;
