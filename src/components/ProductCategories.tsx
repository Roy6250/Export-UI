// src/components/ProductCategories.tsx
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface Category {
  name: string;
  slug: string;
  description: string;
  featured?: boolean;
}

export function ProductCategories() {
  const categories: Category[] = [
    { name: 'Fruits', slug: 'fruits', description: 'Fresh and juicy fruits from around the world', featured: true },
    { name: 'Vegetables', slug: 'vegetables', description: 'Farm-fresh vegetables for your daily needs', featured: true },
    { name: 'Exotic', slug: 'exotic', description: 'Rare and unique fruits from tropical regions', featured: true },
    { name: 'Spices', slug: 'spices', description: 'Premium spices to enhance your culinary creations' },
    { name: 'Pulses', slug: 'pulses', description: 'Protein-rich lentils and beans' },
    { name: 'Agro Feed', slug: 'agro-feed', description: 'Quality feed for agricultural purposes' },
  ];

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-3xl font-bold text-gray-900 mb-8 text-center">
          Browse Our Categories
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {categories.filter(cat => cat.featured).map((category) => (
            <Link 
              key={category.slug}
              href={`/shop?category=${category.slug}`}
              className="group block bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all"
            >
              <div className="h-40 bg-gray-100 relative">
                {/* Replace with actual category image */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xl font-medium text-green-800">{category.name}</span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-medium text-lg text-gray-900 mb-1 group-hover:text-green-700 transition-colors">
                  {category.name}
                </h3>
                <p className="text-gray-600 text-sm">{category.description}</p>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="bg-gray-50 rounded-lg shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-6">
              <h3 className="font-display text-xl font-bold text-gray-900 mb-4">
                All Categories
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {categories.map((category) => (
                  <Link 
                    key={category.slug}
                    href={`/shop?category=${category.slug}`}
                    className="flex items-center justify-between group hover:bg-gray-100 p-2 rounded-md transition-colors"
                  >
                    <span className="font-medium text-gray-700 group-hover:text-green-700 transition-colors">{category.name}</span>
                    <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-green-600 transition-colors" />
                  </Link>
                ))}
              </div>
            </div>
            <div className="bg-gray-900 text-white p-6 flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-3">Download Our Catalog</h3>
              <p className="text-gray-300 mb-6">Get our complete product catalog with pricing and availability.</p>
              <Link 
                href="/brochure.pdf"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded transition-colors self-start"
              >
                Download Brochure
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}