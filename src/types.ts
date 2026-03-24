export interface ComputerProduct {
  id: number;
  name: string;
  description: string;
  price: number;
  category: 'Laptops' | 'Desktops' | 'Componentes' | 'Periféricos';
  image: string;
}

export const COMPUTER_PRODUCTS: ComputerProduct[] = [
  {
    id: 1,
    name: "Laptop Pro Ultra",
    description: "Processador de última geração, 32GB RAM e SSD de 1TB. Ideal para profissionais exigentes.",
    price: 8500.00,
    category: 'Laptops',
    image: "https://picsum.photos/seed/laptop/400/300"
  },
  {
    id: 2,
    name: "Desktop Gamer Titan",
    description: "Placa de vídeo RTX 4080, resfriamento líquido e design minimalista em tons de cinza.",
    price: 12400.00,
    category: 'Desktops',
    image: "https://picsum.photos/seed/desktop/400/300"
  },
  {
    id: 3,
    name: "Monitor 4K Infinity",
    description: "Tela de 32 polegadas com fidelidade de cor absoluta e bordas ultra finas.",
    price: 3200.00,
    category: 'Periféricos',
    image: "https://picsum.photos/seed/monitor/400/300"
  },
  {
    id: 4,
    name: "Teclado Mecânico Silent",
    description: "Switches lineares silenciosos, retroiluminação branca e acabamento em alumínio.",
    price: 850.00,
    category: 'Periféricos',
    image: "https://picsum.photos/seed/keyboard/400/300"
  },
  {
    id: 5,
    name: "Placa Mãe Z790 Elite",
    description: "Suporte para DDR5, PCIe 5.0 e múltiplas entradas M.2 para máxima velocidade.",
    price: 2100.00,
    category: 'Componentes',
    image: "https://picsum.photos/seed/motherboard/400/300"
  },
  {
    id: 6,
    name: "Mouse Precision Wireless",
    description: "Sensor de alta precisão, bateria de longa duração e ergonomia avançada.",
    price: 450.00,
    category: 'Periféricos',
    image: "https://picsum.photos/seed/mouse/400/300"
  }
];
