export interface GreekMenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  category: 'Entradas' | 'Pratos Principais' | 'Sobremesas' | 'Bebidas';
  image: string;
}

export const GREEK_MENU: GreekMenuItem[] = [
  {
    id: 1,
    name: "Moussaka Tradicional",
    description: "Camadas de berinjela, batata e carne moída temperada, cobertas com molho béchamel cremoso.",
    price: 68.00,
    category: 'Pratos Principais',
    image: "https://picsum.photos/seed/moussaka/400/300"
  },
  {
    id: 2,
    name: "Salada Horiatiki",
    description: "A autêntica salada grega com tomates suculentos, pepino, cebola roxa, azeitonas Kalamata e queijo Feta.",
    price: 42.00,
    category: 'Entradas',
    image: "https://picsum.photos/seed/greeksalad/400/300"
  },
  {
    id: 3,
    name: "Souvlaki de Cordeiro",
    description: "Espetinhos de cordeiro grelhados na brasa, servidos com pão pita artesanal e molho tzatziki.",
    price: 55.00,
    category: 'Pratos Principais',
    image: "https://picsum.photos/seed/souvlaki/400/300"
  },
  {
    id: 4,
    name: "Baklava de Pistache",
    description: "Massa folhada crocante com nozes, pistache e mel, aromatizada com canela e cravo.",
    price: 28.00,
    category: 'Sobremesas',
    image: "https://picsum.photos/seed/baklava/400/300"
  },
  {
    id: 5,
    name: "Tzatziki com Pita",
    description: "Iogurte grego cremoso com pepino, alho e azeite de oliva extra virgem.",
    price: 24.00,
    category: 'Entradas',
    image: "https://picsum.photos/seed/tzatziki/400/300"
  },
  {
    id: 6,
    name: "Vinho Retsina",
    description: "Vinho branco grego tradicional com um toque sutil de resina de pinheiro.",
    price: 85.00,
    category: 'Bebidas',
    image: "https://picsum.photos/seed/retsina/400/300"
  }
];
