export interface FurnitureSwatch {
  id: string;
  name: string;
  colorA: string; // Cor superior/esquerda da divisão diagonal
  colorB: string; // Cor inferior/direita da divisão diagonal
  primaryColor: number;
  secondaryColor: number;
  accentColor?: number;
  isCash?: boolean; // Mostra o selinho verde de SimCash
}

export const FURNITURE_SWATCHES: Record<string, FurnitureSwatch[]> = {
  sofa: [
    {
      id: 'sofa_blue_oak',
      name: 'Azul Real & Carvalho',
      colorA: '#1d4ed8',
      colorB: '#deb887',
      primaryColor: 0x1d4ed8,
      secondaryColor: 0xdeb887,
    },
    {
      id: 'sofa_honey_cream',
      name: 'Mostarda & Creme',
      colorA: '#d97706',
      colorB: '#f5f0ea',
      primaryColor: 0xd97706,
      secondaryColor: 0xf5f0ea,
    },
    {
      id: 'sofa_charcoal_black',
      name: 'Carvão & Preto Fosco',
      colorA: '#27272a',
      colorB: '#18181b',
      primaryColor: 0x27272a,
      secondaryColor: 0x18181b,
    },
    {
      id: 'sofa_emerald_walnut',
      name: 'Verde Esmeralda & Nogueira',
      colorA: '#047857',
      colorB: '#3e2723',
      primaryColor: 0x047857,
      secondaryColor: 0x3e2723,
    },
    {
      id: 'sofa_rose_gold',
      name: 'Rosa Pétala & Dourado',
      colorA: '#be185d',
      colorB: '#d4af37',
      primaryColor: 0xbe185d,
      secondaryColor: 0xd4af37,
      isCash: true,
    },
    {
      id: 'sofa_pure_white',
      name: 'Branco Minimalista & Prata',
      colorA: '#ffffff',
      colorB: '#d1d5db',
      primaryColor: 0xffffff,
      secondaryColor: 0xd1d5db,
    },
  ],
  bed: [
    {
      id: 'bed_navy_oak',
      name: 'Azul Marinho & Carvalho',
      colorA: '#1e3a8a',
      colorB: '#deb887',
      primaryColor: 0x1e3a8a,
      secondaryColor: 0xdeb887,
    },
    {
      id: 'bed_beige_sand',
      name: 'Linho Bege & Areia',
      colorA: '#e5dec9',
      colorB: '#8d6e63',
      primaryColor: 0xe5dec9,
      secondaryColor: 0x8d6e63,
    },
    {
      id: 'bed_charcoal_dark',
      name: 'Grafite & Madeira Escura',
      colorA: '#334155',
      colorB: '#27272a',
      primaryColor: 0x334155,
      secondaryColor: 0x27272a,
    },
    {
      id: 'bed_sage_birch',
      name: 'Verde Sálvia & Bétula',
      colorA: '#15803d',
      colorB: '#fef3c7',
      primaryColor: 0x15803d,
      secondaryColor: 0xfef3c7,
    },
    {
      id: 'bed_burgundy_gold',
      name: 'Vinho Nobre & Ouro',
      colorA: '#881337',
      colorB: '#d4af37',
      primaryColor: 0x881337,
      secondaryColor: 0xd4af37,
      isCash: true,
    },
    {
      id: 'bed_snow_white',
      name: 'Branco Neve',
      colorA: '#ffffff',
      colorB: '#f1f5f9',
      primaryColor: 0xffffff,
      secondaryColor: 0xf1f5f9,
    },
  ],
  table: [
    {
      id: 'table_oak',
      name: 'Carvalho Claro',
      colorA: '#deb887',
      colorB: '#ffffff',
      primaryColor: 0xdeb887,
      secondaryColor: 0xffffff,
    },
    {
      id: 'table_walnut',
      name: 'Nogueira Escura',
      colorA: '#4a2c11',
      colorB: '#18181b',
      primaryColor: 0x4a2c11,
      secondaryColor: 0x18181b,
    },
    {
      id: 'table_marble',
      name: 'Mármore Carrara & Ouro',
      colorA: '#f8fafc',
      colorB: '#d4af37',
      primaryColor: 0xf8fafc,
      secondaryColor: 0xd4af37,
      isCash: true,
    },
    {
      id: 'table_scandi',
      name: 'Nórdico Branco & Freixo',
      colorA: '#ffffff',
      colorB: '#e2d7c5',
      primaryColor: 0xffffff,
      secondaryColor: 0xe2d7c5,
    },
  ],
  chair: [
    {
      id: 'chair_wood_blue',
      name: 'Estofado Azul & Madeira',
      colorA: '#1d4ed8',
      colorB: '#deb887',
      primaryColor: 0x1d4ed8,
      secondaryColor: 0xdeb887,
    },
    {
      id: 'chair_wood_beige',
      name: 'Estofado Bege & Carvalho',
      colorA: '#f5f0ea',
      colorB: '#8d6e63',
      primaryColor: 0xf5f0ea,
      secondaryColor: 0x8d6e63,
    },
    {
      id: 'chair_black_leather',
      name: 'Couro Preto & Nogueira',
      colorA: '#18181b',
      colorB: '#3e2723',
      primaryColor: 0x18181b,
      secondaryColor: 0x3e2723,
    },
    {
      id: 'chair_mustard_gold',
      name: 'Mostarda Vintage',
      colorA: '#f59e0b',
      colorB: '#d4af37',
      primaryColor: 0xf59e0b,
      secondaryColor: 0xd4af37,
      isCash: true,
    },
  ],
  tv: [
    {
      id: 'tv_black_oak',
      name: 'Preto Gloss & Rack Carvalho',
      colorA: '#18181b',
      colorB: '#deb887',
      primaryColor: 0x18181b,
      secondaryColor: 0xdeb887,
    },
    {
      id: 'tv_black_walnut',
      name: 'Preto & Madeira Escura',
      colorA: '#09090b',
      colorB: '#3e2723',
      primaryColor: 0x09090b,
      secondaryColor: 0x3e2723,
    },
    {
      id: 'tv_white_marble',
      name: 'Branco Luxo & Mármore',
      colorA: '#f8fafc',
      colorB: '#d1d5db',
      primaryColor: 0xf8fafc,
      secondaryColor: 0xd1d5db,
      isCash: true,
    },
  ],
  default: [
    {
      id: 'default_1',
      name: 'Carvalho Clássico',
      colorA: '#deb887',
      colorB: '#f5f0ea',
      primaryColor: 0xdeb887,
      secondaryColor: 0xf5f0ea,
    },
    {
      id: 'default_2',
      name: 'Nogueira Moderna',
      colorA: '#4a2c11',
      colorB: '#27272a',
      primaryColor: 0x4a2c11,
      secondaryColor: 0x27272a,
    },
    {
      id: 'default_3',
      name: 'Grafite & Metal',
      colorA: '#334155',
      colorB: '#94a3b8',
      primaryColor: 0x334155,
      secondaryColor: 0x94a3b8,
    },
    {
      id: 'default_4',
      name: 'Azul Nórdico & Branco',
      colorA: '#2563eb',
      colorB: '#ffffff',
      primaryColor: 0x2563eb,
      secondaryColor: 0xffffff,
    },
    {
      id: 'default_5',
      name: 'Dourado Real & Mármore',
      colorA: '#d4af37',
      colorB: '#f8fafc',
      primaryColor: 0xd4af37,
      secondaryColor: 0xf8fafc,
      isCash: true,
    },
    {
      id: 'default_6',
      name: 'Verde Floresta & Madeira',
      colorA: '#15803d',
      colorB: '#8d6e63',
      primaryColor: 0x15803d,
      secondaryColor: 0x8d6e63,
    },
  ],
};

export function getSwatchesForType(type: string): FurnitureSwatch[] {
  if (type.includes('sofa') || type.includes('armchair')) {
    return FURNITURE_SWATCHES.sofa;
  }
  if (type.includes('bed')) {
    return FURNITURE_SWATCHES.bed;
  }
  if (type.includes('table') || type.includes('desk') || type.includes('island')) {
    return FURNITURE_SWATCHES.table;
  }
  if (type.includes('chair') || type.includes('stool')) {
    return FURNITURE_SWATCHES.chair;
  }
  if (type.includes('tv') || type.includes('computer')) {
    return FURNITURE_SWATCHES.tv;
  }
  return FURNITURE_SWATCHES.default;
}
