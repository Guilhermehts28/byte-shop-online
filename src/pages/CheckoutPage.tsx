
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { CreditCard, Truck, Check, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useCart } from "@/contexts/CartContext";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";

const CheckoutPage = () => {
  const { cartItems, getTotalPrice, clearCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();
  
  const [paymentMethod, setPaymentMethod] = useState("credit-card");
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    // Dados pessoais
    name: user?.name || "",
    email: user?.email || "",
    phone: "",
    // Endereço de entrega
    address: user?.address || "",
    city: user?.city || "",
    state: user?.state || "",
    zipCode: user?.zipCode || "",
    // Dados do cartão
    cardNumber: "",
    cardName: "",
    expiryDate: "",
    cvv: "",
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulando o processamento do pagamento
    setTimeout(() => {
      setLoading(false);
      clearCart();
      navigate("/order-success");
    }, 2000);
  };
  
  const formatPrice = (price: number) => {
    return price.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  };
  
  // Redirecionamento caso o carrinho esteja vazio
  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow py-8 flex items-center justify-center">
          <div className="text-center">
            <div className="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <CreditCard className="h-8 w-8 text-gray-400" />
            </div>
            <h2 className="text-2xl font-semibold mb-2">Seu carrinho está vazio</h2>
            <p className="text-gray-600 mb-6">
              Adicione produtos ao carrinho antes de finalizar a compra.
            </p>
            <Link to="/products">
              <Button>Ver produtos</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-8">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <Link to="/cart" className="text-byteshop-purple hover:underline flex items-center">
              <ArrowLeft className="h-4 w-4 mr-1" />
              Voltar para o carrinho
            </Link>
          </div>
          
          <h1 className="text-3xl font-bold mb-8">Finalizar Compra</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit}>
                <div className="space-y-8">
                  {/* Dados Pessoais */}
                  <div className="bg-white rounded-lg shadow-sm p-6">
                    <h2 className="text-xl font-semibold mb-4">Dados Pessoais</h2>
                    <div className="grid gap-4">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Nome completo</Label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">E-mail</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Telefone</Label>
                        <Input
                          id="phone"
                          name="phone"
                          placeholder="(00) 00000-0000"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                  </div>
                  
                  {/* Endereço de Entrega */}
                  <div className="bg-white rounded-lg shadow-sm p-6">
                    <h2 className="text-xl font-semibold mb-4">Endereço de Entrega</h2>
                    <div className="grid gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="address">Endereço completo</Label>
                        <Input
                          id="address"
                          name="address"
                          placeholder="Rua, número, complemento"
                          value={formData.address}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="city">Cidade</Label>
                          <Input
                            id="city"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="state">Estado</Label>
                          <Input
                            id="state"
                            name="state"
                            value={formData.state}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="zipCode">CEP</Label>
                        <Input
                          id="zipCode"
                          name="zipCode"
                          placeholder="00000-000"
                          value={formData.zipCode}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                  </div>
                  
                  {/* Forma de Pagamento */}
                  <div className="bg-white rounded-lg shadow-sm p-6">
                    <h2 className="text-xl font-semibold mb-4">Forma de Pagamento</h2>
                    
                    <Tabs defaultValue="credit-card" onValueChange={setPaymentMethod} className="w-full">
                      <TabsList className="grid grid-cols-2 mb-6">
                        <TabsTrigger value="credit-card">Cartão de Crédito</TabsTrigger>
                        <TabsTrigger value="pix">PIX</TabsTrigger>
                      </TabsList>
                      
                      <TabsContent value="credit-card">
                        <div className="grid gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="cardNumber">Número do Cartão</Label>
                            <Input
                              id="cardNumber"
                              name="cardNumber"
                              placeholder="0000 0000 0000 0000"
                              value={formData.cardNumber}
                              onChange={handleChange}
                              required={paymentMethod === "credit-card"}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="cardName">Nome no Cartão</Label>
                            <Input
                              id="cardName"
                              name="cardName"
                              placeholder="Nome como aparece no cartão"
                              value={formData.cardName}
                              onChange={handleChange}
                              required={paymentMethod === "credit-card"}
                            />
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="expiryDate">Validade</Label>
                              <Input
                                id="expiryDate"
                                name="expiryDate"
                                placeholder="MM/AA"
                                value={formData.expiryDate}
                                onChange={handleChange}
                                required={paymentMethod === "credit-card"}
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="cvv">CVV</Label>
                              <Input
                                id="cvv"
                                name="cvv"
                                placeholder="123"
                                value={formData.cvv}
                                onChange={handleChange}
                                required={paymentMethod === "credit-card"}
                              />
                            </div>
                          </div>
                          
                          <div className="mt-2">
                            <h3 className="font-medium mb-2">Parcelamento</h3>
                            <RadioGroup defaultValue="1">
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="1" id="parcel-1" />
                                <Label htmlFor="parcel-1">1x de {formatPrice(getTotalPrice())} sem juros</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="2" id="parcel-2" />
                                <Label htmlFor="parcel-2">2x de {formatPrice(getTotalPrice() / 2)} sem juros</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="3" id="parcel-3" />
                                <Label htmlFor="parcel-3">3x de {formatPrice(getTotalPrice() / 3)} sem juros</Label>
                              </div>
                            </RadioGroup>
                          </div>
                        </div>
                      </TabsContent>
                      
                      <TabsContent value="pix">
                        <div className="text-center py-4">
                          <div className="bg-gray-100 rounded-lg p-6 mb-4 max-w-xs mx-auto">
                            <div className="aspect-square w-full bg-gray-200 rounded-md mb-2"></div>
                            <p className="text-sm text-gray-500">
                              Escaneie o QR Code ou copie o código PIX para pagar
                            </p>
                          </div>
                          <Button
                            variant="outline"
                            onClick={() => {
                              toast.success("Código PIX copiado!");
                            }}
                          >
                            Copiar código PIX
                          </Button>
                          <p className="mt-4 text-sm text-gray-500">
                            Após o pagamento, você receberá a confirmação em seu e-mail.
                          </p>
                        </div>
                      </TabsContent>
                    </Tabs>
                  </div>
                  
                  <Button
                    type="submit"
                    className="w-full bg-byteshop-purple hover:bg-byteshop-darkPurple h-12 text-lg"
                    disabled={loading}
                  >
                    {loading ? (
                      <div className="flex items-center">
                        <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full mr-2"></div>
                        Processando pagamento...
                      </div>
                    ) : (
                      <div className="flex items-center justify-center">
                        <CreditCard className="mr-2 h-5 w-5" />
                        Finalizar Pedido
                      </div>
                    )}
                  </Button>
                </div>
              </form>
            </div>
            
            {/* Resumo do Pedido */}
            <div>
              <div className="bg-white rounded-lg shadow-sm p-6 sticky top-20">
                <h2 className="text-xl font-semibold mb-4">Resumo do Pedido</h2>
                
                <div className="space-y-4 divide-y">
                  {cartItems.map((item) => {
                    const price = item.product.discountPrice || item.product.price;
                    return (
                      <div key={item.product.id} className="pt-4 first:pt-0">
                        <div className="flex gap-4">
                          <div className="w-16 h-16 rounded overflow-hidden flex-shrink-0">
                            <img 
                              src={item.product.image} 
                              alt={item.product.name} 
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-medium text-sm line-clamp-2">{item.product.name}</h3>
                            <div className="text-sm text-gray-500">Quantidade: {item.quantity}</div>
                            <div className="font-medium mt-1">{formatPrice(price * item.quantity)}</div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                
                <Separator className="my-4" />
                
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span>{formatPrice(getTotalPrice())}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Frete</span>
                    <span className="text-green-600">Grátis</span>
                  </div>
                  <Separator className="my-2" />
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span className="text-byteshop-purple">{formatPrice(getTotalPrice())}</span>
                  </div>
                </div>
                
                <div className="mt-6 bg-gray-50 p-4 rounded-md">
                  <div className="flex items-center text-sm text-gray-600">
                    <Truck className="h-4 w-4 mr-2 text-green-600" />
                    <span>Entrega estimada em até 5 dias úteis</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600 mt-2">
                    <Check className="h-4 w-4 mr-2 text-green-600" />
                    <span>Garantia de 12 meses em todos os produtos</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CheckoutPage;
