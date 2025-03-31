// src/app/product/page.tsx
import { Container } from '@/components/Container';
import { ProductCard } from '@/components/ProductCard';
import { getAllProducts, getProductsByCategory } from '@/lib/products';
import Link from 'next/link';
import { ChevronRight, Download } from 'lucide-react';
import { Suspense } from 'react';

export default function ShopPage({
  searchParams,
}: {
  searchParams: { category?: string };
}) {
  const category = searchParams.category || 'all';
  const products = category === 'all' ? getAllProducts() : getProductsByCategory(category);
  
  const categories = [
    { name: 'Fruits', slug: 'fruits', active: category === 'fruits' },
    { name: 'Vegetables', slug: 'vegetables', active: category === 'vegetables' },
    { name: 'Exotic', slug: 'exotic', active: category === 'exotic' },
    { name: 'Organic', slug: 'organic', active: category === 'organic' },
    { name: 'Dried Fruits', slug: 'dried-fruits', active: category === 'dried-fruits' },
    { name: 'Nuts', slug: 'nuts', active: category === 'nuts' },
  ];

  return (
    <div className="bg-white min-h-screen">
      <Container>
        <div className="py-12">
          <h1 className="font-display text-4xl font-bold text-green-800 mb-8">
            Our Products
          </h1>
          
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Navigation */}
            <div className="w-full lg:w-64 flex-shrink-0">
              <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm">
                {categories.map((cat, index) => (
                  <Link 
                    key={cat.slug}
                    href={`/shop?category=${cat.slug}`}
                    className={`flex items-center justify-between px-6 py-4 hover:bg-gray-100 transition-colors ${
                      cat.active ? 'bg-orange-500 text-white hover:bg-orange-600' : 
                      index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                    }`}
                  >
                    <span className="font-medium">{cat.name}</span>
                    <ChevronRight className="w-5 h-5" />
                  </Link>
                ))}
              </div>
              
              <div className="mt-6">
                <Link 
                  href="/brochure.pdf"
                  className="flex items-center gap-2 bg-gray-800 text-white px-4 py-3 rounded hover:bg-gray-700 transition-colors"
                >
                  <Download className="w-5 h-5" />
                  <span>Download Brochure</span>
                </Link>
              </div>
            </div>
            
            {/* Main Content */}
            <div className="flex-1">
              <Suspense fallback={<div>Loading products...</div>}>
                {products.length === 0 ? (
                  <div className="text-center py-20">
                    <p className="text-xl text-gray-600">No products found in this category.</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                    {products.map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </div>
                )}
              </Suspense>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}