// src/app/product/[slug]/page.tsx
import { getProductBySlug, getAllProducts, getProductsByCategory } from '@/lib/products';
import { Container } from '@/components/Container';
import { ProductCard } from '@/components/ProductCard';
import { Button } from '@/components/Button';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ChevronRight, Heart, ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

// Generate static params for all products
export async function generateStaticParams() {
  const products = getAllProducts();
  
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug);
  
  if (!product) {
    notFound();
  }
  
  // Get related products from the same category
  const relatedProducts = getProductsByCategory(product.category)
    .filter(p => p.id !== product.id)
    .slice(0, 3);

  return (
    <>
    <Header/>
    <div className="bg-white py-6">
      
      <Container>
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm mb-8">
          <Link href="/" className="text-gray-500 hover:text-green-700">Home</Link>
          {/* <ChevronRight className="w-4 h-4 text-gray-400" /> */}
          {/* <Link href="/category/fruits" className="text-gray-500 hover:text-green-700">Category</Link> */}
          <ChevronRight className="w-4 h-4 text-gray-400" />
          <Link href={`/category/${product.category}`} className="text-gray-500 hover:text-green-700">
            {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
          </Link>
          <ChevronRight className="w-4 h-4 text-gray-400" />
          <span className="text-gray-900">{product.name}</span>
        </div>
      
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="relative rounded-lg overflow-hidden shadow-lg">
            <div className="aspect-square bg-gray-100 flex items-center justify-center">
              <div className="text-green-800 text-xl">Product Image</div>
              {/* <Image
                src={product.image}
                alt={product.name}
                fill
                style={{ objectFit: 'cover' }}
                priority
              /> */}
            </div>
            {product.badge && (
              <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-md text-xs font-semibold">
                {product.badge}
              </div>
            )}
          </div>
          
          {/* Product Details */}
          <div className="flex flex-col">
            <h1 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {product.name}
            </h1>
            
            <p className="text-2xl font-bold text-green-700 mb-6">
              {product.price}
            </p>
            
            <div className="prose max-w-none mb-8">
              <p className="text-gray-700 mb-6">{product.fullDescription || product.description}</p>
              
              {product.origin && (
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-gray-600 font-medium">Origin:</span> 
                  <span className="text-gray-800">{product.origin}</span>
                </div>
              )}
              
              {product.nutrition && (
                <div className="mb-8">
                  <h3 className="text-gray-800 font-semibold mb-3">Nutrition Information</h3>
                  <div className="bg-gray-50 p-4 rounded-lg grid grid-cols-2 gap-4">
                    {product.nutrition.calories && (
                      <div className="flex flex-col">
                        <span className="text-gray-500 text-sm">Calories</span>
                        <span className="text-gray-900 font-medium">{product.nutrition.calories}</span>
                      </div>
                    )}
                    {product.nutrition.protein && (
                      <div className="flex flex-col">
                        <span className="text-gray-500 text-sm">Protein</span>
                        <span className="text-gray-900 font-medium">{product.nutrition.protein}g</span>
                      </div>
                    )}
                    {product.nutrition.carbs && (
                      <div className="flex flex-col">
                        <span className="text-gray-500 text-sm">Carbs</span>
                        <span className="text-gray-900 font-medium">{product.nutrition.carbs}g</span>
                      </div>
                    )}
                    {product.nutrition.fat && (
                      <div className="flex flex-col">
                        <span className="text-gray-500 text-sm">Fat</span>
                        <span className="text-gray-900 font-medium">{product.nutrition.fat}g</span>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
            
            <div className="mt-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-md transition-colors duration-300 flex items-center justify-center gap-2 flex-1"
                >
                  <ShoppingCart className="w-5 h-5" />
                  Add to Cart
                </Button>
                <Button 
                  variant="outline" 
                  className="border border-gray-300 text-gray-700 hover:bg-gray-50 font-semibold py-3 px-6 rounded-md transition-colors duration-300 flex items-center justify-center gap-2"
                >
                  <Heart className="w-5 h-5" />
                  Save for Later
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-20">
            <h2 className="font-display text-2xl font-semibold text-gray-900 mb-8">
              You May Also Like
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}
      </Container>
    </div>
    <Footer/>
    </>

  );
}