
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Trash2, Plus, Minus, ShoppingCart, ArrowRight, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useCart } from "@/contexts/CartContext";
import { useAuth } from "@/contexts/AuthContext";

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity, clearCart, getTotalPrice } = useCart();
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  
  const handleProceedToCheckout = () => {
    if (!isAuthenticated) {
      navigate("/login?redirect=checkout");
    } else {
      navigate("/checkout");
    }
  };

  const formatPrice = (price: number) => {
    return price.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-6">Carrinho de Compras</h1>
          
          {cartItems.length === 0 ? (
            <div className="bg-white rounded-lg shadow-sm p-8 text-center">
              <div className="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <ShoppingCart className="h-8 w-8 text-gray-400" />
              </div>
              <h2 className="text-2xl font-semibold mb-2">Seu carrinho está vazio</h2>
              <p className="text-gray-600 mb-6">
                Parece que você ainda não adicionou nenhum produto ao seu carrinho.
              </p>
              <Link to="/products">
                <Button>
                  Continuar comprando
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <div className="hidden sm:grid sm:grid-cols-12 bg-gray-50 p-4 font-medium text-gray-500">
                    <div className="sm:col-span-6">Produto</div>
                    <div className="sm:col-span-2 text-center">Preço</div>
                    <div className="sm:col-span-2 text-center">Quantidade</div>
                    <div className="sm:col-span-2 text-center">Subtotal</div>
                  </div>
                  
                  {cartItems.map((item) => {
                    const productPrice = item.product.discountPrice || item.product.price;
                    const subtotal = productPrice * item.quantity;
                    
                    return (
                      <div key={item.product.id} className="border-t first:border-t-0">
                        <div className="grid sm:grid-cols-12 p-4 gap-4 items-center">
                          {/* Product */}
                          <div className="sm:col-span-6 flex">
                            <div className="w-20 h-20 flex-shrink-0">
                              <img 
                                src={item.product.image} 
                                alt={item.product.name} 
                                className="w-full h-full object-cover rounded"
                              />
                            </div>
                            <div className="ml-4">
                              <h3 className="font-medium text-sm sm:text-base">
                                <Link to={`/product/${item.product.id}`} className="hover:text-byteshop-purple">
                                  {item.product.name}
                                </Link>
                              </h3>
                              <div className="text-sm text-gray-500 mt-1">
                                Categoria: {item.product.category.charAt(0).toUpperCase() + item.product.category.slice(1)}
                              </div>
                              <button 
                                onClick={() => removeFromCart(item.product.id)}
                                className="text-red-500 text-sm flex items-center mt-2 hover:text-red-700"
                              >
                                <Trash2 className="h-3 w-3 mr-1" />
                                Remover
                              </button>
                            </div>
                          </div>
                          
                          {/* Price */}
                          <div className="sm:col-span-2 text-center">
                            <div className="sm:hidden text-sm text-gray-500 mb-1">Preço:</div>
                            <div className="font-medium">{formatPrice(productPrice)}</div>
                          </div>
                          
                          {/* Quantity */}
                          <div className="sm:col-span-2">
                            <div className="sm:hidden text-sm text-gray-500 mb-1">Quantidade:</div>
                            <div className="flex items-center justify-center">
                              <Button
                                variant="outline"
                                size="icon"
                                className="h-8 w-8"
                                onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                                disabled={item.quantity <= 1}
                              >
                                <Minus className="h-3 w-3" />
                              </Button>
                              <span className="w-10 text-center">{item.quantity}</span>
                              <Button
                                variant="outline"
                                size="icon"
                                className="h-8 w-8"
                                onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                                disabled={item.quantity >= item.product.stock}
                              >
                                <Plus className="h-3 w-3" />
                              </Button>
                            </div>
                          </div>
                          
                          {/* Subtotal */}
                          <div className="sm:col-span-2 text-center">
                            <div className="sm:hidden text-sm text-gray-500 mb-1">Subtotal:</div>
                            <div className="font-medium">{formatPrice(subtotal)}</div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                
                <div className="flex justify-between mt-4">
                  <Link to="/products">
                    <Button variant="outline">
                      Continuar comprando
                    </Button>
                  </Link>
                  <Button 
                    variant="outline" 
                    className="text-red-500 border-red-200 hover:bg-red-50 hover:text-red-600"
                    onClick={clearCart}
                  >
                    Limpar carrinho
                  </Button>
                </div>
              </div>
              
              {/* Order Summary */}
              <div>
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h2 className="text-lg font-bold mb-4">Resumo do Pedido</h2>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Subtotal</span>
                      <span>{formatPrice(getTotalPrice())}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Frete</span>
                      <span>Grátis</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total</span>
                      <span className="text-byteshop-purple">{formatPrice(getTotalPrice())}</span>
                    </div>
                  </div>
                  
                  <Button 
                    className="w-full bg-byteshop-purple hover:bg-byteshop-darkPurple"
                    onClick={handleProceedToCheckout}
                    disabled={loading}
                  >
                    <CreditCard className="mr-2 h-4 w-4" />
                    {loading ? "Processando..." : "Finalizar compra"}
                  </Button>
                  
                  <div className="mt-4 text-sm text-gray-500 text-center">
                    <p>Pague com segurança usando os métodos mais populares</p>
                    <div className="flex justify-center mt-2 space-x-2">
                      <div className="w-10 h-6 bg-gray-200 rounded"></div>
                      <div className="w-10 h-6 bg-gray-200 rounded"></div>
                      <div className="w-10 h-6 bg-gray-200 rounded"></div>
                      <div className="w-10 h-6 bg-gray-200 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CartPage;
