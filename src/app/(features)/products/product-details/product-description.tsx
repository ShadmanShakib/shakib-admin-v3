"use client";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslations } from "next-intl";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
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
            <span className="line-through font-semibold mr-5">$150</span>
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
      </CardContent>
    </Card>
  );
}
