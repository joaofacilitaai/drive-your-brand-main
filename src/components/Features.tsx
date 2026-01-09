import { motion } from "framer-motion";
import { 
  Shield, 
  FileCheck, 
  CreditCard, 
  Truck, 
  Wrench, 
  HeadphonesIcon 
} from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Garantia Total",
    description: "Todos os veículos com garantia de motor e câmbio por até 12 meses.",
  },
  {
    icon: FileCheck,
    title: "Documentação OK",
    description: "Veículos com toda documentação em dia, prontos para transferência.",
  },
  {
    icon: CreditCard,
    title: "Financiamento Facilitado",
    description: "Trabalhamos com os melhores bancos para aprovar seu crédito.",
  },
  {
    icon: Truck,
    title: "Entrega em Casa",
    description: "Entregamos seu veículo novo em qualquer lugar do Brasil.",
  },
  {
    icon: Wrench,
    title: "Revisão Completa",
    description: "Inspeção de 150 pontos antes da entrega do veículo.",
  },
  {
    icon: HeadphonesIcon,
    title: "Suporte Pós-Venda",
    description: "Equipe dedicada para ajudar você após a compra.",
  },
];

const Features = () => {
  return (
    <section id="diferenciais" className="py-24 section-gradient relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--primary)) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium mb-2 block">Por que nos escolher</span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
            Nossos <span className="text-gradient">Diferenciais</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Mais do que vender carros, oferecemos uma experiência completa de compra 
            com segurança e transparência.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="card-glow p-8 h-full">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display font-bold text-xl text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
