'use client'

import React from 'react';

const ProductCategoryCard = ({ title, description, icon, imageUrl,slug }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl">
      <div className="h-48 bg-orange-50 flex items-center justify-center">
        {imageUrl ? (
          <img src={imageUrl} alt={title} className="max-h-32 w-auto" />
        ) : (
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
  const categories = [
    {
      title: "Fruits",
      description: "Fresh and juicy fruits from around the world",
      slug:'fruits',
      icon: "🧁"
    },
    {
      title: "Spices",
      slug:'spices',
      description: "Authentic Indian spices with distinctive aroma and flavor profiles, carefully selected to enhance your cooking experience.",
      icon: "🌶️"
    },
    {
      title: "Vegetables",
      slug:'vegetables',
      description: "High-quality staple grains including rice, wheat, and millets, sourced directly from farmers for maximum freshness.",
      icon: "🌾"
    },
    {
      title: "Exotic",
      slug:'exotic',
      description: "Specially blended teas combining strength, aroma and expertise, offering a complete tea solution for connoisseurs.",
      icon: "🍵"
    },
    {
      title: "Pulses",
      slug:'pulses',
      description: "Original, high-quality pulses and lentils that meet international standards, perfect for nutritious meals.",
      icon: "🥣"
    },
    {
      title: "Agro Feed",
      slug:'agro-feed',
      description: "Premium soybean meal and agricultural feed products for livestock, known for consistent quality and nutritional value.",
      icon: "🌱"
    }
  ];

  return (
    <section className="bg-gradient-to-b from-green-200 to-green-100 py-16">
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
              title={category.title}
              description={category.description}
              slug={category.slug}
              icon={category.icon} imageUrl={undefined}            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="/category/fruits" 
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