"use client";
import React from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { map } from "underscore";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

type Props = {};

const data = [
  { id: 1, src: "/images/03.jpg" },
  { id: 2, src: "/images/04.jpg" },
  { id: 3, src: "/images/07.jpg" },
];

export default function ImageCarousel({}: Props) {
  return (
    <Card className="w-[400px]">
      <CardContent className="mt-4">
        <Carousel
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
        >
          <CarouselContent>
            {map(data, (item) => (
              <CarouselItem key={item.id}>
                <Image
                  src={item.src}
                  alt="Product Image"
                  width={400}
                  height={400}
                  className="rounded-lg"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </CardContent>
    </Card>
  );
}
