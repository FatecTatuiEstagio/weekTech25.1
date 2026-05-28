import useEmblaCarousel from 'embla-carousel-react';
import { useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import { Button } from "@/components/ui/button";

interface CarouselProps {
  children: React.ReactNode;
}

export const Carousel = ({ children }: CarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
  });

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  return (
    <div className="relative">
      <div
        className="overflow-hidden"
        ref={emblaRef}
      >
        <div className="flex gap-6 py-2">
          {children}
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
          backdrop-blur-sm
          hover:bg-red-50
        "
      >
        <ChevronLeft className="h-5 w-5 text-[#b20000]" />
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
          backdrop-blur-sm
          hover:bg-red-50
        "
      >
        <ChevronRight className="h-5 w-5 text-[#b20000]" />
      </Button>
    </div>
  );
};