import React from 'react';
import { X, Minus, Plus, Trash2, ShoppingBag, MessageCircle, ArrowRight } from 'lucide-react';
import { useCart } from '../CartContext';
import { WHATSAPP_URL } from '../constants';

interface CartDrawerProps {
  onShopNow: () => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ onShopNow }) => {
  const { 
    items, 
    isCartOpen, 
    setIsCartOpen, 
    removeFromCart, 
    updateQuantity, 
    cartTotal 
  } = useCart();

  if (!isCartOpen) return null;

  const handleCheckout = () => {
    // Generate WhatsApp Message
    let message = `*New Order from SafaayiCo Website*\n\n`;
    items.forEach((item, idx) => {
      message += `${idx + 1}. ${item.name} (${item.optionLabel}) x${item.quantity}\n`;
      message += `   Amount: Rs. ${item.price * item.quantity}\n\n`;
    });
    message += `*Total Order Value: Rs. ${cartTotal}*\n\n`;
    message += `Please confirm availability and delivery time.`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`${WHATSAPP_URL}?text=${encodedMessage}`, '_blank');
  };

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60] transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl z-[70] transform transition-transform duration-300 flex flex-col animate-in slide-in-from-right">
        
        {/* Header */}
        <div className="p-5 border-b border-slate-100 flex justify-between items-center bg-white">
          <div className="flex items-center gap-2 text-slate-900 font-bold text-lg">
            <ShoppingBag className="text-brand-600" />
            Your Cart ({items.length})
          </div>
          <button 
            onClick={() => setIsCartOpen(false)}
            className="p-2 hover:bg-slate-100 rounded-full text-slate-500 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Items List */}
        <div className="flex-1 overflow-y-auto p-5 space-y-6">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center text-slate-400 space-y-4">
              <ShoppingBag size={64} className="opacity-20" />
              <p className="text-lg font-medium text-slate-600">Your cart is empty</p>
              <button 
                onClick={() => {
                  setIsCartOpen(false);
                  onShopNow();
                }}
                className="text-brand-600 font-medium hover:underline"
              >
                Start Shopping
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div key={`${item.productId}-${item.optionLabel}`} className="flex gap-4">
                <div className="w-20 h-20 bg-slate-50 rounded-lg overflow-hidden flex-shrink-0 border border-slate-100">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="font-semibold text-slate-900 line-clamp-1">{item.name}</h4>
                    <p className="text-sm text-slate-500">{item.optionLabel}</p>
                  </div>
                  
                  <div className="flex justify-between items-end mt-2">
                    <div className="font-bold text-slate-900">Rs. {item.price * item.quantity}</div>
                    
                    <div className="flex items-center gap-3 bg-slate-50 rounded-lg p-1 border border-slate-200">
                      <button 
                        onClick={() => updateQuantity(item.productId, item.optionLabel, -1)}
                        className="p-1 hover:bg-white rounded-md transition-shadow shadow-sm disabled:opacity-50"
                        disabled={item.quantity <= 1}
                      >
                        <Minus size={14} />
                      </button>
                      <span className="text-sm font-semibold w-4 text-center">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.productId, item.optionLabel, 1)}
                        className="p-1 hover:bg-white rounded-md transition-shadow shadow-sm"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                  </div>
                </div>

                <button 
                  onClick={() => removeFromCart(item.productId, item.optionLabel)}
                  className="text-slate-300 hover:text-red-500 h-fit transition-colors p-1"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer / Total */}
        {items.length > 0 && (
          <div className="p-6 bg-slate-50 border-t border-slate-200">
            <div className="flex justify-between items-center mb-4">
              <span className="text-slate-600 font-medium">Subtotal</span>
              <span className="text-2xl font-bold text-slate-900">Rs. {cartTotal}</span>
            </div>
            
            <p className="text-xs text-slate-400 mb-6 text-center">
              Shipping & taxes calculated at checkout via WhatsApp
            </p>

            <button 
              onClick={handleCheckout}
              className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold text-lg hover:bg-green-600 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-lg flex items-center justify-center gap-2 group"
            >
              <MessageCircle size={20} />
              Checkout on WhatsApp
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        )}

      </div>
    </>
  );
};

export default CartDrawer;