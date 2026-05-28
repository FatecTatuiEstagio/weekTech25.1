// dev antigo tinha deixado tudo separado em várias páginas, eu juntei td numa "landingpage" ai vai procurando ai, ta meio confuso, mas da pra se virar
import { Link } from "react-router-dom";
import { Calendar, Users, BookOpen, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import Header from "@/components/Header";
import Carousel2 from "@/components/Carousel2";
import { Edition } from "@/components/Edition";
import Footer from "@/components/Footer";
import ContactSection from "./Contato";
import DiaProgramacao from "@/components/DiaProgramacao";

const Index = () => {
  const features = [
    {
      icon: <Calendar className="w-8 h-8 text-red-700" />,
      title: "Programação Diversificada",
      description:
        "5 dias de conteúdos específicos para cada curso da Fatec Tatuí.",
    },
    {
      icon: <Users className="w-8 h-8 text-red-700" />,
      title: "Palestrantes Especializados",
      description:
        "Profissionais do mercado e acadêmicos com expertise nas áreas abordadas.",
    },
    {
      icon: <BookOpen className="w-8 h-8 text-red-700" />,
      title: "Temas Atuais",
      description:
        "Conteúdos alinhados com as tendências e demandas do mercado de trabalho.",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col" id="topo">
      <Header />

      <main className="flex-grow">
        {/* HERO */}
        <section className="hero-section py-20 text-white md:py-32">
          <div className="container mx-auto px-6 text-center md:px-8">
            <div className="flex items-center justify-center gap-4">

              <h1 className="flex text-4xl font-bold md:text-6xl">
                4ª Semana de Tecnologia
              </h1>
            </div>

            <h2 className="mt-4 text-xl font-medium text-red-100 md:text-2xl">
              Fatec Tatuí - 12 a 16 de Maio de 2025
            </h2>

            <a href="#programacao">
              <Button className="mt-8 bg-white text-[#b20000] hover:bg-gray-100">
                Ver Programação
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="container mx-auto px-6 md:px-8">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <h2 className="mb-4 text-3xl font-bold text-primary">
                Sobre o Evento
              </h2>

              <p className="text-lg leading-relaxed text-gray-600">
                A Semana de Tecnologia da Fatec Tatuí é um evento acadêmico que
                visa aproximar os alunos do mercado de trabalho, apresentando
                tendências, novas tecnologias e oportunidades nas diversas áreas
                dos cursos da instituição.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {features.map((feature, index) => (
                <Card key={index} className="border border-gray-100 shadow-sm transition-all hover:shadow-md hover:-translate-y-1">
                  <CardContent className="flex flex-col items-center p-6 text-center shadow-xl hover:translate">
                    <div className="mb-4 rounded-full bg-red-50 p-4">
                      {feature.icon}
                    </div>

                    <h3 className="mb-2 text-xl font-bold text-gray-900">
                      {feature.title}
                    </h3>

                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <Carousel2 />

        {/* SOBRE */}
        
      </main>

      {/* SEÇÕES */}
      <section id="programacao">
        <DiaProgramacao />
      </section>

      <section id="edicoes">
        <Edition />
      </section>

      <section id="contato">
        <ContactSection />
      </section>

      <Footer />
    </div>
  );
};

export default Index;