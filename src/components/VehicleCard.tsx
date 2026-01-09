import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Fuel, Gauge, Calendar, MessageCircle } from "lucide-react";
import { Button } from "./ui/button";

interface VehicleCardProps {
  id: string;
  image: string;
  brand: string;
  model: string;
  year: string;
  km: string;
  fuel: string;
  price: string;
  installment: string;
  index?: number;
}

const VehicleCard = ({
  id,
  image,
  brand,
  model,
  year,
  km,
  fuel,
  price,
  installment,
  index = 0,
}: VehicleCardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/veiculo/${id}`);
  };

  const handleWhatsApp = (e: React.MouseEvent) => {
    e.stopPropagation();
    const message = encodeURIComponent(
      `Olá! Tenho interesse no ${brand} ${model} (${price}). Gostaria de mais informações.`
    );
    window.open(`https://wa.me/5511999999999?text=${message}`, "_blank");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card-glow group cursor-pointer"
      onClick={handleClick}
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden rounded-t-xl">
        <img
          src={image}
          alt={`${brand} ${model}`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="mb-3">
          <p className="text-sm text-primary font-medium">{brand}</p>
          <h3 className="font-display font-bold text-xl text-foreground">{model}</h3>
        </div>

        {/* Specs */}
        <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <span>{year}</span>
          </div>
          <div className="flex items-center gap-1">
            <Gauge className="w-4 h-4" />
            <span>{km}</span>
          </div>
          <div className="flex items-center gap-1">
            <Fuel className="w-4 h-4" />
            <span>{fuel}</span>
          </div>
        </div>

        {/* Price */}
        <div className="mb-4">
          <p className="font-display font-bold text-2xl text-primary">{price}</p>
          <p className="text-sm text-muted-foreground">{installment}</p>
        </div>

        {/* CTA */}
        <Button onClick={handleWhatsApp} className="w-full btn-primary-gradient gap-2">
          <MessageCircle className="w-4 h-4" />
          Tenho Interesse
        </Button>
      </div>
    </motion.div>
  );
};

export default VehicleCard;
