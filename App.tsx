import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import AboutContact from './components/AboutContact';
import ProductDetail from './components/ProductDetail';
import CartDrawer from './components/CartDrawer';
import { Product } from './types';
import { CartProvider } from './CartContext';

type PageView = 'home' | 'products' | 'about_contact';

const AppContent: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageView>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const navigateTo = (page: PageView) => {
    setCurrentPage(page);
    setSelectedProduct(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToProducts = () => {
    setSelectedProduct(null);
    // If we were on home page and clicked a product (future feature), we go back to products page for better UX
    setCurrentPage('products'); 
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header 
        activePage={selectedProduct ? 'products' : currentPage} 
        onNavigate={navigateTo} 
      />
      <CartDrawer onShopNow={() => navigateTo('products')} />
      
      <main>
        {selectedProduct ? (
          <ProductDetail 
            product={selectedProduct} 
            onBack={handleBackToProducts} 
          />
        ) : (
          <>
            {currentPage === 'home' && (
              <>
                <Hero onNavigateProducts={() => navigateTo('products')} />
                <AboutContact /> 
              </>
            )}

            {currentPage === 'products' && (
              <Products onProductClick={handleProductClick} />
            )}

            {currentPage === 'about_contact' && (
              <div className="pt-20">
                <AboutContact />
              </div>
            )}
          </>
        )}
      </main>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
};

export default App;