import { Card, CardContent } from "@/components/ui/card";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface PalestraProps {
  palestrante: string;
  foto: string | string[];
  horario: string;
  curso: string;
  tema: string;
  descricao: string;
  local: string | undefined;
}

const PalestraCard = ({ palestrante, foto, horario, curso, tema, descricao, local }: PalestraProps) => {
  const isMultiple = Array.isArray(foto);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <Card className="shadow-card overflow-hidden">
      <CardContent className="p-0">
        <div className="flex flex-col md:flex-row">
          <div className="relative md:w-1/3 h-64 md:h-auto">
            {isMultiple ? (
              <div className="relative h-full">
                <div className="overflow-hidden h-full" ref={emblaRef}>
                  <div className="flex h-full">
                    {(foto as string[]).map((src, index) => (
                      <img
                        key={index.toString()}
                        src={src}
                        alt={`Foto do palestrante ${index + 1}`}
                        className="min-w-full h-full object-cover"
                      />
                    ))}
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={scrollPrev}
                  className="absolute top-1/2 left-2 -translate-y-1/2 z-10 bg-white/80"
                >
                  <ChevronLeft className="w-5 h-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={scrollNext}
                  className="absolute top-1/2 right-2 -translate-y-1/2 z-10 bg-white/80"
                >
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </div>
            ) : (
              <img
                src={foto as string}
                alt={`${palestrante} - Palestrante`}
                className="w-full h-full object-cover"
              />
            )}
          </div>

          <div className="md:w-2/3 p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="bg-fatec-green text-white text-sm font-medium px-3 py-1 rounded">
                {horario}
              </span>
              <span className="bg-fatec-lightGray font-bold text-fatec-gray text-sm px-3 py-1 rounded">
                {curso}
              </span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-1">{palestrante}</h3>
            <h4 className="text-lg font-semibold text-fatec-green mb-2">{tema}</h4>
            <p className="text-gray-600 text-sm whitespace-pre-line mb-2">{descricao}</p>
            <p className="text-gray-600 text-sm">{local}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PalestraCard;
