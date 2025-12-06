import React from 'react';
import { FOUNDER_INFO, WHATSAPP_URL } from '../constants';
import { MessageCircle, MapPin, User, CheckCircle } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

const AboutContact: React.FC = () => {
  return (
    <section className="bg-slate-50 py-20 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16" id="about">
          
          {/* Founder / About Section */}
          <RevealOnScroll className="space-y-8">
            <h2 className="text-3xl font-bold text-slate-900">About SafaayiCo</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              We started SafaayiCo with a simple mission: to provide households with consumables that are not only effective but guaranteed safe. In a market flooded with low-quality materials, we stand for transparency and purity.
            </p>
            
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-start gap-4">
              <div className="bg-brand-100 p-3 rounded-full text-brand-600">
                <User size={24} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-900">{FOUNDER_INFO.name}</h4>
                <p className="text-sm text-brand-600 font-medium mb-2">{FOUNDER_INFO.role}</p>
                <div className="flex items-center gap-2 text-slate-500 text-sm mb-2">
                  <MapPin size={14} />
                  {FOUNDER_INFO.location}
                </div>
                <p className="text-slate-600 text-sm italic">"{FOUNDER_INFO.bio}"</p>
              </div>
            </div>

            <div className="flex gap-4 flex-wrap">
               <div className="flex items-center gap-2 text-slate-700 font-medium bg-white px-4 py-2 rounded-full border border-slate-200">
                 <CheckCircle size={16} className="text-green-500"/> Verified Quality
               </div>
               <div className="flex items-center gap-2 text-slate-700 font-medium bg-white px-4 py-2 rounded-full border border-slate-200">
                 <CheckCircle size={16} className="text-green-500"/> Fast Delivery
               </div>
            </div>
          </RevealOnScroll>

          {/* Contact Section */}
          <RevealOnScroll delay={200} className="h-full">
            <div id="contact" className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden transform transition-all duration-500 hover:scale-[1.01] hover:shadow-2xl h-full flex flex-col justify-center">
               {/* Decorative circles */}
               <div className="absolute top-0 right-0 -mr-10 -mt-10 w-64 h-64 bg-brand-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
               <div className="absolute bottom-0 left-0 -ml-10 -mb-10 w-48 h-48 bg-purple-500 rounded-full blur-3xl opacity-20 animate-pulse" style={{animationDelay: '1s'}}></div>

               <div className="relative z-10">
                 <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
                 <p className="text-slate-300 mb-8 text-lg">
                   Ready to restock your home essentials? Have questions about bulk orders?
                   We are just a message away.
                 </p>

                 <div className="space-y-6">
                   <div className="flex items-center gap-4 group cursor-pointer">
                     <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm group-hover:bg-brand-500 transition-colors duration-300">
                       <MessageCircle size={24} className="group-hover:scale-110 transition-transform"/>
                     </div>
                     <div>
                       <p className="text-sm text-slate-400">WhatsApp</p>
                       <p className="text-xl font-semibold tracking-wide">+92 333 282 0021</p>
                     </div>
                   </div>

                   <div className="pt-6">
                     <a 
                       href={WHATSAPP_URL}
                       target="_blank"
                       rel="noopener noreferrer"
                       className="w-full bg-brand-500 hover:bg-brand-400 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-brand-500/50 hover:-translate-y-1 active:scale-95 group"
                     >
                       <MessageCircle size={20} className="transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
                       Chat on WhatsApp
                     </a>
                   </div>
                 </div>
               </div>
            </div>
          </RevealOnScroll>

        </div>

        <RevealOnScroll className="mt-20 pt-8 border-t border-slate-200 text-center text-slate-400 text-sm">
          &copy; {new Date().getFullYear()} SafaayiCo. All rights reserved.
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default AboutContact;