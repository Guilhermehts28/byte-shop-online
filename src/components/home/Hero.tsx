
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative bg-byteshop-deepPurple text-white overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-30">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-full h-full">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" opacity="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
    
      <div className="container relative z-10 mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="flex flex-col justify-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Tecnologia de ponta para suas necessidades
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              Encontre os melhores equipamentos de informática com os melhores preços e garantia de qualidade.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/products">
                <Button size="lg" className="bg-byteshop-purple hover:bg-byteshop-darkPurple">
                  Ver produtos
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/services">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-byteshop-deepPurple">
                  Nossos serviços
                </Button>
              </Link>
            </div>
            
            <div className="mt-8 grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-byteshop-purple">+500</div>
                <div className="text-sm text-gray-300">Produtos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-byteshop-purple">+10k</div>
                <div className="text-sm text-gray-300">Clientes</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-byteshop-purple">5 Anos</div>
                <div className="text-sm text-gray-300">de experiência</div>
              </div>
            </div>
          </div>
          
          <div className="relative h-full min-h-[300px] md:min-h-[450px] flex items-center justify-center">
            <div className="relative z-10 w-full max-w-md mx-auto">
              <img 
                src="https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&q=80&w=1442"
                alt="Computador de alta performance"
                className="w-full h-auto rounded-lg shadow-xl"
              />
              
              <div className="absolute -bottom-4 -right-4 bg-byteshop-purple text-white p-3 rounded-lg shadow-lg">
                <div className="text-sm font-semibold">Oferta Especial</div>
                <div className="text-2xl font-bold">-15%</div>
              </div>
            </div>
            
            {/* Efeito de círculos decorativos */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-60 w-60 md:h-80 md:w-80 rounded-full border-2 border-byteshop-purple opacity-20"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-80 w-80 md:h-96 md:w-96 rounded-full border-2 border-byteshop-purple opacity-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
