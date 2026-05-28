import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

import PalestraCard, {
  type PalestraProps,
} from './PalestraCard';

interface DiaProgramacaoProps {
  dia: string;
  data: string;
  palestras: PalestraProps[];
}

const diasSemana = [
  {
    valor: "segunda",
    label: "Segunda-feira",
    data: "12 de Maio"
  },
  {
    valor: "terca",
    label: "Terça-feira",
    data: "13 de Maio"
  },
  {
    valor: "quarta",
    label: "Quarta-feira",
    data: "14 de Maio"
  },
  {
    valor: "quinta",
    label: "Quinta-feira",
    data: "15 de Maio"
  },
  {
    valor: "sexta",
    label: "Sexta-feira",
    data: "16 de Maio"
  }
];

/* ===========================
   Dados temporários
=========================== */

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
      descricao:
        "Artista sonoro, produtor e engenheiro de mixagem e masterização.",
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
      tema: "Soldagem em realidade virtual",
      descricao: "Empresa: Lincoln Eletric",
      local: "Local: Auditório 1 - Prédio 2"
    },
  ],

  quinta: [
    {
      palestrante: "Alexandre Azevedo",
      foto: "./palestrantes/AlexandreAzevedo.jpg",
      horario: "14h00",
      curso: "Produção Fonográfica",
      tema: "Negócios da Música",
      descricao:
        "Autor do primeiro livro sobre negócios da música do Brasil.",
      local: "Estúdio"
    },
  ],

  sexta: [
    {
      palestrante: "Point Media",
      foto: "./palestrantes/gti.png",
      horario: "8h - 19h",
      curso:
        "GTI & ADS",
      tema: "Finalização do Ideathon",
      descricao: "Encerramento das atividades.",
      local: "Local: Auditório 1 - Prédio 2"
    },
  ]
};

const DiaProgramacao = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-6 md:px-8">
        <div className="mb-10 text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Programação do Evento
          </h2>

          <p className="mt-3 text-gray-600">
            Confira as palestras e atividades de cada dia da Semana de Tecnologia.
          </p>
        </div>

        <Tabs
          defaultValue="segunda"
          className="w-full"
        >
          <div className=" pb-2">
            <TabsList
              className="
                flex
                w-max
                min-w-full
                gap-2
                bg-transparent
                md:grid
                md:grid-cols-5
              "
            >
              {diasSemana.map((dia) => (
                <TabsTrigger
                  key={dia.valor}
                  value={dia.valor}
                  className="
                    flex
                    flex-col
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-gray-200
                    bg-white
                    px-5
                    py-3
                    text-sm
                    font-medium
                    text-gray-700
                    transition-all

                    data-[state=active]:border-[#b20000]
                    data-[state=active]:bg-[#b20000]
                    data-[state=active]:text-white
                  "
                >
                  <span>{dia.label}</span>

                  <span className="text-xs opacity-80">
                    {dia.data}
                  </span>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {diasSemana.map((dia) => (
            <TabsContent
              key={dia.valor}
              value={dia.valor}
              className="mt-8 space-y-6"
            >
              <h3 className="text-2xl font-bold text-[#b20000]">
                {dia.label} - {dia.data}
              </h3>

              {dadosDiarios[
                dia.valor as keyof typeof dadosDiarios
              ].map((palestra, index) => (
                <PalestraCard
                  key={index}
                  {...palestra}
                />
              ))}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default DiaProgramacao;