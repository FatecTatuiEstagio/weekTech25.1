
import { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const Contato = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulando envio do formulário
    toast.success("Mensagem enviada com sucesso! Entraremos em contato em breve.");
    
    // Limpar formulário
    setNome('');
    setEmail('');
    setMensagem('');
  };

  const contatoInfo = [
    {
      icon: <Mail className="w-6 h-6 text-fatec-green" />,
      title: "E-mail",
      details: "evento@fatectatui.edu.br"
    },
    {
      icon: <Phone className="w-6 h-6 text-fatec-green" />,
      title: "Telefone",
      details: "(15) 3205-7780"
    },
    {
      icon: <MapPin className="w-6 h-6 text-fatec-green" />,
      title: "Endereço",
      details: "Rod. Mário Batista Mori, 971 - Jardim Aeroporto, Tatuí - SP, 18280-000"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <section className="bg-gradient-to-b from-fatec-green to-fatec-lightgreen text-white py-12">
          <div className="container mx-auto px-6 md:px-8 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Entre em Contato</h1>
            <p className="max-w-2xl mx-auto">
              Tem dúvidas sobre a 4ª Semana de Tecnologia? Entre em contato com nossa equipe.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-6 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Informações de Contato</h2>
                
                <div className="space-y-6 mb-8">
                  {contatoInfo.map((item, index) => (
                    // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                    <div key={index} className="flex items-start">
                      <div className="bg-fatec-lightGray p-3 rounded-lg mr-4">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-gray-900">{item.title}</h3>
                        <p className="text-gray-600">{item.details}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <Card className="overflow-hidden">
                  <CardContent className="p-0">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.420777650265!2d-47.84971392376401!3d-23.554358361028504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c5cbf41c1867c9%3A0x92a928d51b1efc46!2sFatec%20Tatu%C3%AD%20-%20Faculdade%20de%20Tecnologia%20de%20Tatu%C3%AD!5e0!3m2!1spt-BR!2sbr!4v1699908120850!5m2!1spt-BR!2sbr" 
                      width="100%" 
                      height="300" 
                      style={{ border: 0 }} 
                      allowFullScreen={true} 
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Mapa da Fatec Tatuí"
                    />
                  </CardContent>
                </Card>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Envie uma Mensagem</h2>
                
                <Card>
                  <CardContent className="p-6">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-1">
                          Nome Completo
                        </label>
                        <Input
                          id="nome"
                          value={nome}
                          onChange={(e) => setNome(e.target.value)}
                          placeholder="Seu nome completo"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          E-mail
                        </label>
                        <Input
                          id="email"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="seu.email@exemplo.com"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="mensagem" className="block text-sm font-medium text-gray-700 mb-1">
                          Mensagem
                        </label>
                        <Textarea
                          id="mensagem"
                          value={mensagem}
                          onChange={(e) => setMensagem(e.target.value)}
                          placeholder="Escreva sua mensagem aqui..."
                          rows={5}
                          required
                        />
                      </div>
                      
                      <Button type="submit" className="w-full bg-fatec-green hover:bg-fatec-lightGreen">
                        Enviar Mensagem
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contato;
