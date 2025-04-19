
import { Product } from "../types";

export const products: Product[] = [
  {
    id: 1,
    name: "Notebook Ultra Performance XPS",
    description: "Notebook de alta performance com processador Intel Core i7, 16GB RAM, SSD 512GB e tela 15.6\" Full HD.",
    price: 4999.99,
    discountPrice: 4599.99,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&q=80&w=1471",
    category: "notebooks",
    stock: 15,
    rating: 4.8,
    featured: true,
    specs: {
      processor: "Intel Core i7 11ª Geração",
      memory: "16GB DDR4",
      storage: "512GB SSD NVMe",
      graphics: "NVIDIA GeForce RTX 3050 4GB",
      screen: "15.6\" Full HD IPS",
      os: "Windows 11 Pro"
    }
  },
  {
    id: 2,
    name: "Monitor UltraWide 34\"",
    description: "Monitor ultrawide com tela de 34 polegadas, resolução WQHD, taxa de atualização de 144Hz e tempo de resposta de 1ms.",
    price: 2499.99,
    image: "https://images.unsplash.com/photo-1527443195645-1133f7f28990?auto=format&fit=crop&q=80&w=1470",
    category: "monitores",
    stock: 8,
    rating: 4.6,
    specs: {
      size: "34 polegadas",
      resolution: "3440 x 1440 WQHD",
      refreshRate: "144Hz",
      responseTime: "1ms",
      panelType: "IPS",
      ports: "2x HDMI, 1x DisplayPort, USB Hub"
    }
  },
  {
    id: 3,
    name: "Teclado Mecânico RGB",
    description: "Teclado mecânico com switches Blue, iluminação RGB customizável e layout ABNT2.",
    price: 349.99,
    discountPrice: 299.99,
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&q=80&w=1465",
    category: "perifericos",
    stock: 25,
    rating: 4.5,
    specs: {
      type: "Mecânico",
      switches: "Blue",
      lighting: "RGB Customizável",
      layout: "ABNT2",
      connection: "USB",
      extraKeys: "Multimídia"
    }
  },
  {
    id: 4,
    name: "Mouse Gamer Sem Fio",
    description: "Mouse gamer sem fio com sensor óptico de 16000 DPI, 6 botões programáveis e bateria de longa duração.",
    price: 249.99,
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&q=80&w=1467",
    category: "perifericos",
    stock: 20,
    rating: 4.7,
    featured: true,
    specs: {
      sensor: "Óptico 16000 DPI",
      buttons: "6 programáveis",
      connection: "Sem fio 2.4GHz / Bluetooth",
      battery: "Até 60 horas",
      rgb: "Sim, customizável",
      weight: "95g"
    }
  },
  {
    id: 5,
    name: "Processador AMD Ryzen 7",
    description: "Processador AMD Ryzen 7 5800X, 8 núcleos, 16 threads, frequência base de 3.8GHz e boost até 4.7GHz.",
    price: 1999.99,
    discountPrice: 1799.99,
    image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&q=80&w=1374",
    category: "componentes",
    stock: 12,
    rating: 4.9,
    specs: {
      model: "Ryzen 7 5800X",
      cores: "8 núcleos / 16 threads",
      frequency: "3.8GHz (base) / 4.7GHz (boost)",
      cache: "32MB L3",
      tdp: "105W",
      socket: "AM4"
    }
  },
  {
    id: 6,
    name: "Placa de Vídeo RTX 3070",
    description: "Placa de vídeo NVIDIA GeForce RTX 3070, 8GB GDDR6, suporte a Ray Tracing e DLSS.",
    price: 3999.99,
    image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&q=80&w=1470",
    category: "componentes",
    stock: 5,
    rating: 4.8,
    featured: true,
    specs: {
      chipset: "NVIDIA GeForce RTX 3070",
      memory: "8GB GDDR6",
      interface: "PCI Express 4.0",
      ports: "3x DisplayPort, 1x HDMI",
      powerConsumption: "220W",
      cooling: "Dupla ventilação"
    }
  },
  {
    id: 7,
    name: "SSD NVMe 1TB",
    description: "SSD NVMe M.2 com capacidade de 1TB, velocidade de leitura até 3500MB/s e escrita até 3000MB/s.",
    price: 799.99,
    discountPrice: 749.99,
    image: "https://images.unsplash.com/photo-1597338770339-e6cc873aa2b1?auto=format&fit=crop&q=80&w=1374",
    category: "componentes",
    stock: 30,
    rating: 4.7,
    specs: {
      capacity: "1TB",
      interface: "NVMe PCIe Gen3 x4",
      readSpeed: "Até 3500MB/s",
      writeSpeed: "Até 3000MB/s",
      format: "M.2 2280",
      tbw: "600 TBW"
    }
  },
  {
    id: 8,
    name: "Headset Gamer 7.1",
    description: "Headset gamer com som surround 7.1, microfone retrátil com cancelamento de ruído e iluminação RGB.",
    price: 399.99,
    image: "https://images.unsplash.com/photo-1612444530582-fc66183b16f7?auto=format&fit=crop&q=80&w=1448",
    category: "perifericos",
    stock: 18,
    rating: 4.5,
    specs: {
      sound: "Surround 7.1",
      microphone: "Retrátil com cancelamento de ruído",
      connection: "USB",
      lighting: "RGB Customizável",
      impedance: "32 Ohm",
      frequency: "20Hz - 20kHz"
    }
  },
  {
    id: 9,
    name: "Gabinete Gamer RGB",
    description: "Gabinete gamer mid-tower com painel frontal em malha, 4 fans RGB inclusos e suporte para placas de vídeo longas.",
    price: 499.99,
    discountPrice: 449.99,
    image: "https://images.unsplash.com/photo-1587202372616-b43abea06c2a?auto=format&fit=crop&q=80&w=1470",
    category: "componentes",
    stock: 10,
    rating: 4.6,
    specs: {
      type: "Mid-Tower",
      fans: "4x 120mm RGB",
      frontPanel: "Malha (Mesh)",
      sidepanel: "Vidro temperado",
      supportedMotherboards: "ATX, Micro-ATX, Mini-ITX",
      gpuLength: "Até 360mm"
    }
  },
  {
    id: 10,
    name: "Fonte de Alimentação 750W 80 Plus Gold",
    description: "Fonte de alimentação 750W com certificação 80 Plus Gold, totalmente modular e sistema de refrigeração silencioso.",
    price: 699.99,
    image: "https://images.unsplash.com/photo-1592664474566-38fe3cbc8bc9?auto=format&fit=crop&q=80&w=1374",
    category: "componentes",
    stock: 15,
    rating: 4.8,
    specs: {
      power: "750W",
      certification: "80 Plus Gold",
      type: "Totalmente modular",
      cooling: "Ventoinha 140mm",
      protection: "OVP, UVP, OCP, OPP, SCP",
      efficiency: "90% sob carga típica"
    }
  },
  {
    id: 11,
    name: "Kit Water Cooling 240mm",
    description: "Kit de refrigeração líquida com radiador de 240mm, dois fans RGB e bloco de CPU com iluminação customizável.",
    price: 899.99,
    discountPrice: 849.99,
    image: "https://images.unsplash.com/photo-1587202372634-35a1e2e2cd3c?auto=format&fit=crop&q=80&w=1470",
    category: "componentes",
    stock: 8,
    rating: 4.7,
    specs: {
      radiatorSize: "240mm",
      fans: "2x 120mm RGB",
      compatibility: "Intel e AMD",
      pumpSpeed: "2200 RPM",
      noise: "Até 28 dBA",
      rgb: "Controlador incluído"
    }
  },
  {
    id: 12,
    name: "Memória RAM 32GB DDR4 3600MHz",
    description: "Kit de memória RAM com 2x16GB, frequência de 3600MHz, latência CL16 e iluminação RGB.",
    price: 999.99,
    image: "https://images.unsplash.com/photo-1562976540-1502c2145186?auto=format&fit=crop&q=80&w=1374",
    category: "componentes",
    stock: 20,
    rating: 4.9,
    featured: true,
    specs: {
      capacity: "32GB (2x16GB)",
      type: "DDR4",
      speed: "3600MHz",
      timing: "16-18-18-38",
      voltage: "1.35V",
      lighting: "RGB sincronizável"
    }
  }
];

