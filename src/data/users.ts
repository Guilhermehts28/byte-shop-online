
import { User } from "../types";

// Em uma aplicação real, isso viria de um banco de dados
export const users: User[] = [
  {
    id: 1,
    name: "Usuário Demo",
    email: "demo@byteshop.com",
    password: "senha123", // Em uma implementação real, seria armazenado hasheado
    address: "Av. Tecnologia, 1000",
    city: "São Paulo",
    state: "SP",
    zipCode: "01001-000"
  }
];

export const authenticateUser = (email: string, password: string): User | null => {
  const user = users.find(u => u.email === email && u.password === password);
  return user || null;
};

export const registerUser = (userData: Omit<User, 'id'>): User => {
  // Em uma aplicação real, este método faria uma requisição ao backend
  // para criar um novo usuário no banco de dados
  const newUser: User = {
    id: users.length + 1,
    ...userData
  };
  
  users.push(newUser);
  return newUser;
};
