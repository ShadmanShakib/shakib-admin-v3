"use client";
import { News } from "@prisma/client";
import React from "react";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import { Edit, Trash } from "lucide-react";

type Props = {
  data: News | null;
};

export default function NewsDetails({ data }: Props) {
  const t = useTranslations();
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
          <h1 className="">User Email:</h1>
          <p>{data?.user_email}</p>
        </div>
        <div className="flex gap-3">
          <h1>Published:</h1>
          <p>{format(data?.created_at ?? new Date(), "MMMM do, yyyy")}</p>
        </div>
        <div className="mt-4 flex gap-4">
          <Button className="flex gap-2" variant="secondary">
            <Edit className="h-4 w-4" />
            {t("Buttons.edit")}
          </Button>
          <Button className="flex gap-2" variant="destructive">
            <Trash className="h-4 w-4" />
            {t("Buttons.delete")}
          </Button>
        </div>
      </div>
    </div>
  );
}
