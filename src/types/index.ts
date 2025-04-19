
export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  discountPrice?: number;
  image: string;
  category: string;
  stock: number;
  rating: number;
  featured?: boolean;
  specs?: Record<string, string>;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface User {
  id: number;
  name: string;
  email: string;
  password: string; // Nota: Em uma implementação real, senhas não estariam no frontend
  address?: string;
  city?: string;
  state?: string;
  zipCode?: string;
  orders?: Order[];
}

export interface Order {
  id: number;
  userId: number;
  items: CartItem[];
  total: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered';
  date: string;
  paymentMethod: string;
  shippingAddress: string;
}
