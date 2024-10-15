"use client";
import React from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

type Props = {};

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
            <CarouselItem>
              <Image
                src="/images/03.jpg"
                alt="Product 1"
                width={350}
                height={350}
              />
            </CarouselItem>
            <CarouselItem>
              <Image
                src="/images/04.jpg"
                alt="Product 1"
                width={350}
                height={350}
              />
            </CarouselItem>
            <CarouselItem>
              <Image
                src="/images/07.jpg"
                alt="Product 1"
                width={350}
                height={350}
              />
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </CardContent>
    </Card>
  );
}
