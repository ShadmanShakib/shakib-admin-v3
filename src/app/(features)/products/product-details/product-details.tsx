"use client";
import React from "react";
import { useTranslations } from "next-intl";
import ImageCarousel from "./image-carousel";
import ProductDescription from "./product-description";

export default function ProductDetails() {
  const t = useTranslations();
  return (
    <div>
      <h1 className="text-xl mb-2">{t("Product.product_details")}</h1>
      <div className="flex  gap-5">
        <ImageCarousel />
        <ProductDescription />
      </div>
    </div>
  );
}
