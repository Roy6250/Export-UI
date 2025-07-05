import Agriculture from "../images/organic.webp"
import exoticFruits from '@/images/categories/exotic-fruits.jpg';
import handicrafts from '@/images/categories/handicrafts.jpg';
import processed from '@/images/categories/processed.jpeg';
import spice from '@/images/categories/spices.jpg';
import pulses from '@/images/categories/pulses.jpg'; // rename this file to something cleaner like `grains.jpg` if possible

export const categories = [
  {
    name: "Spices",
    slug: "spices",
    image: spice,
    description: "Aromatic Indian spices to elevate your culinary experience.",
    icon: "🌶️",
    path: "/category/spices"
  },
  {
    name: "Pulses & Grains",
    slug: "pulses-grains",
    image: pulses,
    description: "Nutritious and high-quality pulses and grains for wholesome meals.",
    icon: "🥣",
    path: "/category/pulses-grains"
  },
  {
    name: "Processed Foods",
    slug: "processed-foods",
    image: processed,
    description: "Convenient and ready-to-eat food products for modern living.",
    icon: "🍱",
    path: "/category/processed-foods"
  },
  {
    name: "Fruits & Vegetables",
    slug: "fruits-vegetables",
    image: exoticFruits,
    description: "Fresh and organic fruits and vegetables for a healthier lifestyle.",
    icon: "🍎",
    path: "/category/fruits-vegetables"
  },
  {
    name: "Indian Handcrafts",
    slug: "indian-handcrafts",
    image: handicrafts,
    description: "Authentic handmade Indian crafts that showcase cultural heritage.",
    icon: "🪔",
    path: "/category/indian-handcrafts"
  }
];



const products = [
  // Fruits & Vegetables
  {
    id: '1',
    slug: 'premium-mangoes',
    name: 'Premium Mangoes',
    description: 'Juicy and sweet mangoes, bursting with tropical flavor. Perfect for smoothies and desserts.',
    fullDescription: 'Our premium mangoes are handpicked at the peak of ripeness, ensuring the perfect balance of sweetness and juiciness.',
    price: '$4.99/lb',
    category: 'fruits-vegetables',
    badge: 'Best Seller',
    origin: 'Mexico',
    image: '/images/products/mangoes.jpg',
    nutrition: {
      calories: '60 per 100g',
      protein: '0.8g',
      carbs: '15g',
      fat: '0.4g'
    }
  },
  {
    id: '2',
    slug: 'creamy-avocados',
    name: 'Creamy Avocados',
    description: 'Rich and buttery avocados, perfect for guacamole or spreading on toast.',
    price: '$3.99/each',
    category: 'fruits-vegetables',
    badge: 'Organic',
    image: '/images/products/avocados.jpg'
  },
  {
    id: '3',
    slug: 'exotic-dragon-fruit',
    name: 'Exotic Dragon Fruit',
    description: 'Vibrant and refreshing dragon fruit, with a mild, slightly sweet flavor.',
    price: '$7.99/each',
    category: 'fruits-vegetables',
    badge: 'Limited',
    image: '/images/products/dragon-fruit.jpg'
  },

  // Spices
  {
    id: '4',
    slug: 'turmeric-powder',
    name: 'Organic Turmeric Powder',
    description: 'Pure, earthy turmeric powder packed with curcumin for natural healing.',
    price: '$2.99/100g',
    category: 'spices',
    badge: 'Organic',
    image: '/images/products/turmeric.jpg'
  },
  {
    id: '5',
    slug: 'red-chilli-flakes',
    name: 'Red Chilli Flakes',
    description: 'Hot and flavorful chilli flakes to spice up your dishes.',
    price: '$1.49/50g',
    category: 'spices',
    badge: 'Hot',
    image: '/images/products/chilli-flakes.jpg'
  },

  // Pulses & Grains
  {
    id: '6',
    slug: 'basmati-rice',
    name: 'Premium Basmati Rice',
    description: 'Long-grain, aromatic basmati rice perfect for biryani and pulao.',
    price: '$6.49/1kg',
    category: 'pulses-grains',
    badge: 'Aromatic',
    image: '/images/products/basmati-rice.jpg'
  },
  {
    id: '7',
    slug: 'organic-chickpeas',
    name: 'Organic Chickpeas',
    description: 'Protein-rich chickpeas, ideal for curries and salads.',
    price: '$3.29/500g',
    category: 'pulses-grains',
    badge: 'Protein Rich',
    image: '/images/products/chickpeas.jpg'
  },
  {
    id: '8',
    slug: 'whole-moong',
    name: 'Whole Moong Dal',
    description: 'Fiber-packed green gram, great for sprouts and dals.',
    price: '$2.89/500g',
    category: 'pulses-grains',
    badge: 'Fiber Rich',
    image: '/images/products/moong.jpg'
  },

  // Specialty Beverages
  {
    id: '9',
    slug: 'sea-buckthorn-juice',
    name: 'Sea Buckthorn Juice',
    description: 'A nutrient-rich superjuice loaded with Omega 7 and antioxidants.',
    price: '$12.99/500ml',
    category: 'processed-foods',
    badge: 'Superfood',
    image: '/images/products/sea-buckthorn.jpg'
  },
  {
    id: '10',
    slug: 'herbal-detox-tea',
    name: 'Herbal Detox Tea',
    description: 'A blend of herbs that helps cleanse and refresh your body.',
    price: '$5.49/100g',
    category: 'processed-foods',
    badge: 'Caffeine Free',
    image: '/images/products/detox-tea.jpg'
  },

  // Indian Handicrafts
  {
    id: '11',
    slug: 'brass-pooja-lamp',
    name: 'Handcrafted Brass Oil Lamp',
    description: 'A beautifully carved brass lamp perfect for pooja and decor.',
    price: '$24.99',
    category: 'indian-handcrafts',
    badge: 'Artisan Made',
    image: '/images/products/brass-lamp.jpg'
  },
  {
    id: '12',
    slug: 'wooden-elephant-statue',
    name: 'Wooden Elephant Statue',
    description: 'Intricately carved elephant figurine symbolizing strength and wisdom.',
    price: '$18.75',
    category: 'indian-handcrafts',
    badge: 'Handmade',
    image: '/images/products/elephant.jpg'
  },

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