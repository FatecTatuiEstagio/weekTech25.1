import useEmblaCarousel from 'embla-carousel-react';
import { Card, CardContent } from '@/components/ui/card';
import { useCallback } from 'react';

import slides from '@/data/slide';

import {
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

export default function Carousel2() {
  const [outerRef] = useEmblaCarousel({
    loop: true,
    align: 'start',
  });

  return (
    <section className="bg-white py-14">
      <div className="container mx-auto px-6 md:px-8">
        <div className="mb-10 text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Destaques do Evento
          </h2>

          <p className="mt-3 text-gray-600">
            Confira alguns momentos e atividades da Semana de Tecnologia.
          </p>
        </div>

        <div
          className="overflow-hidden"
          ref={outerRef}
        >
          <div className="flex gap-6">
            {slides.map((exp, index) => (
              <Card
                key={index.toString()}
                className="
                  min-w-full
                  sm:min-w-[75%]
                  md:min-w-[55%]
                  lg:min-w-[38%]
                  overflow-hidden
                  border-0
                  shadow-card
                  rounded-2xl
                "
              >
                <CardContent className="p-0">
                  {exp.image.length > 1 ? (
                    <InnerCarousel
                      images={exp.image}
                      title={exp.title}
                    />
                  ) : (
                    <img
                      loading="lazy"
                      src={exp.image[0]}
                      alt={exp.title}
                      className="
                        h-64
                        w-full
                        object-cover
                        select-none
                        
                      "
                    />
                  )}

                  <div className="p-5">
                    <h3 className="text-xl font-semibold text-gray-900 text-justify">
                      {exp.title}
                    </h3>

                    <p className="mt-2 text-sm leading-relaxed text-gray-600 text-justify">
                      {exp.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function InnerCarousel({ images, title }) {
  const [ref, embla] = useEmblaCarousel({
    loop: true,
  });

  const scrollPrev = useCallback(() => {
    embla?.scrollPrev();
  }, [embla]);

  const scrollNext = useCallback(() => {
    embla?.scrollNext();
  }, [embla]);

  return (
    <div className="relative">
      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={scrollPrev}
            className="
              absolute
              left-3
              top-1/2
              z-10
              -translate-y-1/2
              rounded-full
              bg-white/90
              p-2
              shadow-md
              backdrop-blur-sm
              transition
              hover:bg-red-50
            "
          >
            <ChevronLeft className="h-5 w-5 text-[#b20000]" />
          </button>

          <button
            type="button"
            onClick={scrollNext}
            className="
              absolute
              right-3
              top-1/2
              z-10
              -translate-y-1/2
              rounded-full
              bg-white/90
              p-2
              shadow-xl
              backdrop-blur-sm
              transition
              hover:bg-red-50
            "
          >
            <ChevronRight className="h-5 w-5 text-[#b20000]" />
          </button>
        </>
      )}

      <div
        className="overflow-hidden"
        ref={ref}
      >
        <div className="flex select-none will-change-transform">
          {images.map((src, index) => (
            <div
              key={index.toString()}
              className="flex-[0_0_100%]"
            >
              <img
                src={src}
                alt={`${title} - Slide ${index + 1}`}
                className="
                  h-64
                  w-full
                  object-cover
                  select-none
                "
                loading="lazy"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}