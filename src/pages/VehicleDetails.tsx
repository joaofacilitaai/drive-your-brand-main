import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Gauge, Fuel, Settings, Palette, DoorOpen, Zap, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import VehicleGallery from "@/components/VehicleGallery";
import VehicleSpecs from "@/components/VehicleSpecs";
import ProposalForm from "@/components/ProposalForm";
import { getVehicleById } from "@/data/vehicles";

const VehicleDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const vehicle = getVehicleById(id || "");

  if (!vehicle) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-2xl text-foreground mb-4">
            Veículo não encontrado
          </h1>
          <Button onClick={() => navigate("/")} variant="outline">
            Voltar ao início
          </Button>
        </div>
      </div>
    );
  }

  const specs = [
    { label: "Ano", value: vehicle.year },
    { label: "Quilometragem", value: vehicle.km },
    { label: "Combustível", value: vehicle.fuel },
    { label: "Câmbio", value: vehicle.transmission },
    { label: "Cor", value: vehicle.color },
    { label: "Portas", value: `${vehicle.doors} portas` },
    { label: "Motor", value: vehicle.engine },
    { label: "Potência", value: vehicle.power },
  ];

  const handleShare = async () => {
    const url = window.location.href;
    const text = `Confira esse ${vehicle.brand} ${vehicle.model} por ${vehicle.price}!`;
    
    if (navigator.share) {
      await navigator.share({ title: `${vehicle.brand} ${vehicle.model}`, text, url });
    } else {
      navigator.clipboard.writeText(url);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-6"
          >
            <Button
              variant="ghost"
              onClick={() => navigate("/")}
              className="gap-2 text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar ao estoque
            </Button>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Gallery & Info */}
            <div className="lg:col-span-2 space-y-8">
              {/* Gallery */}
              <VehicleGallery images={vehicle.images} vehicleName={`${vehicle.brand} ${vehicle.model}`} />

              {/* Title & Price - Mobile */}
              <div className="lg:hidden">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="card-glow p-6"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <span className="text-primary font-medium">{vehicle.brand}</span>
                      <h1 className="font-display font-bold text-2xl text-foreground">
                        {vehicle.model} {vehicle.version}
                      </h1>
                    </div>
                    <Button variant="ghost" size="icon" onClick={handleShare}>
                      <Share2 className="w-5 h-5" />
                    </Button>
                  </div>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {vehicle.year}
                    </span>
                    <span className="flex items-center gap-1">
                      <Gauge className="w-4 h-4" />
                      {vehicle.km}
                    </span>
                    <span className="flex items-center gap-1">
                      <Fuel className="w-4 h-4" />
                      {vehicle.fuel}
                    </span>
                  </div>

                  <div>
                    <p className="font-display font-bold text-3xl text-primary">
                      {vehicle.price}
                    </p>
                    <p className="text-sm text-muted-foreground">{vehicle.installment}</p>
                  </div>
                </motion.div>
              </div>

              {/* Quick Specs - Icons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="grid grid-cols-2 sm:grid-cols-4 gap-4"
              >
                {[
                  { icon: Calendar, label: "Ano", value: vehicle.year },
                  { icon: Gauge, label: "KM", value: vehicle.km },
                  { icon: Settings, label: "Câmbio", value: vehicle.transmission.split(" ")[0] },
                  { icon: Zap, label: "Potência", value: vehicle.power },
                ].map((item, index) => (
                  <div key={index} className="card-glow p-4 text-center">
                    <item.icon className="w-5 h-5 text-primary mx-auto mb-2" />
                    <p className="text-xs text-muted-foreground mb-1">{item.label}</p>
                    <p className="font-medium text-foreground">{item.value}</p>
                  </div>
                ))}
              </motion.div>

              {/* Specs Table */}
              <VehicleSpecs specs={specs} />

              {/* Features */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="card-glow p-6"
              >
                <h3 className="font-display font-bold text-xl text-foreground mb-6">
                  Itens de Série
                </h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {vehicle.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 py-2"
                    >
                      <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="card-glow p-6"
              >
                <h3 className="font-display font-bold text-xl text-foreground mb-4">
                  Descrição
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {vehicle.description}
                </p>
              </motion.div>
            </div>

            {/* Right Column - Price & Form */}
            <div className="space-y-6">
              {/* Price Card - Desktop */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="hidden lg:block card-glow p-6 sticky top-28"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="text-primary font-medium">{vehicle.brand}</span>
                    <h1 className="font-display font-bold text-2xl text-foreground">
                      {vehicle.model}
                    </h1>
                    <p className="text-muted-foreground">{vehicle.version}</p>
                  </div>
                  <Button variant="ghost" size="icon" onClick={handleShare}>
                    <Share2 className="w-5 h-5" />
                  </Button>
                </div>

                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6 flex-wrap">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {vehicle.year}
                  </span>
                  <span className="flex items-center gap-1">
                    <Gauge className="w-4 h-4" />
                    {vehicle.km}
                  </span>
                  <span className="flex items-center gap-1">
                    <Fuel className="w-4 h-4" />
                    {vehicle.fuel}
                  </span>
                </div>

                <div className="border-t border-border pt-6 mb-6">
                  <p className="font-display font-bold text-3xl text-primary">
                    {vehicle.price}
                  </p>
                  <p className="text-sm text-muted-foreground">{vehicle.installment}</p>
                </div>

                <ProposalForm 
                  vehicleName={`${vehicle.brand} ${vehicle.model}`} 
                  vehiclePrice={vehicle.price} 
                />
              </motion.div>

              {/* Proposal Form - Mobile */}
              <div className="lg:hidden">
                <ProposalForm 
                  vehicleName={`${vehicle.brand} ${vehicle.model}`} 
                  vehiclePrice={vehicle.price} 
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default VehicleDetails;
