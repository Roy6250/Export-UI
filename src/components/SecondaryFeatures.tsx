'use client'

import React from 'react';

interface ProductCategoryCardProps {
  title: string;
  description: string;
  icon: React.ReactNode; // If it's a React component (e.g., an SVG)
  image: any;
  slug: string;
}
import Image from 'next/image'

import { categories } from '@/lib/products';

const ProductCategoryCard: React.FC<ProductCategoryCardProps>= ({ title, description, icon, image,slug }) => {
  console.log(image)
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl">
      <div className="h-48  relative bg-orange-50 flex items-center justify-center">
        {image ? (
          <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />        ) : (
          <div className="text-orange-500 text-5xl">{icon}</div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <a 
          href={`/category/${slug}`}
          className="inline-flex items-center text-orange-600 font-medium hover:text-orange-700"
        >
          Learn More
          <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
    </div>
  );
};

export function SecondaryFeatures() {
  const firstCategorySlug = categories[0]?.slug;
  const href = `/category/${firstCategorySlug}`;
  console.log(categories)
  
  return (
    <section id="exports" className="bg-gradient-to-b from-green-200 to-green-100 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-orange-600 font-semibold uppercase tracking-wider">WHAT WE OFFER</span>
          <h2 className="text-4xl font-bold text-gray-900 mt-2">Our Product Categories</h2>
          <div className="w-16 h-1 bg-orange-500 mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <ProductCategoryCard 
              key={index}
              title={category.name}
              description={category.description}
              slug={category.slug}
              icon={category.icon}   image={category.image}       />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href={`/category/${categories[0].slug}`}            
            className="bg-black hover:bg-orange-700 text-white font-medium py-3 px-8 rounded-lg inline-block transition-colors duration-300"
          >
            View All Products
          </a>
        </div>
      </div>
    </section>
  );
}

export default SecondaryFeatures;