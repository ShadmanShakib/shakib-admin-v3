"use client";
import { News } from "@prisma/client";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { useTranslations } from "next-intl";
import { format } from "date-fns";
import { ar, enUS } from "date-fns/locale";

type Props = {
  data: News;
  isArabic: boolean;
};

export default function NewsCard({ data, isArabic }: Props) {
  const t = useTranslations();
  const locale = isArabic ? ar : enUS;
  return (
    <Link href={`/dashboard/news/${data.id}`}>
      <Card className="hover:bg-gray-50 dark:hover:bg-gray-900 min-h-[220px] hover:shadow-xl">
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
              {format(data.created_at, "PPpp", {
                locale,
              })}
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
