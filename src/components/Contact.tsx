import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

const Contact = () => {
  return (
    <section id="contato" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-medium mb-2 block">Entre em Contato</span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-6">
              Fale com nossa <span className="text-gradient">equipe</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              Nossa equipe está pronta para ajudar você a encontrar o veículo ideal. 
              Entre em contato por WhatsApp para atendimento imediato!
            </p>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/5511999999999?text=Olá! Tenho interesse em um veículo."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mb-10"
            >
              <Button size="lg" className="btn-primary-gradient gap-3 text-lg animate-pulse-glow">
                <MessageCircle className="w-6 h-6" />
                Falar no WhatsApp
              </Button>
            </a>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-foreground">Endereço</h4>
                  <p className="text-muted-foreground">
                    Av. Principal, 1234 - Centro<br />
                    São Paulo - SP, 01234-000
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-foreground">Telefone</h4>
                  <p className="text-muted-foreground">(11) 99999-9999</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-foreground">E-mail</h4>
                  <p className="text-muted-foreground">contato@elitemotors.com.br</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-foreground">Horário</h4>
                  <p className="text-muted-foreground">
                    Seg - Sex: 8h às 18h<br />
                    Sábado: 8h às 14h
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="card-glow p-8"
          >
            <h3 className="font-display font-bold text-xl text-foreground mb-6">
              Envie sua mensagem
            </h3>
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">Nome</label>
                  <Input placeholder="Seu nome completo" />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">Telefone</label>
                  <Input placeholder="(00) 00000-0000" />
                </div>
              </div>
              <div>
                <label className="text-sm text-muted-foreground mb-2 block">E-mail</label>
                <Input type="email" placeholder="seu@email.com" />
              </div>
              <div>
                <label className="text-sm text-muted-foreground mb-2 block">Mensagem</label>
                <Textarea 
                  placeholder="Escreva sua mensagem aqui..." 
                  className="min-h-[120px]"
                />
              </div>
              <Button type="submit" className="w-full btn-primary-gradient">
                Enviar Mensagem
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
