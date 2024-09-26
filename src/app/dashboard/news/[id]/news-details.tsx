"use client";
import { News } from "@prisma/client";
import React from "react";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import { Edit, Trash } from "lucide-react";
import Link from "next/link";
import { ar, enUS } from "date-fns/locale";

type Props = {
  data: News | null;
  locale: string;
};

export default function NewsDetails({ data, locale }: Props) {
  const t = useTranslations();
  const localeDate = locale === "ar" ? ar : enUS;
  return (
    <div className="max-w-screen-md mx-auto py-3">
      <div className="">
        <div className="flex justify-between">
          <h1 className="text-xl font-semibold pb-4">{data?.title}</h1>
        </div>
        <div className="py-3">
          <p>{data?.content}</p>
        </div>
        <hr className="my-4" />
        <div className="flex gap-3">
          <h1 className="">{t("News.email")}:</h1>
          <p>{data?.user_email}</p>
        </div>
        <div className="flex gap-3">
          <h1>{t("News.type")}:</h1>
          <p className="capitalize">{t(`News.${data?.type}_news`)}</p>
        </div>
        <div className="flex gap-3">
          <h1>{t("News.target")}:</h1>
          <p className="capitalize">{t(`News.${data?.target}`)} </p>
        </div>
        <div className="flex gap-3">
          <h1>{t("News.start_publish_date")}:</h1>
          <p className="capitalize">
            {format(
              data?.start_publish_date_time ?? new Date(),
              "MMMM do, yyyy hh:mm a",
              { locale: localeDate }
            )}
          </p>
        </div>
        <div className="flex gap-3">
          <h1>{t("News.end_publish_date")}:</h1>
          <p className="capitalize">
            {format(
              data?.end_publish_date_time ?? new Date(),
              "MMMM do, yyyy hh:mm a",
              {
                locale: localeDate,
              }
            )}
          </p>
        </div>

        <div className="flex gap-3">
          <h1>{t("News.published")}:</h1>
          <p>{format(data?.created_at ?? new Date(), "MMMM do, yyyy")}</p>
        </div>
        <div className="mt-4 flex gap-4">
          <Link href={`/dashboard/news/${data?.id}/edit`}>
            <Button className="flex gap-2" variant="secondary">
              <Edit className="h-4 w-4" />
              {t("Buttons.edit")}
            </Button>
          </Link>
          <Button className="flex gap-2" variant="destructive">
            <Trash className="h-4 w-4" />
            {t("Buttons.delete")}
          </Button>
        </div>
      </div>
    </div>
  );
}
