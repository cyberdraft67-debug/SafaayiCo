export interface ProductOption {
  label: string;
  price: number;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  image: string; // URL to the product image
  options: ProductOption[];
  features?: string[];
}

export interface NavItem {
  label: string;
  id: string; // Changed from href to id for internal routing
}

export interface CartItem {
  productId: string;
  name: string;
  image: string;
  optionLabel: string;
  price: number;
  quantity: number;
}