export const services = [
  {
    id: 1,
    name: "Montagem de Computador",
    description: "Serviço de montagem completa do seu computador com as peças que você escolher.",
    price: 150.00,
    category: "servicos",
    image: "https://images.unsplash.com/photo-1647427060118-4911c9821b82?auto=format&fit=crop&q=80&w=1470"
  },
  {
    id: 2,
    name: "Manutenção Preventiva",
    description: "Limpeza completa de hardware, troca de pasta térmica e verificação de componentes.",
    price: 120.00,
    category: "servicos",
    image: "https://images.unsplash.com/photo-1601737487795-dab272f52437?auto=format&fit=crop&q=80&w=1474"
  },
  {
    id: 3,
    name: "Instalação de Sistema Operacional",
    description: "Instalação e configuração do sistema operacional de sua escolha com drivers atualizados.",
    price: 80.00,
    category: "servicos",
    image: "https://images.unsplash.com/photo-1537498425277-c283d32ef9db?auto=format&fit=crop&q=80&w=1478"
  },
  {
    id: 4,
    name: "Recuperação de Dados",
    description: "Serviço de recuperação de dados em dispositivos de armazenamento com problemas.",
    price: 250.00,
    category: "servicos",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=1470"
  }
];

export const categories = [
  {
    id: 1,
    name: "Notebooks",
    slug: "notebooks",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&q=80&w=1471"
  },
  {
    id: 2,
    name: "Monitores",
    slug: "monitores",
    image: "https://images.unsplash.com/photo-1527443195645-1133f7f28990?auto=format&fit=crop&q=80&w=1470"
  },
  {
    id: 3,
    name: "Periféricos",
    slug: "perifericos",
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&q=80&w=1465"
  },
  {
    id: 4,
    name: "Componentes",
    slug: "componentes",
    image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&q=80&w=1374"
  },
  {
    id: 5,
    name: "Serviços",
    slug: "servicos",
    image: "https://images.unsplash.com/photo-1601737487795-dab272f52437?auto=format&fit=crop&q=80&w=1474"
  }
];

export const getProductById = (id: number): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};

export const getRelatedProducts = (product: Product, limit: number = 4): Product[] => {
  return products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, limit);
};
