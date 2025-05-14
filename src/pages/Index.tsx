
import { Link } from 'react-router-dom';
import { Calendar, Users, BookOpen, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Index = () => {
  const features = [
    {
      icon: <Calendar className="w-8 h-8 text-fatec-green" />,
      title: "Programação Diversificada",
      description: "5 dias de conteúdos específicos para cada curso da Fatec Tatuí."
    },
    {
      icon: <Users className="w-8 h-8 text-fatec-green" />,
      title: "Palestrantes Especializados",
      description: "Profissionais do mercado e acadêmicos com expertise nas áreas abordadas."
    },
    {
      icon: <BookOpen className="w-8 h-8 text-fatec-green" />,
      title: "Temas Atuais",
      description: "Conteúdos alinhados com as tendências e demandas do mercado de trabalho."
    }
  ];

  const diasEvento = [
    { dia: "Segunda-feira", data: "12 de Maio", id: "segunda" },
    { dia: "Terça-feira", data: "13 de Maio", id: "terca" },
    { dia: "Quarta-feira", data: "14 de Maio", id: "quarta" },
    { dia: "Quinta-feira", data: "15 de Maio", id: "quinta" },
    { dia: "Sexta-feira", data: "16 de Maio", id: "sexta" }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="hero-section text-white py-20 md:py-32">
          <div className="container mx-auto px-6 md:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
              4ª Semana de Tecnologia
            </h1>
            <h2 className="text-xl md:text-2xl font-medium mb-8 animate-fade-in">
              Fatec Tatuí - 12 a 16 de Maio de 2025
            </h2>
            <Link to="/programacao">
              <Button className="bg-white text-fatec-green hover:bg-gray-100 animate-fade-in">
                Ver Programação
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </section>

        {/* Intro Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6 md:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Sobre o Evento</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                A Semana de Tecnologia da Fatec Tatuí é um evento acadêmico que visa aproximar os alunos 
                do mercado de trabalho, apresentando tendências, novas tecnologias e oportunidades nas 
                diversas áreas abrangidas pelos cursos oferecidos pela instituição.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                <Card key={index} className="shadow-card">
                  <CardContent className="flex flex-col items-center p-6 text-center">
                    <div className="rounded-full bg-fatec-lightGray p-4 mb-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Dias do Evento */}
        <section className="py-16 bg-fatec-lightGray">
          <div className="container mx-auto px-6 md:px-8">
            <h2 className="text-3xl font-bold text-center mb-10">Programação por Dia</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {diasEvento.map((dia, index) => (
                <Link
                  // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                  key={index}
                  to={`/programacao?dia=${dia.id}`}
                  className="group"
                >
                  <Card className="shadow-card h-full transition-all group-hover:border-fatec-green">
                    <CardContent className="p-6 flex flex-col items-center text-center h-full">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{dia.dia}</h3>
                      <p className="text-sm text-gray-600 mb-4">{dia.data}</p>
                      <div className="mt-auto text-fatec-green flex items-center text-sm font-medium group-hover:underline">
                        Ver palestras
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
