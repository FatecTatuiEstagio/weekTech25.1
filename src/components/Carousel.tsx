// components/Carousel.tsx
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface CarouselProps {
  children: React.ReactNode;
}

export const Carousel = ({ children }: CarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel();

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-4">{children}</div>
      </div>
      <Button
        variant="ghost"
        size="icon"
        onClick={scrollPrev}
        className="absolute top-1/2 left-2 -translate-y-1/2 z-10 bg-white shadow rounded-full"
      >
        <ChevronLeft />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        onClick={scrollNext}
        className="absolute top-1/2 right-2 -translate-y-1/2 z-10 bg-white shadow rounded-full"
      >
        <ChevronRight />
      </Button>
    </div>
  );
};
