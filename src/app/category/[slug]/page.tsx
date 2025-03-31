import { Container } from '@/components/Container';
import { ProductCard } from '@/components/ProductCard';
import { CategorySidebar } from '@/components/CategorySidebar';
import { getAllCategories, getProductsByCategory } from '@/lib/products';
import { notFound } from 'next/navigation';
import { Download } from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/Header';
import { Footer } from '@/components/Footer';

// Generate static params for all categories
export async function generateStaticParams() {
  const categories = getAllCategories();
  
  return categories.map((category) => ({
    slug: category.slug,
  }));
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const categories = getAllCategories();
  const currentCategory = categories.find(cat => cat.slug === params.slug);
  
  if (!currentCategory) {
    notFound();
  }
  
  const products = getProductsByCategory(currentCategory.slug);
  
  return (
    <>
    <Header/>
    <div className="bg-white min-h-screen">
      <Container>
        <div className="py-6">
          <h1 className="font-display text-4xl font-bold text-green-800 mb-8">
            {currentCategory.name}
          </h1>
          
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Navigation */}
            <div className="w-full lg:w-64 flex-shrink-0">
              <CategorySidebar 
                categories={categories} 
                activeCategory={currentCategory.slug} 
              />
              
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
              {products.length === 0 ? (
                <div className="text-center py-20">
                  <p className="text-xl text-gray-600">No products found in this category.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
      <Footer/>

    </div>
    </>
  );
}