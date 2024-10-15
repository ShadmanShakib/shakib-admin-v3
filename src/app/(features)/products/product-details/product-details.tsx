"use client";
import React from "react";
import { useTranslations } from "next-intl";
import ImageCarousel from "./image-carousel";

export default function ProductDetails() {
  const t = useTranslations();
  return (
    <div>
      <h1 className="text-xl mb-2">{t("Product.product_details")}</h1>
      <div className="">
        <ImageCarousel />
      </div>
    </div>
  );
}
