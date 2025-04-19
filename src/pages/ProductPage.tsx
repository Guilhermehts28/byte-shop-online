
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ShoppingCart, Check, Minus, Plus, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProductCard from "@/components/product/ProductCard";
import { Product } from "@/types";
import { getProductById, getRelatedProducts } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";

const ProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    if (id) {
      const productId = parseInt(id);
      const foundProduct = getProductById(productId);
      
      if (foundProduct) {
        setProduct(foundProduct);
        setRelatedProducts(getRelatedProducts(foundProduct, 4));
      }
      
      setLoading(false);
    }
  }, [id]);

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity >= 1 && product && newQuantity <= product.stock) {
      setQuantity(newQuantity);
    }
  };

  const handleAddToCart = () => {
    if (product) {
      addToCart(product, quantity);
      setQuantity(1);
    }
  };

  const formatPrice = (price: number) => {
    return price.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin h-8 w-8 border-4 border-byteshop-purple border-t-transparent rounded-full mx-auto mb-4"></div>
          <p>Carregando produto...</p>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-2">Produto não encontrado</h2>
            <p className="text-gray-600 mb-6">O produto que você procura não existe ou foi removido.</p>
            <Link to="/products">
              <Button>Ver todos os produtos</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-8">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <div className="text-sm text-gray-500 mb-6">
            <Link to="/" className="hover:text-byteshop-purple">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/products" className="hover:text-byteshop-purple">Produtos</Link>
            <span className="mx-2">/</span>
            <Link to={`/category/${product.category}`} className="hover:text-byteshop-purple">
              {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-700">{product.name}</span>
          </div>
          
          {/* Product Detail */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Product Image */}
            <div className="bg-white p-4 rounded-lg border">
              <div className="aspect-square w-full overflow-hidden rounded-md">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Product Info */}
            <div>
              <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
              
              <div className="flex items-center text-sm text-gray-500 mb-4">
                <div className="flex items-center">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <svg 
                      key={index} 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 24 24" 
                      fill={index < product.rating ? "#9b87f5" : "#e2e8f0"} 
                      className="w-4 h-4"
                    >
                      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                    </svg>
                  ))}
                  <span className="ml-2">{product.rating.toFixed(1)}</span>
                </div>
                <span className="mx-2">•</span>
                <span>Estoque: {product.stock} unidades</span>
              </div>
              
              <p className="text-gray-700 mb-6">{product.description}</p>
              
              <div className="mb-6">
                {product.discountPrice ? (
                  <div className="flex items-baseline">
                    <span className="text-3xl font-bold text-byteshop-purple mr-2">
                      {formatPrice(product.discountPrice)}
                    </span>
                    <span className="text-lg text-gray-500 line-through">
                      {formatPrice(product.price)}
                    </span>
                    <span className="ml-3 bg-red-100 text-red-800 text-xs font-medium px-2 py-1 rounded">
                      {Math.round(((product.price - product.discountPrice) / product.price) * 100)}% OFF
                    </span>
                  </div>
                ) : (
                  <span className="text-3xl font-bold text-byteshop-purple">
                    {formatPrice(product.price)}
                  </span>
                )}
              </div>
              
              <div className="flex items-center mb-6">
                <div className="flex border rounded-md mr-4">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleQuantityChange(quantity - 1)}
                    disabled={quantity <= 1}
                    className="h-10 w-10 rounded-none"
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <div className="flex items-center justify-center w-12 h-10 text-center">
                    {quantity}
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleQuantityChange(quantity + 1)}
                    disabled={product.stock <= quantity}
                    className="h-10 w-10 rounded-none"
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                
                <Button 
                  onClick={handleAddToCart}
                  className="flex-1 bg-byteshop-purple hover:bg-byteshop-darkPurple"
                  disabled={product.stock === 0}
                >
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Adicionar ao carrinho
                </Button>
              </div>
              
              {/* Availability */}
              <div className="bg-gray-50 rounded-md p-4 mb-6">
                <div className="flex items-center text-sm mb-2">
                  <div className={`w-3 h-3 rounded-full mr-2 ${product.stock > 0 ? 'bg-green-500' : 'bg-red-500'}`}></div>
                  <span>{product.stock > 0 ? 'Produto disponível' : 'Produto indisponível'}</span>
                </div>
                <div className="flex items-center text-sm">
                  <Package className="h-4 w-4 mr-2 text-gray-500" />
                  <span>Entrega em até 5 dias úteis</span>
                </div>
              </div>
              
              {/* Specifications Preview */}
              {product.specs && (
                <div className="border rounded-md p-4">
                  <h3 className="font-medium mb-2">Especificações principais</h3>
                  <ul className="text-sm space-y-1">
                    {Object.entries(product.specs).slice(0, 3).map(([key, value]) => (
                      <li key={key} className="flex items-start">
                        <Check className="h-4 w-4 text-byteshop-purple mr-2 mt-0.5" />
                        <span>
                          <span className="font-medium">{key.charAt(0).toUpperCase() + key.slice(1)}:</span> {value}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
          
          {/* Product Details Tabs */}
          <Tabs defaultValue="description" className="mb-12">
            <TabsList>
              <TabsTrigger value="description">Descrição</TabsTrigger>
              <TabsTrigger value="specifications">Especificações</TabsTrigger>
              <TabsTrigger value="reviews">Avaliações</TabsTrigger>
            </TabsList>
            
            <TabsContent value="description" className="py-4">
              <div className="prose max-w-none">
                <p>{product.description}</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum. Donec in efficitur ipsum. Morbi ultricies, est id porttitor gravida, orci urna volutpat est, ut facilisis libero dolor a purus.</p>
                <p>Maecenas eget condimentum velit, sit amet feugiat lectus. Quisque semper, magna at ultricies viverra, ex risus egestas felis, vitae facilisis velit ante id orci. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                <ul>
                  <li>Alta performance para múltiplas tarefas</li>
                  <li>Design moderno e resistente</li>
                  <li>Tecnologia de ponta para melhor experiência</li>
                  <li>Garantia de 12 meses</li>
                </ul>
              </div>
            </TabsContent>
            
            <TabsContent value="specifications" className="py-4">
              {product.specs ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {Object.entries(product.specs).map(([key, value]) => (
                    <div key={key} className="border-b pb-2">
                      <div className="text-sm text-gray-500">{key.charAt(0).toUpperCase() + key.slice(1)}</div>
                      <div className="font-medium">{value}</div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500">Nenhuma especificação disponível para este produto.</p>
              )}
            </TabsContent>
            
            <TabsContent value="reviews" className="py-4">
              <div className="bg-gray-50 p-4 rounded-md mb-6 text-center">
                <h3 className="font-medium text-lg mb-2">Avaliação Geral</h3>
                <div className="flex items-center justify-center mb-2">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <svg 
                      key={index} 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 24 24" 
                      fill={index < product.rating ? "#9b87f5" : "#e2e8f0"} 
                      className="w-6 h-6"
                    >
                      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                    </svg>
                  ))}
                  <span className="ml-2 text-xl font-bold">{product.rating.toFixed(1)}</span>
                </div>
                <p className="text-gray-500">Baseado em 24 avaliações</p>
              </div>
              
              <div className="space-y-4">
                {/* Sample reviews */}
                <div className="border-b pb-4">
                  <div className="flex items-center mb-2">
                    <img 
                      src="https://randomuser.me/api/portraits/men/32.jpg" 
                      alt="User" 
                      className="w-10 h-10 rounded-full mr-3"
                    />
                    <div>
                      <div className="font-medium">Ricardo Oliveira</div>
                      <div className="text-sm text-gray-500">3 meses atrás</div>
                    </div>
                  </div>
                  <div className="flex mb-2">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <svg 
                        key={index} 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 24 24" 
                        fill={index < 5 ? "#9b87f5" : "#e2e8f0"} 
                        className="w-4 h-4"
                      >
                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-700">Produto excelente! Superou minhas expectativas em todos os aspectos. Entrega rápida e bem embalado.</p>
                </div>
                
                <div className="border-b pb-4">
                  <div className="flex items-center mb-2">
                    <img 
                      src="https://randomuser.me/api/portraits/women/44.jpg" 
                      alt="User" 
                      className="w-10 h-10 rounded-full mr-3"
                    />
                    <div>
                      <div className="font-medium">Marina Costa</div>
                      <div className="text-sm text-gray-500">1 mês atrás</div>
                    </div>
                  </div>
                  <div className="flex mb-2">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <svg 
                        key={index} 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 24 24" 
                        fill={index < 4 ? "#9b87f5" : "#e2e8f0"} 
                        className="w-4 h-4"
                      >
                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-700">Muito bom! A relação custo-benefício é excelente. O único ponto negativo é que demorou um pouco mais do que o esperado para chegar.</p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
          
          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Produtos Relacionados</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {relatedProducts.map((relProduct) => (
                  <ProductCard key={relProduct.id} product={relProduct} />
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductPage;
