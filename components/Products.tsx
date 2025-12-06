import React from 'react';
import { PRODUCTS } from '../constants';
import { Product } from '../types';
import { ArrowRight } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

interface ProductsProps {
  onProductClick: (product: Product) => void;
}

const Products: React.FC<ProductsProps> = ({ onProductClick }) => {
  return (
    <section className="py-20 bg-white min-h-screen pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <RevealOnScroll className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Essentials</h2>
          <p className="text-lg text-slate-500 max-w-xl mx-auto">
            Explore our range of high-quality, durable, and safe products designed for your daily convenience.
          </p>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {PRODUCTS.map((product, idx) => (
            <RevealOnScroll key={product.id} delay={idx * 100} className="h-full">
              <div 
                onClick={() => onProductClick(product)}
                className="group h-full bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-2xl hover:scale-[1.02] hover:border-brand-100 transition-all duration-300 flex flex-col overflow-hidden cursor-pointer"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    loading="lazy"
                    className="w-full h-full object-cover transform group-hover:scale-110 group-hover:shadow-md transition-all duration-500 ease-out origin-center"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
                  <div className="absolute bottom-4 right-4 bg-white hover:bg-brand-600 hover:text-white px-4 py-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 font-medium text-sm flex items-center gap-1 text-slate-900">
                    View Options <ArrowRight size={14} />
                  </div>
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-brand-600 transition-colors">
                      {product.name}
                    </h3>
                  </div>
                  
                  <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-2">
                    {product.description}
                  </p>

                  <div className="mt-auto pt-4 border-t border-slate-50 flex justify-between items-center">
                     <span className="text-sm text-slate-400">Starting from</span>
                     <span className="text-lg font-bold text-slate-900">Rs. {product.options[0].price}</span>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Products;