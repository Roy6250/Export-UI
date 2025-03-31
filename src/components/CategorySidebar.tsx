import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

type Category = {
  name: string;
  slug: string;
  image?: string;
};

type CategorySidebarProps = {
  categories: Category[];
  activeCategory: string;
};

export function CategorySidebar({ categories, activeCategory }: CategorySidebarProps) {
  return (
    <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm">
      {categories.map((category, index) => (
        <Link 
          key={category.slug}
          href={`/category/${category.slug}`}
          className={`flex items-center justify-between px-6 py-4 transition-colors ${
            category.slug === activeCategory 
              ? 'bg-green-600 text-white hover:bg-green-700' 
              : index % 2 === 0 
                ? 'bg-white hover:bg-gray-100' 
                : 'bg-gray-50 hover:bg-gray-100'
          }`}
        >
          <span className="font-medium">{category.name}</span>
          <ChevronRight className={`w-5 h-5 ${category.slug === activeCategory ? 'text-white' : 'text-gray-400'}`} />
        </Link>
      ))}
    </div>
  );
}