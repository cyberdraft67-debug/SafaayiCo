import React from 'react';
import { ArrowRight, ShieldCheck, ShoppingBag } from 'lucide-react';
import { WHATSAPP_URL } from '../constants';
import RevealOnScroll from './RevealOnScroll';

interface HeroProps {
  onNavigateProducts: () => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigateProducts }) => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-brand-50 rounded-full blur-3xl opacity-50 -z-10"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] bg-indigo-50 rounded-full blur-3xl opacity-50 -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          <RevealOnScroll className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-800 text-xs font-semibold uppercase tracking-wide mb-6">
              <ShieldCheck size={14} />
              Zero Health Risk
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-[1.1] mb-6">
              Essential Purity for <br />
              <span className="text-brand-600">Everyday Living</span>
            </h1>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              SafaayiCo brings you premium non-food essentials designed for safety and hygiene. 
              From facial tissues to storage solutions, we ensure quality in every sheet and bag.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-xl font-semibold hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                Order via WhatsApp <ArrowRight size={18} />
              </a>
              <button 
                onClick={onNavigateProducts}
                className="group inline-flex items-center justify-center gap-2 bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-xl font-semibold hover:bg-slate-50 hover:border-brand-300 hover:text-brand-700 hover:shadow-lg hover:-translate-y-1 transition-all cursor-pointer duration-300"
              >
                <ShoppingBag size={18} className="text-slate-400 group-hover:text-brand-500 transition-colors" />
                View Products
              </button>
            </div>
          </RevealOnScroll>

          <RevealOnScroll className="flex-1 relative" delay={200}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-all duration-500">
               <img 
                 src="https://image.pollinations.ai/prompt/clean%20minimalist%20bright%20home%20interior%20with%20tissues%20on%20table%20aesthetic?width=800&height=600&nologo=true" 
                 alt="Clean minimalist home essentials" 
                 className="w-full h-auto object-cover"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
               <div className="absolute bottom-6 left-6 text-white">
                 <p className="font-semibold text-lg">Premium Quality</p>
                 <p className="text-sm opacity-90">Trusted by hundreds of homes</p>
               </div>
            </div>
          </RevealOnScroll>

        </div>
      </div>
    </section>
  );
};

export default Hero;