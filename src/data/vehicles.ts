// Dados de veículos - fácil de editar
// Em uma versão real, isso viria de um banco de dados

export interface Vehicle {
  id: string;
  brand: string;
  model: string;
  version: string;
  year: string;
  km: string;
  fuel: string;
  transmission: string;
  color: string;
  doors: number;
  engine: string;
  power: string;
  price: string;
  installment: string;
  images: string[];
  features: string[];
  description: string;
}

export const vehicles: Vehicle[] = [
  {
    id: "honda-civic-exl-2023",
    brand: "Honda",
    model: "Civic",
    version: "EXL 2.0",
    year: "2023",
    km: "18.000 km",
    fuel: "Flex",
    transmission: "Automático CVT",
    color: "Branco Pérola",
    doors: 4,
    engine: "2.0 16V",
    power: "155 cv",
    price: "R$ 149.990",
    installment: "ou 60x de R$ 3.199",
    images: [
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80",
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&q=80",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80",
      "https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=800&q=80",
    ],
    features: [
      "Central multimídia 9\"",
      "Ar-condicionado digital",
      "Bancos em couro",
      "Câmera de ré",
      "Sensor de estacionamento",
      "Piloto automático adaptativo",
      "Faróis full LED",
      "Rodas de liga leve 17\"",
    ],
    description: "Honda Civic EXL em excelente estado de conservação. Único dono, todas as revisões em concessionária. IPVA 2024 pago.",
  },
  {
    id: "toyota-corolla-xei-2022",
    brand: "Toyota",
    model: "Corolla",
    version: "XEI 2.0",
    year: "2022",
    km: "32.000 km",
    fuel: "Flex",
    transmission: "Automático CVT",
    color: "Prata",
    doors: 4,
    engine: "2.0 16V",
    power: "177 cv",
    price: "R$ 139.990",
    installment: "ou 60x de R$ 2.999",
    images: [
      "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80",
      "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80",
      "https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=800&q=80",
    ],
    features: [
      "Toyota Safety Sense",
      "Central multimídia 10\"",
      "Ar-condicionado digital dual zone",
      "Bancos em couro",
      "Câmera de ré",
      "Keyless",
      "Faróis de neblina LED",
    ],
    description: "Toyota Corolla XEI completo, segundo dono. Carro muito bem cuidado, sem detalhes. Manual e chave reserva.",
  },
  {
    id: "jeep-compass-limited-2023",
    brand: "Jeep",
    model: "Compass",
    version: "Limited TD350",
    year: "2023",
    km: "25.000 km",
    fuel: "Diesel",
    transmission: "Automático 9 marchas",
    color: "Preto",
    doors: 4,
    engine: "2.0 Turbo Diesel",
    power: "170 cv",
    price: "R$ 189.990",
    installment: "ou 60x de R$ 3.999",
    images: [
      "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=800&q=80",
      "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&q=80",
      "https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=800&q=80",
    ],
    features: [
      "Tração 4x4",
      "Teto solar panorâmico",
      "Central multimídia 10.1\"",
      "Bancos em couro",
      "Ar digital dual zone",
      "Park Assist",
      "Rodas de liga 19\"",
      "Sistema de som premium",
    ],
    description: "Jeep Compass Limited Diesel 4x4, único dono, revisões na concessionária. Equipadíssimo!",
  },
  {
    id: "chevrolet-onix-premier-2023",
    brand: "Chevrolet",
    model: "Onix",
    version: "Premier 1.0 Turbo",
    year: "2023",
    km: "12.000 km",
    fuel: "Flex",
    transmission: "Automático 6 marchas",
    color: "Vermelho",
    doors: 4,
    engine: "1.0 Turbo",
    power: "116 cv",
    price: "R$ 89.990",
    installment: "ou 60x de R$ 1.899",
    images: [
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80",
      "https://images.unsplash.com/photo-1542362567-b07e54358753?w=800&q=80",
      "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800&q=80",
    ],
    features: [
      "MyLink 8\"",
      "OnStar",
      "Wi-Fi nativo",
      "Ar-condicionado",
      "Direção elétrica",
      "Câmera de ré",
      "Alerta de colisão frontal",
    ],
    description: "Onix Premier turbo automático, carro de garagem. Todas as revisões em dia.",
  },
  {
    id: "volkswagen-tcross-highline-2024",
    brand: "Volkswagen",
    model: "T-Cross",
    version: "Highline 1.4 TSI",
    year: "2024",
    km: "8.000 km",
    fuel: "Flex",
    transmission: "Automático 6 marchas",
    color: "Azul",
    doors: 4,
    engine: "1.4 TSI Turbo",
    power: "150 cv",
    price: "R$ 159.990",
    installment: "ou 60x de R$ 3.399",
    images: [
      "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&q=80",
      "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=800&q=80",
      "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&q=80",
    ],
    features: [
      "VW Play 10.1\"",
      "Digital Cockpit",
      "Teto solar",
      "Bancos em couro",
      "Ar digital",
      "Keyless",
      "Faróis full LED",
      "Assistente de partida em rampa",
    ],
    description: "T-Cross Highline praticamente zero! Top de linha, com todos os opcionais.",
  },
  {
    id: "bmw-320i-sport-2022",
    brand: "BMW",
    model: "320i",
    version: "Sport GP",
    year: "2022",
    km: "28.000 km",
    fuel: "Gasolina",
    transmission: "Automático 8 marchas",
    color: "Cinza Mineral",
    doors: 4,
    engine: "2.0 Turbo",
    power: "184 cv",
    price: "R$ 229.990",
    installment: "ou 60x de R$ 4.899",
    images: [
      "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&q=80",
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80",
      "https://images.unsplash.com/photo-1523983388277-336a66bf9bcd?w=800&q=80",
    ],
    features: [
      "BMW Live Cockpit Plus",
      "Tela 12.3\"",
      "Apple CarPlay/Android Auto",
      "Bancos esportivos em couro",
      "Teto solar",
      "Keyless",
      "Park Distance Control",
      "Driving Assistant",
    ],
    description: "BMW 320i Sport impecável! Todas as revisões na concessionária BMW. Garantia de fábrica até 2025.",
  },
];

export const getVehicleById = (id: string): Vehicle | undefined => {
  return vehicles.find((v) => v.id === id);
};
