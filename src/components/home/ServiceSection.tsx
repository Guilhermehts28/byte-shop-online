
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { services } from "@/data/products";

const ServiceSection = () => {
  return (
    <section className="py-14 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-3">Nossos Serviços</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Além dos melhores produtos, oferecemos serviços especializados para garantir o melhor desempenho do seu equipamento.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-lg shadow-sm border p-6 hover:shadow-md transition-shadow">
              <div className="w-16 h-16 rounded-full bg-byteshop-lightPurple mb-4 flex items-center justify-center">
                <img 
                  src={service.image} 
                  alt={service.name} 
                  className="w-8 h-8 object-contain"
                />
              </div>
              
              <h3 className="text-lg font-semibold mb-2">{service.name}</h3>
              <p className="text-gray-600 mb-4 text-sm">{service.description}</p>
              
              <div className="mt-auto">
                <div className="text-byteshop-purple font-bold mb-3">
                  {service.price.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  })}
                </div>
                
                <Link to={`/service/${service.id}`}>
                  <Button variant="outline" className="w-full">
                    Ver detalhes
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <Link to="/services">
            <Button className="bg-byteshop-purple hover:bg-byteshop-darkPurple">
              Ver todos os serviços
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
