
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
      foto: [
        "./palestrantes/Will Galva.jpg",
        "./palestrantes/Leo Fernandes.jpg"
      ],
      horario: "8h00",
      curso: "Gestão da Tecnologia da Informação",
      tema: "Ideathon, Startups e Inovação",
      descricao: "Empresa: Point Media",
      local: "Local: Auditório 1 - Prédio 2"
    },
    {
      palestrante: "Marcelo Marques e William Galvão",
      foto: [
        "./palestrantes/Will Galva.jpg",
        "./palestrantes/Leo Fernandes.jpg"
      ],
      horario: "14h00",
      curso: "Análise e Desenvolvimento de Sistemas",
      tema: "Ideathon, Startups e Inovação",
      descricao: "Empresa: Point Media",
      local: "Local: Auditório 1 - Prédio 2"
    },
    {
      palestrante: "Marcelo Marques e William Galvão",
      foto: [
        "./palestrantes/Will Galva.jpg",
        "./palestrantes/Leo Fernandes.jpg"
      ],
      horario: "19h00",
      curso: "Gestão da Tecnologia da Informação",
      tema: "Ideathon, Startups e Inovação",
      descricao: "Empresa: Point Media",
      local: "Local: Auditório 1 - Prédio 2"
    },
  ],
  terca: [
    {
      palestrante: "2° Colóquio de Automação Industrial",
      foto: "./palestrantes/automacaoIndustrial.jpg",
      horario: "08h30",
      curso: "Automação Industrial",
      tema: "Roda de Conversas com Egressos do curso de Automação Industrial",
      descricao: "Empresa: Lincoln Eletric",
      local: "Local: Auditório 1 - Prédio 2"
    },
    {
      palestrante: "Paulo Assis",
      foto: "./palestrantes/PauloAssis.jpg",        
      horario: "14h00",
      curso: "Produção Fonográfica",
      tema: "Mixando com fones: uma abordagem binaural",
      descricao: "Artista sonoro, produtor e engenheiro de mixagem e masterização\n Mestre em Artes pela Escola de Comunicação e Artes da USP",
      local: "Local: Estúdio"
    },
    {
      palestrante: "2° Colóquio de Automação Industrial",
      foto: "./palestrantes/automacaoIndustrial.jpg",
      horario: "19h00",
      curso: "Automação Industrial",
      tema: "Roda de Conversas com Egressos do curso de Automação Industrial",
      descricao: "Empresa: JCB",
      local: "Local: Auditório 1 - Prédio 2"
    },
  ],
  quarta: [
    {
      palestrante: "Hélio Silva",
      foto: "./palestrantes/HelioSilva.jpg",
      horario: "08h00",
      curso: "Manutenção Industrial",
      tema: "Soldagem em realidade virtual A revolução do Treinamento Técnico",
      descricao: "Empresa: Lincoln Eletric",
      local: "Local: Auditório 1 - Prédio 2"
    },
    {
      palestrante: "Fabiana Lian",
      foto: "./palestrantes/FabianaLian.jpg",
      horario: "14h00",
      curso: "Automação Industrial",
      tema: "“Enquanto Você Toca”, bate-papo com autora do Livro",
      descricao: "Cantora do grupo Mawaca e atuou em muitos projetos de música eletrônica, jazz e contemporânea",
      local: "Local: Estúdio"
    },
    {
      palestrante: "Maise Rezende e Rosângela Araújo",
      foto: [
        "./palestrantes/MaiseRezende.jpg",
        "./palestrantes/RosangelaAraujo.jpg",
      ],
      horario: "14h00",
      curso: "Processos Gerenciais",
      tema: "Equilíbrio e Carreira: A construção do Seu Melhor Perfil",
      descricao: `Maise: Parceira Comercial de Recursos Humnanos (HRBP) na Point Media.
                  Rosângela: Professora e coordenadora na UNISO e coordenadora na Fatec Tatuí.`,
      local: "Local: Auditório 1 - Prédio 2"
    },
    {
      palestrante: "Eduardo Menezes",
      foto: "./palestrantes/EduardoMenezes.png",
      horario: "19h00",
      curso: "Manutenção Industrial",
      tema: "Planejamento da Manutenção Programada - Linha amarela da JCB",
      descricao: "Empresa: JCB",
      local: "Local: Auditório 1 - Prédio 2"
    }
  ],
  quinta: [
    {
      palestrante: "Alexandre Azevedo",
      foto: "./palestrantes/AlexandreAzevedo.jpg",
      horario: "14h00",
      curso: "Produção Fonográfica",
      tema: "Soldagem em realidade virtual A revolução do Treinamento Técnico",
      descricao: "Lançou o primeiro livro sobre negócios de música do Brasil, em parceria com o Doutor em Direito, Nichollas Alem, com o título:\n40 Formas de Ganhar Dinheiro na Música: um guia descomplicado para artistas e bandas.",
      local: "Estúdio"
    },
    {
      palestrante: "Weliton do Carmo Rodrigues",
      foto: "./palestrantes/Wellinton.jpg",
      horario: "14h30",
      curso: "Gestão Empresarial",
      tema: "Incorporação de IA nas atividades do dia-a-dia",
      descricao: "Pesquisador nas áreas de  Inteligência Artificial - FIT Flextronic Instituto de Tecnologia ",
      local: "Local: Auditório 1 - Prédio 2"
    },
    {
      palestrante: "Marina Lima",
      foto: "./palestrantes/Jane Piantoni.jpg",
      horario: "20h00",
      curso: "Gestão Empresarial",
      tema: "IA e os desafios futuros para o mundo corporativo",
      descricao: "Pesquisadora nas áreas de  Inteligência Artificial - FIT Flextronic",
      local: "Local: Auditório 1 - Prédio 2"
    }
  ],
  sexta: [
    {
      palestrante: "Point Media",
      foto: "./palestrantes/gti.png",
      horario: "8h - 19h",
      curso: "Gestão da Tecnologia da Informação & Análise e Desenvolvimento de Sistemas",
      tema: "Finalização do Ideathon (GTI e ADS)",
      descricao: " ",
      local: "Local: Auditório 1 - Prédio 2"
    },
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
