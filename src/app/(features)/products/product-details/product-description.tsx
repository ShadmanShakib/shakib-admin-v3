"use client";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslations } from "next-intl";
import { Separator } from "@/components/ui/separator";
import { FaFacebookF } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { Button } from "@/components/ui/button";
import { LuShoppingBasket } from "react-icons/lu";
import { AiOutlineShoppingCart } from "react-icons/ai";

type Props = {};

export default function ProductDescription({}: Props) {
  const t = useTranslations();
  return (
    <Card className="w-[500px]">
      <CardHeader>
        <CardTitle>Pink Shirt </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex gap-3">
          <div className="">
            <span>$25</span>
          </div>
          <div className="">
            <span className="line-through font-semibold mr-5 ">$150</span>
          </div>
        </div>
        {/* color buttons */}
        <div className="mt-3 flex gap-3">
          <div className="h-7 w-7 rounded-full bg-green-500" />
          <div className="h-7 w-7 rounded-full bg-pink-500" />
          <div className="h-7 w-7 rounded-full bg-blue-500" />
          <div className="h-7 w-7 rounded-full bg-yellow-500" />
        </div>
        <Separator className="mt-3" />
        <div className="">
          <p>
            Rock Paper Scissors Various Dots Half Sleeves Girl’s Regular Fit
            T-Shirt I 100% Cotton T Shirt with Half Sleeve Round Neck I Regular
            Wear Solid Kids Tees and Black Sleeve.
          </p>
        </div>
        <Separator className="mt-3" />
        <div className="space-y-1">
          <div className="">
            <span className="font-semibold">Brand : </span>
            <span>Pixelsharp</span>
          </div>
          <div className="">
            <span className="font-semibold">Availability : </span>
            <span className="text-green-500"> In stock</span>
          </div>
          <div className="">
            <span className="font-semibold">Seller : </span>
            <span>ABC</span>
          </div>
          <div className="">
            <span className="font-semibold">Frabic : </span>
            <span>Cotton</span>
          </div>
        </div>
        {/* share to social media */}
        <div className="flex items-center gap-4 my-2">
          <h1>Share it</h1>
          <div className="flex gap-2">
            <div className="flex items-center justify-center h-10 w-10 border-2 rounded-full">
              <FaFacebookF className="text-blue-500" />
            </div>
            <div className="flex items-center justify-center h-10 w-10 border-2 rounded-full">
              <RiTwitterXLine className="dark:text-white text-black" />
            </div>
          </div>
        </div>
        <div className="mt-5 flex gap-3">
          <Button className="w-full">
            <LuShoppingBasket className="mr-2 h-6 w-6" />
            Add to Cart
          </Button>
          <Button variant="outline" className="w-full">
            <AiOutlineShoppingCart className="mr-2 h-6 w-6" />
            Buy Now
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
