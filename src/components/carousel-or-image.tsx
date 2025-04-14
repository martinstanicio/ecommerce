import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Media } from "@/payload-types";
import Image from "next/image";

type Props = { images: Media[] };

export default function CarouselOrImage({ images: _images }: Props) {
  const images = _images.map(({ id, url, width, height, alt }) => {
    if (
      typeof url !== "string" ||
      typeof width !== "number" ||
      typeof height !== "number"
    ) {
      throw new Error("Images must have `url`, `width` and `height`.");
    }

    return { id, url, width, height, alt };
  });

  if (images.length > 1) {
    return (
      <Carousel>
        <CarouselContent>
          {images.map((image) => {
            return (
              <CarouselItem key={image.id}>
                <Image
                  src={image.url}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  priority
                  className="bg-secondary aspect-[4/3] rounded-md object-cover object-center"
                />
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    );
  }

  const image = images[0];
  return (
    <Image
      src={image.url}
      alt={image.alt}
      width={image.width}
      height={image.height}
      priority
      className="bg-secondary aspect-[4/3] rounded-md object-cover object-center"
    />
  );
}
