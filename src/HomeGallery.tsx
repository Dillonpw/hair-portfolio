import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Gallery: React.FC = () => {
  return (
    <div className="w-img m-20 flex h-auto fade-in-right">
      <Carousel>
        <CarouselContent>
          <CarouselItem>
            <img
              className="rounded-xl"
              src="./assets/Hair1.jpg"
              alt="blonde highlights"
            />
          </CarouselItem>
          <CarouselItem>
            <img
              className="rounded-xl"
              src="./assets/Hair1Alt.jpg"
              alt="blonde highlights profile"
            />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious/>
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Gallery;
