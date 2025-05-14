
import { Card, CardContent } from "@/components/ui/card";

export interface PalestraProps {
  palestrante: string;
  foto: string;
  horario: string;
  curso: string;
  tema: string;
  descricao: string;
}

const PalestraCard = ({ palestrante, foto, horario, curso, tema, descricao }: PalestraProps) => {
  return (
    <Card className="shadow-card overflow-hidden">
      <CardContent className="p-0">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3 h-64 md:h-auto">
            <img 
              src={foto} 
              alt={`${palestrante} - Palestrante`} 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:w-2/3 p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="bg-fatec-green text-white text-sm font-medium px-3 py-1 rounded">
                {horario}
              </span>
              <span className="bg-fatec-lightGray text-fatec-gray text-sm px-3 py-1 rounded">
                {curso}
              </span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-1">{palestrante}</h3>
            <h4 className="text-lg font-semibold text-fatec-green mb-2">{tema}</h4>
            <p className="text-gray-600 text-sm">{descricao}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PalestraCard;
