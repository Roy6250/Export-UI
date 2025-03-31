// src/lib/types.ts
export interface Product {
    id: number;
    slug: string;
    name: string;
    description: string;
    fullDescription?: string;
    price: string;
    priceValue: number;
    image: string;
    category: string;
    badge?: string;
    nutrition?: {
      calories?: number;
      protein?: number;
      carbs?: number;
      fat?: number;
    };
    origin?: string;
    inStock: boolean;
    featured?: boolean;
  }