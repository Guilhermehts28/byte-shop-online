
import { Link } from "react-router-dom";
import { CheckCircle, Package, Home, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const OrderSuccessPage = () => {
  const orderNumber = Math.floor(Math.random() * 10000000).toString().padStart(7, '0');
  const currentDate = new Date().toLocaleDateString('pt-BR');
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-12 flex items-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
                <CheckCircle className="h-10 w-10 text-green-600" />
              </div>
              <h1 className="text-3xl font-bold mb-2">Pedido Confirmado!</h1>
              <p className="text-lg text-gray-600">
                Obrigado por comprar na ByteShop. Seu pedido foi recebido com sucesso!
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium text-gray-500 mb-1">Número do Pedido</h3>
                  <p className="font-semibold"># {orderNumber}</p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-500 mb-1">Data do Pedido</h3>
                  <p className="font-semibold">{currentDate}</p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-500 mb-1">Método de Pagamento</h3>
                  <p className="font-semibold">Cartão de Crédito</p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-500 mb-1">Status do Pedido</h3>
                  <p className="font-semibold text-orange-500">Processando</p>
                </div>
              </div>
            </div>
            
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-4">Próximos Passos</h2>
              <div className="space-y-4">
                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-10 h-10 rounded-full bg-byteshop-lightPurple flex items-center justify-center">
                      <span className="font-semibold text-byteshop-purple">1</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium">Confirmação</h3>
                    <p className="text-gray-600">
                      Você receberá um e-mail de confirmação com os detalhes do seu pedido.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-10 h-10 rounded-full bg-byteshop-lightPurple flex items-center justify-center">
                      <span className="font-semibold text-byteshop-purple">2</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium">Processamento</h3>
                    <p className="text-gray-600">
                      Seu pedido será processado e preparado para envio em até 24 horas.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-10 h-10 rounded-full bg-byteshop-lightPurple flex items-center justify-center">
                      <span className="font-semibold text-byteshop-purple">3</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium">Envio</h3>
                    <p className="text-gray-600">
                      Você receberá um e-mail com o código de rastreamento quando seu pedido for enviado.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/">
                <Button variant="outline" className="w-full">
                  <Home className="mr-2 h-4 w-4" />
                  Voltar para a Página Inicial
                </Button>
              </Link>
              <Link to="/products">
                <Button className="w-full bg-byteshop-purple hover:bg-byteshop-darkPurple">
                  Continuar Comprando
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            
            <div className="mt-8 text-center text-sm text-gray-500">
              <p>
                Caso tenha qualquer dúvida, entre em contato com nosso suporte em <a href="mailto:contato@byteshop.com" className="text-byteshop-purple hover:underline">contato@byteshop.com</a> ou ligue para (11) 1234-5678.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default OrderSuccessPage;
