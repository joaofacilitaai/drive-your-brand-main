import { motion } from "framer-motion";

interface Spec {
  label: string;
  value: string;
}

interface VehicleSpecsProps {
  specs: Spec[];
}

const VehicleSpecs = ({ specs }: VehicleSpecsProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="card-glow p-6"
    >
      <h3 className="font-display font-bold text-xl text-foreground mb-6">
        Especificações Técnicas
      </h3>
      <div className="grid grid-cols-2 gap-4">
        {specs.map((spec, index) => (
          <div
            key={index}
            className="flex flex-col py-3 border-b border-border last:border-0"
          >
            <span className="text-sm text-muted-foreground mb-1">{spec.label}</span>
            <span className="font-medium text-foreground">{spec.value}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default VehicleSpecs;
