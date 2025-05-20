import useEmblaCarousel from 'embla-carousel-react';
import { Card, CardContent } from '@/components/ui/card';
import { useCallback, useEffect } from 'react';

import slides from '@/data/slide';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Carousel2() {
  const [outerRef] = useEmblaCarousel({ loop: false });

  return (
    <section className="bg-white py-10">
      <div className="container mx-auto px-6 md:px-8">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-900">Destaques do Evento</h2>

        {/* Carrossel de cards */}
        <div className="overflow-hidden" ref={outerRef}>
          <div className="flex gap-4">
            {slides.map((exp, index) => (
              <Card
                key={index.toString()}
                className="min-w-full sm:min-w-[70%] md:min-w-[50%] lg:min-w-[33%] transition-transform"
              >
                <CardContent className="p-0">
                  {/* Imagem única ou carrossel interno */}
                  {exp.image.length > 1 ? (
                    <InnerCarousel images={exp.image} title={exp.title} />
                  ) : (
                    <img
                      loading="lazy"
                      src={exp.image[0]}
                      alt={exp.title}
                      className="w-full h-64 object-cover rounded-t-xl select-none"
                    />
                  )}

                  <div className="p-4">
                    <h3 className="text-lg font-semibold select-none">{exp.title}</h3>
                    <p className="text-sm text-gray-600 select-none">{exp.description}</p>
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
    // dragFree: false,
  });

  // useEffect(() => {
  //   if (embla) {
  //     embla.off(eventName: string, callback: Function)
  //   }
  // }, [embla]);

  const scrollPrev = useCallback(() => embla?.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla?.scrollNext(), [embla]);

  return (
    <div className="relative">
      {/* Botões */}
      {images.length > 1 && (
        <>
          <button
            type='submit'
            onClick={scrollPrev}
            className="absolute top-1/2 left-2 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100 z-10"
          >
            <ChevronLeft className="w-5 h-5 text-gray-700" />
          </button>
          <button
            type='submit'
            onClick={scrollNext}
            className="absolute top-1/2 right-2 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100 z-10"
          >
            <ChevronRight className="w-5 h-5 text-gray-700" />
          </button>
        </>
      )}

      {/* Slides */}
      <div className="overflow-hidden rounded-t-xl pointer-events-none" ref={ref}>
        <div className="flex will-change-transform select-none">
          {images.map((src, index) => (
            <div key={index.toString()} className="flex-[0_0_100%]">
              <img
                src={src}
                alt={`${title} - Slide ${index + 1}`}
                className="w-full h-64 object-cover select-none"
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
