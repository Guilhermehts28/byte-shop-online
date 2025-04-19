
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toast } from "sonner";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulando um envio de dados para a API
    setTimeout(() => {
      toast.success("Inscrição realizada com sucesso!");
      setEmail("");
      setLoading(false);
    }, 1000);
  };

  return (
    <section className="py-14 bg-byteshop-deepPurple text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-3">Fique por dentro das novidades</h2>
          <p className="text-gray-300 mb-6">
            Inscreva-se em nossa newsletter e receba ofertas exclusivas e novidades sobre produtos de tecnologia.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <Input
              type="email"
              placeholder="Seu melhor e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 text-black"
            />
            <Button 
              type="submit" 
              className="bg-byteshop-purple hover:bg-byteshop-darkPurple"
              disabled={loading}
            >
              {loading ? "Inscrevendo..." : "Inscrever-se"}
            </Button>
          </form>
          
          <p className="text-xs text-gray-400 mt-4">
            Ao se inscrever, você concorda com nossa Política de Privacidade e Termos de Uso.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
