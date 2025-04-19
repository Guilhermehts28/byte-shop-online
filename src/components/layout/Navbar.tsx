
import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, User, Search, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useCart } from "@/contexts/CartContext";
import { useAuth } from "@/contexts/AuthContext";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar = () => {
  const { getTotalItems } = useCart();
  const { isAuthenticated, logout } = useAuth();
  const [searchQuery, setSearchQuery] = useState("");
  const isMobile = useIsMobile();
  
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-byteshop-purple">ByteShop</span>
          </Link>
        </div>

        {!isMobile && (
          <nav className="flex flex-1 items-center justify-center space-x-4 mx-6">
            <Link to="/" className="text-sm font-medium transition-colors hover:text-byteshop-purple">
              Início
            </Link>
            <Link to="/products" className="text-sm font-medium transition-colors hover:text-byteshop-purple">
              Produtos
            </Link>
            <Link to="/categories" className="text-sm font-medium transition-colors hover:text-byteshop-purple">
              Categorias
            </Link>
            <Link to="/services" className="text-sm font-medium transition-colors hover:text-byteshop-purple">
              Serviços
            </Link>
          </nav>
        )}

        {!isMobile && (
          <div className="relative w-full max-w-sm mx-4">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Buscar produtos..."
              className="w-full bg-background pl-8 rounded-md border"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        )}
        
        <div className="flex items-center justify-end space-x-2 ml-auto">
          {isMobile && (
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="mr-1">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <div className="flex flex-col py-6 space-y-5">
                  <div className="pb-4 border-b">
                    <Link to="/" className="flex items-center space-x-1">
                      <span className="text-xl font-bold text-byteshop-purple">ByteShop</span>
                    </Link>
                  </div>
                  
                  <div className="relative w-full">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="search"
                      placeholder="Buscar produtos..."
                      className="w-full bg-background pl-8"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                  
                  <nav className="flex flex-col space-y-4">
                    <Link to="/" className="text-sm font-medium">
                      Início
                    </Link>
                    <Link to="/products" className="text-sm font-medium">
                      Produtos
                    </Link>
                    <Link to="/categories" className="text-sm font-medium">
                      Categorias
                    </Link>
                    <Link to="/services" className="text-sm font-medium">
                      Serviços
                    </Link>
                  </nav>
                  
                  {isAuthenticated ? (
                    <div className="flex flex-col space-y-3 mt-auto">
                      <Link to="/account" className="flex items-center text-sm font-medium">
                        <User className="h-4 w-4 mr-2" />
                        Minha Conta
                      </Link>
                      <Button variant="outline" onClick={logout}>
                        Sair
                      </Button>
                    </div>
                  ) : (
                    <div className="flex flex-col space-y-3 mt-auto">
                      <Link to="/login">
                        <Button variant="outline" className="w-full">Entrar</Button>
                      </Link>
                      <Link to="/register">
                        <Button className="w-full">Cadastrar</Button>
                      </Link>
                    </div>
                  )}
                </div>
              </SheetContent>
            </Sheet>
          )}

          <Link to="/cart">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              {getTotalItems() > 0 && (
                <span className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-byteshop-purple text-white text-xs flex items-center justify-center">
                  {getTotalItems()}
                </span>
              )}
            </Button>
          </Link>
          
          {!isMobile && (
            isAuthenticated ? (
              <div className="flex items-center space-x-2">
                <Link to="/account">
                  <Button variant="ghost" size="sm">
                    <User className="h-4 w-4 mr-1" />
                    Minha Conta
                  </Button>
                </Link>
                <Button variant="outline" size="sm" onClick={logout}>
                  Sair
                </Button>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Link to="/login">
                  <Button variant="ghost" size="sm">Entrar</Button>
                </Link>
                <Link to="/register">
                  <Button size="sm">Cadastrar</Button>
                </Link>
              </div>
            )
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
