import { motion } from "framer-motion";
import VehicleCard from "./VehicleCard";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { vehicles } from "@/data/vehicles";

const Inventory = () => {
  return (
    <section id="estoque" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium mb-2 block">Nosso Estoque</span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
            Veículos <span className="text-gradient">Selecionados</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Cada veículo passa por rigorosa inspeção de qualidade. 
            Todos com procedência verificada e garantia inclusa.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {vehicles.map((vehicle, index) => (
            <VehicleCard
              key={vehicle.id}
              id={vehicle.id}
              image={vehicle.images[0]}
              brand={vehicle.brand}
              model={vehicle.model}
              year={vehicle.year}
              km={vehicle.km}
              fuel={vehicle.fuel}
              price={vehicle.price}
              installment={vehicle.installment}
              index={index}
            />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button size="lg" variant="outline" className="gap-2">
            Ver Todos os Veículos
            <ArrowRight className="w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Inventory;
