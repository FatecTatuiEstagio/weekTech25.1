
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
                      src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Rod.%20M%C3%A1rio%20Batista%20Mori,%20971%20-%20Jardim%20Aeroporto,%20Tatu%C3%AD%20-%20SP,%2018280-000+(Fatec%20Tatu%C3%AD)&amp;t=k&amp;z=18&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" 
                      width="100%" 
                      height="600" 
                      style={{ border: 0 }} 
                      allowFullScreen={true} 
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Mapa da Fatec Tatuí"
                    />
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
