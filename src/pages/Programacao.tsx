// acho que não tao usando
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import DiaProgramacao from '@/components/DiaProgramacao';

const Programacao = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const diaSelecionado = searchParams.get('dia');

  useEffect(() => {
    if (diaSelecionado) {
      const element = document.getElementById(diaSelecionado);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [diaSelecionado]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <section className="bg-gradient-to-b from-fatec-green to-fatec-lightGreen text-white py-12">
          <div className="container mx-auto px-6 md:px-8 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Programação Completa</h1>
            <p className="max-w-2xl mx-auto">
              Confira os detalhes de todas as palestras previstas para a 4ª Semana de Tecnologia da Fatec Tatuí.
            </p>
          </div>
        </section>

        <section className="py-12">
          <DiaProgramacao />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Programacao;
