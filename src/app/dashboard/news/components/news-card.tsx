"use client";
import { News } from "@prisma/client";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { useTranslations } from "next-intl";

type Props = {
  data: News;
};

export default function NewsCard({ data }: Props) {
  const t = useTranslations();
  return (
    <Link href={`/dashboard/news/${data.id}`}>
      <Card className="hover:bg-gray-50 hover:shadow-xl">
        <CardHeader className="relative">
          <CardTitle>{data.title}</CardTitle>
        </CardHeader>
        <CardContent className="relative">
          <div className="">
            <p className="truncate">{data.content}</p>
            <div className="flex mt-2 gap-3">
              {data.pinned_news && (
                <Badge className="bg-blue-700">{t("News.pinned")}</Badge>
              )}
              <Badge variant="secondary" className="h-8 ">
                {t(`News.${data.target}`)}
              </Badge>

              <Badge className="h-8  bg-green-700">
                {t(`News.${data.type}_news`)}
              </Badge>
            </div>
            <div className=" mt-2 bottom-2 right-2 text-sm text-gray-500">
              {data.created_at.toLocaleDateString("id-ID", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
