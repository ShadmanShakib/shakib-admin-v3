"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { Plus } from "lucide-react";
import Link from "next/link";
export default function TopSection() {
  const t = useTranslations();
  return (
    <section className="py-2">
      <div className="flex justify-end">
        <Link href="/dashboard/news/create">
          <Button className="flex gap-3">
            <Plus className="h-4 w-4" />
            {t("Product_News.add_news")}
          </Button>
        </Link>
      </div>
    </section>
  );
}
