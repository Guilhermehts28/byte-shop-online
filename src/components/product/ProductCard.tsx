
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Product } from "@/types";
import { useCart } from "@/contexts/CartContext";

interface ProductCardProps {
  product: Product;
  featured?: boolean;
}

const ProductCard = ({ product, featured = false }: ProductCardProps) => {
  const { addToCart } = useCart();
  const { id, name, price, discountPrice, image } = product;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
  };

  const formatPrice = (price: number) => {
    return price.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  };

  return (
    <Link to={`/product/${id}`}>
      <Card className={`h-full overflow-hidden transition-all duration-200 hover:shadow-md ${featured ? 'border-byteshop-purple' : ''}`}>
        <div className="aspect-video relative overflow-hidden">
          <img 
            src={image} 
            alt={name} 
            className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
          />
          {discountPrice && (
            <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-medium px-2 py-1 rounded">
              {Math.round(((price - discountPrice) / price) * 100)}% OFF
            </div>
          )}
          {featured && (
            <div className="absolute top-2 left-2 bg-byteshop-purple text-white text-xs font-medium px-2 py-1 rounded">
              Destaque
            </div>
          )}
        </div>
        
        <CardContent className="p-4">
          <h3 className="font-semibold text-base mb-1 line-clamp-2 min-h-[40px]">{name}</h3>
          <div className="flex items-baseline mt-2">
            {discountPrice ? (
              <>
                <span className="text-lg font-bold text-byteshop-purple mr-2">
                  {formatPrice(discountPrice)}
                </span>
                <span className="text-sm text-gray-500 line-through">
                  {formatPrice(price)}
                </span>
              </>
            ) : (
              <span className="text-lg font-bold text-byteshop-purple">
                {formatPrice(price)}
              </span>
            )}
          </div>
        </CardContent>
        
        <CardFooter className="p-4 pt-0">
          <Button 
            variant="default" 
            className="w-full" 
            onClick={handleAddToCart}
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            Adicionar
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default ProductCard;
