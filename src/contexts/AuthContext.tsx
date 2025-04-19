
import { createContext, useState, useContext, ReactNode, useEffect } from "react";
import { User } from "../types";
import { authenticateUser, registerUser } from "../data/users";
import { toast } from "sonner";

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => boolean;
  register: (userData: Omit<User, "id">) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  
  // Verificar se já existe um usuário autenticado no localStorage ao iniciar
  useEffect(() => {
    const storedUser = localStorage.getItem("byteshop-user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (email: string, password: string) => {
    const authenticatedUser = authenticateUser(email, password);
    
    if (authenticatedUser) {
      setUser(authenticatedUser);
      localStorage.setItem("byteshop-user", JSON.stringify(authenticatedUser));
      toast.success("Login realizado com sucesso!");
      return true;
    } else {
      toast.error("E-mail ou senha incorretos");
      return false;
    }
  };

  const register = (userData: Omit<User, "id">) => {
    try {
      const newUser = registerUser(userData);
      setUser(newUser);
      localStorage.setItem("byteshop-user", JSON.stringify(newUser));
      toast.success("Cadastro realizado com sucesso!");
      return true;
    } catch (error) {
      toast.error("Erro ao criar conta");
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("byteshop-user");
    toast.info("Logout realizado com sucesso");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
