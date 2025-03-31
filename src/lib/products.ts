// Example product data structure
const categories = [
  { name: 'Fruits', slug: 'fruits', image: '/images/categories/fruits.jpg' },
  { name: 'Vegetables', slug: 'vegetables', image: '/images/categories/vegetables.jpg' },
  { name: 'Exotic', slug: 'exotic', image: '/images/categories/exotic.jpg' },
  { name: 'Organic', slug: 'organic', image: '/images/categories/organic.jpg' },
  { name: 'Dried Fruits', slug: 'dried-fruits', image: '/images/categories/dried-fruits.jpg' },
  { name: 'Nuts', slug: 'nuts', image: '/images/categories/nuts.jpg' },
];

const products = [
  {
    id: '1',
    slug: 'premium-mangoes',
    name: 'Premium Mangoes',
    description: 'Juicy and sweet mangoes, bursting with tropical flavor. Perfect for smoothies and desserts.',
    fullDescription: 'Our premium mangoes are handpicked at the peak of ripeness, ensuring the perfect balance of sweetness and juiciness. These mangoes are sourced from the finest orchards and deliver an authentic tropical taste experience.',
    price: '$4.99/lb',
    category: 'fruits',
    badge: 'Best Seller',
    origin: 'Mexico',
    nutrition: {
      calories: '60 per 100g',
      protein: '0.8',
      carbs: '15',
      fat: '0.4'
    }
  },
  {
    id: '2',
    slug: 'creamy-avocados',
    name: 'Creamy Avocados',
    description: 'Rich and buttery avocados, perfect for guacamole or spreading on toast.',
    price: '$3.99/each',
    category: 'fruits',
    badge: 'Organic',
  },
  {
    id: '3',
    slug: 'exotic-dragon-fruit',
    name: 'Exotic Dragon Fruit',
    description: 'Vibrant and refreshing dragon fruit, with a mild, slightly sweet flavor.',
    price: '$7.99/each',
    category: 'exotic',
    badge: 'Limited',
  },
  // Add more products as needed
];

export function getAllCategories() {
  return categories;
}

export function getAllProducts() {
  return products;
}

export function getProductsByCategory(category: string) {
  return products.filter(product => product.category === category);
}

export function getProductBySlug(slug: string) {
  return products.find(product => product.slug === slug);
}

export function getFeaturedProducts(limit: number = 3) {
  return products
    .filter(product => product.badge === 'Best Seller' || product.badge === 'Limited')
    .slice(0, limit);
}