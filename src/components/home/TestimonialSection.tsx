
const testimonials = [
  {
    id: 1,
    name: "Carlos Silva",
    role: "Desenvolvedor",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    content: "Comprei um notebook para desenvolvimento e estou muito satisfeito. A entrega foi rápida e o produto superou minhas expectativas.",
    rating: 5
  },
  {
    id: 2,
    name: "Ana Pereira",
    role: "Designer Gráfica",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    content: "O monitor ultrawide que comprei mudou minha experiência de trabalho. Atendimento excelente e produto de qualidade!",
    rating: 5
  },
  {
    id: 3,
    name: "Rafael Mendes",
    role: "Gamer",
    image: "https://randomuser.me/api/portraits/men/67.jpg",
    content: "Os componentes que comprei para montar meu PC gamer chegaram rapidamente e são exatamente como descritos no site.",
    rating: 4
  }
];

const TestimonialSection = () => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <svg 
        key={index} 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24" 
        fill={index < rating ? "#9b87f5" : "#e2e8f0"} 
        className="w-4 h-4"
      >
        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
      </svg>
    ));
  };

  return (
    <section className="py-14 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-3">O que nossos clientes dizem</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Veja os depoimentos de clientes satisfeitos com nossos produtos e serviços.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="flex-shrink-0">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full"
                  />
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="flex items-center mb-3">
                {renderStars(testimonial.rating)}
              </div>
              
              <p className="text-gray-600">"{testimonial.content}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
