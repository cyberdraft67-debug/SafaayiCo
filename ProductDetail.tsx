import React, { useState } from 'react';
import { Product, ProductOption } from '../types';
import { ArrowLeft, Check, Minus, Plus, ShieldCheck, ShoppingCart, MessageCircle } from 'lucide-react';
import { WHATSAPP_URL } from '../constants';
import { useCart } from '../CartContext';

interface ProductDetailProps {
  product: Product;
  onBack: () => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product, onBack }) => {
  const [selectedOption, setSelectedOption] = useState<ProductOption>(product.options[0]);
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);
  const { addToCart } = useCart(); // Removed setIsCartOpen to keep user on page

  const incrementQty = () => setQuantity(q => q + 1);
  const decrementQty = () => setQuantity(q => Math.max(1, q - 1));

  const totalPrice = selectedOption.price * quantity;

  // Construct Direct Order WhatsApp Message (Buy Now)
  const whatsappMessage = encodeURIComponent(
    `Hi SafaayiCo, I would like to order:\n\n*${product.name}*\nOption: ${selectedOption.label}\nQuantity: ${quantity}\n\n*Total Price: Rs. ${totalPrice}*\n\nPlease confirm my order details.`
  );
  
  const orderUrl = `${WHATSAPP_URL}?text=${whatsappMessage}`;

  const handleAddToCart = () => {
    addToCart({
      productId: product.id,
      name: product.name,
      image: product.image,
      optionLabel: selectedOption.label,
      price: selectedOption.price,
      quantity: quantity
    });
    
    // Trigger animation
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 300);
  };

  return (
    <div className="pt-24 pb-12 min-h-screen bg-white animate-in slide-in-from-right-4 duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Button */}
        <button 
          onClick={onBack}
          className="group flex items-center gap-2 text-slate-500 hover:text-brand-600 font-medium mb-8 transition-colors"
        >
          <div className="bg-slate-100 p-2 rounded-full group-hover:bg-brand-50 transition-colors">
            <ArrowLeft size={20} />
          </div>
          Back to Products
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Image Section */}
          <div className="space-y-6">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-slate-50 border border-slate-100 shadow-sm relative group">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />
            </div>
            
            {/* Features List */}
            <div>
              <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-4 opacity-70 ml-1">Key Features</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {product.features?.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-brand-50/50 hover:border-brand-100 transition-colors duration-300 cursor-default">
                    <div className="bg-white p-2 rounded-full shadow-sm text-brand-600 flex-shrink-0">
                      <ShieldCheck size={18} strokeWidth={2.5} />
                    </div>
                    <span className="text-sm font-medium text-slate-700 leading-tight">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Details Section */}
          <div className="flex flex-col">
            <h1 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">{product.name}</h1>
            
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              {product.longDescription}
            </p>

            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm mb-8 space-y-6">
              
              {/* Option Selector */}
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-3">Select Option</label>
                <div className="space-y-2">
                  {product.options.map((option) => (
                    <button
                      key={option.label}
                      onClick={() => setSelectedOption(option)}
                      className={`w-full flex justify-between items-center p-4 rounded-xl border-2 transition-all ${
                        selectedOption.label === option.label
                          ? 'border-brand-500 bg-brand-50 text-brand-900'
                          : 'border-slate-100 hover:border-slate-200 text-slate-700'
                      }`}
                    >
                      <span className="font-medium">{option.label}</span>
                      <div className="flex items-center gap-3">
                        <span className="font-bold">Rs. {option.price}</span>
                        {selectedOption.label === option.label && (
                          <div className="bg-brand-500 text-white rounded-full p-0.5">
                            <Check size={12} strokeWidth={4} />
                          </div>
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity Selector */}
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-3">Quantity</label>
                <div className="flex items-center gap-4">
                  <div className="flex items-center border-2 border-slate-200 rounded-xl">
                    <button 
                      onClick={decrementQty}
                      className="p-3 hover:bg-slate-50 text-slate-600 transition-colors rounded-l-xl"
                      disabled={quantity <= 1}
                    >
                      <Minus size={20} />
                    </button>
                    <span className="w-12 text-center font-bold text-lg text-slate-900">{quantity}</span>
                    <button 
                      onClick={incrementQty}
                      className="p-3 hover:bg-slate-50 text-slate-600 transition-colors rounded-r-xl"
                    >
                      <Plus size={20} />
                    </button>
                  </div>
                  <div className="flex-1 text-right">
                     <p className="text-sm text-slate-500 mb-1">Total Price</p>
                     <p className="text-3xl font-bold text-brand-600">Rs. {totalPrice}</p>
                  </div>
                </div>
              </div>

            </div>

            {/* Action Buttons */}
            <div className="mt-auto flex flex-col gap-3">
              <button 
                onClick={handleAddToCart}
                className={`w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all duration-200 ${
                  isAdded 
                    ? 'scale-[1.02] bg-brand-50 border-2 border-brand-500 text-brand-700 shadow-md' 
                    : 'bg-white border-2 border-slate-200 text-slate-900 hover:border-brand-500 hover:text-brand-600 active:scale-[0.98]'
                }`}
              >
                {isAdded ? <Check size={20} /> : <ShoppingCart size={20} />}
                {isAdded ? 'Added to Cart' : 'Add to Cart'}
              </button>

              <a 
                href={orderUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold text-lg hover:bg-brand-600 transition-all shadow-lg hover:shadow-brand-500/20 hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                <MessageCircle size={20} />
                Buy Now
              </a>
            </div>
            
            <p className="text-center text-xs text-slate-400 mt-4">
              Secure checkout via WhatsApp.
            </p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;