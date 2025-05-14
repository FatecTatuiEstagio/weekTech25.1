
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PalestraCard, { type PalestraProps } from './PalestraCard';

interface DiaProgramacaoProps {
  dia: string;
  data: string;
  palestras: PalestraProps[];
}

const diasSemana = [
  { valor: "segunda", label: "Segunda-feira", data: "12 de Maio" },
  { valor: "terca", label: "Terça-feira", data: "13 de Maio" },
  { valor: "quarta", label: "Quarta-feira", data: "14 de Maio" },
  { valor: "quinta", label: "Quinta-feira", data: "15 de Maio" },
  { valor: "sexta", label: "Sexta-feira", data: "16 de Maio" }
];

// Dados temporários para cada dia da semana
const dadosDiarios = {
  segunda: [
    {
      palestrante: "Marcelo Marques e William Galvão",
      foto: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      horario: "8h00",
      curso: "Gestão da Tecnologia da Informação",
      tema: "Ideathon, Startups e Inovação",
      descricao: "Empresa: Point Media"
    },
    {
      palestrante: "Marcelo Marques e William Galvão",
      foto: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      horario: "19h00",
      curso: "Gestão da Tecnologia da Informação",
      tema: "Ideathon, Startups e Inovação",
      descricao: "Empresa: Point Media"
    },
    {
      palestrante: "Carlos Mendes",
      foto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      horario: "20h30",
      curso: "Análise e Desenvolvimento de Sistemas",
      tema: "Segurança em Aplicações Web",
      descricao: "Como implementar medidas de segurança eficazes em aplicações web modernas."
    }
  ],
  terca: [
    {
      palestrante: "Marina Lima",
      foto: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      horario: "19h00",
      curso: "Gestão Empresarial",
      tema: "Marketing Digital para Negócios",
      descricao: "Estratégias de marketing digital para impulsionar negócios em 2025."
    }
  ],
  quarta: [
    {
      palestrante: "Paulo Oliveira",
      foto: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      horario: "19h00",
      curso: "Análise e Desenvolvimento de Sistemas",
      tema: "DevOps e Integração Contínua",
      descricao: "Implementação de práticas DevOps para melhorar o ciclo de desenvolvimento."
    }
  ],
  quinta: [
    {
      palestrante: "Luciana Costa",
      foto: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      horario: "19h00",
      curso: "Produção Industrial",
      tema: "Indústria 4.0 e IoT",
      descricao: "Como a Internet das Coisas está revolucionando a produção industrial."
    }
  ],
  sexta: [
    {
      palestrante: "Roberto Alves",
      foto: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      horario: "19h00",
      curso: "Gestão Empresarial",
      tema: "Empreendedorismo Tecnológico",
      descricao: "Como criar e desenvolver startups de tecnologia no cenário atual."
    },
    {
      palestrante: "Fernanda Santos",
      foto: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      horario: "20h30",
      curso: "Análise e Desenvolvimento de Sistemas",
      tema: "Carreira em TI: Tendências para 2026",
      descricao: "Perspectivas e oportunidades na carreira de tecnologia para os próximos anos."
    }
  ]
};

const DiaProgramacao = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Programação do Evento</h2>
      
      <Tabs defaultValue="segunda" className="w-full">
        <TabsList className="grid grid-cols-2 md:grid-cols-5 mb-8">
          {diasSemana.map(dia => (
            <TabsTrigger 
              key={dia.valor} 
              value={dia.valor}
              className="data-[state=active]:bg-fatec-green data-[state=active]:text-white"
            >
              <div>
                <div className="font-medium">{dia.label}</div>
                <div className="text-xs opacity-80">{dia.data}</div>
              </div>
            </TabsTrigger>
          ))}
        </TabsList>
        
        {diasSemana.map(dia => (
          <TabsContent key={dia.valor} value={dia.valor} className="space-y-6">
            <h3 className="text-xl font-semibold text-fatec-green mb-4">
              {dia.label} - {dia.data}
            </h3>
            
            {dadosDiarios[dia.valor as keyof typeof dadosDiarios].map((palestra, index) => (
              // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
              <PalestraCard key={index} {...palestra} />
            ))}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default DiaProgramacao;
