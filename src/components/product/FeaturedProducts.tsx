
import { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Product } from "@/types";
import ProductCard from "./ProductCard";
import { getFeaturedProducts } from "@/data/products";

const FeaturedProducts = () => {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const productsPerPage = 4;

  useEffect(() => {
    setFeaturedProducts(getFeaturedProducts());
  }, []);

  const totalPages = Math.ceil(featuredProducts.length / productsPerPage);
  
  const nextProducts = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + productsPerPage >= featuredProducts.length ? 0 : prevIndex + productsPerPage
    );
  };
  
  const prevProducts = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex - productsPerPage < 0 
        ? Math.max(0, featuredProducts.length - productsPerPage) 
        : prevIndex - productsPerPage
    );
  };

  const currentProducts = featuredProducts.slice(
    currentIndex,
    currentIndex + productsPerPage
  );

  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Produtos em Destaque</h2>
          <div className="flex space-x-2">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={prevProducts}
              disabled={featuredProducts.length <= productsPerPage}
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              onClick={nextProducts}
              disabled={featuredProducts.length <= productsPerPage}
            >
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
        
        {featuredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {currentProducts.map((product) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                featured={true} 
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-10">
            <p className="text-gray-500">Nenhum produto em destaque encontrado.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedProducts;
