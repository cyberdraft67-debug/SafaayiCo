import React from 'react';
import { X, Minus, Plus, Trash2, ShoppingBag, MessageCircle, Truck } from 'lucide-react';
import { useCart } from '../CartContext';
import { DELIVERY_CHARGE, WHATSAPP_URL } from '../constants';

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

  const totalAmount = cartTotal + (items.length > 0 ? DELIVERY_CHARGE : 0);

  const handleClose = () => {
    setIsCartOpen(false);
  };

  const handleWhatsAppCheckout = () => {
    // Construct the message
    const itemsList = items.map(
      (item) => `- ${item.name} (${item.optionLabel}) x${item.quantity} - Rs. ${item.price * item.quantity}`
    ).join('%0A');

    const message = `Hi SafaayiCo, I would like to place an order:%0A%0A${itemsList}%0A%0A*Subtotal:* Rs. ${cartTotal}%0A*Delivery:* Rs. ${DELIVERY_CHARGE}%0A*Total:* Rs. ${totalAmount}%0A%0APlease confirm my order.`;

    // Open WhatsApp
    window.open(`${WHATSAPP_URL}?text=${message}`, '_blank');
  };

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60] transition-opacity"
        onClick={handleClose}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl z-[70] transform transition-transform duration-300 flex flex-col animate-in slide-in-from-right">
        
        {/* Header */}
        <div className="p-5 border-b border-slate-100 flex justify-between items-center bg-white sticky top-0 z-10">
          <div className="text-slate-900 font-bold text-lg">
            Your Cart ({items.length})
          </div>
          <button 
            onClick={handleClose}
            className="p-2 hover:bg-slate-100 rounded-full text-slate-500 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto">
          <div className="h-full flex flex-col">
            <div className="flex-1 p-5 space-y-6">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center text-slate-400 space-y-4">
                  <ShoppingBag size={64} className="opacity-20" />
                  <p className="text-lg font-medium text-slate-600">Your cart is empty</p>
                  <button 
                    onClick={() => {
                      handleClose();
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

            {items.length > 0 && (
              <div className="p-6 bg-slate-50 border-t border-slate-200">
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center text-slate-600">
                    <span>Subtotal</span>
                    <span>Rs. {cartTotal}</span>
                  </div>
                  <div className="flex justify-between items-center text-slate-600">
                    <span className="flex items-center gap-2"><Truck size={14} /> Delivery Charge</span>
                    <span>Rs. {DELIVERY_CHARGE}</span>
                  </div>
                  <div className="border-t border-slate-200 pt-3 flex justify-between items-center font-bold text-lg text-slate-900">
                    <span>Total</span>
                    <span>Rs. {totalAmount}</span>
                  </div>
                  <p className="text-xs text-slate-500 bg-white p-2 rounded border border-slate-100 text-center">
                    Fixed delivery rate of Rs. {DELIVERY_CHARGE} across Pakistan
                  </p>
                </div>
                
                <button 
                  onClick={handleWhatsAppCheckout}
                  className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold text-lg hover:bg-brand-600 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-lg flex items-center justify-center gap-2 group"
                >
                  <MessageCircle size={20} className="group-hover:rotate-12 transition-transform" />
                  Checkout on WhatsApp
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CartDrawer;