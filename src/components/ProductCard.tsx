import Image from 'next/image';
import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';

type Product = {
  id: string;
  slug: string;
  name: string;
  description: string;
  price: string;
  image?: any;
  category: string;
  badge?: string;
};

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <Link href={`/product/${product.slug}`} className="block">
        <div className="relative aspect-square bg-gray-100">
          {product.image ? (
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-400">
              Product Image
            </div>
          )}
          
          {product.badge && (
            <div className="absolute top-3 right-3 bg-green-600 text-white text-xs font-semibold px-2 py-1 rounded">
              {product.badge}
            </div>
          )}
        </div>
        
        <div className="p-4">
          <h3 className="font-semibold text-lg text-gray-900 mb-2">{product.name}</h3>
          <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
          
          <div className="flex items-center justify-between">
            <span className="font-bold text-green-700">{product.price}</span>
            
            <button className="bg-green-100 text-green-700 p-2 rounded-full hover:bg-green-200 transition-colors">
              <ShoppingCart className="w-5 h-5" />
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
}