import { Card, CardContent } from "@/components/ui/card";

import useEmblaCarousel from "embla-carousel-react";

import { useCallback } from "react";

import { Button } from "@/components/ui/button";

import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export interface PalestraProps {
  palestrante: string;
  foto: string | string[];
  horario: string;
  curso: string;
  tema: string;
  descricao: string;
  local: string | undefined;
}

const PalestraCard = ({
  palestrante,
  foto,
  horario,
  curso,
  tema,
  descricao,
  local,
}: PalestraProps) => {
  const isMultiple = Array.isArray(foto);

  const [emblaRef, emblaApi] =
    useEmblaCarousel({
      loop: true,
    });

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  return (
    <Card
      className="
        overflow-hidden
        border-0
        shadow-card
        rounded-xl
      "
    >
      <CardContent className="p-0">
        <div className="flex flex-col md:flex-row">
          {/* Imagens */}
          <div
            className="
              relative
              h-48
              md:h-auto
              md:w-[220px]
              md:min-w-[220px]
            "
          >
            {isMultiple ? (
              <div className="relative h-full">
                <div
                  className="overflow-hidden h-full"
                  ref={emblaRef}
                >
                  <div className="flex h-full">
                    {(foto as string[]).map(
                      (src, index) => (
                        <img
                          key={index.toString()}
                          src={src}
                          alt={`Foto do palestrante ${index + 1}`}
                          className="
                            min-w-full
                            h-full
                            object-cover
                          "
                        />
                      )
                    )}
                  </div>
                </div>

                <Button
                  variant="ghost"
                  size="icon"
                  onClick={scrollPrev}
                  className="
                    absolute
                    left-2
                    top-1/2
                    z-10
                    -translate-y-1/2
                    rounded-full
                    bg-white/90
                    shadow-md
                    hover:bg-red-50
                    h-7 w-7
                  "
                >
                  <ChevronLeft className="h-4 w-4 text-[#b20000]" />
                </Button>

                <Button
                  variant="ghost"
                  size="icon"
                  onClick={scrollNext}
                  className="
                    absolute
                    right-2
                    top-1/2
                    z-10
                    -translate-y-1/2
                    rounded-full
                    bg-white/90
                    shadow-md
                    hover:bg-red-50
                    h-7 w-7
                  "
                >
                  <ChevronRight className="h-4 w-4 text-[#b20000]" />
                </Button>
              </div>
            ) : (
              <img
                src={foto as string}
                alt={`${palestrante} - Palestrante`}
                className="
                  h-full
                  w-full
                  object-cover
                "
              />
            )}
          </div>

          {/* Conteúdo */}
          <div className="flex-1 p-4 md:p-5">
            <div
              className="
                mb-3
                flex
                flex-col
                gap-2
                sm:flex-row
                sm:items-center
                sm:justify-between
              "
            >
              <span
                className="
                  w-fit
                  rounded-full
                  bg-[#b20000]
                  px-3
                  py-1
                  text-xs
                  font-semibold
                  text-white
                "
              >
                {horario}
              </span>

              <span
                className="
                  w-fit
                  rounded-full
                  bg-red-50
                  px-3
                  py-1
                  text-xs
                  font-medium
                  text-[#b20000]
                "
              >
                {curso}
              </span>
            </div>

            <h3
              className="
                text-lg
                font-bold
                text-gray-900
              "
            >
              {palestrante}
            </h3>

            <h4
              className="
                mt-1
                text-sm
                font-semibold
                text-[#b20000]
              "
            >
              {tema}
            </h4>

            <p
              className="
                mt-3
                whitespace-pre-line
                text-xs
                leading-relaxed
                text-gray-600
              "
            >
              {descricao}
            </p>

            {local && (
              <p
                className="
                  mt-3
                  text-xs
                  font-medium
                  text-gray-700
                "
              >
                {local}
              </p>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PalestraCard;