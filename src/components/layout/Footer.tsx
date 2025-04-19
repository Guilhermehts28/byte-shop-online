
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <span className="text-2xl font-bold text-byteshop-purple">ByteShop</span>
            </Link>
            <p className="text-gray-400 text-sm">
              Sua loja completa de equipamentos de informática com os melhores preços e atendimento de qualidade.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-byteshop-purple transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-400 hover:text-byteshop-purple transition-colors">
                  Produtos
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-byteshop-purple transition-colors">
                  Serviços
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-byteshop-purple transition-colors">
                  Sobre Nós
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Categorias</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/category/notebooks" className="text-gray-400 hover:text-byteshop-purple transition-colors">
                  Notebooks
                </Link>
              </li>
              <li>
                <Link to="/category/monitores" className="text-gray-400 hover:text-byteshop-purple transition-colors">
                  Monitores
                </Link>
              </li>
              <li>
                <Link to="/category/perifericos" className="text-gray-400 hover:text-byteshop-purple transition-colors">
                  Periféricos
                </Link>
              </li>
              <li>
                <Link to="/category/componentes" className="text-gray-400 hover:text-byteshop-purple transition-colors">
                  Componentes
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="mailto:contato@byteshop.com" className="hover:text-byteshop-purple transition-colors">
                  contato@byteshop.com
                </a>
              </li>
              <li>(11) 1234-5678</li>
              <li>Av. Tecnologia, 1000</li>
              <li>São Paulo, SP - Brasil</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-400 text-sm">
          <p>© 2025 ByteShop - Todos os direitos reservados</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
