import React from "react";
import Title from "@/components/common/title";
import AddProductForm from "./add-product-form";

export default function AddProductPage() {
  return (
    <main className="p-5">
      <div className="mb-5">
        <Title title="Product.add_product" />
      </div>
      <AddProductForm />
    </main>
  );
}
