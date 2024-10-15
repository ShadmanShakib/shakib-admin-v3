import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type Props = {};

export default function OthersTab({}: Props) {
  return (
    <Tabs defaultValue="fabrics" className="w-full mt-5">
      <TabsList className="w-full">
        <TabsTrigger value="fabrics">Fabrics</TabsTrigger>
        <TabsTrigger value="video">Video</TabsTrigger>
        <TabsTrigger value="details">Details</TabsTrigger>
        <TabsTrigger value="brand">Brand</TabsTrigger>
      </TabsList>
      <TabsContent value="fabrics">
        Refresh your wardrobe with this chic top. With an eye-catching square
        neck, this top also features pretty puff sleeves. Stunning pink color
        Classic solid pattern Square neck Elasticated puff sleeves Belt
        included, Polyester fabric, machine wash.. Tee Stores is an Indian
        contemporary clothing brand. The product pages display a fine quality
        fabric with colorful description. We offer many vivid designs, art,
        styles that combine heritage with modernity, simplicity, playfulness and
        street style
      </TabsContent>
      <TabsContent value="video">Change your password here.</TabsContent>
      <TabsContent value="details">
        Rock Paper Scissors Various Dots Half Sleeves Girl’s Regular Fit T-Shirt
        I 100% Cotton T Shirt with Half Sleeve Round Neck I Regular Wear Solid
        Kids Tees and Black Sleeve.
      </TabsContent>
      <TabsContent value="brand">
        Lorate Solid Mens Fashion Full Sleeves Latest Jacket for Men With Button
        Closure Long Sleeve Casual Torn Lycra Denim Jacket.
      </TabsContent>
    </Tabs>
  );
}
